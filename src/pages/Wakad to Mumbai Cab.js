
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Wakadtomumbaicab() {



    const cardData =
    {
        keyword: 'Wakad to Mumbai Cab',
        heading: 'Swara Cabs : Wakad to Mumbai Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Wakad to Mumbai. Mumbai, Maharashtra’s vibrant commercial and cultural capital, is known for its iconic skyline, diverse attractions, and dynamic urban life. Whether you are traveling for a business meeting, a family visit, or an airport transfer, Swara Cabs ensures a smooth and hassle-free experience. The distance from Wakad to Mumbai is approximately 160 kilometers, with a travel time of around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet and experienced drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

        "topPlaces": [
            {
                "title": "Elephanta Caves",
                "description": "Located on Elephanta Island, a short ferry ride from the Gateway of India, these ancient rock-cut caves are dedicated to Lord Shiva. The site features impressive sculptures and carvings, with the massive Trimurti statue being the main highlight."
            },
            {
                "title": "Juhu Beach",
                "description": "Juhu Beach is one of the most popular and accessible beaches in Mumbai. Known for its street food stalls offering bhel puri, pav bhaji, and more, it’s a favorite evening hangout spot for locals and tourists alike. It also offers a great view of the sunset."
            },
            {
                "title": "Gateway of India",
                "description": "The Gateway of India is one of Mumbai’s most iconic landmarks, built during the British Raj. Overlooking the Arabian Sea, it attracts thousands of tourists and locals alike. The nearby ferry rides to Elephanta Caves and its historical significance make it a must-visit spot in the city."
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
        "name": "Wakad to Mumbai Cab",
        "description": "Swara Cab offers smooth and reliable cab service from Wakad to Mumbai, ideal for business, leisure, or family trips. Our drivers ensure timely pickup and safe drop-off anywhere in Mumbai. You can expect a comfortable journey in clean, well-maintained vehicles with courteous service. Whether it’s a planned trip or a last-minute need, we’ve got you covered. Book today and enjoy a stress-free ride from Wakad to Mumbai."
    },
    {
        "name": "Wakad to Mumbai Online Taxi",
        "description": "Book your taxi from Wakad to Mumbai online in just a few clicks with Swara Cab. Our easy-to-use platform allows instant confirmation, flexible time slots, and transparent fares. Avoid long wait times and unreliable providers by booking with us. From small cars to premium rides, everything is available online. Enjoy fast booking and dependable service, round the clock."
    },
    {
        "name": "AC Cabs Wakad to Mumbai",
        "description": "Ride in comfort with Swara Cab’s fully air-conditioned cabs from Wakad to Mumbai. Our AC taxis are perfect for beating the heat and enjoying a smooth long-distance journey. Each vehicle is regularly cleaned, sanitized, and equipped with modern amenities for your comfort. Travel without stress, no matter the weather outside. Choose AC cabs for a cool, relaxing trip."
    },
    {
        "name": "Corporate Cabs Wakad to Mumbai",
        "description": "For business executives and professionals, Swara Cab offers dedicated corporate cab services from Wakad to Mumbai. Our vehicles provide quiet, clean, and comfortable space for working on the go. We ensure punctual pickups, well-dressed chauffeurs, and billing convenience for corporate accounts. Ideal for meetings, conferences, or airport transfers. Ride professionally with Swara Cab."
    },
    {
        "name": "Reliable Taxi Service Wakad",
        "description": "Swara Cab is known for reliable taxi service from Wakad to Mumbai, trusted by thousands of travelers. Our drivers are experienced, courteous, and punctual. Every trip is backed by live GPS tracking, emergency support, and verified customer service. Whether early morning or late night, you can rely on us for a smooth and secure ride. We don’t just promise — we deliver."
    },
    {
        "name": "One-Way Cab from Wakad",
        "description": "Need a one-way trip from Wakad to Mumbai? Swara Cab offers economical and convenient one-way cab services, ideal for single-direction travel. Pay only for the trip you take—no return fare or extra charges. We offer a wide range of vehicles for all needs, from sedans to SUVs. Great for relocations, business trips, or airport drops."
    },
    {
        "name": "Round Trip Wakad to Mumbai Cab",
        "description": "Swara Cab provides flexible round-trip cabs from Wakad to Mumbai, perfect for same-day return or multi-day stays. Keep the same car and driver for your entire journey and avoid booking hassles. Whether it's a wedding, event, or business meeting, enjoy a seamless two-way ride. Our round trip plans are cost-effective and convenient for all types of travelers."
    },
    {
        "name": "Wakad to Mumbai Sedan Cab",
        "description": "Travel in style and comfort with Swara Cab’s sedan cab service from Wakad to Mumbai. Our sedans are great for small families, professionals, and solo travelers who value comfort. Featuring ample luggage space, AC, and smooth handling, these rides make long journeys pleasant. Book a sedan and upgrade your travel experience today."
    },
    {
        "name": "SUV Cab Wakad to Mumbai",
        "description": "Need extra space or traveling in a group? Swara Cab offers spacious SUV cabs from Wakad to Mumbai, perfect for families and groups with luggage. Enjoy higher seating, added legroom, and superior ride quality. Our SUVs are ideal for long drives and offer maximum comfort. Travel together with ease in our reliable SUV fleet."
    },
    {
        "name": "Airport Cab Wakad to Mumbai",
        "description": "Catch your flight without stress using Swara Cab’s Wakad to Mumbai airport cab service. We offer timely, trackable, and smooth rides to both domestic and international terminals. Our drivers are punctual and familiar with all airport routes. Whether it’s a red-eye or early morning flight, we ensure you reach on time. Book in advance or instantly for peace of mind."
    },
    {
        "name": "Quick Pickup Wakad Cab",
        "description": "In a hurry? Swara Cab offers fast pickup from Wakad with minimal waiting time. Our quick dispatch system ensures your ride arrives within minutes. Whether you're late for a meeting or have urgent travel plans, we get you moving swiftly. Fast, reliable, and always on time—Swara Cab is your go-to option."
    },
    {
        "name": "Budget Cab Service Wakad",
        "description": "Looking for affordable travel from Wakad to Mumbai? Swara Cab offers budget-friendly rides without compromising on comfort or safety. Choose from our range of economical cars and enjoy value-based pricing. Perfect for students, daily commuters, or small families. Get the best rates and ride quality in one package."
    },
    {
        "name": "Verified Driver Wakad to Mumbai",
        "description": "Safety is our top priority. All Swara Cab drivers from Wakad to Mumbai are fully verified with ID checks and training. We maintain a strict onboarding process to ensure professional behavior and safe driving practices. Ride worry-free with trusted drivers who know the route well. Peace of mind comes standard with every ride."
    },
    {
        "name": "Instant Cab Wakad to Mumbai",
        "description": "Need a cab immediately? Swara Cab offers instant cab bookings from Wakad to Mumbai with real-time availability and quick response. Book and get your cab within minutes—no long waits or delayed pickups. Ideal for emergencies, last-minute meetings, or spontaneous plans. Fast booking, fast pickup, faster travel!"
    },
    {
        "name": "Book Cab from Wakad Now",
        "description": "Ready to travel? Book your cab from Wakad to Mumbai instantly with Swara Cab’s easy online and phone booking options. Get instant confirmation, transparent pricing, and professional service. Choose from a variety of vehicles tailored to your needs. Avoid delays and travel confidently with our efficient cab services. Book now and enjoy the ride!"
    }
],

"tableData": [
    ["Wakad to Mumbai Cab", "Wakad to Mumbai Online Taxi"],
    ["AC Cabs Wakad to Mumbai", "Corporate Cabs Wakad to Mumbai"],
    ["Reliable Taxi Service Wakad", "One-Way Cab from Wakad"],
    ["Round Trip Wakad to Mumbai Cab", "Wakad to Mumbai Sedan Cab"],
    ["SUV Cab Wakad to Mumbai", "Airport Cab Wakad to Mumbai"],
    ["Quick Pickup Wakad Cab", "Budget Cab Service Wakad"],
    ["Verified Driver Wakad to Mumbai", "Instant Cab Wakad to Mumbai"],
    ["Book Cab from Wakad Now", ""]
],





"whychoose": [
  {
    "WhyChooseheading": "Dependable and Punctual Wakad to Mumbai Cab Service",
    "WhyChoosedescription": "We understand the importance of time, especially for long-distance travel like Wakad to Mumbai. Our service ensures timely pickups and drop-offs, so you never miss a flight, meeting, or event. Our drivers monitor traffic conditions closely to optimize your travel time and keep you on schedule."
  },
  {
    "WhyChooseheading": "Wide Range of Clean and Comfortable Vehicles",
    "WhyChoosedescription": "Choose from a variety of air-conditioned vehicles including compact sedans, luxury SUVs such as Innova Crysta and Ertiga, and spacious vans. Each vehicle is regularly maintained and sanitized to provide a comfortable, safe, and pleasant journey irrespective of the distance."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing",
    "WhyChoosedescription": "Our fare structure for Wakad to Mumbai cabs is fully transparent, with no hidden fees. Toll charges, taxes, and driver allowances are included in the upfront price, allowing you to plan your budget effectively. We also offer special rates for round trips and corporate bookings."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Drivers",
    "WhyChoosedescription": "Our drivers are carefully selected, background-checked, and trained to provide excellent customer service. They possess in-depth knowledge of Pune and Mumbai roads, including the fastest routes and alternate paths, ensuring your ride is safe, smooth, and enjoyable."
  },
  {
    "WhyChooseheading": "Round-the-Clock Availability",
    "WhyChoosedescription": "No matter what time you need to travel from Wakad to Mumbai, our cabs are available 24/7. Early morning airport transfers, late-night drop-offs, or urgent business trips — we’re ready whenever you are, backed by a responsive customer support team."
  },
  {
    "WhyChooseheading": "Easy and Flexible Booking Process",
    "WhyChoosedescription": "Booking your Wakad to Mumbai cab is quick and convenient through our website, mobile app, or phone. We offer flexible cancellation and rescheduling policies, making it hassle-free to adjust your plans whenever necessary."
  },
  {
    "WhyChooseheading": "Commitment to Safety and Hygiene",
    "WhyChoosedescription": "Your safety is paramount. We sanitize every vehicle before and after trips, and all drivers adhere to strict hygiene and safety protocols. Our fleet is equipped with safety features like seat belts, airbags, and GPS tracking for a secure travel experience."
  },
  {
    "WhyChooseheading": "Ideal for Both Corporate and Leisure Travel",
    "WhyChoosedescription": "Whether you are a corporate traveler commuting for meetings or a family visiting Mumbai for leisure, our Wakad to Mumbai cab service is tailored to meet diverse travel needs. Enjoy a comfortable and stress-free journey with professional service every step of the way."
  }
]









    }



const faqData = [
    {
        question: "Do you offer cab services from Wakad to Mumbai?",
        answer: "Yes, Swara Cabs provides convenient and reliable cab services from Wakad, Pune to all major areas in Mumbai, including the airport."
    },
    {
        question: "What is the starting fare for a Wakad to Mumbai cab?",
        answer: "Fares start from ₹5,500 for a one-way sedan trip. Rates may vary based on the type of vehicle and time of travel."
    },
    {
        question: "How can I book a Wakad to Mumbai cab with Swara Cabs?",
        answer: "You can easily book through our website or by calling us directly at +91 9697780707 for fast booking and support."
    },
    {
        question: "Are tolls and taxes included in the fare?",
        answer: "Yes, all fares are inclusive of tolls, driver allowance, and taxes. You pay only the amount quoted."
    },
    {
        question: "What types of vehicles are available for the Wakad–Mumbai route?",
        answer: "We offer a wide range of vehicles including sedans, SUVs, and tempo travellers to accommodate different group sizes and preferences."
    },
    {
        question: "Is night travel available from Wakad to Mumbai?",
        answer: "Yes, Swara Cabs operates 24/7. Night-time travel is available with a small additional surcharge between 10 PM and 6 AM."
    },
    {
        question: "Can I book a round trip from Wakad to Mumbai?",
        answer: "Yes, we offer both one-way and round trip services with flexible scheduling for return journeys."
    },
    {
        question: "How early should I book my cab from Wakad to Mumbai?",
        answer: "It’s best to book at least 4–6 hours in advance, especially during busy travel times or if you need a specific vehicle type."
    },
    {
        question: "Do you provide airport drop service from Wakad?",
        answer: "Yes, we provide on-time airport drops to Chhatrapati Shivaji Maharaj International Airport and Mumbai Domestic Airport."
    },
    {
        question: "Is it safe to travel alone in a Swara Cabs vehicle?",
        answer: "Absolutely. Our drivers are police-verified, professional, and trained to ensure your safety and comfort throughout the journey."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Vinay Shinde',
        review: 'Booked a cab from Wakad to Mumbai with Swara Cabs. The vehicle arrived on time, the driver was courteous, and the ride was very comfortable.'
    },
    {
        name: 'Ms. Shraddha Gokhale',
        review: 'Swara Cabs made my trip from Wakad to Mumbai airport completely stress-free. Clean car, safe ride, and prompt service!'
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
  "name": "Wakad to Mumbai Cab",
  "image": "https://www.swaracabs.in/assets/images/wakad-to-mumbai-cab.jpg",
  "description": "Book Wakad to Mumbai cab with Swara Cabs for fast, affordable, and comfortable travel. AC sedans and SUVs available with verified drivers for one-way, round-trip, or airport journeys.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "78965"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2199",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/wakad-to-mumbai-cab"
  }
};





    return (
        <div>
<Helmet>
  <title>Wakad to Mumbai Cab | Book Fast & Affordable Rides | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Wakad to Mumbai cab with Swara Cabs for fast, affordable, and comfortable travel. AC sedans and SUVs available with verified drivers for one-way, round-trip, or airport journeys." 
  />
  <meta 
    name="keywords" 
    content="Wakad to Mumbai Cab, Wakad to Mumbai Online Taxi, AC Cabs Wakad to Mumbai, Corporate Cabs Wakad to Mumbai, Reliable Taxi Service Wakad, One-Way Cab from Wakad, Round Trip Wakad to Mumbai Cab, Wakad to Mumbai Sedan Cab, SUV Cab Wakad to Mumbai, Airport Cab Wakad to Mumbai, Quick Pickup Wakad Cab, Budget Cab Service Wakad, Verified Driver Wakad to Mumbai, Instant Cab Wakad to Mumbai, Book Cab from Wakad Now" 
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
                            <img src='/images/keyword/7.jpg' alt='img' />
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

export default Wakadtomumbaicab;