
function Header() {
    return(
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
    );
}


export default Header;
