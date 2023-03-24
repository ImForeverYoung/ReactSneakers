import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './index.scss'
import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';
import { useState } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import AppContext from './context';
const arr = [/*
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 22990, source: '/images/image1.jpg', liked: true},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 27490, source: '/images/image2.jpg', liked: false}
*/];
// export const AppContext = React.createContext({});



function App() {
  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  let sumOfItems = 0;
  cartItems.map(el=>sumOfItems+=el.price);
  React.useEffect(()=>{
    // fetch('https://641859cf29e7e36438e64b39.mockapi.io/items')
    //   .then((res)=>{
    //     console.log(res);
    //     return res.json();
    //   })
    //   .then((json)=>{
    //     //let count = 1;
    //     // json = json.map((el)=>{el.id = count++});
    //     setItems(json);
    //     // console.log(items)
    //   });
    async function fetchData(){
      try{
        const [cartResponse,favoritesResponse,itemsResponse] = await Promise.all([axios.get('https://641859cf29e7e36438e64b39.mockapi.io/cart'),
          axios.get('https://60c4f375ec8ef800175e0bf4.mockapi.io/favorites'),
          axios.get('https://641859cf29e7e36438e64b39.mockapi.io/items')
            ])
        setIsLoading(true);
        // const cartResponse = await axios.get('https://641859cf29e7e36438e64b39.mockapi.io/cart');
        // const favoritesResponse = await axios.get('https://60c4f375ec8ef800175e0bf4.mockapi.io/favorites');
        // const itemsResponse = await axios.get('https://641859cf29e7e36438e64b39.mockapi.io/items');
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      }catch(e){
        alert('error during get request')
      }

    }
    fetchData();
      // axios.get('https://641859cf29e7e36438e64b39.mockapi.io/items')
      //   .then((res)=>{setItems(res.data)});
      // axios.get('https://641859cf29e7e36438e64b39.mockapi.io/cart')
      //   .then((res)=>{setCartItems(res.data)});
      //   axios.get('https://60c4f375ec8ef800175e0bf4.mockapi.io/favorites')
      //   .then((res)=>{setFavorites(res.data)});
  }, [])
  const onChangeSearchInput = (e) =>{
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }
  const onAddToFavorites = async (obj)=>{
    try{
      if(favorites.find(objFav=>Number(objFav.id)==Number(obj.id))){
        console.log(obj)
        let index;
        await axios.get(`https://60c4f375ec8ef800175e0bf4.mockapi.io/favorites?id=${Number(obj.id)}`).then((response) => (index = response.data[0]))
        console.log(index.index);
        await axios.delete(`https://60c4f375ec8ef800175e0bf4.mockapi.io/favorites/${index.index}`);
        setFavorites((prev)=>prev.filter((item)=>Number(item.id)!=Number(obj.id)));
        
      }
      else{
        const {data} = await axios.post('https://60c4f375ec8ef800175e0bf4.mockapi.io/favorites',obj);

        setFavorites(prev=>[...prev,data]);
      }
    } catch(e){
      alert("Не удалось добавить в фавориты")
    }
  }
  // const onDeleteFromFavorites = (id) =>{
   //axios.delete(`https://60c4f375ec8ef800175e0bf4.mockapi.io/favorites/${id}`);
  //   setFavorites((prev)=>prev.filter(item => item.id !== id));
  // }
  const onAddToCart = async (obj)=>{
    try{
      console.log(obj.id)
      if(cartItems.find((item)=>Number(item.id)==Number(obj.id))){
        setCartItems((prev)=>prev.filter((item)=>Number(item.id)!=Number(obj.id)))
      } else {
        axios.post('https://641859cf29e7e36438e64b39.mockapi.io/cart', obj)
          .then((res)=>{});
        setCartItems(prev=>[...prev,obj]);
      }
      
    } catch(e){
      alert('problem of adding to cart');
    }
    
    //console.log(obj)
    //console.log(cartItems)
  };
  const onDeleteFromCart = async  (obj)=>{
    try{
      console.log(obj);
      //axios.delete(`https://641859cf29e7e36438e64b39.mockapi.io/cart?id=${Number(obj.id)}`)
      let index;
      await axios.get(`https://641859cf29e7e36438e64b39.mockapi.io/cart?id=${Number(obj.id)}`).then((response) => (index = response.data[0]))
      console.log(index.index);
      //console.log(res.json());
      await axios.delete(`https://641859cf29e7e36438e64b39.mockapi.io/cart/${index.index}`);
      //console.log(res.data);
      //await axios.delete(`https://641859cf29e7e36438e64b39.mockapi.io/cart/${Number(obj.id)}`);
      setCartItems((prev)=>prev.filter(item => Number(item.id) !== Number(obj.id)));
    }catch(error){
      console.log(error);
    }
    
        
    // let index = cartItems.findIndex(function(o){
    //   return o.id === id;
    // })
    // if (index !== -1) myArr.splice(index, 1);
    // setCartItems(prev=>[...prev,obj]);
    
    
    //console.log(cartItems)
  };


  const isItemAdded = (id) =>{
    return cartItems.some((obj)=>Number(obj.id)==Number(id));
  }
  return (
    <AppContext.Provider value={{setCartOpened,setCartItems,
    items,cartItems,favorites,isItemAdded, onAddToCart,onAddToFavorites,onDeleteFromCart}}>
    <div className="wrapper clear">
      

      {<Overlay onRemote={(id)=>onDeleteFromCart(id)} items={cartItems} opened={cartOpened} onClose={()=>setCartOpened(false)} /> }
      <Header onClickCart={() => { setCartOpened(true);  }} sum={sumOfItems}  />
      <Routes>
       <Route path='/' element={<Home items={items} 
        cartItems={cartItems}
        searchValue={searchValue}
        setSearchValue={setSearchValue} 
        onChangeSearchInput={onChangeSearchInput}
        onAddToFavorites={onAddToFavorites}
        onAddToCart={onAddToCart} 
        onDeleteFromCart={onDeleteFromCart}
        isLoading={isLoading}
        />} > 
       </Route> 
       <Route path='/favorites' 
       element={<Favorites  favorites={favorites}
        onAddToFavorites={onAddToFavorites}
        onAddToCart={onAddToCart}
        onDeleteFromCart={onDeleteFromCart}
         />} > 
       </Route> 
       <Route path='/orders' 
       element={<Orders favorites={favorites}
        onAddToFavorites={onAddToFavorites}
        onAddToCart={onAddToCart}
        onDeleteFromCart={onDeleteFromCart}
        isLoading={isLoading}
         />} > 
       </Route>
       </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
