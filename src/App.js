import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';
function App() {
  return (
    <div className="wrapper clear">
      

      <Overlay />
      <Header />
      
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1 className=''>Все кроссовки</h1>
          <div className='search-block'>
            <img src="/images/search.svg" alt="Search Icon" />
            <input placeholder='Поиск ...'  />
          </div>
        </div>
         
        <div className='sneakers d-flex space-between'>
          <Card />
          <div className='card'>
          <div className='favorite'>
              <img src='/images/cart_like_red.svg' alt='unliked' /> 
          </div>
          <img width={133} height={112} src="/images/image2.jpg" alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Price:</span>
              <b>22 990 KZT</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/images/plus.svg" />
            </button>
          </div>
          </div>


          
          
        </div>
      </div>
    </div>
  );
}

export default App;
