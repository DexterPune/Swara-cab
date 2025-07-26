
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Punetomumbaicab() {



    const cardData =
    {
        keyword: 'Pune to Mumbai Cab',
        heading: 'Swara Cabs : Pune to Mumbai Cab',
        headingDescription: 'Swara Cabs offers dependable, comfortable, and affordable Pune to Mumbai cab services, ideal for business travelers, tourists, and daily commuters alike. Mumbai, India’s financial and entertainment capital, is a frequent destination for professionals, families, and leisure seekers from Pune. Whether you’re heading to a corporate meeting, a family function, or catching a flight, Swara Cabs ensures a hassle-free and smooth journey. The distance from Pune to Mumbai is approximately 150 to 170 kilometers, and the journey via the Mumbai–Pune Expressway typically takes around 3 to 4 hours, depending on traffic. With well-maintained vehicles, professional drivers, and 24/7 customer support, Swara Cabs guarantees a safe, punctual, and comfortable travel experience tailored to your schedule.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
    {
        "title": "Osho Ashram (Osho International Meditation Resort)",
        "description": "Located in the lush and upscale Koregaon Park area, the Osho International Meditation Resort is a globally renowned spiritual retreat founded by spiritual teacher Osho. The ashram offers a wide range of meditation practices, wellness programs, spa treatments, and dynamic activities aimed at personal growth and mindfulness. Surrounded by tall bamboo trees, modern architecture, and a calm atmosphere, it attracts seekers from around the world. Visitors can take day passes or stay longer to experience a unique blend of spiritual retreat and luxurious comfort."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "description": "Hidden amidst the urban chaos of JM Road, the Pataleshwar Cave Temple is a serene, 8th-century rock-cut shrine carved out of a single basalt rock. Dedicated to Lord Shiva, the temple features a beautifully carved sanctum, a circular Nandi Mandapa (pavilion), and intricate stone pillars that reflect ancient Indian architecture. Despite its location in the city, the temple offers a peaceful escape for spiritual seekers and architecture lovers. It’s also recognized as a protected monument by the Archaeological Survey of India."
    },
    {
        "title": "Sinhagad Fort",
        "description": "Sinhagad Fort is a majestic hill fortress located about 30 kilometers from Pune, standing tall at an altitude of 1,312 meters. Known for its strategic location, the fort has played a crucial role in many battles, including the famous battle of Tanaji Malusare, a brave Maratha warrior. Today, it is a favorite trekking destination for adventure lovers and history buffs alike. Once at the top, visitors are rewarded with stunning views of the surrounding Sahyadri hills, rustic food stalls serving traditional Maharashtrian dishes like pithla-bhakri, and a strong sense of Maratha pride."
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
        "title": "Aga Khan Palace",
        "description": "The Aga Khan Palace is a majestic building located in the Yerwada area of Pune, built in 1892 by Sultan Aga Khan III. It holds great historical importance as it served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other freedom fighters during the Quit India Movement. The palace now houses a museum dedicated to Mahatma Gandhi, with photographs, personal items, and his ashes. The beautiful Italian arches, sprawling lawns, and peaceful surroundings make it a tranquil place to explore the legacy of India’s freedom struggle."
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
      "name": "Pune to Mumbai Cab",
      "description": "Travel conveniently from Pune to Mumbai with our reliable cab service. Enjoy professional drivers, clean vehicles, and timely pickups along the expressway—ideal for business, leisure, or family trips."
    },
    {
      "name": "One-Way Cab Pune to Mumbai",
      "description": "Book a one-way cab from Pune to Mumbai at affordable rates. Perfect for travelers needing a single trip without paying return fare. No hidden charges—just a smooth, efficient ride."
    },
    {
      "name": "AC Taxi Pune to Mumbai",
      "description": "Stay cool and comfortable on your Pune to Mumbai journey with our fully air-conditioned taxis. Modern interiors and smooth performance make your travel relaxing, even in peak summer."
    },
    {
      "name": "SUV Cab Pune to Mumbai",
      "description": "Need more room for your family or group? Our SUV cabs provide spacious interiors, ample luggage space, and a comfortable ride—great for long highway travel from Pune to Mumbai."
    },
    {
      "name": "Sedan Taxi Pune to Mumbai",
      "description": "Choose our sedan taxi for a premium yet cost-effective ride. Ideal for solo travelers and small groups who want a stylish, smooth journey from Pune to Mumbai with great mileage."
    },
    {
      "name": "Round Trip Pune to Mumbai Cab",
      "description": "Planning to return the same day or next? Book our round trip cab from Pune to Mumbai and back. Benefit from fixed pricing, priority service, and the same driver throughout your journey."
    },
    {
      "name": "Online Cab Booking Pune to Mumbai",
      "description": "Book your Pune to Mumbai cab online in minutes. Use our intuitive platform with real-time availability, multiple payment options, and instant booking confirmation for a hassle-free experience."
    },
    {
      "name": "Corporate Cab Hire Pune to Mumbai",
      "description": "Tailored for business professionals, our corporate cab hire includes premium cars, dedicated support, monthly invoicing, and priority scheduling to keep your travel stress-free and on time."
    },
    {
      "name": "Executive Travel Pune to Mumbai",
      "description": "Ride in luxury with our executive cab service from Pune to Mumbai. Premium vehicles, experienced chauffeurs, and high-end features ensure a professional experience for executives and VIP clients."
    },
    {
      "name": "Verified Drivers Pune to Mumbai",
      "description": "Travel with confidence thanks to our thoroughly verified and trained drivers. All drivers undergo background checks and safety training to ensure your ride is both safe and professional."
    },
    {
      "name": "Affordable Cab Pune to Mumbai",
      "description": "Our Pune to Mumbai cab services are priced competitively without compromising comfort or reliability. Enjoy transparent pricing, no surge charges, and great value for every ride."
    },
    {
      "name": "Safe Taxi Ride Pune to Mumbai",
      "description": "Your safety is our priority. Our taxis are sanitized regularly, undergo routine maintenance, and our drivers follow all safety protocols to ensure you reach Mumbai safely from Pune."
    },
    {
      "name": "24/7 Cab Pune to Mumbai",
      "description": "Whether it’s an early flight or a late-night business meeting, our cabs run 24/7 from Pune to Mumbai. Get reliable, round-the-clock service whenever you need to travel."
    },
    {
      "name": "Airport Drop Pune to Mumbai",
      "description": "Catch your flight on time with our dedicated airport drop service. Our drivers monitor traffic and flight schedules to ensure a timely drop from Pune to Mumbai Airport."
    },
    {
      "name": "Express Highway Cab Pune to Mumbai",
      "description": "Take the fastest route with our Express Highway cabs from Pune to Mumbai. Our drivers navigate the Mumbai–Pune Expressway efficiently, offering a quick, smooth, and scenic ride."
    }
  ],
  "tableData": [
    ["Pune to Mumbai Cab", "Online Cab Booking Pune to Mumbai"],
    ["One-Way Cab Pune to Mumbai", "AC Taxi Pune to Mumbai"],
    ["Round Trip Pune to Mumbai Cab", "Sedan Taxi Pune to Mumbai"],
    ["SUV Cab Pune to Mumbai", "Affordable Cab Pune to Mumbai"],
    ["Verified Drivers Pune to Mumbai", "Executive Travel Pune to Mumbai"],
    ["24/7 Cab Pune to Mumbai", "Safe Taxi Ride Pune to Mumbai"],
    ["Airport Drop Pune to Mumbai", "Express Highway Cab Pune to Mumbai"],
    ["Corporate Cab Hire Pune to Mumbai", ""]
  ],


"whychoose": [
  {
    "WhyChooseheading": "Reliable Pune to Mumbai Cab Service",
    "WhyChoosedescription": "Count on our Pune to Mumbai cab service for punctual and stress-free travel. Whether it’s for business or leisure, we ensure timely pickups and smooth drop-offs to make your journey comfortable."
  },
  {
    "WhyChooseheading": "Wide Range of Vehicle Options",
    "WhyChoosedescription": "Choose from a variety of well-maintained vehicles including economical sedans, spacious SUVs, and luxury cars to suit your preferences and group size for a comfortable ride."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing",
    "WhyChoosedescription": "Our Pune to Mumbai cab service offers clear, competitive pricing inclusive of tolls, taxes, and driver charges, with no hidden fees, helping you plan your travel budget effectively."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Drivers",
    "WhyChoosedescription": "Our professional drivers know the best routes between Pune and Mumbai, ensuring your safety and comfort while providing polite and reliable service."
  },
  {
    "WhyChooseheading": "Convenient Online Booking",
    "WhyChoosedescription": "Booking your Pune to Mumbai cab is quick and easy via our website or app, with instant confirmation, real-time vehicle tracking, and flexible cancellation options."
  },
  {
    "WhyChooseheading": "24/7 Customer Support",
    "WhyChoosedescription": "Our customer support team is available round-the-clock to assist you with bookings, answer queries, and provide support throughout your Pune to Mumbai journey."
  },
  {
    "WhyChooseheading": "Clean and Well-Maintained Vehicles",
    "WhyChoosedescription": "Travel comfortably in clean, air-conditioned vehicles that are regularly serviced and sanitized, ensuring a safe and pleasant trip."
  },
  {
    "WhyChooseheading": "Multiple Secure Payment Options",
    "WhyChoosedescription": "Pay securely using credit/debit cards, UPI, wallets, or cash. We provide transparent billing and detailed receipts for every Pune to Mumbai cab ride."
  }
]














    }


const faqData = [
    {
        question: "Do you offer cab services from Pune to Mumbai?",
        answer: "Yes, Swara Cabs provides reliable and comfortable cab services from Pune to Mumbai."
    },
    {
        question: "What is the fare for a cab from Pune to Mumbai?",
        answer: "Fares start from ₹6,000 for a sedan. The final fare depends on the vehicle type, pickup time, and destination in Mumbai."
    },
    {
        question: "How can I book a cab from Pune to Mumbai?",
        answer: "You can book a cab through our website or by calling us directly at +91 9697780707."
    },
    {
        question: "What types of vehicles are available for Pune to Mumbai trips?",
        answer: "We offer sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers to suit all group sizes and preferences."
    },
    {
        question: "Are tolls and driver charges included in the cab fare?",
        answer: "Yes, the fare includes all tolls, taxes, and driver allowances. No hidden charges."
    },
    {
        question: "Can I book a cab for night travel from Pune to Mumbai?",
        answer: "Yes, Swara Cabs provides 24/7 service including night travel with a nominal night-time surcharge."
    },
    {
        question: "Is a round trip option available from Pune to Mumbai?",
        answer: "Yes, we offer both one-way and round-trip cab services based on your travel needs."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. Our drivers are professional, background-verified, and trained to ensure a safe and pleasant journey."
    },
    {
        question: "Do you offer doorstep pickup in Pune?",
        answer: "Yes, we provide doorstep pickup from any location in Pune and drop-off at your chosen Mumbai destination."
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept UPI, cash, debit/credit cards, and all major digital wallets."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Nilesh Jadhav',
        review: 'Booked a cab from Pune to Mumbai with Swara Cabs. The ride was comfortable, the driver was punctual, and the car was clean and well-maintained.'
    },
    {
        name: 'Ms. Rupal Thakur',
        review: 'Highly satisfied with Swara Cabs for my Pune to Mumbai trip. Easy booking, timely service, and a very courteous driver.'
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






const puneToMumbaiCabSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Swara Cabs",
  "description": "Book Pune to Mumbai cab service with AC, SUV, sedan taxis, one-way or round trips, corporate travel, verified drivers, and 24/7 online booking.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Swara Cabs",
    "telephone": "+91 9697780707",
    "url": "https://www.swaracabs.in/pune-to-mumbai-cab",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "MH",
      "addressCountry": "IN"
    }
  },
  "areaServed": ["Pune", "Mumbai"],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://www.swaracabs.in/pune-to-mumbai-cab"
  }
};

<Helmet>
  <title>Pune to Mumbai Cab | AC, SUV, Sedan Taxi | Swara Cabs</title>
  <meta
    name="description"
    content="Reliable Pune to Mumbai cab service with AC, SUV, sedan taxis, one-way and round trip options, corporate hire, verified drivers, and 24/7 online booking."
  />
  <meta
    name="keywords"
    content="Pune to Mumbai Cab, One-Way Cab Pune to Mumbai, AC Taxi Pune to Mumbai, SUV Cab Pune to Mumbai, Sedan Taxi Pune to Mumbai, Round Trip Pune to Mumbai Cab, Online Cab Booking Pune to Mumbai, Corporate Cab Hire Pune to Mumbai, Executive Travel Pune to Mumbai, Verified Drivers Pune to Mumbai, Affordable Cab Pune to Mumbai, Safe Taxi Ride Pune to Mumbai, 24/7 Cab Pune to Mumbai, Airport Drop Pune to Mumbai, Express Highway Cab Pune to Mumbai"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneToMumbaiCabSchema)}
  </script>
</Helmet>




    return (
        <div>

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
                            <img src='/images/keyword/60.jpg' alt='img' />
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

export default Punetomumbaicab;