import React from 'react'
import './Checkout.css';

function Checkout() {
    return <checkout className='checkout'>
        <banner>
            <img className=''
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
            />
        </banner> 
        <total>
            <p>Your total:</p>
            <item-list>
                <item></item>
                <item></item>
                <item></item>
            </item-list>
        </total>
    </checkout>
    
}

export default Checkout
