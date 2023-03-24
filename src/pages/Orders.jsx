import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
import AppContext  from '../context';

function Orders({}){
  const [orders, setOrders] = React.useState([]);
  const {onAddToFavorites,onAddToCart,onDeleteFromCart} = React.useContext(AppContext);
  const [isLoading,setIsLoading] = React.useState(true);
  React.useEffect(()=>{
    (async()=>{
      try{
        setIsLoading(true);
        
        const { data } = await axios.get(`https://60c4f375ec8ef800175e0bf4.mockapi.io/orders`)
        
        
        setOrders(data.reduce((prev,obj)=>[...prev,...obj.items],[]))
        setIsLoading(false);
      } catch(e){
        alert('Ошибка при запросе заказов')
        console.log(e)
      }
      
    })();
    
  }, [])
    
  return(
        <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1 className=''>Мои заказы</h1>
          
        </div>

         

        <div className='sneakers d-flex flex-wrap space-between'>
        {(isLoading? [...Array(8)] : orders ).map((el,index)=><Card  key={index}
          {...el}
          
        
        // added={isItemAdded(el && el.id)}
        loading={isLoading}  
           />)}

          
          
        </div>
      </div>
    );
}
export default Orders;









