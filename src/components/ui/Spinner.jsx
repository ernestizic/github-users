import React from 'react';
import spinner from '../../img/spinner.gif'

const Spinner = () => {
    return ( 
        <div className="spinner-div">
            <img src={spinner} style={{width: '100px', margin: 'auto', display: "block"}} alt="loading"/>
        </div>
     );
}
 
export default Spinner;