import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import Proptypes from 'prop-types'

function Image({className, img}) {

    const [hovered, setHovered] = useState(false)
    
    const {toggleFavorite, addToCart, cartItems} = useContext(Context)

    // const heartIcon = hovered && 
    //     <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(items => items.id === img.id)
        if (alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart"></i>
        }
        else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }
    

    // const cartIcon = hovered && 
    //     <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>

    // console.log(hovered)

    return(
        <div 
        className={`${className} image-container`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className='image-grid' alt=''/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}


Image.propTypes = {
    className: Proptypes.string,
    img: Proptypes.shape({
        id: Proptypes.string.isRequired,
        url: Proptypes.string.isRequired,
        isFavorite: Proptypes.bool
    })
}

export default Image