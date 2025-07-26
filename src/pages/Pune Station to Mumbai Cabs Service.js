
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Punestationtomumbaicabservice() {



    const cardData =
    {
        keyword: 'Pune Station to Mumbai Cabs Service',
        heading: 'Swara Cabs : Pune Station to Mumbai Cabs Service',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Pune Station to Mumbai. Mumbai, Maharashtra’s vibrant commercial and cultural capital, is renowned for its iconic skyline, bustling streets, and dynamic urban life. Whether you’re traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a smooth and hassle-free experience. The road distance from Pune Station to Mumbai is approximately 150 kilometers via the Expressway, with a travel time of around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

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
        "name": "Pune Station to Mumbai Cabs Service",
        "description": "Travel from Pune Railway Station to Mumbai with ease using our dedicated cab service. We provide timely pickups, comfortable vehicles, and courteous drivers to ensure your journey is seamless and enjoyable. Perfect for travelers arriving by train and heading straight to Mumbai."
    },
    {
        "name": "Cabs from Pune Railway Station to Mumbai",
        "description": "Just arrived at Pune Station? Book a reliable cab to Mumbai directly from the railway terminal. We offer instant booking, easy meet-and-greet service at the platform exit, and a variety of vehicle options to suit your travel preferences."
    },
    {
        "name": "Online Cab Booking Pune Station",
        "description": "Skip the hassle of standing in queues or looking for a cab. Use our online booking platform to reserve a cab from Pune Station to Mumbai in just a few clicks. Real-time driver tracking and instant confirmation included."
    },
    {
        "name": "AC Taxi Pune Station to Mumbai",
        "description": "Enjoy a cool and relaxed ride with our AC taxi service from Pune Station to Mumbai. Ideal for long-distance travel, our air-conditioned cabs provide a refreshing environment, especially during hot or humid days."
    },
    {
        "name": "One-Way Taxi Pune Station",
        "description": "Need a one-way drop to Mumbai? We offer cost-effective one-way taxi services from Pune Station with no hidden return fare. Ideal for airport transfers, work trips, or moving to Mumbai."
    },
    {
        "name": "Round Trip Pune Station to Mumbai",
        "description": "Planning to return the same day or within a few days? Our round-trip taxi service offers flexibility, reliability, and savings. Choose your return time and enjoy stress-free travel both ways between Pune Station and Mumbai."
    },
    {
        "name": "Pune Station to Mumbai Airport Cab",
        "description": "Catch your flight on time with our dedicated airport cab service from Pune Station to Mumbai Airport. Our drivers are punctual, familiar with expressway routes, and track flight timings to adjust drop-offs accordingly."
    },
    {
        "name": "Sedan Cab Pune Station to Mumbai",
        "description": "Travel in comfort with our sedan cab services from Pune Station. Perfect for solo travelers or small families, our sedans offer great mileage, smooth rides, and a refined travel experience at an affordable cost."
    },
    {
        "name": "SUV Taxi Pune Station",
        "description": "For larger groups or passengers with luggage, our SUV taxi from Pune Station to Mumbai is the ideal choice. Enjoy extra legroom, luggage space, and a high-seating position for a premium long-distance journey."
    },
    {
        "name": "Verified Driver Pune Station to Mumbai",
        "description": "Your safety is our priority. All our drivers are background-verified, trained, and experienced in long-distance travel. Travel with peace of mind knowing you're in safe hands for your trip from Pune Station to Mumbai."
    },
    {
        "name": "Corporate Cab Service Pune Station",
        "description": "Heading to Mumbai for a business meeting? Our corporate cab service ensures punctuality, discretion, and professional drivers. Choose from executive sedans or premium SUVs for a polished business travel experience."
    },
    {
        "name": "Affordable Fare Pune Station",
        "description": "Looking for budget-friendly options? We offer the most competitive rates from Pune Station to Mumbai without compromising on quality. No surge pricing — just honest, affordable fares with clean vehicles and courteous service."
    },
    {
        "name": "Executive Cab Hire Pune Station",
        "description": "Hire an executive cab from Pune Station to Mumbai and travel in style. Our executive fleet includes modern sedans and SUVs with plush interiors, perfect for business professionals and premium travelers."
    },
    {
        "name": "24/7 Cab Pune Station to Mumbai",
        "description": "Need to travel at midnight or early morning? Our 24/7 cab service from Pune Station to Mumbai ensures you always have a ride, no matter the time. Book anytime, anywhere, and we’ll be ready to pick you up."
    },
    {
        "name": "Safe Taxi from Pune Station to Mumbai",
        "description": "Your safety is our top concern. We offer GPS-enabled taxis, regular vehicle sanitization, driver identity verification, and real-time tracking to ensure you reach Mumbai from Pune Station safely and comfortably."
    }
],

"tableData": [
    ["Pune Station to Mumbai Cabs Service", "Cabs from Pune Railway Station to Mumbai"],
    ["Online Cab Booking Pune Station", "AC Taxi Pune Station to Mumbai"],
    ["One-Way Taxi Pune Station", "Round Trip Pune Station to Mumbai"],
    ["Pune Station to Mumbai Airport Cab", "Sedan Cab Pune Station to Mumbai"],
    ["SUV Taxi Pune Station", "Verified Driver Pune Station to Mumbai"],
    ["Corporate Cab Service Pune Station", "Affordable Fare Pune Station"],
    ["Executive Cab Hire Pune Station", "24/7 Cab Pune Station to Mumbai"],
    ["Safe Taxi from Pune Station to Mumbai", ""]
],




"whychoose": [
  {
    "WhyChooseheading": "Direct Pickup from Pune Railway Station",
    "WhyChoosedescription": "Our cab service offers direct pickup from Pune Station platforms or station exits, saving you time and hassle. Whether you’re arriving by train or need to head to Mumbai right after, our drivers are punctual and assist with luggage for a smooth experience."
  },
  {
    "WhyChooseheading": "Comfortable Cabs for Long-Distance Travel",
    "WhyChoosedescription": "Enjoy a relaxed journey to Mumbai in clean, air-conditioned vehicles. We offer sedans, SUVs, Ertigas, and Innovas—all equipped with comfortable seating, ample legroom, and smooth suspension for a pleasant ride after your train journey."
  },
  {
    "WhyChooseheading": "Affordable and Transparent Fare Structure",
    "WhyChoosedescription": "Our Pune Station to Mumbai cab fares are all-inclusive, covering tolls, taxes, and driver charges. You’ll receive a clear fare estimate upfront with no hidden costs, so you can plan your budget with full confidence."
  },
  {
    "WhyChooseheading": "Ideal for Airport Transfers and Business Commutes",
    "WhyChoosedescription": "Heading to Mumbai Airport or a corporate meeting right after arriving in Pune? We offer fast, reliable intercity cab service designed for timely travel, whether it’s a personal trip or a business requirement."
  },
  {
    "WhyChooseheading": "Sanitized and Well-Maintained Vehicles",
    "WhyChoosedescription": "Your safety is our top priority. All our cabs are cleaned and sanitized before each ride, ensuring a hygienic travel environment. Vehicles are also well-maintained for performance, comfort, and reliability."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Chauffeurs",
    "WhyChoosedescription": "Our drivers are polite, punctual, and experienced in long-distance routes. They understand time sensitivity around train and airport transfers, ensuring your journey from Pune Station to Mumbai is on time and stress-free."
  },
  {
    "WhyChooseheading": "24/7 Cab Availability at Pune Station",
    "WhyChoosedescription": "Trains arrive and depart at all hours—and so do we. Book your cab anytime, day or night, with guaranteed on-time pickup and reliable service from Pune Station to any part of Mumbai."
  },
  {
    "WhyChooseheading": "Instant Booking and Real-Time Support",
    "WhyChoosedescription": "Book your Pune Station to Mumbai cab online or through a quick call. Receive instant confirmation, driver contact details, and real-time support throughout your trip to ensure a seamless experience."
  }
]


















    }



const faqData = [
    {
        question: "Do you provide cab services from Pune Station to Mumbai?",
        answer: "Yes, Swara Cabs offers reliable and comfortable cab services from Pune Station to Mumbai, suitable for all travel purposes."
    },
    {
        question: "What is the fare for a cab from Pune Station to Mumbai?",
        answer: "The one-way fare starts at ₹5,500 for sedans. Pricing varies based on vehicle type and time of travel."
    },
    {
        question: "How can I book a cab from Pune Station to Mumbai?",
        answer: "You can book easily online through our website or call +91 9697780707 for instant assistance."
    },
    {
        question: "What types of vehicles are available for this route?",
        answer: "We offer sedans, SUVs, Innova Crysta, and tempo travellers to cater to different group sizes and preferences."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included in the quoted fare with no hidden charges."
    },
    {
        question: "Is night service available from Pune Station to Mumbai?",
        answer: "Yes, our cabs operate 24/7 with a small surcharge for night trips between 10 PM and 6 AM."
    },
    {
        question: "Can I book a round trip from Pune Station to Mumbai?",
        answer: "Yes, round-trip bookings are available with flexible scheduling to suit your plans."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. Our drivers are background-verified and trained for passenger safety and comfort."
    },
    {
        question: "Do you provide airport transfers from Pune Station to Mumbai?",
        answer: "Yes, we specialize in airport drop and pickup services for both domestic and international terminals."
    },
    {
        question: "What payment options do you accept?",
        answer: "We accept UPI, cash, debit/credit cards, and popular digital wallets for convenient payments."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Prakash Joshi',
        review: 'Swara Cabs made my journey from Pune Station to Mumbai very comfortable. The driver was professional and punctual.'
    },
    {
        name: 'Ms. Sneha Patil',
        review: 'Easy booking and smooth ride from Pune Station to Mumbai. Highly recommend Swara Cabs for reliable service.'
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







// const productSchema = {
//   "@context": "https://schema.org",
//   "@type": "Product",
//   "name": "Pune Station to Mumbai Cabs Service",
//   "image": "https://www.swaracabs.in/assets/images/pune-station-to-mumbai-cab.jpg",
//   "description": "Book Pune Station to Mumbai cab service with Swara Cabs. Reliable and safe travel from Pune Railway Station with AC sedans, SUVs, one-way and round-trip options. 24/7 booking and verified drivers.",
//   "brand": {
//     "@type": "Brand",
//     "name": "Swara Cabs"
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "bestRating": "5",
//     "worstRating": "1",
//     "ratingValue": "4.8",
//     "ratingCount": "4568"
//   },
//   "offers": {
//     "@type": "Offer",
//     "priceCurrency": "INR",
//     "price": "2199",
//     "availability": "https://schema.org/InStock",
//     "url": "https://www.swaracabs.in/pune-station-to-mumbai-cab"
//   }
// };


const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune Station to Mumbai Cabs Service",
  "image": "https://www.swaracabs.in/images/keyword/20.jpg",
  "description": "Book AC cabs from Pune Station to Mumbai at ₹2199 with Swara Cabs. Choose sedan or SUV with verified drivers. 24x7 service available for one-way, round trip or airport drop.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "12365"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2199",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/pune-station-to-mumbai-cab"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Verified Passenger"
    }
  },
  "areaServed": {
    "@type": "Place",
    "name": "Pune Railway Station, Mumbai"
  },
  "serviceType": "Railway Station to City Taxi Service"
};



    return (
        <div>
<Helmet>
  <title>Pune Station to Mumbai Cabs  24x7 Booking – Swara Cabs</title>
  <meta 
    name="description" 
    content="Get 24/7 cab from Pune Railway Station to Mumbai with Swara Cabs. AC sedan & SUV options for one-way or round trip from ₹2199. Safe, verified drivers and express booking." 
  />
  <meta 
    name="keywords" 
    content="Pune Station to Mumbai Cabs, Cab Booking Pune Railway Station to Mumbai, One-Way Cab Pune Station to Mumbai, Round Trip Cab Pune Railway Station, Online Taxi Pune Station to Mumbai, AC Sedan Cab Pune to Mumbai, SUV Taxi Pune Railway Station, Pune Station to Mumbai Airport Cab, Verified Driver Cab Pune Station, Safe Ride Cab Pune Station to Mumbai, Corporate Travel Pune Station, Expressway Cab Pune Station, Affordable Taxi Fare Pune to Mumbai"
  />
  <meta property="og:title" content="Pune Station to Mumbai Cabs | AC Taxi from ₹2199 – Swara Cabs" />
  <meta property="og:description" content="Book reliable cabs from Pune Railway Station to Mumbai. Choose from AC sedan or SUV with verified drivers. One-way and round trip starting at ₹2199." />
  <meta property="og:image" content="https://www.swaracabs.in/images/keyword/20.jpg" />
  <meta property="og:url" content="https://www.swaracabs.in/pune-station-to-mumbai-cab" />
  <meta property="og:type" content="website" />

  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>

{/* 
<Helmet>
  <title>Pune Station to Mumbai Cabs Service | 24/7 Booking | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Pune Station to Mumbai cab service with Swara Cabs. Reliable and safe travel from Pune Railway Station with AC sedans, SUVs, one-way and round-trip options. 24/7 booking and verified drivers." 
  />
  <meta 
    name="keywords" 
    content="Pune Station to Mumbai Cabs Service, Cabs from Pune Railway Station to Mumbai, Online Cab Booking Pune Station, AC Taxi Pune Station to Mumbai, One-Way Taxi Pune Station, Round Trip Pune Station to Mumbai, Pune Station to Mumbai Airport Cab, Sedan Cab Pune Station to Mumbai, SUV Taxi Pune Station, Verified Driver Pune Station to Mumbai, Corporate Cab Service Pune Station, Affordable Fare Pune Station, Executive Cab Hire Pune Station, 24/7 Cab Pune Station to Mumbai, Safe Taxi from Pune Station to Mumbai" 
  />
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet> */}

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
                            <img src='/images/keyword/20.jpg' alt='img' />
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

export default Punestationtomumbaicabservice;