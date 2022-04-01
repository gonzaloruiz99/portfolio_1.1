import React,{useState, useRef} from 'react'




const ProjectsSlides = (props) => {
    const [isPressedDown, setIsPressedDown] = useState(false);
    const [cursorXSpace, setCursorXSpace] = useState("");

    const Cards = useRef(null)
    const projectsContainer = useRef(null);

    const handleOnMouseDown = (e) => {
        setIsPressedDown(true);
        setCursorXSpace (e.clientX - Cards.current.offsetLeft);
    }

    window.addEventListener('mouseup', () => {
        setIsPressedDown(false);
    })

    const handleOnMouseMove = (e) => {
        if(!isPressedDown) return;
        e.preventDefault();
        Cards.current.style.left = `${e.clientX - cursorXSpace}px`;
        boundCards();
    }



    const boundCards = () => {
        const container_rect = projectsContainer.current.getBoundingClientRect();
        const cards_rect = Cards.current.getBoundingClientRect();

        if( parseInt(Cards.current.style.left) > 0){
        Cards.current.style.left = 0;
        }else if( cards_rect.right < container_rect.right){
        Cards.current.style.left = `-${cards_rect.width - container_rect.width}px`
        }
    }


  return (
    /*msj en timeout de dobleclick https://css-tricks.com/long-hover/ */
    <div className="projectsContainer" ref={projectsContainer}
    onMouseDown={(e) => handleOnMouseDown(e)}
    onMouseMove={(e) => handleOnMouseMove(e)}
    > 
        <div className="projects Reactprojects" ref={Cards}>
            {props.data.map((item)=>{
                const {id,name,img,link} = item;

                return <div className="project " key={id}>
                    <h3>{name}</h3>
                    {/* <a href={link} target="_blank" rel="noreferrer"><img src={img} alt={name}/> </a> */}
                   <img src={img} alt={name} onDoubleClick={() => window.open(link)}/>
                    
                </div>
            })}
        </div>
    </div>
  )
}

export default ProjectsSlides