import React, { useEffect } from 'react';
import '../about/about.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <div id='about' className=' about bg-dark w-100'>
            <div className="container">
                <div className='row wrapper'>
                    <div className='about_txt col-12 col-md-6 col-lg-6 px-5' data-aos='fade-right'>
                        <h3><span>01. </span>About me</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure sed quisquam modi quibusdam corporis
                            facilis asperiores, doloremque quo accusamus atque, quidem facere. At similique, ex amet laudantium,
                            ratione con dolores modi magni consequuntur. Odio repellat doloribus fugit temporibus amet minus,
                            itaque repudiandae expedita vitae!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure sed quisquam modi quibusdam corporis
                            facilis asperiores, doloremque quo accusamus atque, quidem facere. At similique, ex amet laudantium,
                            dolores modi magni consequuntur. Odio repellat doloribus fugit titaque repudiandae expedita vitae!</p>

                        <div className="row technology">
                            <div className="col-6">
                                <p><span>➩</span>React JS</p>
                                <p><span>➩</span>Expree JS</p>
                                <p><span>➩</span>Node JS</p>
                            </div>
                            <div className="col-6">
                                <p><span>➩</span>Bootstrap</p>
                                <p><span>➩</span>HTML</p>
                                <p><span>➩</span>CSS</p>
                            </div>
                        </div>
                    </div>
                    <div className='about_img col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center' data-aos='fade-left'>
                        <img src='/images/about2.svg' alt="no_image" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;
