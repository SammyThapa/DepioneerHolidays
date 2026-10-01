import style from "../css/Enquire.module.css";

import { motion } from "framer-motion";

function Enquire() {
  const fieldAnimation = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[6-9]\d{9}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget); // e is submit event and currentTarget is form tag

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const destination = formData.get("destination");
    const date = formData.get("date");
    const number = formData.get("num");
    const budget = formData.get("budget");
    const message = formData.get("message");

    // Name
    if (!name || name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    // Email
    if (!emailPattern.test(email.trim())) {
      alert("Please enter a valid email.");
      return;
    }

    // Phone
    if (!phonePattern.test(phone.trim())) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Destination
    if (!destination || destination.trim() === "") {
      alert("Please enter your destination.");
      return;
    }

    // Date
    if (!date || date.trim() === "") {
      alert("Please select a travel date.");
      return;
    }

    // Number of travelers
    if (!number || number.trim() === "") {
      alert("Please enter the number of travelers.");
      return;
    }

    if (Number(number) < 1) {
      alert("Number of travelers must be at least 1.");
      return;
    }

    // Budget
    if (!budget || budget.trim() === "") {
      alert("Please enter your budget.");
      return;
    }

    if (Number(budget) <= 0) {
      alert("Please enter a valid budget.");
      return;
    }

    // Message
    if (!message || message.trim() === "") {
      alert("Please enter your message.");
      return;
    }

    if (message.trim().length < 10) {
      alert("Message must contain at least 10 characters.");
      return;
    }

    const whatsappMessage = `
Client Details

Name: ${name}
Email: ${email}
Phone: ${phone}
Destination: ${destination}
Date:${date}
Number of Travellers:${number}
Budget:${budget}
Message:${message}
`;

    const whatsappNum = "";

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className={style.mainCon}>
      <aside className={style.formContainer}>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          Enquire Us
        </motion.h2>
        <form onSubmit={handleSubmit}>
          <motion.div
            variants={fieldAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />
          </motion.div>

          <motion.div
            variants={fieldAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </motion.div>

          <motion.div
            variants={fieldAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </motion.div>

          <motion.div
            variants={fieldAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="destination">Destination</label>
            <input
              id="destination"
              type="text"
              name="destination"
              placeholder="Enter your destination"
              required
            />
          </motion.div>

          <motion.div
            variants={fieldAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label htmlFor="date">Travel Date</label>
            <input id="date" type="date" name="date" required />
          </motion.div>

          <motion.div
            variants={fieldAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <label htmlFor="num">Number of Travellers</label>
            <input
              id="num"
              type="number"
              name="num"
              min="1"
              placeholder="Enter number of travellers"
              required
            />
          </motion.div>

          <motion.div
            variants={fieldAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <label htmlFor="budget">Budget</label>
            <input
              type="number"
              id="budget"
              name="budget"
              placeholder="₹ 00.0"
              min="0"
              step="0.01"
              required
            />
          </motion.div>

          <motion.div
            variants={fieldAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Type a message..."
              rows="5"
              name="message"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.9,
            }}
          >
            Continue on WhatsApp
          </motion.button>
        </form>
      </aside>
    </div>
  );
}

export default Enquire;
