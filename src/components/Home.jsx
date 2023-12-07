import React from 'react'
import image from '../images/monstera-leaf.jpg'
function Home() {
  return (
    <main>
      <img
        src={image}
        alt="monstera"
        className="absolute img-home object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-sung home-name">
          Hello I'm Ammad
        </h1>
      </section>
    </main>
  )
}

export default Home
