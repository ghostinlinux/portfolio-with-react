import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    
    <div className='home' id='home'>
      <main>
        <h1>PRATIK KUMAR</h1>
        <p>full stack developer</p>
      </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
                We are your one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to increse the problem solving ability in children.
            </p>
        </div>
    </div>


    <div className="home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro saepe deserunt ratione nisi deleniti, in cum a libero nulla molestias?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus architecto consequuntur sint, autem officiis odio consequatur quo voluptatem, ullam corporis sapiente provident beatae iste neque qui repellat eveniet quis totam? Amet aliquam nulla cupiditate culpa minus, dolorum impedit, nisi placeat eos iste ducimus architecto odit nesciunt? Quod, optio minima!
        </p>
      </div>
    </div>

    <div className="home4" id='brands'>

      <div>
        <h1>
          Brands 
        </h1>

        <article>
          <div style={{animationDelay:"0.3s"}}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>

          <div style={{animationDelay:"0.5s"}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>

          <div style={{animationDelay:"0.7s"}}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>

          <div style={{animationDelay:"1s"}}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>


        </article>
      </div>
    </div>
    </>
  )
}

export default Home
