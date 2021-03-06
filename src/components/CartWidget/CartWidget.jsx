import { useContext } from 'react';
import CartContext from '../../context/CartContext'

function CartWidget() {

    const { cantidadTotal } = useContext(CartContext)

    return(
        <div>
            <i className='bx bx-cart'> { cantidadTotal } </i>
        </div>
    );
}

export default CartWidget;

