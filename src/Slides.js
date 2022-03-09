import React,{useState} from 'react'


const data = [
    {
        id: "profile_info",
        text: `Nacido en Cordoba en 1999. Estudié Diseño Industrial en la facultad Nacional donde expertimenté con el diseño
         digital, y conocí la relacion usuario-producto UI UX. A mi tercer año hice un cambio hacia la programacion.`,
        img: require('./images/profile-pic.png'),
    },
    {
        id: "studies_info",
        text: `Pasando por Arduino y C++, Django, ioT; con multiples proyectos, cursos y estudios autodidactas de por medio, y terminando
         decidiendo por diseño UX y FrontEnd. Especificamente con JS y React como libreria.`,
        img: require("./images/bg1_desktop.png"),
    },
    {
        id: "asd",
        text: `En mis diseños y codigos busco la efectividad y una estética acorde al proyecto, priorizando 
        la impotancia en el usuario y su relacion con la aplicacion; y un buen balance en lo estetico, teorico y como aplicarlo al usuario.`,
        img: require("./images/bg2_desktop.png"),
    },
]






const Slides = () => {

    const [index, setIndex] = useState(0)
    const {id,text, img} = data[index];



    const nextImg = () =>{
        index< data.length -1 ? setIndex(index+1) : setIndex(0);
    }
    const prevImg = () =>{
        index>0 ? setIndex(index-1) : setIndex(2);
    }
    

  return (
    <>
    <div className="btn-container">
        <button onClick={prevImg}><i class="fa-solid fa-angle-left"></i></button>
        <button onClick={nextImg}><i class="fa-solid fa-angle-right"></i></button>
    </div>
    <p className="about-text">{text}</p>
    <div className="img-container" >
        <img src={img} alt={id} />
        <span className="img-border"></span>
    </div>
    </>
  )
}

export default Slides