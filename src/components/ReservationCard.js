import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/reducers/items';

export default function ReservationCard(props) {
    const { 
        id, 
        title, 
        dateJoined, 
        // items
    } = props
    
    const dispatch = useDispatch();
    
    const [itemName, setItemName] = useState("")
    
    // Not functional yet
    const handleAddReservationItem = () => {
        dispatch(addItem({
            "name": itemName,
        }))
    }
    
    return (
        <div>
            <div className="customer-food-card-container">
                <p>{title} ; {id}</p>
                <br />
                <p>{dateJoined}</p>
                <div className="customer-foods-container">
                    <div className="customer-food"></div>
                    <div className="customer-food-input-container">
                    <input
                        value={itemName} 
                        onChange={(e) => setItemName(e.target.value)} 
                    />
                    <button
                        onClick={handleAddReservationItem}
                    >
                        Add
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
