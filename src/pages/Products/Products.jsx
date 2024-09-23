
import shoes from '../../images/shoes.jpg'
import clothes from '../../images/clothes.jpg'
import watch from '../../images/watch.jpg'
import bag from '../../images/bag.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { handleCartCount, handleCartItem } from '../../redux/ecartSlice'
import './Products.css'



let productsArray = [
    {  productName : 'Shoes' , productImg : shoes,  price: 1000},
    {  productName : 'Clothes' ,productImg : clothes , price :2000}, 
    {  productName : 'Watches' ,productImg : watch , price: 1500}  ,
    {  productName : 'Bags' , productImg : bag , price: 2500}
   ]

export const Products = () => {
  
  const dispatch = useDispatch();
 
  const cartItem = useSelector(state => state.ecart.cartItem);

  console.log(cartItem)

  const handleCart = (item, remove = false) => {

    if(remove){
    dispatch(handleCartCount(true));
    }else { 
    dispatch(handleCartCount(false)) ;
    }

    if(remove){
     dispatch(handleCartItem({item,remove}))
    }else {
      dispatch(handleCartItem({item}))
    }
    

  }


  return (
    <>
      <div className="products-container" >
        {productsArray.map(item => (
          <div key={item.productImg} className='card' >
              <img src={item.productImg} alt='img not available'/>
              <p style={{fontSize :"20px"}}>Price : {item.price}</p>
              <button className='btn btn-success'onClick={() => handleCart(item )}>Add to Cart</button>
              <div className="button-container">
              {cartItem[item.productName]?.count > 0 && (
                <>
                <button className='btn  add-item-btn' onClick={() => handleCart(item)}><p>+</p></button>
                <p className='cart-count'>{cartItem[item.productName]?.count}</p>
                <button className='btn  remove-item-btn' onClick={() => handleCart(item, true)}><p>-</p></button>
                </>
              )} 
              </div>
          </div>
        ))}

      </div>

    </>


  )
}
