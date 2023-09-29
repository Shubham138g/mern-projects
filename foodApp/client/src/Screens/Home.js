import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import Carousel from '../Components/Carousel';

const Home = () => {

    const [foodCat, setfoodCat] = useState([]);
    const [foodItem, setfoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:4000/api/foodData", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            }
        });

        response = await response.json();
        setfoodItem(response[0]);
        setfoodCat(response[1]);
        // console.log(response[0], response[1]);
    }

    useEffect(() => {
        loadData();
    }, [])







    return (
        <>
            <div><NavBar /> </div>
            <div><Carousel /></div>
            <div className='container'>
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (
                                <div>hello world</div>
                            )
                        })
                        :
                        <div>''''''''''''''''''''''''''''</div>
                }
                <Card />
            </div>
            <div><Footer /></div>

        </>
    );
}

export default Home;
