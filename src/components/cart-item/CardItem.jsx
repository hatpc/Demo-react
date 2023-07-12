import './CartItem.css'

function CartItem(props) {
    const {title, descriptions} = props || {}
    return (
        <div className='cart-item'>
            <i class="fa-brands fa-facebook fa-spin"></i>
            <span>{title} </span>
            <span>{descriptions} </span>
        </div>
    );
}

export default CartItem;
