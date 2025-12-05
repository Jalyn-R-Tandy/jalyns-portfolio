'use client'

import { useState } from "react";

const Contact = () => {
    const [status, setStatus] = useState('')
    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            message: ''
        }
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);

            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
            console.log(error);
        }
    }

    return (
    <section id="contact" className="w-screen h-screen mt-16 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-3xl border-white/10 border min-xxs:w-[270px] min-xs:w-[320px] sm:w-2xl lg:w-4xl xl:w-6xl h-fit rounded-3xl flex flex-col items-center">
            <div className="w-full my-4">
                <h1 className="text-center font-semibold text-2xl lg:text-4xl text-text overflow-hidden">Contact Me</h1>
            </div>

            <div className="w-full px-4">
                <p className="text-text mb-1">Full Name</p>
                <input placeholder="Enter your name" type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required disabled={status === 'sending'} className="w-full h-12 bg-white/20 border border-white/20 rounded-2xl pl-4 mb-4"/>
            </div>

            <div className="w-full px-4">
                <p className="text-text mb-1">Email Address</p>
                <input placeholder="Enter your email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required disabled={status === 'sending'} className="w-full h-12 bg-white/20 border border-white/20 rounded-2xl pl-4 mb-4"/>
            </div>

            <div className="w-full px-4">
                <p className="text-text mb-1">Your Message</p>
                <textarea placeholder="Send me a message!" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required disabled={status === 'sending'} style={{verticalAlign: 'top', paddingTop: '12px', textAlign: 'left',}} className="w-full h-36 bg-white/20 border border-white/20 rounded-3xl pl-4 mb-4"/>
            </div>

            <button type="submit" disabled={status == 'sending'} className="bg-hot-red rounded-2xl w-2/3 max-w-96 h-12 mb-8 text-text font-semibold border-white/25 border">{status === 'sending' ? 'Sending...' : 'Send Message'}</button>
            {status === 'success' && (
                <p className="text-lg pb-2 font-semibold text-green-600">Message sent successfully!</p>
            )}
            {status === 'error' && (
                <p className="text-lg pb-2 font-semibold text-hot-red">Failed to send. Please try again.</p>
            )}
        </form>
    </section>
    )
}

export default Contact