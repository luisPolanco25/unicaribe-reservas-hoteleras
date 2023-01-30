import  './ReservasHome.css';
import BookPage from './Reservar';
import { useState, useContext } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { EmailContext } from './context/EmailContext';
import { UidContext } from './context/UidContext';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCrvVW8aejGo1opN7h798t_pfkIaTczDVw",
  authDomain: "reserva-hotelera-ca14c.firebaseapp.com",
  projectId: "reserva-hotelera-ca14c",
  storageBucket: "reserva-hotelera-ca14c.appspot.com",
  messagingSenderId: "896752323961",
  appId: "1:896752323961:web:24fcf019b672f3b03633a8"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

const ReservasHome = () => {
    const [valid, setvalid] = useState(true)
    const [hide, sethide] = useState(true)
    
    const {email} = useContext(EmailContext);
    const {uid} = useContext(UidContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const book_date = document.getElementById('book-date');
        const book_time = document.getElementById('book-time');
        
        const leave_date = document.getElementById('leave-date');
        const leave_time = document.getElementById('leave-time');

        if(!book_date.value || !book_time.value || !leave_date.value || !leave_time.value){
            alert('Por favor complete todos los campos del formulario');
        }else{
            writeUserData();
        function writeUserData() {
            const db = getDatabase();
            push(ref(db, `${uid}/booking/`), {
              _email: email,
              bookingdate: book_date.value,
              bookingtime: book_time.value,
              leave_date: leave_date.value,
              leave_time: leave_time.value,
            });
        }
            alert('Reserva realizada');
            const BookPageDiv = document.querySelector('.box');
            const container = document.querySelector('.container');
            setvalid(!valid + BookPageDiv.classList.add("show"));
            sethide(!hide + container.classList.add("hide"));
        }
    }
  return (
      <>
        <BookPage />
        <div className="container">
      <div className="content">
        <div className="text">Reserve ahora</div>
        <div className="form2">
          <div className="txt">Día y hora de su estadía</div>
          <form action="" onSubmit={handleSubmit}>
            <div className="inputData">
              <input type="date" name="" id="book-date"/>
            </div>
            <div className="inputData">
              <input type="time" name="" id="book-time" />
            </div>
            <div className="txt">Día y hora de su partida</div>
            <div className="inputData">
              <input type="date" name="" id="leave-date" />
            </div>
            <div className="inputData">
              <input type="time" name="" id="leave-time" />
            </div>
            <div className="book">
                <button type="submit">Reservar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
      </>
  );
};
export default ReservasHome;