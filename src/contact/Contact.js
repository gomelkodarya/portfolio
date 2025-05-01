import React, { useState } from "react";
import style from './Contact.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import { Title } from "../common/components/title/Title";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            newErrors.name = "Please enter your name";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email";
        } else {
            if (!emailRegex.test(formData.email)) {
                newErrors.email = "Please enter a valid email";
            }
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please enter your message";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            title: "Contact Form"
        };

        emailjs.send(
            'service_gns25dl',      
            'template_2298spq',     
            templateParams,
            '0JH79_XMZuZ9fPJlk'       
        ).then(() => {
            setIsSent(true);
            setFormData({ name: '', email: '', message: '' });

            const autoReplyParams = {
                name: formData.name,
                email: formData.email
            };
    
            emailjs.send(
                'service_gns25dl',
                'template_py2zioa', 
                autoReplyParams,
                '0JH79_XMZuZ9fPJlk'
            ).catch((error) => {
                console.error('Error sending auto reply:', error);
            });
        }).catch((error) => {
            console.error('EmailJS error:', error);
            alert('Something went wrong. Please try again later.');
        });

       
    };

    return (
        <div id="contact" className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title text="Contact" />
                <form className={style.form} onSubmit={handleSubmit}>
                    <div className={style.inputGroup}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className={style.error}>{errors.name}</span>}
                    </div>
                    <div className={style.inputGroup}>
                        <input
                            type="text"
                            name="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className={style.error}>{errors.email}</span>}
                    </div>
                    <div className={style.inputGroup}>
                        <textarea
                            name="message"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className={style.error}>{errors.message}</span>}
                    </div>
                    <button className={style.btn} type="submit">Send</button>
                    {isSent && <div className={style.success}>Thank you! Your message has been sent successfully.</div>}
                </form>
            </div>
        </div>
    );
};