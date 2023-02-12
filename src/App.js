import NewApartment from './components/NewApartment';
import React,{useEffect,useState} from 'react';
import Apartments from './components/Apartments';
import './App.css'
import api from "./api";
const App = () => {
  const [apartments, setApartments] = useState([]);
  

  useEffect(() => {
    try {
      const fetchApartments = async () => {
        let response = await api.getApartments();
        setApartments(response.data.data);
        console.log(response.data.data);
     };
     fetchApartments();
    } catch (err) {
      console.log(err);
    }
  },[])
  const deleteApartmentHandler = async (id) => {
    try {
      await api.deleteApartmentById(`${id}`);
      setApartments(
         apartments.filter((apartment) => {
            return apartment.id !== id;
         })
      );
    } catch (err) {
      console.log(err);
    }
 
  };
  const addApartmentHandler = async (body) => {
    try {
      let response = await api.createApartment(body);
      setApartments((apartments) => [response.data, ...apartments]);
      console.log(response.data);
    } catch (err) {
      
    }
    
 };
  return (
     <div>
      <h1>Apartments Marketplace</h1>
      <NewApartment onAddApartmentHandler={addApartmentHandler} />
      <h2>Availble Apartments({apartments.length})</h2>
      <Apartments apartments={apartments} onDeleteApartmentHandler = {deleteApartmentHandler} />
      </div>
   
  );
};
export default App;