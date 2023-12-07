import React from 'react'
import {NavLink} from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'

function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between ">
        <nav className="flex mx-28">
          <NavLink
            to={'/'}
            exact="true"
            activeclassname="text-white"
            className="inline-flex items-center py-3 px-3 mr-4 text-red-400 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Ammad
          </NavLink>
          <NavLink
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            to={'/post'}
            activeclassname="text-red-100 bg-red-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            to={'/project'}
            activeclassname="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            to={'/about'}
            activeclassname="text-red-100 bg-red-700"
          >
            About Me !
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6 justify-between wide">
          <SocialIcon
            url="https://www.linkedin.com/in/ammad-amin-637378202/"
            className=""
            target="_blank"
            fgColor="#fff"
            style={{width: 35, height: 35}}
          />
          <SocialIcon
            url="https://twitter.com/_AmmadAmin"
            className=""
            target="_blank"
            fgColor="#fff"
            style={{width: 35, height: 35}}
          />
          <SocialIcon
            url="https://instagram.com/ammad_khan99?igshid=MzMyNGUyNmU2YQ=="
            className=""
            target="_blank"
            fgColor="#fff"
            style={{width: 35, height: 35}}
          />
        </div>
      </div>
    </header>
  )
}

export default NavBar
