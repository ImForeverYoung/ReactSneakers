import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Header(props) {
  
    return(
        <header className='d-flex justify-between align-center'>
          <Link to='/'>
        <div className="d-flex align-center">
          <img width={40} height={40} src='logo.png'/>
          <div className=''>
            <h3 className='text-uppercase mb-0'>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
        </Link>
        <ul className='d-flex'>
          <li onClick={props.onClickCart} className='mr-30 cu-p' >
            <img width={18} height={18} src="/images/cart.svg" />
            <span>{props.sum} KZT</span>
            
          </li>
          <li>
            <Link to='/favorites'>
          <img width={18} height={18} src="/images/like.svg" />
          </Link>
          </li>
          <li>
          <Link to='/orders'>
          <img width={18} height={18} src="/images/user.png" />
          </Link>
          </li>
        </ul>
      </header>
    );
}


export default Header;
