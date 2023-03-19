

function Overlay(){
    return(
        <div style={{display:'none'}} className='overlay'>
        <div className='drawer d-flex flex-column '>
          <h2 className='mb-30'>Корзина</h2>

          <div className='cartItems mb-20'>
            <div className='cartItem d-flex align-center'>
              {/* <img className='mr-20' width={70} height={70} src='/images/image1.jpg' alt="Sneakers List" /> */}
              <div style={{backgroundImage: 'url(/images/image1.jpg)'}}
              className='cartItemImg'>

              </div>
              <div className='mr-20 flex'>
                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>22 990 KZT</b>
              </div>
              <img className='remoteButton' src='/images/button_remote.svg' alt="Remote button" />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul className=''>
              <li className='d-flex'>
                <span>Итого:</span>
                <div></div>
                <b>22 990 KZT</b>
              </li>
              <li className='d-flex'>
                <span>Налог 0%:</span>
                <div></div>
                <b>0 KZT</b>
              </li>
            </ul>
            <button className='greenButton'>Оформить заказ 
              <img src='/images/arrow_right.svg' />
            </button>
          </div>
          
          
        </div>
      </div>
    );

}

export default Overlay;