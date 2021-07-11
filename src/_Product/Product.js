import React from 'react'
import './Product.css';
import { useStateValue } from "../StateProvider";

function Product({
		id,
        title='Product', 
        image, 
        price, 
        rating
    }) {

	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		// dispatch the item into the data layer
		dispatch({
		  type: "ADD_TO_BASKET",
		  item: {
			// id: id,
			title: title,
			image: image,
			price: price,
			rating: rating,
		  },
		});
	};

    return <product className='product'>
        <info>
            {/* 
            you take the parameter passed to the Product function
            and you put it here
            */}
            <p>{title}</p>
            <p>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <p>
                {
                /*
                rating => 4
                Array(4) => array of (4)[null, null, null, null]
                Array(rating).fill() => (4) [undefined, undefined, undefined, undefined]
                Array(rating).fill().map((value, index)=>('*'))
                */
                Array(rating)
                    .fill()
                    .map((value, index) => (
                            // repeat this star after rating number
                            '🌟'
                        )
                    )
                }
            </p>
        </info>
        <img src={image} alt='' />
        <button onClick={addToBasket}>Add to basket</button>
    </product>
    
}

export default Product
