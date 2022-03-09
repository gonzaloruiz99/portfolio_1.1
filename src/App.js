import React,{useEffect} from 'react'
import Slides from './Slides';
import Navbar from './Navbar';
import Keypad from './Keypad';

const JSprojects = [
  {
    id: 1,
    name:"bookmark",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img: require("./apps_img/bookmark.png"),
  },
  {
    id: 2,
    name:"menu",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img: require("./apps_img/menu_img.png"),
  },
  {
    id: 3,
    name:"shorter Links",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img:require("./apps_img/rockpaper_img.png"),
  },
  
  
]
const Reactprojects = [

  {
    id: 4,
    name:"rock,paper,scissor",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img:require("./apps_img/shorten_img.png"),
  },
  {
    id: 5,
    name:"TicTacToe",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img: require("./apps_img/tictactoe_img.png"),
  },
  {
    id: 6,
    name:"ToDo App",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img: require("./apps_img/todoapp_img.png"),
  },
  
]

function App() {


  useEffect(() => {
    document.title = `HOME |GonzaloRuizPortfolio`;
  },[]);


 

  return (
    <>
      <Navbar></Navbar>
            <div className="container">
        <article className="screen page1">

          <Keypad></Keypad>

          <div className="salute">
            <h3>Buenas!, soy</h3>
            <h1 className="title">Gonzalo Ruiz.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsum vitae fugiat, modi corrupti ab.</p>
          </div>

          <div className="blocks-container">
            <div className="redblock1"></div>
            <div className="redblock2"></div>
          </div>
          {/* <img src="./images/redbox_small.svg" alt=""  class="boximg"/> */}
        </article>



        <article className="screen page2">
          <Keypad></Keypad>
          <h1 className="title">About <span>  Me</span></h1>
          
          <div className="info-container">
            <Slides></Slides>     
          </div>
          <div className="yellow_block1"></div>
        </article>



        
        <article className="screen page3">
          <Keypad></Keypad>

          <div className="green-block"></div>
          <h1 className="title">Proyectos</h1>
          <div className="projects Reactprojects">
            {JSprojects.map((item)=>{
              const {id,name,img} = item;

              return <div className="project " key={id}>
                <h3>{name}</h3>
                <img src={img} alt={name} />
              </div>
            })}
          </div>
          <div className="projects JSprojects">
            {Reactprojects.map((item)=>{
              const {id,name,img} = item;
              
              return <div className="project" key={id}>
                <h3>{name}</h3>
                <img src={img} alt={name} />
              </div>
            })}
          </div>
          <div className="green-line"></div>
        </article>

        
        <article className="screen page4">
          <Keypad></Keypad>

          <div className="gray-line"></div>
          <h1 className="title">Contacto</h1>

          <footer >
            {/* <img style={{width:"200px"}} src={require('./images/profile-pic.png')} alt="x"  /> */}
            <div className="white-block"></div>

            <section className="footer-table">
                  <div className="table-row">
                      <p href="#">telefono</p>
                      <p href="#">e-mail</p>
                      <p href="#">linkedIn</p>
                      <p href="#">github</p>
                  </div>
                  <div className="table-row">
                      <a href="#">351-153301766</a>
                      <a href="#">gonzaruiz9191@gmail.com</a>
                      <a href="#">Gonzaruiz</a>
                      <a href="#">github.com/tak9191/</a>
                  </div>
              </section>
          </footer>


        <img src={require("./images/palette_img.png" )} alt="palette-img" className="palette-icon" />
        </article>


      </div>
  </>
  );
}

export default App;
