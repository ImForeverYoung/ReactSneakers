import React from 'react';
import Card from '../components/Card';
import AppContext  from '../context';
function Home({items,isLoading,cartItems,searchValue,
    setSearchValue,onChangeSearchInput,onAddToFavorites,
    onAddToCart,onDeleteFromCart}){
    const { isItemAdded } = React.useContext(AppContext);
    const renderItems = () =>{
        const filtredItems = items.filter(item=>item.name.toLowerCase()
            .includes(searchValue.toLowerCase()))
        return (isLoading ? [...Array(8)] : filtredItems).map((el,index)=>
        <Card  key={index}
        {...el}
        onPlus={()=> {onAddToCart(el); }}
        onCheck ={()=>{onDeleteFromCart(el); }}
        onFavorite={()=> onAddToFavorites(el)}
        onUnfavorite = {()=>onAddToFavorites(el)}
        // added={isItemAdded(el && el.id)}
        loading={isLoading} />)
    }
    return(
        <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1 className=''>{searchValue? `Поиск по запросу: "${searchValue}"`: 'Все кроссовки'}</h1>
          <div className='search-block'>
            <img src="/images/search.svg" alt="Search Icon" />
            {searchValue != ''? <img onClick={()=>setSearchValue('')} className="clear cu-p cartButton" src='/images/button_remote.svg' alt='Close button'  /> : null}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...'  />
          </div>
        </div>

         

        <div className='sneakers d-flex flex-wrap'>
          {renderItems()}
          


          
          
        </div>
      </div>
    );
}
export default Home;









