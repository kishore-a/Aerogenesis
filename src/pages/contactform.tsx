import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
interface ContactForm {
    name: string;
    email: string;
    message: string;
}

const ContactPage: React.FC = () => {
    const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
        setIsSubmitted(true);
    };
 const sendEmail = (e: any) => {
    
 }
    return (<div style={{ background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'}}>
         <div style={{ margin: '0 auto', maxWidth: '500px', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center' }}>Contact Me</h1>
            {isSubmitted ? (
                <p style={{ textAlign: 'center', color: 'green' }}>Thank you for reaching out! I'll get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '100px' }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '10px 0',
                            borderRadius: '4px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer'
                        }}

                        onClick={sendEmail}
                    >
                        Send Message
                    </button>
                </form>
            )}
        </div>
    </div>
       
    );
};

export default ContactPage;