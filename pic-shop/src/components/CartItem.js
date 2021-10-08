import React, {useContext, useState} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'

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

// check prop that it's receiving!
CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem