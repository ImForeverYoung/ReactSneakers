import React from 'react';
import Card from '../components/Card';

import AppContext  from '../context';

function Favorites({  onAddToFavorites, onAddToCart, onDeleteFromCart}){
  const { favorites } = React.useContext(AppContext);
    
  return(
        <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1 className=''>Мои закладки</h1>
          
        </div>

         

        <div className='sneakers d-flex flex-wrap space-between'>
        {favorites.map((el,index)=><Card  key={index}
          {...el} liked={true}
          onPlus={()=> {onAddToCart(el); }}
          onCheck ={()=>{onDeleteFromCart(el.id); }}
          onFavorite={()=> onAddToFavorites(el)}
           />)}

          
          
        </div>
      </div>
    );
}
export default Favorites;









