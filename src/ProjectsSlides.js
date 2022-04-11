import React,{useState, useRef} from 'react'




const ProjectsSlides = (props) => {
    const [isPressedDown, setIsPressedDown] = useState(false);
    const [cursorXSpace, setCursorXSpace] = useState("");

    const Cards = useRef(null)
    const projectsContainer = useRef(null);


    /*PC listeners*/
    const handleOnMouseDown = (e) => { //Detects click&hold on project and Sets the x,y of the Cursor
        setIsPressedDown(true);
        setCursorXSpace (e.clientX - Cards.current.offsetLeft);
    }

    const handleOnMouseMove = (e) => { // Detects movement on the X axis and changes the style.Left of the Cards Container
        if(!isPressedDown) return;
        e.preventDefault();
        Cards.current.style.left = `${e.clientX - cursorXSpace}px`;
        boundCards();
    }

    window.addEventListener('mouseup', () => { // Ends up the interaction with the projectsSlide.
        setIsPressedDown(false);
    })



    /*Mobile listeners*/
    const handleOnTouchStart = (e) => {
        setIsPressedDown(true);
        setCursorXSpace (e.touches[0].clientX - Cards.current.offsetLeft);
    }

    const handleOnTouchMove = (e) => {
        if(!isPressedDown) return;
        Cards.current.style.left = `${e.touches[0].clientX - cursorXSpace}px`;
        boundCards();
    }

    window.addEventListener('touchend ', () => {
        setIsPressedDown(false);
    })


    const boundCards = () => { //Limits the CardContainer between it and its parent container
        const container_rect = projectsContainer.current.getBoundingClientRect();
        const cards_rect = Cards.current.getBoundingClientRect();

        if( parseInt(Cards.current.style.left) > 0){
        Cards.current.style.left = 0;
        }else if( cards_rect.right < container_rect.right){
        Cards.current.style.left = `-${cards_rect.width - container_rect.width}px`
        }
    }


  return (
    <div className="projectsContainer" ref={projectsContainer}
    onMouseDown={(e) => handleOnMouseDown(e) }
    onMouseMove={(e) => handleOnMouseMove(e)}
    onTouchStart={(e) => handleOnTouchStart(e) }
    onTouchMove={(e) => handleOnTouchMove(e)}
    
    > 
        <div className="projects" ref={Cards}>
            {props.data.map((item)=>{
                const {id,name,img,link, github} = item;

                return <div className="project " key={id}>
                    <h3>{name}</h3>
                   <img src={img} alt={name} />
                   <div className="project_links"> 
                       <a href={link} target="_blank" rel="noreferrer"><i class="fa-solid fa-eye"></i> Preview</a>
                       <a href={github} target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i> Github</a>
                   </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default ProjectsSlides