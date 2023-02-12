import React,{useState} from "react";
import './NewApartment.css'
const NewApartment = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const nameChangerHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const [enteredPrice, setEnteredPrice] = useState('');
    const priceChangerHandler = (event) => {
        setEnteredPrice(event.target.value);
    };
    const [enteredRooms, setEnteredRooms] = useState('');
    const roomsChangerHandler = (event) => {
        setEnteredRooms(event.target.value);
    };
    const [enteredDescription, setEnteredDescription] = useState('');
    const descriptionChangerHandler = (event) => {
        setEnteredDescription(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        
        const apartmentData = {
            name: enteredName,
            price: parseInt(enteredPrice),
            rooms: parseInt(enteredRooms),
            description: enteredDescription,
            id: Math.random().toString(),
        }
        props.onAddApartmentHandler(apartmentData);
        setEnteredDescription('');
        setEnteredRooms('');
        setEnteredPrice('');
        setEnteredName('');
    }
    return (
        <div className="new-apartment">
            <form onSubmit={submitHandler}>
                <div className="new-apartment__controls">
                    <div className="new-apartment__control">
                        <label>Name</label>
                        <input maxlength = "99" required = "required" type="text" value={enteredName} onChange={nameChangerHandler} />
                    </div>
                    <div className="new-apartment__control">
                        <label>Number of Rooms</label>
                        <input min="1" inputmode="numeric" required = "required" type='number' value={enteredRooms} onChange={roomsChangerHandler} />
                    </div>
                    <div className="new-apartment__control">
                        <label>Price</label>
                        <input min="1" inputmode="numeric" type='number' required = "required" value={enteredPrice} onChange={priceChangerHandler} />
                    </div>
                    <div className="new-apartment__control">
                        <label>Description</label>
                        <input maxlength = "999" value={enteredDescription} type="text" onChange={descriptionChangerHandler} />
                    </div>
                </div>
                <div className='new-apartment__action'>
                    <button type="submit">Add Apartment</button>
                </div>
            </form>
        </div>


    );
  };
export default NewApartment;

