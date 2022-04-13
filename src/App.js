import React,{useEffect, useState} from 'react'
import Slides from './Slides';
import Navbar from './Navbar';
import Keypad from './Keypad';
import ProjectsSlides from './ProjectsSlides';





import WsspIcon from "./images/whatsapp_logo.svg"
import LinkedIcon from "./images/linkedIn_logo.svg"
import MailIcon from "./images/email_logo.svg"
import GithubIcon from "./images/github_logo.svg"


const footerData = [
  {
    id: "whatsapp_info",
    img: WsspIcon,
    name:"351-153301766",
    link: "https://wa.me/5493513301766",
  },
  // {
  //   id: "email_info",
  //   img: MailIcon,
  //   name:"gonzaruiz9191@gmail.com",
  //   link: "#",
  // },

  {
    id: "linkedIn_info",
    img: LinkedIcon,
    name:"LinkedIn.com/gonzalo-ruiz/",
    link: "https://www.linkedin.com/in/gonzalo-ruiz-214167234/",
  },
  {
    id: "github_info",
    img: GithubIcon,
    name:"github.com/gonzaloruiz9191/",
    link: "https://github.com/gonzaloruiz99",
  },
]


const JSprojects = [
  {
    id: "JSproject_RmHp,",
    name:"Room Homepage",
    img:require("./apps_images/roomHomepage_img.png"),
    link: "https://gonzaloruiz99.github.io/JS-projects/RoomHomepage/",
    github: "https://github.com/gonzaloruiz99/JS-projects",

  },
  {
    id: "JSproject_FdBg,",
    name:"Fixed Background",
    img: require("./apps_images/fixedBackground_img.png"),
    link: "https://gonzaloruiz99.github.io/JS-projects/FixedBackground/",
    github: "https://github.com/gonzaloruiz99/JS-projects",

  },
  {
    id: "JSproject_LhCd,",
    name:"Launch Countdown",
    img: require("./apps_images/countDown_img.png"),
    link: "https://gonzaloruiz99.github.io/JS-projects/Countdown/",
    github: "https://github.com/gonzaloruiz99/JS-projects",

  },
  {
    id: "JSproject_3dP",
    name:"3D Portfolio",
    img:require("./apps_images/3dPortfolio_img.png"),
    link: "https://gonzaloruiz99.github.io/JS-projects/3dPortfolio/",
    github: "https://github.com/gonzaloruiz99/JS-projects",

  },
  {
    id: "JSproject_prTs,",
    name:"Pricing tables",
    img: require("./apps_images/pricingTables_img.png"),
    link: "https://gonzaloruiz99.github.io/JS-projects/PricingTables/",
    github: "https://github.com/gonzaloruiz99/JS-projects",
  },
  {
    id: "JSproject_ECe,",
    name:"E-Commerce",
    img: require("./apps_images/eCommerce_img.png"),
    link: "https://gonzaloruiz99.github.io/JS-projects/Ecommerce/",
    github: "https://github.com/gonzaloruiz99/JS-projects",

  },
  
  
]
const Reactprojects = [

  {
    id: "Reactproject_RPS",
    name:"rock,paper,scissor",
    img:require("./apps_images/rockpaper_img.png"),
    link: "https://gonzaloruiz99.github.io/react-projects/#/Rockpaper",
    github: "https://github.com/gonzaloruiz99/react-projects",

  },
  {
    id: "Reactproject_TTT",
    name:"TicTacToe",
    img:require("./apps_images/tictactoe_img.png"),
    link: "https://gonzaloruiz99.github.io/react-projects/#/Tictactoe",
    github: "https://github.com/gonzaloruiz99/react-projects",

  },
  {
    id: "Reactproject_TDA",
    name:"ToDo App",
    img:require("./apps_images/todo_img.png"),
    link: "https://gonzaloruiz99.github.io/react-projects/#/Todoapp",
    github: "https://github.com/gonzaloruiz99/react-projects",

  },
  {
    id: "Reactproject_BM",
    name:"Bookmark",
    img:require("./apps_images/bookmark_img.png"),
    link: "https://gonzaloruiz99.github.io/react-projects/#/Bookmark",
    github: "https://github.com/gonzaloruiz99/react-projects",

  },
  {
    id: "Reactproject_CsApi",
    name:"Countries API",
    img:require("./apps_images/countries_img.png"),
    link: "https://gonzaloruiz99.github.io/react-projects/#/Countries",
    github: "https://github.com/gonzaloruiz99/react-projects",

  },
  {
    id: "Reactproject_MuAp",
    name:"Menu App",
    img:require("./apps_images/menu_img.png"),
    link: "https://gonzaloruiz99.github.io/react-projects/#/Menu",
    github: "https://github.com/gonzaloruiz99/react-projects",

  },
  {
    id: "Reactproject_SnLs",
    name:"Shorten Links",
    img:require("./apps_images/shorter_img.png"),
    link: "https://gonzaloruiz99.github.io/react-projects/#/Shorten",
    github: "https://github.com/gonzaloruiz99/react-projects",

  },
  
]


function App() {
  const [form, setForm] = useState(false);

  useEffect(() => {
    document.title = `HOME |GonzaloRuizPortfolio`;
  },[]);



  return (
    <>
      <Navbar></Navbar>
      <div className="main-container">
        <article className="screen page1" id='page1'>


          <div className="salute">
            <p>Hola!, soy</p>
            <div className="wrapper">
              <h1 className="title name_title"><span>Gonzalo</span> Ruiz</h1>
            </div>
            <p>Diseñador, programador web, y entusiasta a aprender y resolver proyectos y desafios.</p> 
          </div>
          <a className="link_to_projects" href='#page3' >
            <div className="border-left"></div>
            <div className="border-bottom"></div>
            <h3>Mira algunos proyectos!</h3>
          </a>

          <div className="blocks-container">
            <div className="redblock1 block"></div>
            <div className="redblock2 block"></div>
          </div>
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

          <div className="green-block block"></div>
          <h1 className="title">Proyectos</h1>
          <ProjectsSlides data={JSprojects} Cards={"JSCards"}></ProjectsSlides>
          <ProjectsSlides data={Reactprojects} Cards={"ReactCards"}></ProjectsSlides>

          <div className="green-line block"></div>
        </article>

        
        <article className="screen page4" id='page4'>
          <Keypad></Keypad>

          <div className="gray-line block"></div>
          <h1 className="title">Contacto</h1>

          
          <footer >
            <div className="block-space">

              <div className="white-block ">
              </div>
            </div>

            <section className="footer-table">
              {
                footerData.map((row)=>{
                  return (
                    <div className="table-row" key={row.id} >
                      <a href={row.link} target="_blank" rel='noreferrer'><img src={row.img} alt={row.id} /></a>
                      <p>{row.name}</p>
                    </div>

                  )
                })
              }
              <div className="table-row" key="email_info" >
                <button onClick={() => setForm(!form)}><img src={MailIcon} alt="email_info" /></button>
                <p>gonzaruiz9191@gmail.com</p>
              </div>
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
