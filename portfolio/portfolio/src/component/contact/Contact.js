import React from 'react';
import '../contact/contact.css';

const Contact = () => {
    return (
        <div id='contact' className=' contact bg-dark w-100 flex-column vh-100 d-flex justify-content-center align-items-center'>
            <div className=' w-50 text-center'>
                <p className='what'><span>04.</span> What is next?</p>
                <h1 className='text-white'>Get in  touch</h1>
                <p className='details'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod deleniti dignissimos ut harum quos velit id exercitationem tempore, necessitatibus nesciunt itaque suscipit rerum dolorum. Perferendis?</p>
                <button className='bg-transparent'>Say Hello!</button>
            </div>
        </div>
    );
}

export default Contact;
