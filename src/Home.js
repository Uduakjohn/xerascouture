import React from 'react';
import "./Home.css";
import "./Header";
import Product from './Product';

function Home() {

  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='images/homepic2.jpg' alt='gy'/>

        <div className='round_head'>
            
            <img className='roundpic' src='images/plaintwopiece1.jpg' alt=''/>
            <img className='roundpic' src='images/twopiece2.jpg' alt=''/>
             <img className='roundpic' src='images/ankara11.jpg' alt=''/>
            <img className='roundpic' src='images/ankara2.jpg' alt=''/>
            <img className='roundpic' src='images/ankara3.jpg' alt=''/>
            <img className='roundpic' src='images/ankara14.jpg' alt=''/>
            <img className='roundpic' src='images/twopiece3.jpg' alt=''/>
            
        </div>


        <h2>Discover and own some clean combos</h2>

        <div className="home_row">
           
        <Product
            id="325"
            title="Long Gowns"
            price={15.99}
            rating={4}
            image="images/twopiece1.jpg"
            />
          
          <Product
            id="4345"
            title="Long Gowns"
            price={17.99}
            rating={4}
            image="images/ankara8.jpg"
            />
          
          <Product
            id="32544354345"
            title= "Shirt Gowns"
            price={19.99}
            rating={4}
            image="images/shirtgown1.jpg"
          />

            <Product
            id="322543554345"
            title="Long Gowns"
            price={16.99}
            rating={4}
            image="images/ankaralong1.jpg"
          />

          <Product
            id="32254354345"
            title="Jumpsuits"
            price={15.99}
            rating={4}
            image="images/jumpsuit3.jpg"
          />
        </div>


        <h2>Get unique and perfectly finished Ankara Gowns</h2>
    
    <div className='home_row'>
        <Product
        id = "5384"
        title = "Ea dicta alias aut autem amet sed dolores mollitia quo sint voluptates qui sequi harum aut voluptates quia vel maiores quis. Ut quas dolore eum ratione neque et animi velit ut rerum debitis aut laborum"
        price = {29.9}
        image = "images/ankara1.jpg"
        rating={5}
         />
        <Product
        id = "5384"
        title = "Ea dicta alias aut autem amet sed dolores mollitia quo sint voluptates qui sequi harum aut voluptates quia vel maiores quis. Ut quas dolore eum ratione neque et animi velit ut rerum debitis aut laborum"
        price = {29.9}
        image = "images/ankara11.jpg"
        rating={5}
        />
         <Product
         id = {67833}
         title = "higdjfiwkndksmwjwnd cjd djend djd djed djd djd djd djd djd djd djd djd djd kqwmwbnedjeeeeeeeeeeeeeejd dj"
         price = {50.68}
         image = "images/ankara13.jpg"
         rating={4}
         
         />
    </div>
    <h2>Shop some beautifully made Two Piece</h2>
    <div className="home_row">
          <Product
            id="49038d50"
            title="Ea dicta alias aut autem amet sed dolores mollitia quo sint voluptates qui sequi harum aut voluptates quia vel maiores quis. Ut quas dolore eum ratione neque et animi velit ut rerum debitis aut laborum"
            price={33.99}
            rating={3}
            image="images/plaintwopiece2.jpg"
          />
          <Product
            id="23445w930"
            title="Ea dicta alias aut autem amet sed dolores mollitia quo sint voluptates qui sequi harum aut voluptates quia vel maiores quis. Ut quas dolore eum ratione neque et animi velit ut rerum debitis aut laborum"
            price={30.99}
            rating={5}
            image="images/twopiece2.jpg"
          />
          <Product
            id="325434345"
            title="Ea dicta alias aut autem amet sed dolores mollitia quo sint voluptates qui sequi harum aut voluptates quia vel maiores quis. Ut quas dolore eum ratione neque et animi velit ut rerum debitis aut laborum"
            price={31.99}
            rating={4}
            image="images/twopiece3.jpg"
          />
        </div>

        <h2>Discover and own some clean combos</h2>

        <div className="home_row">
          <Product
            id="4903850"
            title="Ea dicta alias aut autem amet sed dolores mollitia quo sint voluptates qui sequi harum aut voluptates quia vel maiores quis. Ut quas dolore eum ratione neque et animi velit ut rerum debitis aut laborum"
            price={25.99}
            rating={3}
            image="images/plaingown1.jpg"
          />
          <Product
            id="23445930"
            title="Ea dicta alias aut autem amet sed dolores mollitia quo sint voluptates qui sequi harum aut voluptates quia vel maiores quis. Ut quas dolore eum ratione neque et animi velit ut rerum debitis aut laborum"
            price={18.99}
            rating={5}
            image="images/ankara6.jpg"
          />
          <Product
            id="3254354345"
            title="Ea dicta alias aut autem amet sed dolores mollitia quo sint voluptates qui sequi harum aut voluptates quia vel maiores quis. Ut quas dolore eum ratione neque et animi velit ut rerum debitis aut laborum"
            price={16.99}
            rating={4}
            image="images/plaingown3.jpg"
          />
          <Product
            id="325435434"
            title="Ea dicta alias aut autem amet sed dolores mollitia quo sint voluptates qui sequi harum aut voluptates quia vel maiores quis. Ut quas dolore eum ratione neque et animi velit ut rerum debitis aut laborum"
            price={15.99}
            rating={4}
            image="images/plaingown2.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
