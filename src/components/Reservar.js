import { useContext } from 'react';
import './Reservar.css'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
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

const Reservar = () => {
    
    const {uid} = useContext(UidContext);
    
    let Hotels = [
        {
            name: "Hotel 1",
            price: "1,500.00",
            image: "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },

        {
            name: "Hotel 2",
            price: "2,225.00",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name: "Hotel 3",
            price: "3,150.00",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name: "Hotel 4",
            price: "4,800.00",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ]

    const reservarHotel1 = (event) => {
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[0].image;
        imageTarget.style.display = "block";
        nameTarget.innerHTML = Hotels[0].name;
        priceTarget.innerHTML = '$' + Hotels[0].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, `${uid}/booking/hotel/`), {
            HotelImage: Hotels[0].image,
            HotelName: Hotels[0].name,
            HotelPrice: '$' + Hotels[0].price,
            });
        }

    }
    const reservarHotel2 = (event) => {
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[1].image;
        imageTarget.style.display = "block";
        nameTarget.innerHTML = Hotels[1].name;
        priceTarget.innerHTML = '$' + Hotels[1].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, `${uid}/booking/hotel/`), {
            HotelImage: Hotels[1].image,
            HotelName: Hotels[1].name,
            HotelPrice: '$' + Hotels[1].price,
            });
        }
    }
    const reservarHotel3 = (event) => {
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[2].image;
        imageTarget.style.display = "block";
        nameTarget.innerHTML = Hotels[2].name;
        priceTarget.innerHTML = '$' + Hotels[2].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, `${uid}/booking/hotel/`), {
            HotelImage: Hotels[2].image,
            HotelName: Hotels[2].name,
            HotelPrice: '$' + Hotels[2].price,
            });
        }
    }
    const reservarHotel4 = (event) => {
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Hotels[3].image;
        imageTarget.style.display = "block";
        nameTarget.innerHTML = Hotels[3].name;
        priceTarget.innerHTML = '$' + Hotels[3].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, `${uid}/booking/hotel/`), {
            HotelImage: Hotels[3].image,
            HotelName: Hotels[3].name,
            HotelPrice: '$' + Hotels[3].price,
            });
        }
    }
    const request = (event) => {
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const request = document.querySelector(".request");
        const cards = document.querySelector(".cards_box");
        request.style.display = "none";
        cards.style.display = "block";
        alert("Su solicitud ha sido enviada. Será contactado por uno de nuestros representantes.");
        
        imageTarget.src = '';
        imageTarget.style.display = "none";
        nameTarget.innerHTML = '';
        priceTarget.innerHTML = '';

    }
    return (
        <div className="box">
            <div className="content">
                <div className="text">Elija el hotel de su preferencia</div>
                <div className="target">
                    <div className="trgt">
                    <div className="card">
                        <img src="" id='targetImage' style={{display:'none'}} alt="" />
                         <div className="hotel_name" id='targetName'></div>
                        <div className="price" id='targetPrice'></div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards_box">
                        <div className="card" onClick={reservarHotel1}>
                            <img src={Hotels[0].image} alt="hotel1" />
                            <div className="hotel_name">{Hotels[0].name}</div>
                            <div className="price">{'Precio por día: $' + Hotels[0].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={reservarHotel2}>
                            <img src={Hotels[1].image} alt="hotel2" />
                            <div className="hotel_name">{Hotels[1].name}</div>
                            <div className="price">{'Precio por día: $' + Hotels[1].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={reservarHotel3}>
                            <img src={Hotels[2].image} alt="hotel3" />
                            <div className="hotel_name">{Hotels[2].name}</div>
                            <div className="price">{'Precio por día: $' + Hotels[2].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={reservarHotel4}>
                            <img src={Hotels[3].image} alt="hotel4" />
                            <div className="hotel_name">{Hotels[3].name}</div>
                            <div className="price">{'Precio por día: $' + Hotels[3].price}</div>
                        </div>
                    </div>
                    <div className="request">
                        <button className="btn" onClick={request}>Reservar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reservar;