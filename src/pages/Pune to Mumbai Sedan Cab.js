
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Punetomumbaisedancabs() {



    const cardData =
    {
        keyword: 'Pune to Mumbai Sedan Cab',
        heading: 'Swara Cabs : Pune to Mumbai Sedan Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable sedan cab services for your journey from Pune to Mumbai. Mumbai, Maharashtra’s dynamic commercial and cultural capital, is known for its iconic skyline, bustling streets, and rich urban life. Whether you are traveling solo, heading to a business meeting, or catching a flight, our dependable sedans—such as the Swift Dzire or Honda Amaze—provide a smooth, comfortable, and hassle-free ride. The distance from Pune to Mumbai via the Expressway is approximately 150 kilometers, typically covered in about 3 hours depending on traffic conditions. With our well-maintained sedan fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and pleasant travel experience tailored to your needs.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

        "topPlaces": [
            {
                "title": "Chhatrapati Shivaji Maharaj Terminus",
                "description": "A UNESCO World Heritage Site, this historic railway station is an architectural marvel that blends Victorian Gothic and Indian styles. It serves as a bustling transit hub and a magnificent symbol of Mumbai’s colonial past."
            },
            {
                "title": "Siddhivinayak Temple",
                "description": "Dedicated to Lord Ganesha, Siddhivinayak Temple in Prabhadevi is one of the most revered temples in Mumbai. The temple is known for its spiritual atmosphere, beautiful architecture, and daily rituals that attract thousands of devotees every day."
            },
            {
                "title": "Marine Drive",
                "description": "Also known as the Queen’s Necklace, Marine Drive is a 3.6 km long boulevard that runs along the coast of South Mumbai. It's perfect for evening strolls, watching sunsets, or just enjoying the sea breeze. The view of the city’s skyline at night is breathtaking."
            },  
            {
                "title": "Colaba Causeway",
                "description": "Colaba Causeway is a vibrant shopping street in South Mumbai, famous for its street shops, fashion boutiques, cafés, and old-world charm. It’s a great place to shop for quirky accessories, clothes, antiques, and experience Mumbai’s bustling vibe."
            },
             {
                "title": "Gateway of India",
                "description": "The Gateway of India is one of Mumbai’s most iconic landmarks, built during the British Raj. Overlooking the Arabian Sea, it attracts thousands of tourists and locals alike. The nearby ferry rides to Elephanta Caves and its historical significance make it a must-visit spot in the city."
            },
            {
                "title": "Elephanta Caves",
                "description": "Located on Elephanta Island, a short ferry ride from the Gateway of India, these ancient rock-cut caves are dedicated to Lord Shiva. The site features impressive sculptures and carvings, with the massive Trimurti statue being the main highlight."
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
        "name": "Pune to Mumbai Sedan Cab",
        "description": "Travel comfortably and efficiently from Pune to Mumbai with our reliable Sedan cab service. Our sedans offer a perfect blend of style, comfort, and affordability, making them ideal for business trips, family outings, and airport transfers."
    },
    {
        "name": "Book Sedan Cab Pune to Mumbai",
        "description": "Easily book your Sedan cab from Pune to Mumbai online or via phone. Our seamless booking process ensures you get a confirmed ride quickly with flexible pickup options and professional drivers to make your journey smooth and stress-free."
    },
    {
        "name": "AC Sedan Pune to Mumbai",
        "description": "Enjoy a cool and refreshing ride with our fully air-conditioned Sedan cabs. Equipped with modern AC systems and clean interiors, our cabs ensure a pleasant journey, especially during the hot summer months or monsoon season."
    },
    {
        "name": "Affordable Sedan Cab Pune",
        "description": "Looking for an economical yet comfortable travel option? Our affordable Sedan cab service from Pune to Mumbai provides competitive pricing without compromising on quality or safety, perfect for budget-conscious travelers."
    },
    {
        "name": "Online Sedan Booking Pune to Mumbai",
        "description": "Book your Sedan cab conveniently through our online platform. Instant confirmation, transparent pricing, and easy cancellation policies make your travel planning hassle-free and convenient."
    },
    {
        "name": "Sedan Car Hire Pune to Mumbai",
        "description": "Hire a Sedan car with or without a driver for your Pune to Mumbai trip. Our rental service offers flexible packages, allowing you to choose hourly, one-way, or round-trip options tailored to your needs."
    },
    {
        "name": "Pune to Mumbai Executive Sedan",
        "description": "Travel in style with our Executive Sedan service designed for corporate clients and business travelers. Experience professionalism, punctuality, and premium comfort on your journey from Pune to Mumbai."
    },
    {
        "name": "One-Way Sedan Pune to Mumbai",
        "description": "If you need a direct one-way ride, our One-Way Sedan cab service offers point-to-point transportation from Pune to Mumbai, ensuring timely pickups and safe drop-offs without the need to book return trips."
    },
    {
        "name": "Round Trip Sedan Cab Pune",
        "description": "Our round-trip Sedan cab service is perfect for travelers planning a return journey between Pune and Mumbai. Enjoy flexible scheduling and a dedicated driver for both legs of your trip."
    },
    {
        "name": "Pune Airport to Mumbai Sedan Taxi",
        "description": "Travel from Pune Airport to Mumbai with ease in our comfortable Sedan taxis. Our professional drivers track your flight timings and ensure timely pickups, so you never miss a connection or appointment."
    },
    {
        "name": "Corporate Sedan Cab Pune",
        "description": "Designed for corporate travel, our Sedan cabs provide a professional and discreet service. Ideal for meetings, conferences, and client visits, our cabs guarantee a smooth and efficient ride."
    },
    {
        "name": "24/7 Sedan Booking Pune to Mumbai",
        "description": "Our Sedan cab booking service operates round the clock, providing you with the flexibility to schedule rides anytime, day or night. Whether it's an early morning flight or late-night meeting, we’ve got you covered."
    },
    {
        "name": "Sedan Taxi Fare Pune to Mumbai",
        "description": "Get transparent and competitive pricing on our Sedan taxi services. Our fare structure is clear and upfront, with no hidden charges, so you can plan your budget confidently for your Pune to Mumbai journey."
    },
    {
        "name": "Verified Sedan Driver Pune",
        "description": "Safety comes first with our verified and experienced drivers. Each driver undergoes thorough background checks and training to ensure a safe, courteous, and reliable ride every time."
    },
    {
        "name": "Safe Sedan Ride Pune to Mumbai",
        "description": "Your safety is our priority. Our Sedan cabs are regularly inspected and sanitized, with drivers following strict safety protocols to ensure a secure and comfortable travel experience from Pune to Mumbai."
    }
],

"tableData": [
    ["Pune to Mumbai Sedan Cab", "Book Sedan Cab Pune to Mumbai"],
    ["AC Sedan Pune to Mumbai", "Affordable Sedan Cab Pune"],
    ["Online Sedan Booking Pune to Mumbai", "Sedan Car Hire Pune to Mumbai"],
    ["Pune to Mumbai Executive Sedan", "One-Way Sedan Pune to Mumbai"],
    ["Round Trip Sedan Cab Pune", "Pune Airport to Mumbai Sedan Taxi"],
    ["Corporate Sedan Cab Pune", "24/7 Sedan Booking Pune to Mumbai"],
    ["Sedan Taxi Fare Pune to Mumbai", "Verified Sedan Driver Pune"],
    ["Safe Sedan Ride Pune to Mumbai", ""]
],




"whychoose": [
  {
    "WhyChooseheading": "Budget-Friendly Pune to Mumbai Sedan Cab",
    "WhyChoosedescription": "Our sedan cab service offers the perfect blend of comfort and affordability for your Pune to Mumbai journey. Whether you're traveling solo or as a couple, a sedan ensures a smooth and economical ride without compromising on quality."
  },
  {
    "WhyChooseheading": "Ideal for Solo, Couple, or Small Group Travel",
    "WhyChoosedescription": "Sedan cabs are perfect for 2-4 passengers, offering cozy interiors, decent luggage space, and optimal fuel efficiency. It’s the preferred choice for airport transfers, business meetings, or a quick city-to-city commute."
  },
  {
    "WhyChooseheading": "Clean, Comfortable & Air-Conditioned Vehicles",
    "WhyChoosedescription": "Our sedans are fully air-conditioned and well-maintained, with neat seating and sanitized interiors. You can enjoy a peaceful and cool ride even during hot or crowded travel hours on the Pune–Mumbai expressway."
  },
  {
    "WhyChooseheading": "Professional and Verified Drivers",
    "WhyChoosedescription": "All sedan cab bookings come with experienced, courteous drivers who are trained for long-distance routes. They follow safe driving practices and prioritize your comfort and punctuality throughout the trip."
  },
  {
    "WhyChooseheading": "All-Inclusive and Transparent Pricing",
    "WhyChoosedescription": "With no hidden charges, our Pune to Mumbai sedan fares include all tolls, driver charges, and taxes. You'll receive a clear cost breakdown upfront, so you can plan your trip confidently without worrying about extra fees."
  },
  {
    "WhyChooseheading": "Perfect for Airport Transfers and Daily Commutes",
    "WhyChoosedescription": "Need a ride to or from Mumbai Airport? Or commuting for work? Our sedan cabs are designed for such needs—quick, comfortable, and cost-efficient while maintaining a premium travel feel."
  },
  {
    "WhyChooseheading": "24/7 Cab Availability and Customer Support",
    "WhyChoosedescription": "Book a sedan cab anytime—day or night. We operate round the clock with full support, ensuring that you never miss a flight, meeting, or important event due to transportation issues."
  },
  {
    "WhyChooseheading": "Quick Online Booking & Flexible Scheduling",
    "WhyChoosedescription": "Booking a Pune to Mumbai sedan cab is fast and hassle-free through our website or app. You can schedule pickups at your convenience, modify trips, and even cancel easily with full support from our team."
  }
]

















    }



const faqData = [
    {
        question: "Do you provide sedan cab service from Pune to Mumbai?",
        answer: "Yes, Swara Cabs offers affordable and comfortable sedan cabs for one-way and round-trip travel from Pune to Mumbai."
    },
    {
        question: "What is the fare for a Pune to Mumbai sedan cab?",
        answer: "The one-way fare for a sedan cab starts from ₹5,500. Final pricing may vary based on exact pickup point and travel time."
    },
    {
        question: "Which sedan models are available for Pune to Mumbai trips?",
        answer: "We offer well-maintained sedans like Dzire, Etios, and Amaze that are ideal for up to 4 passengers with luggage."
    },
    {
        question: "How can I book a sedan cab from Pune to Mumbai?",
        answer: "You can book directly on our website or call +91 9697780707 for quick and easy booking assistance."
    },
    {
        question: "Is the fare inclusive of tolls and driver charges?",
        answer: "Yes, the quoted fare is all-inclusive and covers tolls, driver allowance, and taxes. No hidden charges."
    },
    {
        question: "Can I book a sedan cab for an airport drop in Mumbai?",
        answer: "Absolutely. Our sedan cabs are perfect for hassle-free airport drops to Mumbai Domestic or International Airports."
    },
    {
        question: "Do you provide 24/7 sedan cab service?",
        answer: "Yes, Swara Cabs operates round the clock. You can book a cab at any time, including late-night and early-morning hours."
    },
    {
        question: "Is the sedan comfortable for long-distance travel?",
        answer: "Yes, our sedans are air-conditioned, clean, and comfortable — ideal for a 3–4 hour journey from Pune to Mumbai."
    },
    {
        question: "Can I book a round trip in a sedan?",
        answer: "Yes, we offer round-trip packages for sedans as well. You can schedule your return trip at your convenience."
    },
    {
        question: "What payment options are available?",
        answer: "We accept UPI, cash, debit/credit cards, and digital wallets for a seamless payment experience."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Rohan Shetty',
        review: 'Booked a sedan cab from Pune to Mumbai with Swara Cabs. The car was clean, driver was polite, and journey was very smooth.'
    },
    {
        name: 'Ms. Anjali Bansode',
        review: 'Affordable and reliable sedan service. My Pune to Mumbai trip with Swara Cabs was timely and comfortable. Highly recommend!'
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
//   "name": "Pune to Mumbai Sedan Cab",
//   "image": "https://www.swaracabs.in/assets/images/pune-to-mumbai-sedan-cab.jpg",
//   "description": "Book Pune to Mumbai Sedan Cab with Swara Cabs for a smooth, AC ride ideal for individuals, couples, or business travel. One-way and round-trip options available with verified drivers and affordable fares.",
//   "brand": {
//     "@type": "Brand",
//     "name": "Swara Cabs"
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "bestRating": "5",
//     "worstRating": "1",
//     "ratingValue": "4.7",
//     "ratingCount": "9685"
//   },
//   "offers": {
//     "@type": "Offer",
//     "priceCurrency": "INR",
//     "price": "2099",
//     "availability": "https://schema.org/InStock",
//     "url": "https://www.swaracabs.in/pune-to-mumbai-sedan-cab"
//   }
// };

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Mumbai Sedan Cab",
  "image": "https://www.swaracabs.in/assets/images/pune-to-mumbai-sedan-cab.jpg",
  "description": "Book a smooth AC Sedan Cab from Pune to Mumbai at ₹2099. Ideal for business, airport, or couple travel. One-way & round trip cabs with verified drivers. 24/7 booking & affordable fixed fare.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "9685"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2099",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/pune-to-mumbai-sedan-cab"
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
    "name": "Pune, Mumbai"
  },
  "serviceType": "AC Sedan Cab Service"
};




    return (
        <div>

<Helmet>
  <title>Pune to Mumbai Sedan Cab | AC Taxi from ₹2099 – Swara Cabs</title>
  <meta 
    name="description" 
    content="Book AC Sedan Cab from Pune to Mumbai at just ₹2099 with Swara Cabs. Perfect for business, couple or airport travel. One-way & round trip available. Verified drivers & 24/7 service." 
  />
  <meta 
    name="keywords" 
    content="Pune to Mumbai Sedan Cab, AC Sedan Taxi Pune Mumbai, Book Sedan Pune to Mumbai, Verified Sedan Driver Pune, Pune to Mumbai Executive Sedan Cab, Affordable Sedan Hire Pune, 24x7 Sedan Cab Pune to Mumbai, One-Way Sedan Taxi Pune, Round Trip Sedan Booking Pune Mumbai, Pune Airport to Mumbai Sedan Car, Online Sedan Booking Pune Mumbai, Safe Sedan Ride Pune to Mumbai, Fixed Fare Sedan Pune Mumbai"
  />
  <meta property="og:title" content="Pune to Mumbai Sedan Cab | Online AC Taxi Booking – Swara Cabs" />
  <meta property="og:description" content="Get comfortable AC Sedan from Pune to Mumbai. One-way or round trip at fixed ₹2099 fare. Book online 24/7 with verified drivers at Swara Cabs." />
  <meta property="og:image" content="https://www.swaracabs.in/assets/images/pune-to-mumbai-sedan-cab.jpg" />
  <meta property="og:url" content="https://www.swaracabs.in/pune-to-mumbai-sedan-cab" />
  <meta property="og:type" content="website" />
  
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>


{/* <Helmet>
  <title>Pune to Mumbai Sedan Cab | AC Comfort at Best Price | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Pune to Mumbai Sedan Cab with Swara Cabs for a smooth, AC ride ideal for individuals, couples, or business travel. One-way and round-trip options available with verified drivers and affordable fares." 
  />
  <meta 
    name="keywords" 
    content="Pune to Mumbai Sedan Cab, Book Sedan Cab Pune to Mumbai, AC Sedan Pune to Mumbai, Affordable Sedan Cab Pune, Online Sedan Booking Pune to Mumbai, Sedan Car Hire Pune to Mumbai, Pune to Mumbai Executive Sedan, One-Way Sedan Pune to Mumbai, Round Trip Sedan Cab Pune, Pune Airport to Mumbai Sedan Taxi, Corporate Sedan Cab Pune, 24/7 Sedan Booking Pune to Mumbai, Sedan Taxi Fare Pune to Mumbai, Verified Sedan Driver Pune, Safe Sedan Ride Pune to Mumbai" 
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
                            <img src='/images/keyword/16.jpg' alt='img' />
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

export default Punetomumbaisedancabs;