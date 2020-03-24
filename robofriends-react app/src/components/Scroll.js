import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflow:'scroll', border: '5px solid black', height: '800px', padding: '50px 0', margin: '30px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;