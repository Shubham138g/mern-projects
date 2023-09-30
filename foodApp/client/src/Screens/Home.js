import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';


const Home = () => {

    const [search, setSearch] = useState('');
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
            <div>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                    <div class="carousel-inner" id='carousel'>
                        <div className='carousel-caption' style={{ zIndex: "10" }}>
                            <div class="d-flex justify-content-center">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                                {/* <button class="btn btn-outline-success text-white bg-primary" type="submit">Search</button> */}
                            </div>
                        </div>

                        <div class="carousel-item active">
                            <img src="https://source.unsplash.com/random/900x700/?burger" class="d-block w-100" style={{ filter: "brightness(60%)" }} alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?pizza" class="d-block w-100" style={{ filter: "brightness(60%)" }} alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?juice" class="d-block w-100" style={{ filter: "brightness(60%)" }} alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='container'>
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (
                                <div className='row mb-3 '>
                                    <div key={data._id} className='m-3 fs-3'>
                                        {data.CategoryName}
                                    </div>
                                    <hr />
                                    {foodItem !== []
                                        ?
                                        foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                            .map(filterItems => {
                                                return (
                                                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                        <Card foodItem={filterItems}
                                                            options={filterItems.options[0]}
                                                            
                                                        ></Card>

                                                    </div>
                                                )
                                            })
                                        : <div>No Such Data Found</div>

                                    }
                                </div>
                            )
                        })
                        :
                        ""
                }
        
            </div>
            <div><Footer /></div>

        </>
    );
}

export default Home;
