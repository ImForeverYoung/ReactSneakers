import React, { useState } from 'react';
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader"
import AppContext  from '../../context';
console.log(styles);
function addItem(props){
  alert('Item added!')
  console.log(props)
}

function Card({onFavorite=false, added = false, id,
  source,name,price,liked = false,onPlus=false,onCheck, loading = false}){
    const { isItemAdded } = React.useContext(AppContext);
    
    const [isFavorite, setIsFavorite] = useState(liked);
    const onClickPlus = () => {
      onPlus();
      
    }
    const onClickFavorite = () => {
      
      if(isFavorite){
        setIsFavorite(!isFavorite);
        onFavorite();
      }
      else{
        setIsFavorite(!isFavorite);
        onFavorite();
      }
      
    }
    const onClickCheck = () =>{
      onCheck();
      
    }
    return (
        <div className='card mb-40'>
          {
            loading ? <ContentLoader 
            speed={5}
            width={155}
            height={260}
            viewBox="0 0 155 200"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
            <rect x="0" y="106" rx="3" ry="3" width="150" height="15" /> 
            <rect x="0" y="126" rx="3" ry="3" width="93" height="15" /> 
            <rect x="0" y="163" rx="8" ry="8" width="80" height="24" /> 
            <rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
           </ContentLoader> : <>  {/* React Fragment */}
          <div className='favorite' onClick={onClickFavorite}>
              
          {onFavorite && ((() => {
            if (isFavorite) {
              return (
                <img src='/images/cart_like_white.svg' alt='liked' />
              )
            } else  {
              return (
                <img src='/images/cart_like_red.svg' alt='unliked' />
              )
            } 

          })())} 
        </div>
        <img width={133} height={112} src={source} alt=""/>
        <h5>{name}</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Price:</span>
            <b>{price} KZT</b>
          </div>
          
          {onPlus && (<img onClick={onClickPlus} className="plusButton" width={32} height={32} 
          src={ isItemAdded(id)? "/images/check.svg" : "/images/plus.svg"} />)}
          
        </div> </>
          }
            
            
          </div>
    );
}


export default Card


















