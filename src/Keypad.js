import React,{useState, useEffect} from 'react'



  //move to next/previous using the keyboards

/*
const pageHeight = aPage.scrollHeight;


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > pageHeight-10 || document.documentElement.scrollTop > pageHeight-10) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}
*/


let num = 1;

function topFunction(page) {
    
    if(num>1){num = num-1};
    // document.querySelector(`.page${num.toString()}`).scrollIntoView({ 
      document.querySelector(page).scrollIntoView({ 
        behavior: 'smooth' 
    });
    console.log(num);

 }


function downFunction(page) {
    
    if(num<4){num = num+1};
    document.querySelector(page).scrollIntoView({ 
        behavior: 'smooth' 
    });
    console.log(num);

}






/* ----------- Scroll trackking ----------- */


/*
IDEA: hacer un array con todas las paginas, donde con las flechas, avances el array, pero si te moves a una, un useSTate cambie a la pagina en
la que estes


*/


const ScrollingElement = () => {

  var height = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                       document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  let position = "position";


  if(scrollY <= height/4){
    position = "first page";
  }else if((scrollY > height/4) && (scrollY<= height/2)){
    position = "second page";
  }else if((scrollY > height/2) && (scrollY<= height/4*3)){
    position = "third page";
  }else if(scrollY > height/4*3){
    position = "last page";
  }

  return (
    <div className="Appp">
      <div className="fixed-center">Scroll position: {position}</div>
    </div>
  );
};

  /* ----------- Scroll trackking ----------- */






const Keypad = () => {
  const pages = ["page1","page2","page3","page4"];
  const [selectedPage,setSelectedPage] = useState(0);
  
  window.addEventListener('keydown', (event) =>{
      switch(event.key){
          case 'ArrowUp': event.preventDefault();topFunction(pages[selectedPage]);setSelectedPage(selectedPage-1); break;
          case 'ArrowDown': event.preventDefault();downFunction(pages[selectedPage]);setSelectedPage(selectedPage+1); break;
          default: break;
      }
  })



  return (
    <div className="four-buttons">     
            <a href="#page1" className='page-btn'><button></button></a>
            <a href="#page2" className='page-btn'><button></button></a>
            <a href="#page3" className='page-btn'><button></button></a>
            <a href="#page4" className='page-btn'><button></button></a>
            

    </div>
  )
}

export default Keypad



/*
const style_four_buttons = {
  position: "absolute",
  right: 0,
  top: "45vh",
  display: "flex",
  flexDirection: "column",
  zIndex:10,
}


const style_page_btn = {
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  margin: "4px 30px",
  backgroundColor: "#181c1d",
}


div className="four-buttons" style={style_four_buttons}>
            <button className="page-btn" style={style_page_btn}></button>
            <button className="page-btn" style={style_page_btn}></button>
            <button className="page-btn" style={style_page_btn}></button>
            <button className="page-btn" style={style_page_btn}></button>
    </div>


*/