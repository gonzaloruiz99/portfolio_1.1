import React,{useState} from 'react'


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




const Form = () => {

    const [form, setForm] = useState(false);
    
    const [userData, setUserData] = useState({name:"", mail:"", msg:""});
    

    const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData, [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(userData.name&&userData.mail&&userData.msg){
        
        console.log(userData);
        // saveContactInfo(userData);
        // sendEmail(userData)
        
        }
    }

    const sendEmail = (emailData) => {
        const {name, mail, msg} = emailData; 

        window.Email.send({
            Host : "smtp.yourisp.com",
            Username : "@gmail.com",
            Password : "",
            To : '@gmail.com',
            From : "@gmail.com",
            Subject : `${name} from your Portfolio Form`,
            Body : `Name:${name} <br/> Email: ${mail} <br/>
                    message: ${msg}`
        }).then(
        message => alert("Mail enviado exitosamente")
        );
    }




  return (
    <footer >
            <div className="block-space">

              <div className={`white-block ${form && "white-block_form"}`}>
                {
                  form && <form method="POST" >
                    <button type='reset' className='close-form_btn' >
                        <i className="fa-solid fa-xmark" onClick={() => setForm(false)} ></i>
                    </button>
                    <label htmlFor="name">Nombre / Empresa</label>
                    <input type="text" name='name' onChange={handleChange}/>

                    <label htmlFor="email">E-mail</label>
                    <input type="email" name='email' onChange={handleChange}/>

                    <label htmlFor="msg" >Mensaje</label>
                    <textarea name="msg" id="form_msg" cols="30" rows="5" onChange={handleChange}></textarea>
                    <button onSubmit={handleSubmit} type='submit' className='form-submit_btn'>Enviar</button>
                </form>
                }
                
                
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
  )
}

export default Form