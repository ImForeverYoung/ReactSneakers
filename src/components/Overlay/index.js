
import React from "react";
import axios from "axios";
import Info from "../info";
import AppContext from '../../context';
import styles from './Overlay.module.scss'
const delay = (ms) => new Promise((resolve)=>setTimeout(resolve,ms))

function Overlay({onClose, items = [], onRemote, opened}){
    const onClickRemote = (id) =>{
      onRemote(id);
    }
    let sum = 0;
    items.map(el => sum+=el.price);
    const { setCartItems, cartItems } = React.useContext(AppContext);
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading]=React.useState(false);
    const onClickOrder =  async () => {
      try{
        setIsLoading(true);
        console.log("заказ сделан епта")
        const {data} = await axios.post('https://60c4f375ec8ef800175e0bf4.mockapi.io/orders',{
          items: cartItems,
        });

        for (let i = 0; i < cartItems.length; i++) {
          let index;
          const item = cartItems[i];
          await axios.get(`https://641859cf29e7e36438e64b39.mockapi.io/cart?id=${Number(item.id)}`).then((response) => (index = response.data[0]))
          //console.log(index.index);
          //console.log(res.json());
          await axios.delete(`https://641859cf29e7e36438e64b39.mockapi.io/cart/${index.index}`);
          
          // await axios.delete('https://641859cf29e7e36438e64b39.mockapi.io/cart/' + item.id);
          await delay(1000);
        }
        //await axios.put('https://641859cf29e7e36438e64b39.mockapi.io/cart',[])
        setOrderId(data.index);
        setIsOrderComplete(true);
        setCartItems([]);
        
      } catch(e){
        alert('order fail')
      }
      
      setIsLoading(false);
    }
    return(
        <div  className={`${styles.overlay} ${opened? styles.overlayVisible: ''}`}>
        <div className={`${styles.drawer} d-flex flex-column `}>
          <h2 className='d-flex justify-between mb-30'>
            Корзина <img onClick={onClose} className="cu-p cartButton" src='/images/button_remote.svg' alt='Close button'  />
          </h2>
          {
            items.length > 0? <div className="d-flex flex-column flex"> <div className='cartItems flex mb-20'>
            {items.map((el)=>(<div key={el.id} className='cartItem d-flex align-center'>
              {/* <img className='mr-20' width={70} height={70} src='/images/image1.jpg' alt="Sneakers List" /> */}
              <div style={{backgroundImage: `url(${el.source})`}}
              className='cartItemImg'>

              </div>
              <div className='mr-20 flex'>
                <p className='mb-5'>{el.name}</p>
                <b>{el.price} KZT</b>
              </div>
              <img onClick={(e)=>{onClickRemote(el);}} className='remoteButton' src='/images/button_remote.svg' alt="Remote button" />
            </div>))}
            
          </div> <div className="cartTotalBlock">
            <ul className=''>
              <li className='d-flex'>
                <span>Итого:</span>
                <div></div>
                <b>{sum} KZT</b>
              </li>
              <li className='d-flex'>
                <span>Налог 0%:</span>
                <div></div>
                <b>0 KZT</b>
              </li>
            </ul>
            <button disabled={isLoading} onClick={onClickOrder} className='greenButton'>Оформить заказ 
              <img src='/images/arrow_right.svg' />
            </button>
          </div> </div> :
            <Info title={ isOrderComplete? "Заказ оформлен!" : "Корзина пустая"} 
            image = {isOrderComplete? "/images/complete-order.jpg" :"/images/empty-cart.jpg"}
            description={ isOrderComplete? `Ваш заказ #${orderId} скоро будет передан курьерской доставке!` : "Добавьте хотя бы одну пару кроссовок!"}>

            </Info>
          }
          
          
          
          
          
        </div>
      </div>
    );

}

export default Overlay;