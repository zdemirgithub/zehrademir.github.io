// components/Contact.js
const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>If you’d like to get in touch, feel free to reach out via any of the platforms below:</p>
      <div className="contact-buttons">
        <button onClick={() => window.location.href = "https://github.com/zdemirgithub"}>GitHub</button>
        <button onClick={() => window.location.href = "https://www.linkedin.com/in/zehra-demir-74b307308"}>LinkedIn</button>
        <button onClick={() => window.location.href = "mailto:zehrademir.gm@gmail.com"}>Email</button>
      </div>
    </section>
  );
};

export default Contact;
