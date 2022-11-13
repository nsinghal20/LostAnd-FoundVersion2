import React from 'react';
import image from '../images/bg-01.jpg'
export default function Card() {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} />
      </div>
      <div className='cocktail-footer'>
        <h3>name</h3>
        <h4>glass</h4>
        <p>info</p>
      </div>
    </article>
  );
}
