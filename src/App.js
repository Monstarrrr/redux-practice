import React, { 
  useState, 
  // useEffect 
} from "react";
import axios from 'axios';
import { 
  useSelector, 
  useDispatch 
} from "react-redux";
import CustomerCard from "./components/CustomerCard";
import "./App.css";
import { addCustomer } from "./store/reducers/customers";
import ReservationCard from "./components/ReservationCard";

function App() {
  const dispatch = useDispatch() // useDispatch -> for CHANGING the STATE
  const [customerNameInput, setCustomerNameInput] = useState("")
  const [warnFormUserAlreadyExists, setWarnFormUserAlreadyExists] = useState(false)
  const [warnFormEmpty, setWarnFormEmpty] = useState(false)
  
  const reservations = useSelector(({ reservations }) => reservations)
  const customers = useSelector(({ customers }) => customers)
  
  const handleAddCustomer = async () => {
    
    setWarnFormUserAlreadyExists(false); // Reset warn
    setWarnFormEmpty(false); // Reset warn
    
    if(!customerNameInput) { // If input is empty
      setWarnFormEmpty(true); // set the warning
      console.warn('# formEmptyWarn'); // logs the warning
      return; // Quit
    }
    
    try {
      const { data } = await axios.get( // Get data
        `https://jsonplaceholder.typicode.com/users?username=${customerNameInput}`, 
        // only with username of customerNameInput
      ) // data: [ { name: ..., username: ..., age: ... } ]
      
      if(customers.some((e) => e.id === data[0].id)) { // If customer already exist in state
        setWarnFormUserAlreadyExists(true); // set the warning
        console.warn('# warnFormUserAlreadyExists'); // log the warning
        return; // Quit
      }
      
      const fetchedUser = data[0] // data: [{...}] -> {...}
      
      // Add customer object to the store
      dispatch(addCustomer({
          name: fetchedUser.name,
          id: fetchedUser.id,
      })) // store: [ ..., { customerObject } ]
      
      setCustomerNameInput(""); // Reset input
    
    } catch(error) { // Network error ?
      console.error('error.message :', error.message); // log the error
    }
  }
  
  return (
    <div className="App">
      <div className="container">
        
        <div className="customers-container">
          <div>
            <h5 className="customers-header">Customers</h5>
            <div className="customers-cards-container">
              {
                customers.map(customer => {
                  return (
                    <CustomerCard 
                      key={customer.id} 
                      name={customer.name} 
                      id={customer.id} 
                    />
                  )
                })
              }
            </div>
          </div>
          <div className="customers-input-container">
            <input 
              value={customerNameInput} 
              onChange={(e) => setCustomerNameInput(e.target.value)} 
            />
            <button onClick={handleAddCustomer} >
              Add
            </button>
            {
              warnFormUserAlreadyExists ? <p>Customer already exists</p> : ""
            }
            {
              warnFormEmpty ? <p>Please enter something</p> : ""
            }
          </div>
        </div>
        
        <div className="reservations-food-container">
          {
            reservations.map(reservation => {
              return (
                <ReservationCard 
                  key={reservation.id}
                  id={reservation.id}  
                  title={reservation.title}
                  dateJoined={reservation.dateJoined}
                  items={reservation.items}
                />
              )
            })
          }
        </div>
      
      </div>
    </div>
  );
}

export default App;