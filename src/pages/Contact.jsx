import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleBlur = (field) => {
        setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const validationErrors = {};

        if (!name.trim())   {
            validationErrors.name = 'Please enter your name.';
        }

        if (!email.trim())   {
            validationErrors.email = 'Please enter your email address.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Please enter a valid email address.';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert('Form submitted!');

            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={touched.name && !name.trim() ? 'error' : ''}
                    />
                    {touched.name && !name.trim() && <span className="error">Name is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={touched.email && (!email.trim() || !/\S+@\S+\.\S+/.test(email)) ? 'error' : ''}
                    />
                    {touched.email && !email.trim() && <span className="error">Email is required</span>}
                    {touched.email && email.trim() && !/\S+@\S+\.\S+/.test(email) && (
                        <span className="error">Invalid email address</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        onBlur={() => handleBlur('message')}
                        className={touched.message && !message.trim() ? 'error' : ''}
                    ></textarea>
                    {touched.message && !message.trim() && <span className="error">Message is required</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;