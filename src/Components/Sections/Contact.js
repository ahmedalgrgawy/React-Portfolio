import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4m3ko56', 'template_spbvtot', form.current, '2K4XmLua7F_j-rQ4g')
            .then((result) => {

                alert('Email Sent!')

                e.target.reset() /// fix names

            }, (error) => {

                console.log(error.text);

            });
    };

    return (
        <section className='contact' id='contact'>

            <h1>Contact Me</h1>

            <p className='desc'></p>

            <form ref={form} onSubmit={sendEmail}>

                <input type='text' className='name' placeholder='Your Name' name="your_name"></input>

                <input type='email' className='email' placeholder='Your E-mail' name="your_name"></input>

                <textarea name='message' rows='5' placeholder='Your Message' className='message'></textarea>

                <button type='submit' className='submitBtn' value='Send'>Submit</button>

            </form>

        </section>
    )
}
