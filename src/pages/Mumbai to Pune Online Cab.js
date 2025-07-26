
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Mumbaitopuneonlinecab() {



    const cardData =
    {
        keyword: 'Mumbai to Pune Online Cab',
        heading: 'Swara Cabs : Mumbai to Pune Online Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable online cab services for your journey from Mumbai to Pune. Pune, Maharashtra’s vibrant cultural and educational hub, is known for its historic landmarks, lush greenery, and dynamic city life. Whether you are traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a seamless and hassle‑free online booking experience. Covering approximately 150 kilometers via the Mumbai–Pune Expressway, the journey typically takes around 2½ to 3½ hours depending on traffic conditions. With our easy-to-use online platform, well‑maintained fleet, and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

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
        "title": "Raja Dinkar Kelkar Museum",
        "description": "The Raja Dinkar Kelkar Museum is a rich cultural repository, home to over 20,000 artifacts collected by Dr. Dinkar G. Kelkar in memory of his son. The museum showcases an incredible variety of items ranging from antique musical instruments and ancient sculptures to everyday household items from bygone eras. Each gallery offers a fascinating glimpse into India’s diverse artistic and cultural traditions. Located in the heart of Pune, it is a must-visit destination for art lovers, history buffs, and curious travelers alike."
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
      "name": "Mumbai to Pune Online Cab",
      "description": "Book your Mumbai to Pune cab online with ease. Our platform allows you to reserve your ride within seconds, offering a range of vehicle types, real-time tracking, and secure payment options. Enjoy a seamless, tech-enabled travel experience with verified drivers and dependable vehicles."
    },
    {
      "name": "Online Booking Cab Mumbai to Pune",
      "description": "Skip the hassle of phone calls and waiting. With our online booking system, you can schedule your Mumbai to Pune cab anytime. Get instant confirmation, upfront pricing, and flexible cancellation policies—all from your phone or laptop."
    },
    {
      "name": "Affordable Online Taxi Mumbai",
      "description": "Looking for cost-effective travel from Mumbai to Pune? Our affordable online taxi services offer competitive pricing without compromising on quality. Choose budget-friendly cars and enjoy a safe and smooth journey across the Expressway."
    },
    {
      "name": "Mumbai Pune Instant Cab",
      "description": "Need a cab urgently? Our instant cab booking feature ensures you're never left waiting. Get a quick ride from Mumbai to Pune with minimal wait time, ideal for last-minute plans and urgent travel needs."
    },
    {
      "name": "Online Sedan Cab Mumbai to Pune",
      "description": "Choose our online sedan cab service for a comfortable and stylish ride to Pune. Our sedans are perfect for solo travelers or small families seeking a balance of affordability, comfort, and convenience."
    },
    {
      "name": "SUV Online Taxi Mumbai",
      "description": "Travel with space and style in our online SUV taxi from Mumbai to Pune. Ideal for families, groups, or travelers with extra luggage, our SUVs offer enhanced comfort and better road presence for your intercity trip."
    },
    {
      "name": "Executive Online Cab Mumbai Pune",
      "description": "Book an executive cab online and travel from Mumbai to Pune in comfort and professionalism. Designed for corporate and business travelers, our executive cabs feature well-maintained vehicles, professional drivers, and business-class service."
    },
    {
      "name": "One-Way Online Booking Mumbai",
      "description": "Need a one-way ride? Book a Mumbai to Pune one-way cab online with ease. Pay only for your journey, without any round trip commitments. Ideal for moving to Pune, airport drops, or flexible plans."
    },
    {
      "name": "Round Trip Online Cab Mumbai",
      "description": "Planning a return journey? Our round trip cab booking allows you to plan your Mumbai to Pune and back travel in one go. Enjoy better rates, reserved return slots, and a stress-free experience."
    },
    {
      "name": "Verified Online Drivers Mumbai to Pune",
      "description": "Travel with peace of mind knowing your online cab is driven by a verified and professional driver. All our drivers are background-checked, licensed, and rated by passengers for reliability and service quality."
    },
    {
      "name": "Airport Online Cab Mumbai to Pune",
      "description": "Flying into Mumbai? Book your Pune cab online right from the airport. Our drivers track your flight and are ready for airport pickups, ensuring a smooth and timely transfer to Pune."
    },
    {
      "name": "Mumbai Pune Online Travel Cab",
      "description": "Experience smooth intercity travel with our online Mumbai to Pune travel cab. Whether for work or leisure, book your ride in advance and enjoy air-conditioned comfort, highway-ready vehicles, and courteous drivers."
    },
    {
      "name": "Online Corporate Cab Mumbai to Pune",
      "description": "Manage employee travel with ease using our corporate online cab services. Get automated billing, multi-user account control, and on-time pickups for a streamlined business travel experience between Mumbai and Pune."
    },
    {
      "name": "24/7 Online Cab Service",
      "description": "No matter the hour, our 24/7 online cab booking ensures you have a ride ready when needed. Whether it’s a late-night drop or an early morning pickup, we’re just a click away—day or night."
    },
    {
      "name": "Online AC Cab Mumbai to Pune",
      "description": "Enjoy climate-controlled comfort in our AC cabs from Mumbai to Pune. Book online and travel in style with well-maintained air-conditioned cars, perfect for summer travel or long highway journeys."
    }
  ],
  "tableData": [
    ["Mumbai to Pune Online Cab", "Online Booking Cab Mumbai to Pune"],
    ["Affordable Online Taxi Mumbai", "Mumbai Pune Instant Cab"],
    ["Online Sedan Cab Mumbai to Pune", "SUV Online Taxi Mumbai"],
    ["Executive Online Cab Mumbai Pune", "One-Way Online Booking Mumbai"],
    ["Round Trip Online Cab Mumbai", "Verified Online Drivers Mumbai to Pune"],
    ["Airport Online Cab Mumbai to Pune", "Mumbai Pune Online Travel Cab"],
    ["Online Corporate Cab Mumbai to Pune", "24/7 Online Cab Service"],
    ["Online AC Cab Mumbai to Pune", ""]
  ],




"whychoose": [
  {
    "WhyChooseheading": "Convenient Online Booking Platform",
    "WhyChoosedescription": "Book your Mumbai to Pune cab quickly and effortlessly through our user-friendly online platform or mobile app, designed for seamless navigation and instant confirmation."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Fees",
    "WhyChoosedescription": "Our online cab service offers clear and upfront pricing, including all applicable taxes and tolls, so you know exactly what you’re paying for before you confirm your booking."
  },
  {
    "WhyChooseheading": "Wide Range of Vehicle Options",
    "WhyChoosedescription": "Choose from a variety of well-maintained vehicles including sedans, SUVs, and premium cars to suit your comfort and budget preferences for the Mumbai to Pune route."
  },
  {
    "WhyChooseheading": "Real-Time Booking and Tracking",
    "WhyChoosedescription": "Monitor your cab’s location in real-time with live tracking features, ensuring transparency and allowing you to plan your arrival or pickup precisely."
  },
  {
    "WhyChooseheading": "Flexible Payment Methods",
    "WhyChoosedescription": "Pay easily using multiple secure payment options such as credit/debit cards, UPI, wallets, or cash, all integrated smoothly into the online booking process."
  },
  {
    "WhyChooseheading": "Experienced and Professional Drivers",
    "WhyChoosedescription": "Our vetted drivers provide safe and courteous service, with thorough knowledge of the Mumbai-Pune route to ensure timely and comfortable journeys."
  },
  {
    "WhyChooseheading": "24/7 Customer Support for Online Bookings",
    "WhyChoosedescription": "Our customer support team is available round the clock to assist you with booking modifications, cancellations, or any queries related to your online cab service."
  },
  {
    "WhyChooseheading": "Instant Cancellation and Rescheduling",
    "WhyChoosedescription": "Flexibility to cancel or reschedule your cab booking easily online without any hassle, giving you full control over your travel plans."
  }
]



























    }


const faqData = [
    {
        question: "Do you provide online cab booking services from Mumbai to Pune?",
        answer: "Yes, Swara Cabs offers easy and convenient online cab booking services for trips from Mumbai to Pune."
    },
    {
        question: "How can I book a cab online from Mumbai to Pune?",
        answer: "You can book online through our website or mobile app by selecting your pickup and drop locations, date, and vehicle type."
    },
    {
        question: "What types of vehicles can I book online for Mumbai to Pune trips?",
        answer: "Our online platform offers sedans, SUVs, Innova Crysta, and tempo travellers for booking as per your needs."
    },
    {
        question: "Are online payments accepted for Mumbai to Pune cab bookings?",
        answer: "Yes, we accept multiple online payment methods including UPI, credit/debit cards, and digital wallets."
    },
    {
        question: "Can I modify or cancel my online booking?",
        answer: "Yes, bookings can be modified or cancelled online as per our cancellation policy."
    },
    {
        question: "Is customer support available for online bookings?",
        answer: "Absolutely. Our customer support team is available 24/7 to assist with any online booking queries."
    },
    {
        question: "Are tolls and driver charges included in the online booking fare?",
        answer: "Yes, all applicable tolls, taxes, and driver charges are included with no hidden costs."
    },
    {
        question: "Is online booking available for round trips between Mumbai and Pune?",
        answer: "Yes, you can book both one-way and round-trip rides online easily."
    },
    {
        question: "How soon can I get a cab after booking online?",
        answer: "Depending on availability, cabs can be assigned immediately or within a short notice period."
    },
    {
        question: "Is it safe to book a cab online with Swara Cabs?",
        answer: "Yes, our online platform is secure, and all drivers are background-verified for your safety."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Aditya Joshi',
        review: 'Booking online with Swara Cabs for my Mumbai to Pune trip was seamless and hassle-free. Highly recommended!'
    },
    {
        name: 'Ms. Priya Shah',
        review: 'The online cab booking experience with Swara Cabs was smooth and convenient. The driver arrived on time and the vehicle was clean.'
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
  "name": "Mumbai to Pune Online Cab",
  "image": "https://www.swaracabs.in/assets/images/mumbai-to-pune-online-cab.jpg",
  "description": "Book Mumbai to Pune online cab service with Swara Cabs for instant, affordable, and reliable taxi bookings including AC, sedan, and SUV cabs available 24/7.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "12369"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1100",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/mumbai-to-pune-online-cab"
  }
};






    return (
        <div>
<Helmet>
  <title>Mumbai to Pune Online Cab | Instant & Affordable Taxi Booking | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Mumbai to Pune online cab service with Swara Cabs for instant, affordable, and reliable taxi bookings including AC, sedan, and SUV cabs available 24/7." 
  />
  <meta 
    name="keywords" 
    content="Mumbai to Pune Online Cab, Online Booking Cab Mumbai to Pune, Affordable Online Taxi Mumbai, Mumbai Pune Instant Cab, Online Sedan Cab Mumbai to Pune, SUV Online Taxi Mumbai, Executive Online Cab Mumbai Pune, One-Way Online Booking Mumbai, Round Trip Online Cab Mumbai, Verified Online Drivers Mumbai to Pune, Airport Online Cab Mumbai to Pune, Mumbai Pune Online Travel Cab, Online Corporate Cab Mumbai to Pune, 24/7 Online Cab Service, Online AC Cab Mumbai to Pune" 
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
                            <img src='/images/keyword/34.jpg' alt='img' />
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

export default Mumbaitopuneonlinecab;