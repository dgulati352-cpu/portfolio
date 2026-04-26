import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const formData = new FormData(e.target);
    
    try {
      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree ID
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        e.target.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="John Doe" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="john@example.com" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell me about your project..." required></textarea>
      </div>

      <button type="submit" className="btn submit-btn" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'SUCCESS' && (
        <div className="status-msg success">
          Thanks! Your message has been sent successfully.
        </div>
      )}
      
      {status === 'ERROR' && (
        <div className="status-msg error">
          Oops! Something went wrong. Please try again later.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
