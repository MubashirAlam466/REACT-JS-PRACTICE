import './App.css'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Textarea from './Components/Textarea'

function App() {
  return (
    <>
      <Navbar/>
      {/* <div className="container my-5">
      <Textarea Heading="Convert Form"/>
      </div> */}
      <div className="container my-5">
      <About/>
      </div>
    </>
  )
}

export default App
