import React,{useState} from 'react'

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);





  return (
    <nav>
        <div className="nav-center">
            <div className="nav-header">
                <h3 className="logo">GON RUIZ | Portfolio</h3>
                <button className="nav-toggle" onClick={()=> setShowLinks(!showLinks)}>
                            <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className={`${showLinks && 'show-links'}`}>
              <ul className= "links" >
                  <li><a href="#page1">home</a></li>
                  <li><a href="#page2">about</a></li>
                  <li><a href="#page3">projects</a></li>
                  <li><a href="#page4">contact</a></li>
              </ul>
              <div className="nav-block" ></div>             
            </div>
        </div>
    </nav>
  )
}

export default Navbar