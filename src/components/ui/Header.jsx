import React from 'react';
import Logo from '../../img/github_PNG15.png';

const Header = () => {
    return ( 
        <header className="header">
            <img src={Logo} alt="" style={{width: "250px"}} />
        </header>
     );
}
 
export default Header;