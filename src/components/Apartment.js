import './Apartment.css'
function Apartment(props) {
    const handeleDelete = () => {
        props.deleteChange(props.id);
    };
    return (
        <div className="apartment-item">
            <div className ="apartment-item__description">
                <h3 >Name:  {props.name}  {props.rooms}-Bedrooms / Price: {props.price}$   <p>Description :{props.description}</p></h3>
        
                <button className='apartment-item__buttom' onClick={handeleDelete}>Delete</button>
            </div>
           
        </div>
    );
}
export default Apartment; 