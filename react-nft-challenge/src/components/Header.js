import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchicon from '../assets/header/search.png'
import themeSwitch from '../assets/header/theme-switch.png'
function Header() {
    
    return (
        <div className='header'>
        
            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' />
            </div>

            <div className='searchBar' >
                <div className='searchIcon' >
                    <img src={searchicon} className='searchicon' />
                  
                </div>
                <input
                    className='searchInput'
                    placeholder='NFTs and collections...'

                />
            </div>

            <div className='headerItems'>
                <p> Drops</p>
                <p> Marketplace</p>
                <p> Create</p>
            </div>

            <div className='themeIcon'>
                <img src={themeSwitch} className='themeSwitcher' />
            </div>

            <div className='loginButton'>
                GET IN
            </div>
               
           


    </div>);
}
Header();

/*const Header = () => {
    return <h2> I'am the header  🍔let's see rubee ❤🍕🚴‍♀️🚴‍♀️🚴‍♀️</h2>


}*/

export default Header 