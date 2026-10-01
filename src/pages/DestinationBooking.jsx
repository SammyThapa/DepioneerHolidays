import { useParams } from "react-router-dom";
import { destinations } from "../Data/destination";
import { destinationDetails } from "../Data/destinationDetails";
import style from "../css/DestinationBooking.module.css";

function DestinationBooking() {
  const { slug } = useParams();

  // Find the basic destination information
  const destinationCheck = destinations.find(
    (destination) => destination.slug === slug,
  );

  // Find the detailed information using the slug
  const details = destinationDetails[slug];

  // Prevent errors if the URL is invalid
  if (!destinationCheck || !details) {
    return (
      <main className={style.notFound}>
        <h2>Destination not found</h2>
      </main>
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[6-9]\d{9}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget); //notes- e is submit event and currentTarget is form tag

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const city = formData.get("city");

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (!emailPattern.test(email.trim())) {
      alert("Please enter a valid email.");
      return;
    }

    if (!phonePattern.test(phone.trim())) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (city.trim() === "") {
      alert("Please enter your city.");
      return;
    }

    const message = `
Destination Booking

Destination: ${destinationCheck.title}
Price/Person: ${details.pricePerPerson}

Client Details

Name: ${name}
Email: ${email}
Phone: ${phone}
City: ${city}
`;

    const whatsappNum = "917455932449";

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main>
      {/* HERO */}
      <section className={style.imageContainer}>
        <img src={destinationCheck.image} alt={destinationCheck.title} />

        <div className={style.overlayText}>{destinationCheck.title}</div>
      </section>

      {/* MAIN CONTENT */}
      <section className={style.bottomCon}>
        {/* DESTINATION INFORMATION */}
        <article className={style.destinationInfo}>
          <h2>About {destinationCheck.title}</h2>

          {/* Overview */}
          <p className={style.overview}>{details.overview}</p>

          {/* Destination details */}
          <div className={style.destinationDetails}>
            <p>
              <strong>Destination:</strong> {destinationCheck.title}
            </p>

            <p>
              <strong>Country:</strong> {destinationCheck.country}
            </p>

            <p>
              <strong>Duration:</strong> {details.duration}
            </p>

            <p>
              <strong>Best Time:</strong> {details.bestTime}
            </p>

            <p>
              <strong>Price:</strong> {details.pricePerPerson} (per person)
            </p>
          </div>

          {/* Highlights */}
          <div className={style.highlights}>
            <h3>Highlights</h3>

            <p>{details.highlights.join(" • ")}</p>
          </div>
        </article>

        {/* BOOKING FORM */}
        <aside className={style.formContainer}>
          <h2>Booking</h2>

          <p className={style.formSubtitle}>You're booking a trip to:</p>

          <div className={style.selectedDestination}>
            <h3>{destinationCheck.title}</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />

            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="phone">Phone Number</label>

            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />

            <label htmlFor="city">City</label>

            <input
              id="city"
              type="text"
              name="city"
              placeholder="Enter your city"
              required
            />

            <button type="submit">Continue on WhatsApp</button>
          </form>
        </aside>
      </section>
    </main>
  );
}

export default DestinationBooking;
