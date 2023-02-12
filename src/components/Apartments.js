import React,{useState} from "react";
import Apartment from "./Apartment";
import SortByPrice from "./SortByPrice";
import FilterByRooms from "./FilterByRooms";
import './Apartments.css'
const Apartments = (props) => {
    const [orderValue, setOrderValue] = useState('')
    const [filterValue, setFilterValue] = useState('')
    const filterValueListener = (enteredFilterValue) => { 
        setFilterValue(enteredFilterValue);
    };
    const orderValueListener = (enteredOrderValue) => { 
        setOrderValue(enteredOrderValue);
    };
    const deleteChangeHandler = (id) => {
        props.onDeleteApartmentHandler(id);
    }
    const filterAndSortMyApartments = () => {
        let res = props.apartments;
        if (filterValue !== '') {
            res = props.apartments.filter(apartment => {
                return apartment.rooms == parseInt(filterValue,10);
            });
        }
        if (orderValue !== '') {
            if (orderValue === 'asc') {
                res.sort((a, b) => a.price - b.price);
            }
            if  (orderValue === 'desc') {
                res.sort((a, b) => b.price - a.price);
            }
        }
        return res;
    }
    const fixedApartments = filterAndSortMyApartments();
    
    return ( 
        <div>
           <div className="apartments">
                <FilterByRooms onSaveFilterValue={filterValueListener} />
                <SortByPrice onSaveOrderValue={orderValueListener} />
                {fixedApartments.map((apartment) => (
                    <Apartment id={apartment.id} key={apartment.id} rooms={apartment.rooms} name={apartment.name}price={apartment.price} description={apartment.description} deleteChange = { deleteChangeHandler }></Apartment>
                ))}
                
            </div>
        </div>
        
    )

  };
  export default Apartments;