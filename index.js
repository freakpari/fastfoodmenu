import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
const pizzaData = [
    {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "https://i.ibb.co/JzR9bqt/focaccia.jpg",
    soldOut: false,
    },
    {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "https://i.ibb.co/JyR9L8P/margherita.jpg",
    soldOut: false,
    },
    {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "https://i.ibb.co/YP3L2HY/spinaci.jpg",
    soldOut: false,
    },
    {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "https://i.ibb.co/7WXYjgv/funghi.jpg",
    soldOut: false,
    },
    {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "https://i.ibb.co/p3rQD7H/salamino.jpg",
    soldOut: true,
    },
    {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "https://i.ibb.co/Y0CZgW6/prosciutto.jpg",
    soldOut: false,
    },
];
function App() {
return (
<div className='container'>
<Header />
<Menu />
<Footer />
</div>
);
}
function Header() {
    const style = {};
    return (
    <header className="header footer">
    <h1 style={style}>Night Star Fast Food</h1>
    </header>
    );
}
function Menu() {
    return(
    <main className='menu'>
        <h2>Our Menu</h2>
        <Pizza 
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pic\spinaci.jpg"
        price={10}
        />
        <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pic\focaccia.jpg"
        price={13}
/>
<Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="pic\margherita.jpg"
        price={10}
/> 
{/* <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pic\funghi.jpg"
        price={8}
/>
<Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pic\salamino.jpg"
        price={15}
/>
<Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pic\prosciutto.jpg"
        price={18}
/> */}
    </main>
    );
}
function Pizza(props) {
    return (
    <div className='pizza'>
    <img src={props.photoName}  alt={props.name}/>
    <h3>{props.name}</h3>  
    <p>{props.ingredients}</p>
    <span>{props.price}</span>
    </div>
    );
}
function Footer() {
    const Hour = new Date().getHours;
    const OpenHour=12;
    const CloseHour=22;
    const isOpen=Hour >= OpenHour && Hour <= CloseHour;
    console.log(isOpen);
    return(
        <footer className='footer'>
        {new Date().toLocaleTimeString()}. "we are currently open!"</footer>);
}
const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
<App />
</React.StrictMode>
)
