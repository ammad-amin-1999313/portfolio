import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'
import Hamburger from 'hamburger-react'

function NavBar() {
  const [isOpen, setOpen] = useState(false)
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between ">
        <nav className="flex mx-28">
          <NavLink
            to={'/'}
            exact="true"
            activeclassname="text-white"
            className="inline-flex  test lg:items-center lg:py-3 lg:px-3 lg:mr-4 text-red-400 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Ammad
          </NavLink>
          <ul className="block bg-red rounded-circle lg:hidden text-white w-12/12 ml-8 middle flex pl-28">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </ul>
          <NavLink
            className="inline-flex hidden lg:flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            to={'/post'}
            activeclassname="text-red-100 bg-red-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            className="inline-flex items-center hidden lg:flex py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            to={'/project'}
            activeclassname="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            className="inline-flex items-center hidden lg:flex py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            to={'/about'}
            activeclassname="text-red-100 bg-red-700"
          >
            About Me !
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6 justify-between hidden lg:flex wide">
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
        {/* ------------------------ mobile ----------------- */}
        {isOpen && (
          <div className="testing-nav">
            <div className="flex justify-between w-11/12">
              <NavLink
                to={'/'}
                exact="true"
                activeclassname="text-white"
                className="inline-flex   items-center py-3 px-3 mr-4 text-red-400 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
              >
                Ammad
              </NavLink>
              <ul className="block bg-red rounded-circle lg:hidden pt-2 text-red-400 w-12/12 ml-8 flex pl-28">
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </ul>
            </div>
            <div className="flex flex-col pt-4">
              <NavLink
                className="inline-flex  flex items-center  px-3 py-2 rounded text-red-400 hover:text-green-800"
                to={'/post'}
                activeclassname="text-red-100 bg-red-700"
              >
                Blog Posts
              </NavLink>
              <NavLink
                className="inline-flex items-center  flex  px-3 py-2  rounded text-red-400 hover:text-green-800"
                to={'/project'}
                activeclassname="text-red-100 bg-red-700"
              >
                Projects
              </NavLink>
              <NavLink
                className="inline-flex items-center  lg:flex  px-3 py-2 rounded text-red-400 hover:text-green-800"
                to={'/about'}
                activeclassname="text-red-100 bg-red-700"
              >
                About Me !
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default NavBar
