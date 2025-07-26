
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Katrajtomumbaicab() {



    const cardData =
    {
        keyword: 'Katraj to Mumbai Cab Service',
        heading: 'Swara Cabs : Katraj to Mumbai Cab Service',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Katraj to Mumbai. Mumbai, Maharashtra’s vibrant commercial and cultural capital, is celebrated for its iconic skyline, bustling streets, and dynamic urban life. Whether you’re traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a seamless and hassle-free experience. The road distance from Katraj to Mumbai is approximately 160 kilometers, with a travel time of around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

        "topPlaces": [
             {
                "title": "Gateway of India",
                "description": "The Gateway of India is one of Mumbai’s most iconic landmarks, built during the British Raj. Overlooking the Arabian Sea, it attracts thousands of tourists and locals alike. The nearby ferry rides to Elephanta Caves and its historical significance make it a must-visit spot in the city."
            },
            {
                "title": "Elephanta Caves",
                "description": "Located on Elephanta Island, a short ferry ride from the Gateway of India, these ancient rock-cut caves are dedicated to Lord Shiva. The site features impressive sculptures and carvings, with the massive Trimurti statue being the main highlight."
            },
             {
                "title": "Marine Drive",
                "description": "Also known as the Queen’s Necklace, Marine Drive is a 3.6 km long boulevard that runs along the coast of South Mumbai. It's perfect for evening strolls, watching sunsets, or just enjoying the sea breeze. The view of the city’s skyline at night is breathtaking."
            },  
             {
                "title": "Chhatrapati Shivaji Maharaj Terminus",
                "description": "A UNESCO World Heritage Site, this historic railway station is an architectural marvel that blends Victorian Gothic and Indian styles. It serves as a bustling transit hub and a magnificent symbol of Mumbai’s colonial past."
            },
            {
                "title": "Siddhivinayak Temple",
                "description": "Dedicated to Lord Ganesha, Siddhivinayak Temple in Prabhadevi is one of the most revered temples in Mumbai. The temple is known for its spiritual atmosphere, beautiful architecture, and daily rituals that attract thousands of devotees every day."
            },
            {
                "title": "Colaba Causeway",
                "description": "Colaba Causeway is a vibrant shopping street in South Mumbai, famous for its street shops, fashion boutiques, cafés, and old-world charm. It’s a great place to shop for quirky accessories, clothes, antiques, and experience Mumbai’s bustling vibe."
            },
            {
                "title": "Juhu Beach",
                "description": "Juhu Beach is one of the most popular and accessible beaches in Mumbai. Known for its street food stalls offering bhel puri, pav bhaji, and more, it’s a favorite evening hangout spot for locals and tourists alike. It also offers a great view of the sunset."
            },
            {
                "title": "Haji Ali Dargah",
                "description": "Built on an islet off the coast of Worli, Haji Ali Dargah is a revered shrine visited by people of all faiths. Accessible via a narrow causeway, it offers a spiritual experience alongside stunning views of the sea and the city skyline."
            },
            {
                "title": "Chor Bazaar",
                "description": "One of the largest and oldest flea markets in India, Chor Bazaar is famous for antiques, vintage collectibles, old Bollywood posters, and rare items. It’s a paradise for treasure hunters and those who enjoy exploring the quirky and historic side of Mumbai."
            }
        ],

"services": [
    {
        "name": "Katraj to Mumbai Cab Service",
        "description": "Travel conveniently from Katraj to Mumbai with our reliable cab service. Whether you're heading to the city for work, vacation, or a family event, we offer clean, comfortable cars and experienced drivers to make your journey pleasant and stress-free. Enjoy a smooth ride with well-maintained vehicles and on-time pickups."
    },
    {
        "name": "Book Cab from Katraj to Mumbai",
        "description": "Looking to book a cab from Katraj to Mumbai? Our quick and easy booking process ensures you get a confirmed ride in minutes. We offer transparent pricing, flexible scheduling, and a variety of vehicle options to suit your needs — from solo travelers to group trips."
    },
    {
        "name": "AC Cab Katraj to Mumbai",
        "description": "Beat the heat with our air-conditioned cab services from Katraj to Mumbai. Whether it's summer or a long journey on the expressway, our AC cabs ensure a cool and comfortable environment throughout the ride. Perfect for families, professionals, or tourists."
    },
    {
        "name": "One-Way Taxi Katraj to Mumbai",
        "description": "Need a one-way trip to Mumbai? Our one-way taxi service from Katraj is affordable and convenient. You only pay for the drop, with no hidden return fare. Ideal for those relocating, business meetings, or catching a flight from Mumbai Airport."
    },
    {
        "name": "Affordable Cab Katraj to Mumbai",
        "description": "Looking for budget-friendly travel without compromising comfort? Our affordable cab options from Katraj to Mumbai offer the perfect balance of price and quality. Enjoy economical fares, clean cars, and courteous drivers — all in one service."
    },
    {
        "name": "Round Trip Cab Katraj to Mumbai",
        "description": "Planning a same-day return or a short stay in Mumbai? Our round trip cab service from Katraj provides flexible pickup and return scheduling, so you can travel conveniently without worrying about finding transport on the way back."
    },
    {
        "name": "Katraj to Mumbai Online Booking",
        "description": "Book your cab online from Katraj to Mumbai with our user-friendly platform. Get instant confirmation, track your driver, and choose your preferred cab type — all from the comfort of your home or office. Hassle-free digital cab booking at its best."
    },
    {
        "name": "Katraj to Mumbai Airport Drop",
        "description": "Catching a flight from Mumbai Airport? Our airport drop services from Katraj ensure you reach on time. With trained drivers who know the fastest and safest routes, plus on-time pickups, we make airport transfers smooth and worry-free."
    },
    {
        "name": "SUV Taxi Katraj to Mumbai",
        "description": "For families or groups with extra luggage, our SUV taxi service from Katraj to Mumbai offers spacious and comfortable travel. Enjoy the luxury of extra legroom, higher seating, and a smoother ride — perfect for long-distance trips on highways."
    },
    {
        "name": "Katraj to Mumbai Sedan Taxi",
        "description": "Our sedan taxis from Katraj to Mumbai are a great choice for solo travelers, couples, or small families. Enjoy a stylish, comfortable, and fuel-efficient ride, with professional service and clean interiors to enhance your travel experience."
    },
    {
        "name": "Verified Driver Katraj Cab",
        "description": "Your safety is our priority. All our cab drivers from Katraj to Mumbai are background-verified and trained in safe driving practices. You can relax knowing you're in good hands, whether it's a daytime ride or a night journey."
    },
    {
        "name": "Corporate Travel Cab Katraj",
        "description": "Book executive cabs for business trips from Katraj to Mumbai. We offer professional drivers, clean and quiet vehicles, and on-time service — ideal for meetings, conferences, and airport transfers for your corporate team."
    },
    {
        "name": "Safe Ride Katraj to Mumbai",
        "description": "Travel safely with our Katraj to Mumbai cab service. Our vehicles are regularly sanitized, GPS-enabled, and driven by trained professionals. Choose us for a worry-free journey with safety protocols in place."
    },
    {
        "name": "Expressway Cab Katraj to Mumbai",
        "description": "Enjoy a quick and efficient ride via the Mumbai–Pune Expressway. Our cabs are expressway-ready, ensuring you experience minimal traffic, smooth roads, and a faster travel time from Katraj to Mumbai."
    },
    {
        "name": "24/7 Taxi Katraj to Mumbai",
        "description": "Need to travel at odd hours? We offer round-the-clock cab services from Katraj to Mumbai. Whether it's early morning airport travel or a late-night drop, you can rely on us for safe and timely transportation."
    }
],

"tableData": [
    ["Katraj to Mumbai Cab Service", "Book Cab from Katraj to Mumbai"],
    ["AC Cab Katraj to Mumbai", "One-Way Taxi Katraj to Mumbai"],
    ["Affordable Cab Katraj to Mumbai", "Round Trip Cab Katraj to Mumbai"],
    ["Katraj to Mumbai Online Booking", "Katraj to Mumbai Airport Drop"],
    ["SUV Taxi Katraj to Mumbai", "Katraj to Mumbai Sedan Taxi"],
    ["Verified Driver Katraj Cab", "Corporate Travel Cab Katraj"],
    ["Safe Ride Katraj to Mumbai", "Expressway Cab Katraj to Mumbai"],
    ["24/7 Taxi Katraj to Mumbai", ""]
],




"whychoose": [
  {
    "WhyChooseheading": "Convenient Pickup from Katraj to Mumbai",
    "WhyChoosedescription": "Our cab service offers reliable doorstep pickup right from Katraj, so you don’t have to worry about reaching a pickup point. We ensure timely and smooth departures from your exact location to your destination in Mumbai."
  },
  {
    "WhyChooseheading": "Comfortable and Spacious Vehicles",
    "WhyChoosedescription": "Choose from a variety of cabs including clean sedans, Ertigas, and Innova Crystas—all equipped with air-conditioning, plush seating, and ample legroom. Perfect for long journeys, family travel, and business commutes."
  },
  {
    "WhyChooseheading": "Transparent and Fixed Fare Pricing",
    "WhyChoosedescription": "Our Katraj to Mumbai cab fares are all-inclusive—covering tolls, driver allowance, and taxes. No hidden charges, no last-minute surprises—just honest and upfront pricing that fits your budget."
  },
  {
    "WhyChooseheading": "Professional and Trained Drivers",
    "WhyChoosedescription": "Our experienced chauffeurs are courteous, punctual, and well-versed with the Pune–Mumbai route. They follow all safety protocols and ensure a smooth, pleasant travel experience from start to finish."
  },
  {
    "WhyChooseheading": "24/7 Cab Availability from Katraj",
    "WhyChoosedescription": "Need to travel late at night or early in the morning? We operate 24/7 with full support, so you can book your cab at any hour and count on us to be there on time, every time."
  },
  {
    "WhyChooseheading": "Sanitized and Well-Maintained Cabs",
    "WhyChoosedescription": "Your safety is our priority. All our cabs are sanitized before each trip and maintained regularly to ensure a clean, healthy, and safe ride every time you travel from Katraj to Mumbai."
  },
  {
    "WhyChooseheading": "Ideal for Airport and Corporate Travel",
    "WhyChoosedescription": "Whether you’re heading to Mumbai Airport, attending a meeting, or planning a personal trip, our cabs are tailored to meet all your travel needs—efficient, comfortable, and timely."
  },
  {
    "WhyChooseheading": "Easy Online Booking and Instant Confirmation",
    "WhyChoosedescription": "Book your cab online within minutes through our website or app. Get real-time booking confirmation, driver details, and support to manage your trip effortlessly."
  }
]


















    }



const faqData = [
    {
        question: "Do you offer cab services from Katraj to Mumbai?",
        answer: "Yes, Swara Cabs provides reliable and comfortable cab services from Katraj, Pune to Mumbai for all travel needs."
    },
    {
        question: "What is the fare for a Katraj to Mumbai cab?",
        answer: "The one-way fare starts at ₹5,500 for a sedan, with prices varying by vehicle type and travel time."
    },
    {
        question: "How do I book a cab from Katraj to Mumbai?",
        answer: "You can book easily online through our website or call +91 9697780707 for quick assistance."
    },
    {
        question: "What vehicle options are available for Katraj to Mumbai trips?",
        answer: "We offer sedans, SUVs, Innova Crysta, and tempo travellers to accommodate different group sizes."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, our fares are all-inclusive and cover tolls, taxes, and driver allowances with no hidden fees."
    },
    {
        question: "Is night travel service available from Katraj to Mumbai?",
        answer: "Yes, we operate 24/7 with a nominal surcharge for trips between 10 PM and 6 AM."
    },
    {
        question: "Can I book a round trip cab from Katraj to Mumbai?",
        answer: "Yes, round-trip bookings are available with flexible scheduling to suit your needs."
    },
    {
        question: "Is Swara Cabs safe for long-distance travel?",
        answer: "Absolutely. All drivers are background-verified and trained to ensure passenger safety and comfort."
    },
    {
        question: "Do you provide airport transfers from Katraj to Mumbai?",
        answer: "Yes, we specialize in timely and comfortable airport drop and pick-up services."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept UPI, cash, debit/credit cards, and popular digital wallets for easy payment."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Sanjay More',
        review: 'Swara Cabs provided an excellent cab service from Katraj to Mumbai. The driver was punctual and courteous.'
    },
    {
        name: 'Ms. Aarti Deshpande',
        review: 'Clean car and smooth ride from Katraj to Mumbai. Highly recommend Swara Cabs for reliable travel.'
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
  "name": "Katraj to Mumbai Cab Service",
  "image": "https://www.swaracabs.in/assets/images/katraj-to-mumbai-cab.jpg",
  "description": "Book Katraj to Mumbai cab service with Swara Cabs for a smooth and affordable journey. Choose AC sedans or SUVs for one-way, round-trip, and airport transfers. Verified drivers and 24/7 availability.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "9858"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2299",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/katraj-to-mumbai-cab"
  }
};






    return (
        <div>
<Helmet>
  <title>Katraj to Mumbai Cab Service | Affordable & Reliable | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Katraj to Mumbai cab service with Swara Cabs for a smooth and affordable journey. Choose AC sedans or SUVs for one-way, round-trip, and airport transfers. Verified drivers and 24/7 availability." 
  />
  <meta 
    name="keywords" 
    content="Katraj to Mumbai Cab Service, Book Cab from Katraj to Mumbai, AC Cab Katraj to Mumbai, One-Way Taxi Katraj to Mumbai, Affordable Cab Katraj to Mumbai, Round Trip Cab Katraj to Mumbai, Katraj to Mumbai Online Booking, Katraj to Mumbai Airport Drop, SUV Taxi Katraj to Mumbai, Katraj to Mumbai Sedan Taxi, Verified Driver Katraj Cab, Corporate Travel Cab Katraj, Safe Ride Katraj to Mumbai, Expressway Cab Katraj to Mumbai, 24/7 Taxi Katraj to Mumbai" 
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
                            <img src='/images/keyword/19.jpg' alt='img' />
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

export default Katrajtomumbaicab;