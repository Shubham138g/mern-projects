import React from 'react';

const About = () => {
    return (
        <div className=' abour bg-dark w-100 vh-100'>
            <div className='row'>
                <div className='about_txt'>
                    <h3><span>01. </span>About me</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure sed quisquam modi quibusdam corporis
                        facilis asperiores, doloremque quo accusamus atque, quidem facere. At similique, ex amet laudantium,
                        ratione con dolores modi magni consequuntur. Odio repellat doloribus fugit temporibus amet minus,
                        itaque repudiandae expedita vitae!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure sed quisquam modi quibusdam corporis
                        facilis asperiores, doloremque quo accusamus atque, quidem facere. At similique, ex amet laudantium,
                        dolores modi magni consequuntur. Odio repellat doloribus fugit titaque repudiandae expedita vitae!</p>
                </div>
                <div className="row">
                    <div className="col-6">
                        <p><span>*</span>React JS</p>
                        <p><span>*</span>Expree JS</p>
                        <p><span>*</span>Node JS</p>
                    </div>
                    <div className="col-6">
                        <p><span>*</span>Bootstrap</p>
                        <p><span>*</span>HTML</p>
                        <p><span>*</span>CSS</p>
                    </div>
                </div>
                <div className='about_img'>
                    <img src='./images/about.svg' alt="no_image" />
                </div>
            </div>

        </div>
    );
}

export default About;
