import React from 'react';

export default function Navbar(props) {
    
  return (
    <>
     <div className='navbar'>
        <h1 className='navbar-heading'>{props.title}</h1>
    </div>
  </>

  );
}