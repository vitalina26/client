import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000',
})

 const createApartment = payload => api.post(`/apartments`, payload)
 const getApartments = () => api.get(`/apartments`)
 const deleteApartmentById = id => api.delete(`/apartments/${id}`)


export default { 
    getApartments:  getApartments, 
    createApartment: createApartment, 
    deleteApartmentById: deleteApartmentById
  }

