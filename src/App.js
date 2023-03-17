import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper clear">
      <header className='d-flex justify-between align-center'>
        <div className="d-flex align-center">
          <img width={40} height={40} src='logo.png'/>
          <div className=''>
            <h3 className='text-uppercase mb-0'>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img width={18} height={18} src="/images/cart.svg" />
            <span>1205 KZT</span>
            
          </li>
          <li>
          <img width={18} height={18} src="/images/like.svg" />
          </li>
          <li>
          <img width={18} height={18} src="/images/user.png" />
          </li>
        </ul>
      </header>
      <div className='content p-40'>
        <h1 className='mb-40'>Все кроссовки</h1> 
        <div className='sneakers d-flex '>
          <div className='card'>
            <img width={133} height={112} src="/images/image1.jpg" alt=""/>
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
          <div className='card'>
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
          <div className='card'>
          <img width={133} height={112} src="/images/image3.jpg" alt=""/>
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
          <div className='card'>
          <img width={133} height={112} src="/images/image4.jpg" alt=""/>
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
