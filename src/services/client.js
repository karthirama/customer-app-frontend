import axios  from "axios";

export const getCustomers = async () => {
    try{
   return await axios.get(`http://localhost:8091/api/v1/customers`);
    }
    catch(e){
        throw e;
    }
}