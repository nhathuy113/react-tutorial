import React from 'react'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// Option 1:
// import XIcon from '@material-ui/icons/X';

// Option 2: 
// import { X, Y } from '@material-ui/icons';

// for example:
import { Search, ShoppingCart } from '@material-ui/icons';

import './Header.css';

function Header() {
    return (
        <div className='header'>
          <img 
              className='header__logo'
              src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          />

          <search className='header__search'>
            <input className='header__searchInput' type='text' />
            <SearchIcon className='header__searchIcon'/>
          </search>

          <navigation className='header__navigation'>
            <optn className='header__option'>
              <span className='header__option_line1'>Hello</span> 
              <span className='header__option_line2'>John</span> 
            </optn>

            <optn className='header__option'>
              <span className='header__option_line1'>Returns</span> 
              <span className='header__option_line2'>& Orders</span>
            </optn>

            <optn className='header__option'>
              <span className='header__option_line1'>Your</span> 
              <span className='header__option_line2'>Prime</span>
            </optn>

            <optn className='header__optionBasket'>
              <ShoppingCartIcon />
              <span className='header__option_line2'>0</span>
            </optn>
          </navigation>
      </div>
    )
}

export default Header
