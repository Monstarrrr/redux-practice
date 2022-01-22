// rfc
import React from 'react'
import { useDispatch } from 'react-redux';
import { addReservation } from '../store/reducers/reservations';

export default function CustomerCard({name, id}) {
    
    const dispatch = useDispatch();
    
    const handleClick = (e) => {
        dispatch(addReservation({
            title: name,
        }))
    }
    
    return (
        <div
            onClick={handleClick}
        >
            {name} - {id}
        </div>
    )
}
