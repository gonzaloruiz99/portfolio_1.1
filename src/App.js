import React,{useEffect, useState, useRef} from 'react'
import Slides from './Slides';
import Navbar from './Navbar';
import Keypad from './Keypad';
import ProjectsSlides from './ProjectsSlides';

import WsspIcon from "./images/whatsapp_logo.svg"
import LinkedIcon from "./images/linkedIn_logo.svg"
import MailIcon from "./images/email_logo.svg"
import GithubIcon from "./images/github_logo.svg"

const JSprojects = [
  {
    id: 1,
    name:"bookmark",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img: require("./apps_img/bookmark.png"),
    link: "",
  },
  {
    id: 2,
    name:"menu",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img: require("./apps_img/menu_img.png"),
    link: "",
  },
  {
    id: 3,
    name:"shorter Links",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img:require("./apps_img/rockpaper_img.png"),
    link: "",
  },
  {
    id: 4,
    name:"bookmark",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img: require("./apps_img/bookmark.png"),
    link: "",
  },
  {
    id: 5,
    name:"menu",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img: require("./apps_img/menu_img.png"),
    link: "",
  },
  {
    id: 6,
    name:"shorter Links",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img:require("./apps_img/rockpaper_img.png"),
    link: "",
  },
  {
    id: 7,
    name:"shorter Links",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img:require("./apps_img/rockpaper_img.png"),
    link: "",
  },
  
  
]
const Reactprojects = [

  {
    id: 8,
    name:"rock,paper,scissor",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img:require("./apps_images/rockpaper_img.png"),
    link: "https://tak9191.github.io/react-projects/#/Rockpaper",
  },
  {
    id: 9,
    name:"TicTacToe",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img:require("./apps_images/tictactoe_img.png"),
    link: "https://tak9191.github.io/react-projects/#/Tictactoe",
  },
  {
    id: 10,
    name:"ToDo App",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img:require("./apps_images/todo_img.png"),
    link: "https://tak9191.github.io/react-projects/#/Todoapp",
  },
  {
    id: 11,
    name:"Bookmark",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img:require("./apps_images/bookmark_img.png"),
    link: "https://tak9191.github.io/react-projects/#/Bookmark",
  },
  {
    id: 12,
    name:"Countries API",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img:require("./apps_images/countries_img.png"),
    link: "https://tak9191.github.io/react-projects/#/Countries",
  },
  {
    id: 13,
    name:"Menu App",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img:require("./apps_images/menu_img.png"),
    link: "https://tak9191.github.io/react-projects/#/Menu",
  },
  {
    id: 14,
    name:"Shorten Links",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
    img:require("./apps_images/shorter_img.png"),
    link: "https://tak9191.github.io/react-projects/#/Shorten",
  },
  
]
const footerData = [
  {
    id: "whatsapp_info",
    img: WsspIcon,
    name:"351-153301766",
    link: "#",
  },
  {
    id: "email_info",
    img: MailIcon,
    name:"gonzaruiz9191@gmail.com",
    link: "#",

  },

  {
    id: "linkedIn_info",
    img: LinkedIcon,
    name:"LinkedIn.com/tak9191/",
    link: "https://www.linkedin.com/in/gonzalo-ruiz-214167234/",
  },
  {
    id: "github_info",
    img: GithubIcon,
    name:"github.com/tak9191/",
    link: "#",
  },
]

function App() {


  useEffect(() => {
    document.title = `HOME |GonzaloRuizPortfolio`;
  },[]);

    // const smthg = JScards.current.style.left = `${e.clientX - cursorXSpace}px`;


  return (
    <>
      <Navbar></Navbar>
      <div className="main-container">
        <article className="screen page1" id='page1'>

          <Keypad></Keypad>

          <div className="salute">
            <h3>Buenas!, soy</h3>
            <div className="wrapper">
              <h1 className="title name_title"><span>Gonzalo</span> Ruiz.</h1>
            </div>
            <p>Diseñador, programador web, y entusiasta a aprender y resolver lo que se me presente.</p>
            
          </div>
          <a className="link_to_projects" href='#page3' >
            <div className="border-left"></div>
            <div className="border-bottom"></div>
            <h3>Mira algunos proyectos!</h3>
          </a>

          <div className="blocks-container">
            <div className="redblock1"></div>
            <div className="redblock2"></div>
          </div>
          {/* <img src="./images/redbox_small.svg" alt=""  class="boximg"/> */}
        </article>



        <article className="screen page2" id='page2'>
          <Keypad></Keypad>
          <h1 className="title">About <span>  Me</span></h1>
          
          <div className="info-container">
            <Slides></Slides>     
          </div>
          <div className="yellow_block1" ></div>
        </article>



        
        <article className="screen page3" id='page3'>
          <Keypad></Keypad>

          <div className="green-block"></div>
          <h1 className="title">Proyectos</h1>
          <ProjectsSlides data={JSprojects} Cards={"JSCards"}></ProjectsSlides>
          <ProjectsSlides data={Reactprojects} Cards={"ReactCards"}></ProjectsSlides>

          <div className="green-line"></div>
        </article>

        
        <article className="screen page4" id='page4'>
          <Keypad></Keypad>

          <div className="gray-line"></div>
          <h1 className="title">Contacto</h1>

          <footer >
            {/* <img style={{width:"200px"}} src={require('./images/profile-pic.png')} alt="x"  /> */}
            <div className="white-block"></div>

            <section className="footer-table">
              {
                footerData.map((row)=>{
                  return (
                    <div className="table-row">
                      <a href={row.link} target="_blank" rel='noreferrer'><img src={row.img} alt="" /></a>
                      <p>{row.name}</p>
                    </div>

                  )
                })
              }
            </section>
          </footer>
          <div className="border-line"></div>


        <img src={require("./images/palette_img.png" )} alt="palette-img" className="palette-icon" />
        </article>


      </div>
  </>
  );
}


export default App;
