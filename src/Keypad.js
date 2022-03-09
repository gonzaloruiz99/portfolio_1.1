import React from 'react'







const Keypad = () => {
  return (
    <div className="four-buttons">
            <button className="page-btn"></button>
            <button className="page-btn"></button>
            <button className="page-btn"></button>
            <button className="page-btn"></button>
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