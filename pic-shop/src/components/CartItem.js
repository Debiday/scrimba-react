import React, {useContext, useState} from 'react'
import {Context} from '../Context'

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [trashHovered, setTrashHovered] = useState(false)

    const iconClassName = trashHovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'

    return (
        <div className='cart-item'>
            <i 
                className={iconClassName}
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setTrashHovered(true)}
                onMouseLeave={() => setTrashHovered(false)}
            >
            </i>
            <img src={item.url} width='130px' alt=''/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem