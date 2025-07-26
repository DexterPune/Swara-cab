
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Bandratopunecabs() {



    const cardData =
    {
        keyword: 'Bandra to Pune Cab',
        heading: 'Swara Cabs : Bandra to Pune Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Bandra to Pune. Pune, Maharashtra’s vibrant cultural and educational hub, is known for its historic landmarks, lush greenery, and dynamic city life. Whether you are traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a smooth and hassle‑free experience. Covering approximately 150–160 kilometers via the Mumbai–Pune Expressway, the journey typically takes around 3 to 4 hours depending on traffic conditions. With our well‑maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
    {
        "title": "Sinhagad Fort",
        "description": "Sinhagad Fort is a majestic hill fortress located about 30 kilometers from Pune, standing tall at an altitude of 1,312 meters. Known for its strategic location, the fort has played a crucial role in many battles, including the famous battle of Tanaji Malusare, a brave Maratha warrior. Today, it is a favorite trekking destination for adventure lovers and history buffs alike. Once at the top, visitors are rewarded with stunning views of the surrounding Sahyadri hills, rustic food stalls serving traditional Maharashtrian dishes like pithla-bhakri, and a strong sense of Maratha pride."
    },
    {
        "title": "Aga Khan Palace",
        "description": "The Aga Khan Palace is a majestic building located in the Yerwada area of Pune, built in 1892 by Sultan Aga Khan III. It holds great historical importance as it served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other freedom fighters during the Quit India Movement. The palace now houses a museum dedicated to Mahatma Gandhi, with photographs, personal items, and his ashes. The beautiful Italian arches, sprawling lawns, and peaceful surroundings make it a tranquil place to explore the legacy of India’s freedom struggle."
    },
       {
        "title": "Shaniwar Wada",
        "description": "Shaniwar Wada is one of the most iconic historical structures in Pune, built in 1732 by the Peshwas of the Maratha Empire. The fort was originally the seat of power for the Peshwas and witnessed several key events in Maratha history. Though much of the structure was destroyed by fire in 1828, the remaining ruins, including the massive Dilli Darwaza (main gate), strong ramparts, and open courtyards, speak volumes about its glorious past. The fort is also known for its haunting legends, making it a popular spot for heritage walks and history enthusiasts."
    },
     {
        "title": "Pataleshwar Cave Temple",
        "description": "Hidden amidst the urban chaos of JM Road, the Pataleshwar Cave Temple is a serene, 8th-century rock-cut shrine carved out of a single basalt rock. Dedicated to Lord Shiva, the temple features a beautifully carved sanctum, a circular Nandi Mandapa (pavilion), and intricate stone pillars that reflect ancient Indian architecture. Despite its location in the city, the temple offers a peaceful escape for spiritual seekers and architecture lovers. It’s also recognized as a protected monument by the Archaeological Survey of India."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "description": "The Raja Dinkar Kelkar Museum is a rich cultural repository, home to over 20,000 artifacts collected by Dr. Dinkar G. Kelkar in memory of his son. The museum showcases an incredible variety of items ranging from antique musical instruments and ancient sculptures to everyday household items from bygone eras. Each gallery offers a fascinating glimpse into India’s diverse artistic and cultural traditions. Located in the heart of Pune, it is a must-visit destination for art lovers, history buffs, and curious travelers alike."
    },
    {
        "title": "Osho Ashram (Osho International Meditation Resort)",
        "description": "Located in the lush and upscale Koregaon Park area, the Osho International Meditation Resort is a globally renowned spiritual retreat founded by spiritual teacher Osho. The ashram offers a wide range of meditation practices, wellness programs, spa treatments, and dynamic activities aimed at personal growth and mindfulness. Surrounded by tall bamboo trees, modern architecture, and a calm atmosphere, it attracts seekers from around the world. Visitors can take day passes or stay longer to experience a unique blend of spiritual retreat and luxurious comfort."
    },
    {
        "title": "Pune Okayama Friendship Garden",
        "description": "Also known as Pu La Deshpande Garden, the Pune Okayama Friendship Garden is one of the largest Japanese-style gardens outside Japan, inspired by the famous Korakuen Garden in Okayama. Sprawling across 10 acres, the garden features meticulously landscaped lawns, flowing streams, arched bridges, and tranquil walking paths. It's an ideal place for family picnics, photography, meditation, or simply unwinding amidst nature. The garden also hosts a musical fountain show in the evenings, adding to the charm of this beautifully designed space."
    },
    {
        "title": "Dagdusheth Halwai Ganpati Temple",
        "description": "The Dagdusheth Halwai Ganpati Temple is one of Pune’s most beloved spiritual landmarks, visited by thousands of devotees each day. Dedicated to Lord Ganesha, the temple is known for its grand celebrations during Ganesh Chaturthi and its beautifully adorned deity that exudes peace and blessings. Located in Budhwar Peth, the temple is a fine example of modern temple architecture, with ornate gold embellishments and intricate carvings. The temple’s trust is also involved in numerous social welfare activities, adding a layer of social service to spiritual devotion."
    },
    {
        "title": "Khadakwasla Dam",
        "description": "Khadakwasla Dam, situated just 20 km from Pune, is a favorite weekend retreat for locals. The dam is built on the Mutha River and is surrounded by scenic hills and lush greenery, making it a perfect place for nature lovers and photographers. Visitors often enjoy local snacks like corn, bhel, and tea by the waterfront. The area is also en route to Sinhagad Fort and National Defence Academy (NDA), making it a good pitstop for a full-day trip. The cool breeze and calming ambiance make it ideal for morning drives and romantic evening outings."
    }
],

   "services": [
    {
      "name": "Bandra to Pune Cab",
      "description": "Travel comfortably and safely from Bandra to Pune with our reliable cab services. Whether you're heading for business or leisure, our professional drivers and well-maintained vehicles ensure a smooth and hassle-free journey. Enjoy door-to-door service with flexible booking options tailored to your schedule."
    },
    {
      "name": "One-Way Cab Bandra to Pune",
      "description": "Need a one-way ride from Bandra to Pune? Our affordable one-way cab services provide cost-effective, direct travel without the need for return bookings. Ideal for solo travelers and small groups seeking convenient transportation."
    },
    {
      "name": "Bandra to Pune AC Taxi",
      "description": "Stay cool and refreshed on your trip from Bandra to Pune with our air-conditioned taxis. Perfect for hot days or long drives, our AC cabs combine comfort with reliable service to make your journey enjoyable."
    },
    {
      "name": "Online Taxi Bandra to Pune",
      "description": "Book your Bandra to Pune cab instantly through our secure online platform. Get real-time confirmation, choose your preferred vehicle, and enjoy hassle-free bookings anytime, anywhere with 24/7 customer support."
    },
    {
      "name": "Affordable Fare Bandra to Pune",
      "description": "Travel smart without breaking the bank! Our Bandra to Pune cabs offer competitive and transparent pricing with no hidden fees. We prioritize affordability alongside safety and comfort for all passengers."
    },
    {
      "name": "Round Trip Cab Bandra to Pune",
      "description": "Planning a round trip from Bandra to Pune? Book our round-trip cab services for seamless, reliable transportation both ways. Enjoy flexible scheduling and discounted fares on return journeys."
    },
    {
      "name": "Executive Cab Bandra to Pune",
      "description": "For business travelers and VIPs, our executive cabs from Bandra to Pune provide premium vehicles with plush interiors, punctual service, and professional chauffeurs, ensuring a first-class travel experience."
    },
    {
      "name": "SUV Cab Bandra to Pune",
      "description": "Travel with your family or a larger group comfortably with our spacious SUV cabs. These vehicles provide ample space for passengers and luggage, perfect for long-distance travel from Bandra to Pune."
    },
    {
      "name": "Bandra to Pune Sedan Cab",
      "description": "Our sedan cabs offer a perfect balance of style, comfort, and economy. Ideal for individuals or small groups, these cabs provide smooth rides and easy maneuverability from Bandra to Pune."
    },
    {
      "name": "Bandra to Pune Express Cab",
      "description": "Need a fast and efficient ride? Our express cab services from Bandra to Pune use the quickest routes and prioritize timely pickups and drop-offs, making your journey as swift as possible."
    },
    {
      "name": "Airport Pickup Bandra to Pune",
      "description": "Arriving or departing from Mumbai Airport? Book our specialized airport pickup cabs from Bandra to Pune for convenient, luggage-friendly, and punctual transfers ensuring a stress-free airport experience."
    },
    {
      "name": "Verified Drivers Bandra to Pune",
      "description": "All our Bandra to Pune cab drivers undergo thorough background verification, training, and regular assessments to ensure your safety and comfort throughout the journey."
    },
    {
      "name": "Safe Cab Service Bandra",
      "description": "Your safety is our top priority. Our cabs are equipped with GPS tracking, sanitized regularly, and driven by professional chauffeurs who follow all traffic and health safety protocols."
    },
    {
      "name": "24/7 Booking Bandra to Pune",
      "description": "No matter the time or day, book your Bandra to Pune cab anytime with our 24/7 booking facility. Whether it’s an early morning flight or a late-night business meeting, we’ve got you covered."
    },
    {
      "name": "Quick Cab Hire Bandra to Pune",
      "description": "In a hurry? Our quick cab hire service ensures minimal wait times with immediate vehicle availability, so you can get on the road from Bandra to Pune without delay."
    }
  ],
  "tableData": [
    ["Bandra to Pune Cab", "One-Way Cab Bandra to Pune"],
    ["Bandra to Pune AC Taxi", "Online Taxi Bandra to Pune"],
    ["Affordable Fare Bandra to Pune", "Round Trip Cab Bandra to Pune"],
    ["Executive Cab Bandra", "SUV Cab Bandra to Pune"],
    ["Bandra to Pune Sedan Cab", "Bandra to Pune Express Cab"],
    ["Airport Pickup Bandra to Pune", "Verified Drivers Bandra to Pune"],
    ["Safe Cab Service Bandra", "24/7 Booking Bandra to Pune"],
    ["Quick Cab Hire Bandra to Pune", ""]
  ],




"whychoose": [
  {
    "WhyChooseheading": "Convenient Pickups from Bandra",
    "WhyChoosedescription": "Our Bandra to Pune cab service offers easy and timely pickups from any location in Bandra, including Bandra West, East, and near the railway and metro stations. We ensure that you start your Pune journey without any delays or hassles."
  },
  {
    "WhyChooseheading": "Fleet of Comfortable and Well-Maintained Vehicles",
    "WhyChoosedescription": "Choose from a wide range of vehicles such as sedans, SUVs, and premium cars like Innova Crysta and Ertiga, all maintained to the highest standards to provide a smooth, air-conditioned, and comfortable ride from Bandra to Pune."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing",
    "WhyChoosedescription": "We offer upfront pricing with no hidden fees. The Bandra to Pune cab fare includes all applicable tolls, taxes, and driver allowances, giving you complete clarity and peace of mind while budgeting your trip."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Drivers",
    "WhyChoosedescription": "Our professional drivers have in-depth knowledge of the Bandra to Pune route and traffic patterns. They prioritize safety, courteous service, and timely arrivals, making your journey comfortable and stress-free."
  },
  {
    "WhyChooseheading": "Sanitized and Safe Vehicles",
    "WhyChoosedescription": "Your health and safety come first. All our vehicles are regularly cleaned and sanitized before every trip. Equipped with modern safety features such as airbags, seat belts, and GPS tracking, we ensure a secure journey."
  },
  {
    "WhyChooseheading": "24/7 Availability for Your Convenience",
    "WhyChoosedescription": "Whether you have an early morning flight, late-night business meeting, or weekend trip planned, our Bandra to Pune cab services operate round the clock to meet your schedule and travel needs."
  },
  {
    "WhyChooseheading": "Easy and Fast Online Booking",
    "WhyChoosedescription": "Booking your Bandra to Pune cab is simple and fast via our website or mobile app. With instant confirmation and live updates, you stay informed and ready for your trip at all times."
  },
  {
    "WhyChooseheading": "Customizable Travel Experience",
    "WhyChoosedescription": "We offer tailored services based on your specific requirements, including additional stops, luggage help, and vehicle preferences, ensuring your Bandra to Pune journey is personalized and comfortable."
  }
]





















    }


const faqData = [
    {
        question: "Do you provide cab services from Bandra to Pune?",
        answer: "Yes, Swara Cabs offers reliable and comfortable cab services from Bandra, Mumbai to Pune."
    },
    {
        question: "What is the fare for a cab from Bandra to Pune?",
        answer: "The fare starts from ₹5,600 for a sedan. Pricing varies based on vehicle type and travel time."
    },
    {
        question: "How can I book a cab from Bandra to Pune?",
        answer: "You can book online through our website or call +91 9697780707 for quick and easy booking."
    },
    {
        question: "What vehicle options are available for Bandra to Pune trips?",
        answer: "We provide sedans, SUVs, Innova Crysta, and tempo travellers based on your group size and comfort requirements."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included in the fare with no hidden charges."
    },
    {
        question: "Is night service available from Bandra to Pune?",
        answer: "Yes, our cabs operate 24/7 with a nominal surcharge for trips between 10 PM and 6 AM."
    },
    {
        question: "Can I book a round trip from Bandra to Pune?",
        answer: "Yes, round-trip bookings are available with flexible scheduling."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. Our drivers are background-verified and professionally trained for passenger safety."
    },
    {
        question: "Do you provide doorstep pickup in Bandra?",
        answer: "Yes, we offer doorstep pickup service directly from your location in Bandra."
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept UPI, cash, debit/credit cards, and popular digital wallets for convenient payment."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Arjun Mehta',
        review: 'Swara Cabs gave me a hassle-free ride from Bandra to Pune. The driver was courteous and the car was very comfortable.'
    },
    {
        name: 'Ms. Riya Kapoor',
        review: 'Great experience with Swara Cabs. Prompt pickup from Bandra and a smooth journey to Pune. Highly recommended!'
    }
];










































    const contactData = {
        heading: `${cardData.keyword} Contact Number`,
        contactNumbers: [
            "+91 9697780707",
            "+91 8975330707",

        ],
        email: "booking@swaracabs.in"
    };


    const Images = [
        {
            place: "/images/keyword/1.jpg",
            text: "Pune to Mumbai Taxi Fare",
        },
        {
            place: "/images/keyword/2.jpg",
            text: "Pune to Mumbai Online Cab Booking",
        },
        {
            place: "/images/keyword/3.jpg",
            text: "Pimpri Chinchwad to Mumbai Cab",
        },
        {
            place: "/images/keyword/4.jpg",
            text: "Baner to Mumbai Cabs",
        },
        {
            place: "/images/keyword/5.jpg",
            text: "Hinjewadi to Mumbai Cab",
        },
        {
            place: "/images/keyword/6.jpg",
            text: "Pimple Saudagar to Mumbai Cab Service",
        },
        {
            place: "/images/keyword/7.jpg",
            text: "Wakad to Mumbai Cab",
        },
        {
            place: "/images/keyword/8.jpg",
            text: "Hadapsar to Mumbai Cab",
        },
        {
            place: "/images/keyword/9.jpg",
            text: "Kalyani Nagar to Mumbai Taxi",
        },
        {
            place: "/images/keyword/10.jpg",
            text: "Koregaon Park to Mumbai Cab",
        },
        {
            place: "/images/keyword/11.jpg",
            text: "Kothrud to Mumbai Cab",
        },
        {
            place: "/images/keyword/12.jpg",
            text: "Kharadi to Mumbai Cab",
        },
        {
            place: "/images/keyword/13.jpg",
            text: "Shivajinagar to Mumbai Cab",
        },
        {
            place: "/images/keyword/14.jpg",
            text: "Pune to Mumbai Ertiga Cab",
        },
        {
            place: "/images/keyword/15.jpg",
            text: "Pune to Mumbai Innova Crysta Cab",
        },
        {
            place: "/images/keyword/16.jpg",
            text: "Pune to Mumbai Sedan Cab",
        },
        {
            place: "/images/keyword/17.jpg",
            text: "Kondhwa to Mumbai cab",
        },
        {
            place: "/images/keyword/18.jpg",
            text: "Viman Nagar to Mumbai Cabs",
        },
        {
            place: "/images/keyword/19.jpg",
            text: "Katraj to Mumbai Cab Service",
        },
        {
            place: "/images/keyword/20.jpg",
            text: "Pune Station to Mumbai Cabs Service",
        },
        {
            place: "/images/keyword/22.jpg",
            text: "Mumbai to Pune Cabs",
        },
        {
            place: "/images/keyword/23.jpg",
            text: "Mumbai Airport to Pune Cab",
        },
        {
            place: "/images/keyword/24.jpg",
            text: "Dadar to Pune Cab",
        },
        {
            place: "/images/keyword/25.jpg",
            text: "Mumbai to Pune One Way Cab",
        },
        {
            place: "/images/keyword/26.jpg",
            text: "Andheri to Pune Cab",
        },
        {
            place: "/images/keyword/27.jpg",
            text: "Bandra to Pune Cab",
        },
    ];


    const images = [
        { src: "/images/ourfleet/1.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/5.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/2.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/3.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/4.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/7.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/8.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/9.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/6.jpg", alt: "Image 1" },

    ];








const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Bandra to Pune Cab",
  "image": "https://www.swaracabs.in/assets/images/bandra-to-pune-cab.jpg",
  "description": "Book Bandra to Pune cab with Swara Cabs for affordable, safe, and reliable travel. Choose from AC sedans, SUVs with verified drivers, and 24/7 availability for one-way and round trips.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "9585"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2699",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/bandra-to-pune-cab"
  }
};




    return (
        <div>
<Helmet>
  <title>Bandra to Pune Cab | Affordable & Safe Taxi | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Bandra to Pune cab with Swara Cabs for affordable, safe, and reliable travel. Choose from AC sedans, SUVs with verified drivers, and 24/7 availability for one-way and round trips." 
  />
  <meta 
    name="keywords" 
    content="Bandra to Pune Cab, One-Way Cab Bandra to Pune, Bandra to Pune AC Taxi, Online Taxi Bandra to Pune, Affordable Fare Bandra to Pune, Round Trip Cab Bandra to Pune, Executive Cab Bandra, SUV Cab Bandra to Pune, Bandra to Pune Sedan Cab, Bandra to Pune Express Cab, Airport Pickup Bandra to Pune, Verified Drivers Bandra to Pune, Safe Cab Service Bandra, 24/7 Booking Bandra to Pune, Quick Cab Hire Bandra to Pune" 
  />
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>
            <section id="slider" className="hero p-0 odd featured">
                <div className="swiper-container no-slider animation slider-h-50 slider-h-auto">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide slide-center">

                            <div className="slide-content row text-center">
                                <div className="col-12 mx-auto inner">
                                    <h1 className="mb-0 title effect-static-text pt-5">{cardData.keyword}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section id="about" className="jarallax text-light py-0">
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid py-0" >
                    <div className="row ">
                        <div className="col-12 col-md-7 ">
                            <img src='/images/keyword/26.jpg' alt='img' />
                            <h3 className="py-1"
                                style={{
                                    color: '#AA5225', // Red color for the title 
                                    textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                                    fontWeight: 'bold'
                                }}


                            >{cardData.heading} </h3><p className='fw-bold '>{cardData.headingDescription}</p>
                            <div className="">
                                <p className='fw-bold py-3 darkcolorrr'>{cardData.top}</p>
                                {cardData.topPlaces.map((place, index) => (
                                    <div key={index} className="">
                                        <div
                                            style={{
                                                cursor: 'pointer',
                                                padding: '10px',
                                                marginBottom: '7px',
                                                borderRadius: '8px',
                                                transition: 'transform 0.2s'
                                            }}

                                        >
                                            <h4 className="mb-1 darkcolorrr">{place.title}</h4>
                                            <p className="mb-0">{place.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    marginBottom: '7px',
                                    borderRadius: '8px', // Optional: rounded corners
                                    transition: 'transform 0.2s' // Optional: smooth scaling effect
                                }}
                            >
                                {cardData.services.map((service, index) => (
                                    <div key={index} className=" my-4">
                                        <h4 className="py-1 darkcolorrr">{service.name}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                ))}
                            </div>

                            <table className="table table-responsive Border-key my-2">
                                <tbody className=' Border-key'>
                                    {cardData.tableData.map((row, rowIndex) => (
                                        <tr className='Border-key ' key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className=' Border-key bluecolor fw-bold' >{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h3 className='pt-md-3'>{cardData.keyword + " Rates"}</h3>
                            <BusRatesTable />

                            <div id="why-choose-section"
                                className='px-2'>
                                <h2 className='whycolor py-3'>Why Choose us for  {cardData.keyword}</h2>
                                {cardData.whychoose.map((item, index) => (
                                    <div key={index}>
                                        <h4 className="py-1 whycolor">{item.WhyChooseheading}</h4>
                                        <p>{item.WhyChoosedescription}</p>
                                    </div>
                                ))}
                            </div>


                            <div className="row twm-faq-section-1 m-b30">


                                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-faq-info-wrap">

                                        <div className="section-head left">
                                            <h2 className="twm-large-title site-text-dark darkcolor">FAQS {cardData.keyword} For  Swara cabs</h2>
                                        </div>


                                        <div className="twm-faq-info">
                                            <div className="accordion twm-acdn" id="sf-faq-accordion">

                                                <Accordion data={faqData} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <Testimonialskeywords
                                sectionId="customer-feedback"
                                title="Customer"
                                subtitle="Reviews"
                                testimonials={testimonialsData}
                            />
                            <div className='py-4'>

                                <div className="contact-box Borderr">
                                    <h3>{contactData.heading}</h3>
                                    <p className='text-black'>For booking inquiries or any assistance, please feel free to contact us:</p>
                                    <div className="contact-details">
                                        <p><strong className='darkcolor'>Mobile No:</strong></p>
                                        <ul>
                                            {contactData.contactNumbers.map((number, index) => (
                                                <li key={index}>
                                                    <a href={`tel:${number}`} className="contact-link fw-bold fs-5">
                                                        {number}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <p><strong className='darkcolor'>Email Id: </strong>
                                            <a href={`mailto:${contactData.email}`} className="contact-link">
                                                {contactData.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-4' >
                            {Images.map((e) => {
                                return (
                                    <div className="box1">
                                        <a
                                            href="./"
                                            className="d-flex justify-content-around align-items-center"
                                        >
                                            <div className="b1">
                                                <img src={e.place} alt="img" />
                                            </div>
                                            <div className="b2">
                                                {" "}
                                                <a href="./" className='px-3'>{e.text}</a>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}


                            <div className="gallery-container">
                                <h2 className="gallery-title">Our Fleets</h2>
                                <div className="gallery-row d-flex flex-wrap">
                                    {images.map((image, index) => (
                                        <div className="gallery-item col-md-4" key={index}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="gallery-image"

                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className=" rounded p-4 shadow-sm Uni_border "
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    border: '3px dotted #AA5126',
                                    marginBottom: '7px',
                                    fontWeight: 'bold',
                                }}

                            >
                                <h4 className="pb-3 pt-3 lead fw-bold text-dark">Contact Information</h4>

                                <div className="row">

                                    <div className="col-12 mb-3">
                                        <div className="Small_border  rounded text-center py-2 " style={{ backgroundColor: '#AA5126' }}>
                                            <h4 className=" lead fw-semibold whitt text-darkk">Phone Numbers</h4>
                                            <i className="bi bi-telephone-fill fs-1 mb-2"></i>
                                            <div className=''>
                                                <a href="tel:+919697780707" className="d-block  text-white">+91 9697780707</a>
                                                <a href="tel:+918975330707" className="d-block  text-white">+91 8975330707</a>



                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border rounded text-center">
                                            <i className="bi bi-envelope fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#AA5126' }}>
                                                <h4 className=" fw-semibold lead whitt text-darkk">Email</h4>
                                                <a href="mailto:booking@swaracabs.in" className=" text-white d-block">
                                                    booking@swaracabs.in
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border  rounded text-center">
                                            <i className="bi bi-house-fill fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#AA5126' }}>
                                                <h4 className=" fw-semibold lead whitt text-darkk">Address</h4>
                                                <p className="whit text-white ">
                                                    <i> Swara Cabs : <br />
                                                        Near Ambika Mata Mandir, Ghorpade Wasti Loni Kalbhor, Tal - Haveli, Dist - Pune, Maharashtra, India.
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default Bandratopunecabs;