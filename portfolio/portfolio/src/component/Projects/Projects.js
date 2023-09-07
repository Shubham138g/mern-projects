import React,{useEffect} from 'react';
import '../Projects/project.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <div id='projects' className='bg-dark w-100 projects'>
            <div className="container">
                <h3 className='px-5 pt-5 '>03. <span>My Projects</span></h3>
                <div class="row row-cols-1 row-cols-md-3 g-4 p-5 text-center">
                    <div class="col">
                        <div class="card" data-aos='fade-right'>
                            <img src="./images/job.avif" class="card-img-top project_img" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Job Portal</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button className=' bg-transparent'>Load more...</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" data-aos='zoom-in'>
                            <img src="./images/todo.avif" class="card-img-top project_img" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">ToDO List</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button className=' bg-transparent'>Load more...</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" data-aos='fade-left'>
                            <img src="./images/todol.avif" class="card-img-top project_img" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Google Keep</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <button className=' bg-transparent'>Load more...</button>
                            </div>
                        </div>
                    </div>
                  

                </div>

            </div>

        </div>
    );
}

export default Projects;
