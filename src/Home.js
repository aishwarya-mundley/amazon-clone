import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://m.media-amazon.com/images/I/61I85UYDe9L._SX3000_.jpg'
        alt=''
      />

      {/* Product id, title, price, rating, image */}
      <div className='home__row'>
        <Product
          id='12321341'
          title='Xiaomi 11 Lite NE'
          price={20}
          rating={5}
          image='https://images-eu.ssl-images-amazon.com/images/I/31-lVlmtanL._AC_SX184_.jpg'
        />
        <Product
          id='12321341'
          title='The Lessons Of History'
          price={25}
          rating={4}
          image='https://m.media-amazon.com/images/I/71hzIWfClZL._AC_SY200_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='12321341'
          title='The Beginning Of Infinity'
          price={35}
          rating={5}
          image='https://m.media-amazon.com/images/I/91n9n7RmcLL._AC_SY200_.jpg'
        />
        <Product
          id='12321341'
          title='Reality Is Not What It Seems'
          price={21}
          rating={4}
          image='https://m.media-amazon.com/images/I/81g5H0jkYSL._AC_SY200_.jpg'
        />
        <Product
          id='12321341'
          title='The Rational Optimist'
          price={23}
          rating={4}
          image='https://m.media-amazon.com/images/I/41V12tmULML._AC_SY200_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='12321341'
          title='Study Table'
          price={40}
          rating={3}
          image='https://m.media-amazon.com/images/I/71msWIzlvwS._AC_SY200_.jpg'
        />
      </div>
      {/* Product */}
    </div>
  )
}

export default Home
