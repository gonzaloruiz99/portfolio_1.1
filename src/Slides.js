import React,{useEffect, useState} from 'react'

import StudyImg from "./images/studies-pic.svg"
import AttImg from "./images/attributes-pic.svg"

const data = [
    {
        id: "profile_info",
        text: `Nacido en Cordoba en 1999. Estudié Diseño Industrial en la facultad Nacional donde expertimenté con el diseño
         digital, y conocí la relacion usuario-producto UI UX. A mi tercer año hice un cambio hacia la programacion.`,
        img: require('./images/profile-pic.png'),
    },
    {
        id: "studies_info",
        text: `Tengo facilidad en adquirir nuevas tecnicas y conocimientos, al haber aprendido mayormente de manera 
        auto-didacta; con conocimientos basicos en Django, Arduino, C++, ioT, y especializandome en diseño UX y FrontEnd con JS y React.`,
        img: StudyImg,
    },
    {
        id: "attributes_info",
        text: `En mis diseños y codigos busco la efectividad y una estética acorde al proyecto, priorizando la 
        impotancia en el usuario y su relacion con la aplicación; trabajando de manera ordenada para futuro uso o mejoras.`,
        img: AttImg,
    },
]



const Slides = () => {

    const [index, setIndex] = useState(0)
    const {id,text, img} = data[index];


    const [anim, setAnim] = useState("") //Activates the animations toggling between two animations, which re-renders the component



    const nextImg = () =>{
        anim === "about-animated"? setAnim("about-animated2") : setAnim("about-animated")
        index< data.length -1 ? setIndex(index+1) : setIndex(0);
    }
    const prevImg = () =>{
        anim === "about-animated"? setAnim("about-animated2") : setAnim("about-animated")
        index>0 ? setIndex(index-1) : setIndex(2);
    }
    

  return (
    <>
    <div className="btn-container">
        <button onClick={prevImg}><i className="fa-solid fa-angle-left"></i></button>
        <button onClick={nextImg}><i className="fa-solid fa-angle-right"></i></button>
    </div>
    <p className="about-text">{text}</p>
    <div className={`img-container block ${anim}`} >
        <img src={img} alt={id} />
    </div>
    </>
  )
}


export default Slides