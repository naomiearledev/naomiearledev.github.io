import './assets/css/App.css'

import Header from './components/Header'
import Intro from './sections/Intro'
import About from './sections/About'
import Work from './sections/Work'
import Contact from './sections/Contact'
import BackToTop from './components/BackToTop'
import Overlay from './components/Overlay'

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Work />
      <Contact />
      <BackToTop />
      {/* <Overlay /> */}
    </>
  )
}

export default App
