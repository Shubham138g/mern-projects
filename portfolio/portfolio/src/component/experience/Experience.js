import React,{useEffect} from 'react';
import 'bootstrap/js/dist/tab';
import '../experience/experience.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <>
            <div id='experience' className=' d-flex experience flex-column justify-content-center w-100 vh-100 align-items-center bg-dark '>
                <div className='w-50 text-white' data-aos='zoom-in'>
                    <h2>02. <span>where I've worked</span></h2>
                    <div className=' d-flex mt-5 text-white'>
                        <div class="d-flex align-items-start">
                            <div class="nav flex-column nav-pills me-3 border-start" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Comsis</button>
                                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">HBT</button>
                                <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">ORSTW</button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">WFP</button>
                            </div>
                            <div class="tab-content tab-details ms-3 " id="v-pills-tabContent">
                                <div class="tab-pane  fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <h4>Engineer @<a href='#'>Comsis</a></h4>
                                    <p>
                                        <span>➩</span>
                                        write modern,performant,matainable code for a  diverse array of  client and internal projects
                                    </p>
                                    <p>
                                        <span>➩</span>
                                        write modern,performant,matainable code for a  diverse array of  client and internal projects
                                    </p>
                                    <p>
                                        <span>➩</span>
                                        write modern,performant,matainable code for a  diverse array of  client and internal projects
                                    </p>
                                </div>
                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <h4>Engineer @<a href='#'>HBT</a></h4>
                                    <p>
                                        <span>➩</span>
                                        write modern,performant,matainable code for a  diverse array of  client and internal projects
                                    </p>
                                    <p>
                                        <span>➩</span>
                                        write modern,performant,matainable code for a  diverse array of  client and internal projects
                                    </p>
                                    <p>
                                        <span>➩</span>
                                        write modern,performant,matainable code for a  diverse array of  client and internal projects
                                    </p>
                                </div>
                                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <h4>Engineer @<a href='#'>ORSTW</a></h4>
                                    <p>
                                        <span>➩</span>
                                        write modern,performant,matainable code for a  diverse array of  client and internal projects
                                    </p>
                                    <p>
                                        <span>➩</span>
                                        write modern,performant,matainable code for a  diverse array of  client and internal projects
                                    </p>
                                    <p>
                                        <span>➩</span>
                                        write modern,performant,matainable code for a  diverse array of  client and internal projects
                                    </p>
                                </div>
                                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <h4>Engineer @<a href='#'>WFP</a></h4>
                                    <p>
                                        <span>➩</span>
                                        write modern,performant,matainable code for a  diverse array of  client and internal projects
                                    </p>
                                    <p>
                                        <span>➩</span>
                                        write modern,performant,matainable code for a  diverse array of  client and internal projects
                                    </p>
                                    <p>
                                        <span>➩</span>
                                        write modern,performant,matainable code for a  diverse array of  client and internal projects
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;
