import './App.css';
import React, { useState } from 'react';
import ReservasHome from './components/ReservasHome';
import unicaribe_logo from './Unicaribe Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { EmailContext } from './components/context/EmailContext';
import { UidContext } from './components/context/UidContext';


function App() {  
  const [hide, sethide] = useState(true);
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("El correo debe incluir los sufijos @ y .com. ¡Intente de nuevo!");
  const [uid, setUid] = useState();

  const validateForm = (event) => {
    event.preventDefault();
    const input1 = document.querySelector("#input1");
    const status = document.querySelector(".status");

    let validation = "Por favor complete el formulario";
    setEmail("El correo debe incluir los sufijos @ y .com. ¡Intente de nuevo!"); 

    if(!input1.value) {
      status.classList.add("active");
      status.innerHTML = `${validation}`;
    }else{
      emailValidate();
    }
    function emailValidate() { 
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if(!input1.value.match(pattern)){
          status.classList.add("active");
          status.innerHTML = `${email}`;
      }else{
          status.classList.remove("active");
          input1.classList.add("valid");
      }
    }
    if(input1.classList.contains("valid")){
      setTimeout(() => {
        let container = document.querySelector(".container");
        let wrapper = document.querySelector(".wrapper");
        sethide(!hide + wrapper.classList.add("hide"));
        setShow(!show + container.classList.add("show"));

        setEmail(input1.value);
        setUid(new Date().getTime());

      }, 1000);
    }
  }

    const handleMail = () => {
        const input1 = document.querySelector("#input1");
        const status = document.querySelector(".status");
        let validation = "Por favor complete el formulario";
    if(!input1.value) {
        status.classList.add("active");
        status.innerHTML = `${validation}`;
    }else{
        emailValidate();  
    }
    function emailValidate() { 
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!input1.value.match(pattern)){
          status.classList.add("active");
          status.innerHTML = `${email}`;
      }else{
          status.classList.remove("active");
          setEmail(input1.value)
      }
    }
    }

    return (
      <EmailContext.Provider value={{email, setEmail}}>
        <UidContext.Provider value={{uid, setUid}}>

          <div className="App">
            <ReservasHome />
            <div className="wrapper">
              <div className="content">
                <div className="logo">
                  <img src={unicaribe_logo} alt="" />
                </div>
                <div className="c1">
                  <span>¡Hospédate en uno de los hoteles de Reservas Hoteleras del Caribe ahora!</span>
                </div>
                <div className="form">
                  <div className="status"></div>
                  <form action="#" onSubmit={validateForm}>
                    <div className="eInput">
                    <FontAwesomeIcon className='icon' icon={faUser} />
                      <input id='input1' type="text" placeholder='Dirección de correo electrónico en la que desea ser contactado' onSubmit={handleMail}/>
                    </div>
                    <div className="submit">
                      <button type="submit">Entrar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        
        </UidContext.Provider>
      </EmailContext.Provider>
    );
}

export default App;