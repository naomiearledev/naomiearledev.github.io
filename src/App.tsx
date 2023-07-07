import './assets/css/App.css'

import Header from './components/Header'
import Intro from './sections/Intro'
import About from './sections/About'
import Work from './sections/Work'
import Contact from './sections/Contact'
import NavLink from './components/NavLink'
import Overlay from './components/Overlay'

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Work />
      <Contact />
      <NavLink text="top" selector="#header" className="back-to-top" />
      {/* <Overlay /> */}
    </>
  )
}

export default App
