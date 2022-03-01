import React,{useEffect} from 'react'




const JSprojects = [
  {
    id: 1,
    name:"",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
  },
  {
    id: 2,
    name:"",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
  },
  {
    id: 3,
    name:"",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
  },
  
]
const Reactprojects = [

  {
    id: 4,
    name:"",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
  },
  {
    id: 5,
    name:"",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
  },
  {
    id: 6,
    name:"",
    text: "Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Ipsam, aliquam?",
  },
  
]

function App() {


  useEffect(() => {
    document.title = `HOME |GonzaloRuizPortfolio`;
  },[]);


  return (
    <>
      <div className="container">
        <article class="screen page1">
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
          <h1 className="title">About <span>  Me</span></h1>
          
          <div className="info-container">
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Labore quae voluptate repudiandae fugiat unde, odio quia explicabo necessitatibus. Esse, sit?
            Labore quae voluptate repudiandae fugiat unde, odio quia explicabo necessitatibus. Esse, sit?
            Labore quae voluptate repudiandae fugiat unde, odio quia explicabo necessitatibus. Esse, sit?
            Labore quae voluptate repudiandae fugiat unde, odio quia explicabo necessitatibus.
            Labore quae voluptate repudiandae fugiat unde, odio quia explicabo.
            </p>
            <div className="img-container">
              <img src={require("./images/profile-pic.png")} alt="profile-img" />
              <span className="img-border"></span>
            </div>
          </div>
          <div className="yellow_block1"></div>
        </article>



        
        <article className="screen page3">
          <div className="green-block"></div>
          <h1 className="title">Proyectos</h1>
          <div className="projects Reactprojects">
            {JSprojects.map((item)=>{
              const {id,name,text} = item;

              return <div className="project " key={id}>
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
            })}
          </div>
          <div className="projects JSprojects">
            {Reactprojects.map((item)=>{
              const {id,name,text} = item;

              return <div className="project" key={id}>
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
            })}
          </div>


          <div className="green-line"></div>
        </article>
        <article className="screen page4">
          <div className="gray-line"></div>
          <h1 className="title">Contacto</h1>
          <img src="./images/palette_img.svg" alt="pallete-img" className="palette-icon" />
        </article>


      </div>
  </>
  );
}

export default App;
