import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import SinglePost from './components/SinglePost.jsx'
import Post from './components/Post.jsx'
import Project from './components/Project.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/post/:slug" Component={SinglePost} />
        <Route path="/post" Component={Post} />
        <Route path="/project" Component={Project} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
