import React, { useState } from 'react';
import styles from './CardFav.module.scss';
console.log(styles);
function addItem(props){
  alert('Item added!')
  console.log(props)
}

function CardFav({onFavorite,source,title,price,liked,onPlus,onCheck,onUnfavorite}){
    const [isAdded, toggleAdd] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const onClickPlus = () =>{
      onPlus();
      toggleAdd(!isAdded);
    }
    const onClickFavorite = ()=>{
      
      if(isFavorite){
        setIsFavorite(!isFavorite);
        onUnfavorite();
      }
      else{
        setIsFavorite(!isFavorite);
        onFavorite();
      }
      
    }
    const onClickCheck = () =>{
      onCheck();
      toggleAdd(!isAdded);
    }
    return (
        <div className='card mb-40'>
            <div className='favorite' onClick={onClickFavorite}>
              
              {(() => {
                if (isFavorite) {
                  return (
                    <img src='/images/cart_like_white.svg' alt='liked' />
                  )
                } else  {
                  return (
                    <img src='/images/cart_like_red.svg' alt='unliked' />
                  )
                } 

              })()} 
            </div>
            <img width={133} height={112} src={source} alt=""/>
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price:</span>
                <b>{price} KZT</b>
              </div>
              
              <img onClick={isAdded? onClickCheck : onClickPlus} className="plusButton" width={32} height={32} 
              src={ isAdded? "/images/check.svg" : "/images/plus.svg"} />
              
            </div>
          </div>
    );
}


export default CardFav


















