import React, {useContext, useState} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    // const [trashHovered, setTrashHovered] = useState(false)
    const [hovered, ref] = useHover()

    const iconClassName = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'

    return (  
        <div className='cart-item'>
            <i 
                className={iconClassName}
                onClick={() => removeFromCart(item.id)}
                ref={ref}
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