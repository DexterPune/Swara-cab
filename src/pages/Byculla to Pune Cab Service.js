
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Bycullatopunecabservice() {



    const cardData =
    {
        keyword: 'Byculla to Pune Cab Service',
        heading: 'Swara Cabs : Byculla to Pune Cab Service',
        headingDescription: 'Swara Cabs offers reliable, safe, and affordable cab services for your journey from Byculla to Pune. Byculla, one of Mumbai’s oldest and most centrally located neighborhoods, is well-connected to major highways leading toward Pune — a city known for its historical landmarks, academic institutions, and fast-growing IT sector. Whether you are heading to Pune for a corporate assignment, family visit, or leisure trip, Swara Cabs ensures a smooth, punctual, and stress-free ride. The distance from Byculla to Pune is approximately 160 to 175 kilometers, and the travel time via the Mumbai–Pune Expressway generally ranges from 3.5 to 4.5 hours, depending on traffic conditions. With a well-maintained fleet, courteous drivers, and 24/7 service, Swara Cabs delivers a comfortable and dependable travel experience tailored to your needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
    {
        "title": "Pataleshwar Cave Temple",
        "description": "Hidden amidst the urban chaos of JM Road, the Pataleshwar Cave Temple is a serene, 8th-century rock-cut shrine carved out of a single basalt rock. Dedicated to Lord Shiva, the temple features a beautifully carved sanctum, a circular Nandi Mandapa (pavilion), and intricate stone pillars that reflect ancient Indian architecture. Despite its location in the city, the temple offers a peaceful escape for spiritual seekers and architecture lovers. It’s also recognized as a protected monument by the Archaeological Survey of India."
    },
    {
        "title": "Osho Ashram (Osho International Meditation Resort)",
        "description": "Located in the lush and upscale Koregaon Park area, the Osho International Meditation Resort is a globally renowned spiritual retreat founded by spiritual teacher Osho. The ashram offers a wide range of meditation practices, wellness programs, spa treatments, and dynamic activities aimed at personal growth and mindfulness. Surrounded by tall bamboo trees, modern architecture, and a calm atmosphere, it attracts seekers from around the world. Visitors can take day passes or stay longer to experience a unique blend of spiritual retreat and luxurious comfort."
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
    "name": "Byculla to Pune Cab Service",
    "description": "Travel comfortably from Byculla to Pune with our reliable cab service. Enjoy punctual pickups, professional drivers, and clean vehicles for a hassle-free journey across the Mumbai-Pune expressway."
  },
  {
    "name": "AC Taxi Byculla to Pune",
    "description": "Beat the heat with our air-conditioned taxis from Byculla to Pune. Equipped with modern amenities, these cabs ensure a cool and comfortable ride no matter the season."
  },
  {
    "name": "Online Cab Booking Byculla",
    "description": "Book your cab online from Byculla to Pune easily and securely. Our platform offers instant confirmation, multiple payment options, and real-time vehicle tracking for a seamless experience."
  },
  {
    "name": "One-Way Cab Byculla to Pune",
    "description": "Need a one-way trip? Our one-way cab service from Byculla to Pune offers flexible scheduling and budget-friendly pricing with no hidden charges for the return journey."
  },
  {
    "name": "Round Trip Taxi Byculla",
    "description": "Planning a round trip? Benefit from discounted return fares, fixed pick-up times, and the convenience of the same driver and vehicle throughout your journey from Byculla to Pune and back."
  },
  {
    "name": "SUV Cab Byculla to Pune",
    "description": "Travel with ample space in our SUV cabs from Byculla to Pune. Perfect for families or groups carrying luggage, offering comfort, safety, and superior ride quality."
  },
  {
    "name": "Sedan Cab Byculla",
    "description": "Choose our sedan cabs for a smooth and efficient ride from Byculla to Pune. Ideal for individuals or couples seeking a stylish yet affordable travel option."
  },
  {
    "name": "Affordable Cab Hire Byculla",
    "description": "Get the best value for your money with our affordable cab hire service from Byculla to Pune. Transparent pricing and no hidden fees make us the smart choice for budget travelers."
  },
  {
    "name": "Verified Drivers Byculla to Pune",
    "description": "Your safety is our priority. All drivers on the Byculla to Pune route are background-verified and trained to ensure professional and courteous service during your ride."
  },
  {
    "name": "Executive Cab Byculla to Pune",
    "description": "Travel in luxury and style with our executive cabs from Byculla to Pune. Premium vehicles and experienced chauffeurs provide a top-tier experience for business and VIP travelers."
  },
  {
    "name": "Safe Taxi Ride Byculla",
    "description": "Our cabs are regularly sanitized and maintained to ensure a safe and comfortable ride from Byculla to Pune. Drivers adhere to strict safety protocols for your peace of mind."
  },
  {
    "name": "24/7 Cab Booking Byculla",
    "description": "No matter the time, our cabs from Byculla to Pune are available 24/7. Early mornings, late nights, or weekends — we’re ready whenever you need us."
  },
  {
    "name": "Corporate Travel Byculla to Pune",
    "description": "Our corporate travel service offers reliable, comfortable, and timely rides from Byculla to Pune with monthly billing and priority support, perfect for businesses and professionals."
  },
  {
    "name": "Fast Pickup Cab Byculla",
    "description": "In a rush? Use our fast pickup service to get a cab from Byculla to Pune quickly. Perfect for last-minute trips and urgent travel needs."
  },
  {
    "name": "Airport Drop Byculla to Pune",
    "description": "Book our airport drop service from Byculla to Pune for timely and hassle-free transfers. Our drivers assist with luggage and ensure you reach the airport well before your flight."
  }
],
"tableData": [
  ["Byculla to Pune Cab Service", "Online Cab Booking Byculla"],
  ["One-Way Cab Byculla to Pune", "AC Taxi Byculla to Pune"],
  ["Round Trip Taxi Byculla", "Sedan Cab Byculla"],
  ["SUV Cab Byculla to Pune", "Affordable Cab Hire Byculla"],
  ["Verified Drivers Byculla to Pune", "Executive Cab Byculla to Pune"],
  ["24/7 Cab Booking Byculla", "Safe Taxi Ride Byculla"],
  ["Fast Pickup Cab Byculla", "Airport Drop Byculla to Pune"],
  ["Corporate Travel Byculla to Pune", ""]
],



"whychoose": [
  {
    "WhyChooseheading": "Reliable Byculla to Pune Cab Service",
    "WhyChoosedescription": "Trust our Byculla to Pune cab service for timely, dependable transportation. Whether for business or leisure travel, we ensure punctual pickups and smooth drop-offs to make your journey stress-free and comfortable."
  },
  {
    "WhyChooseheading": "Wide Range of Vehicle Options",
    "WhyChoosedescription": "Select from a variety of vehicles including economical sedans, spacious SUVs, and luxury cars, all well-maintained to suit your preferences and group size for a comfortable ride from Byculla to Pune."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing",
    "WhyChoosedescription": "Our pricing for Byculla to Pune cab service is clear and competitive, inclusive of tolls, taxes, and driver charges, with no hidden fees so you can budget your trip effectively."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Drivers",
    "WhyChoosedescription": "Our professional drivers are knowledgeable about the best routes between Byculla and Pune, prioritizing your safety and comfort while providing courteous and helpful service."
  },
  {
    "WhyChooseheading": "Convenient Online Booking",
    "WhyChoosedescription": "Booking your Byculla to Pune cab is simple and quick through our website or app, offering instant confirmation, real-time vehicle tracking, and flexible cancellation or rescheduling policies."
  },
  {
    "WhyChooseheading": "24/7 Customer Support",
    "WhyChoosedescription": "Our dedicated customer support team is available 24/7 to assist you with bookings, answer queries, and provide assistance throughout your Byculla to Pune journey."
  },
  {
    "WhyChooseheading": "Clean and Well-Maintained Vehicles",
    "WhyChoosedescription": "Travel in clean, air-conditioned vehicles that are regularly serviced and sanitized, ensuring a comfortable and safe ride from Byculla to Pune."
  },
  {
    "WhyChooseheading": "Multiple Secure Payment Options",
    "WhyChoosedescription": "Pay easily using credit/debit cards, UPI, wallets, or cash for your Byculla to Pune cab. We provide transparent billing and detailed receipts for a hassle-free payment experience."
  }
]








    }


const faqData = [
    {
        question: "Do you offer cab services from Byculla to Pune?",
        answer: "Yes, Swara Cabs provides reliable and comfortable cab services from Byculla to Pune."
    },
    {
        question: "What is the fare for a cab from Byculla to Pune?",
        answer: "Fares start from ₹6,000 for a sedan. The final fare depends on vehicle type and travel time."
    },
    {
        question: "How can I book a cab from Byculla to Pune?",
        answer: "You can book a cab through our website or call us directly at +91 9697780707."
    },
    {
        question: "What types of vehicles are available for Byculla to Pune trips?",
        answer: "We offer a variety of vehicles including sedans, SUVs, Innova Crysta, and tempo travellers."
    },
    {
        question: "Are tolls and driver charges included in the cab fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included in the fare. No hidden charges."
    },
    {
        question: "Can I book a cab for night travel from Byculla to Pune?",
        answer: "Yes, we provide 24/7 cab services including night travel with a nominal night-time surcharge."
    },
    {
        question: "Is a round trip option available from Byculla to Pune?",
        answer: "Yes, you can book both one-way and round-trip rides as per your convenience."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. Our drivers are professional, trained, and background-verified for your safety."
    },
    {
        question: "Do you offer doorstep pickup in Byculla?",
        answer: "Yes, we provide hassle-free doorstep pickup from any location in Byculla."
    },
    {
        question: "What payment methods can I use?",
        answer: "We accept UPI, cash, debit/credit cards, and all major digital wallets for your convenience."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Nilesh Jadhav',
        review: 'Booked a cab from Byculla to Pune with Swara Cabs. The ride was comfortable, the driver was punctual, and the vehicle was well-maintained.'
    },
    {
        name: 'Ms. Rupal Thakur',
        review: 'Excellent service from Swara Cabs for my Byculla to Pune trip. On-time pickup and smooth journey. Highly recommend!'
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






const bycullaToPuneCabSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Swara Cabs",
  "description": "Trusted Byculla to Pune cab service offering AC taxis, SUVs, sedans with verified drivers, 24/7 online booking, and airport drop service.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Swara Cabs",
    "telephone": "+91 9697780707",
    "url": "https://www.swaracabs.in/byculla-to-pune-cab",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Byculla",
      "addressRegion": "MH",
      "addressCountry": "IN"
    }
  },
  "areaServed": ["Byculla", "Pune"],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://www.swaracabs.in/byculla-to-pune-cab"
  }
};





    return (
        <div>
<Helmet>
  <title>Byculla to Pune Cab Service | AC, SUV & Sedan Taxi | Swara Cabs</title>
  <meta
    name="description"
    content="Book AC taxis, SUVs, and sedans from Byculla to Pune with verified drivers, affordable fares, fast pickups, airport drops, and 24/7 online cab booking."
  />
  <meta
    name="keywords"
    content="Byculla to Pune Cab Service, AC Taxi Byculla to Pune, Online Cab Booking Byculla, One-Way Cab Byculla to Pune, Round Trip Taxi Byculla, SUV Cab Byculla to Pune, Sedan Cab Byculla, Affordable Cab Hire Byculla, Verified Drivers Byculla to Pune, Executive Cab Byculla to Pune, Safe Taxi Ride Byculla, 24/7 Cab Booking Byculla, Corporate Travel Byculla to Pune, Fast Pickup Cab Byculla, Airport Drop Byculla to Pune"
  />
  <script type="application/ld+json">
    {JSON.stringify(bycullaToPuneCabSchema)}
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
                            <img src='/images/keyword/53.jpg' alt='img' />
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

export default Bycullatopunecabservice;