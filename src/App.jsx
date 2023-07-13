import { Button, ButtonGroup } from '@chakra-ui/react'
import { useEffect,useState } from 'react'
import { getCustomers } from './services/client'

function App() {

  const [customer,setCustomer] = useState([]);
  const [loading,setLoading] = useState(false);

useEffect(() => {
getCustomers().then(res => {
  setCustomer(res.data)
}).catch(err => {
  console.log(err);
})
},[])

  return (
    <div>
     { customer.map((c,index) => (
      <div key={index}>
       <p>{c.name}</p>
       <p>{c.age}</p>
       <p>{c.email}</p>
       </div>
      )) }
    <Button colorScheme='blue'>Click Me</Button>
    </div>
  )
}

export default App
