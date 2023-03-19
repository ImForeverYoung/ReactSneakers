

function Card(){
    return (
        <div className='card'>
            <div className='favorite'>
              <img src='/images/cart_like_white.svg' alt='unliked' /> 
            </div>
            <img width={133} height={112} src="/images/image1.jpg" alt=""/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Price:</span>
                <b>22 990 KZT</b>
              </div>
              <button className='button'>
                <img width={15} height={15} src="/images/plus.svg" />
              </button>
            </div>
          </div>
    );
}


export default Card


















