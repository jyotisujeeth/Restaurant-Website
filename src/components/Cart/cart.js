import Modal from '../UI/Modal';
import classes from './Cart.module.css'
const Cart = props => {
   const cartItems= 
   <ul className={classes['cart-item']}>
   { [{id: 'c1', name:'Sushi', amount: 2, price:12.99}].map((item) => (
     <li>{item.name}</li>
   ))}
   </ul>


return (
  <Modal onClose={props.onClose}>
    {cartItems}
    <div>
      <span>Total Amount</span>
      <span>35.62</span>
    </div>
    <div className={classes.action}>
      <button className={classes["button--alt"]} onclick={props.onClose}>
        close
      </button>
      <button className={classes.button}>order</button>
    </div>
  </Modal>
);
};

export default Cart;