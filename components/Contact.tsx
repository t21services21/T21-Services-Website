'use client'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-white mb-4">
            Start Your Journey <span className="text-gold">Today</span>
          </h2>
          <p className="text-xl text-gray-300">Ready to transform your career or organization?</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-xl font-bold text-white mb-4">📧 Email Us</h3>
              <p className="text-gray-400">info@t21services.co.uk</p>
            </div>
            <div className="glass-card">
              <h3 className="text-xl font-bold text-white mb-4">📞 Call Us</h3>
              <p className="text-gray-400">+44 (0) 20 XXXX XXXX</p>
            </div>
            <div className="glass-card">
              <h3 className="text-xl font-bold text-white mb-4">💬 WhatsApp</h3>
              <p className="text-gray-400">Chat with us instantly</p>
            </div>
            <div className="glass-card">
              <h3 className="text-xl font-bold text-white mb-4">📍 Visit Us</h3>
              <p className="text-gray-400">64 Upper Parliament Street<br/>Liverpool, L8 7LF</p>
            </div>
          </div>
          <div className="glass-card">
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thank-you"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <input type="text" name="name" placeholder="Your Name" required className="w-full" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full" />
              <input type="tel" name="phone" placeholder="Phone Number" className="w-full" />
              <select name="service" required className="w-full">
                <option value="">Select Service</option>
                <option value="Training">Training</option>
                <option value="Recruitment">Recruitment</option>
                <option value="Software">Software</option>
                <option value="International Programs">International Programs</option>
                <option value="Business Consultancy">Business Consultancy</option>
              </select>
              <textarea name="message" placeholder="Your Message" rows={4} required className="w-full"></textarea>
              <button type="submit" className="btn-gold w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
