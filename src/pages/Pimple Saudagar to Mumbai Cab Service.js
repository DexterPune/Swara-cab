
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Pimplesaudagartomumbai() {



    const cardData =
    {
        keyword: 'Pimple Saudagar to Mumbai Cab Service',
        heading: 'Swara Cabs : Pimple Saudagar to Mumbai Cab Service',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Pimple Saudagar to Mumbai. Mumbai, Maharashtra’s vibrant commercial and cultural capital, is known for its iconic skyline, bustling streets, and dynamic urban life. Whether you are traveling for a business meeting, a family visit, or an airport transfer, Swara Cabs ensures a smooth and hassle-free experience. The distance from Pimple Saudagar to Mumbai is approximately 150 kilometers, with a travel time of around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet and experienced drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

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
        "name": "Pimple Saudagar to Mumbai Cab Service",
        "description": "Swara Cab offers dependable cab service from Pimple Saudagar to Mumbai, ensuring a smooth and comfortable travel experience. Whether it’s a business trip, a family outing, or a personal visit, our cabs are available 24/7. We provide doorstep pickup from anywhere in Pimple Saudagar and drop you directly at your Mumbai destination. With easy booking, transparent pricing, and experienced drivers, you can count on us every time. Ride safe, ride smart with Swara Cab."
    },
    {
        "name": "AC Cabs Pimple Saudagar to Mumbai",
        "description": "Travel in comfort with Swara Cab’s fully air-conditioned cabs from Pimple Saudagar to Mumbai. Our AC cabs offer a pleasant ride even during peak summer or humid weather. All vehicles are well-maintained, sanitized, and come with professional drivers. Whether you're traveling for work or leisure, beat the heat with a cool, relaxing ride. Choose from hatchbacks, sedans, or SUVs based on your comfort needs."
    },
    {
        "name": "Online Cab Booking Pimple Saudagar",
        "description": "Swara Cab makes it easy to book a cab from Pimple Saudagar to Mumbai online within minutes. Our booking system is user-friendly and provides instant confirmation. Simply choose your cab type, pickup time, and destination to schedule your ride. We offer multiple payment options and real-time ride tracking. No more waiting or price haggling—book online and travel worry-free."
    },
    {
        "name": "Reliable Taxi Pimple Saudagar to Mumbai",
        "description": "Looking for a trustworthy ride from Pimple Saudagar to Mumbai? Swara Cab delivers reliability with every booking. Our taxis are driven by trained professionals who ensure punctual pickups and safe routes. We use GPS tracking and send trip details upfront for full transparency. With hundreds of happy travelers, we are the reliable taxi partner you can count on."
    },
    {
        "name": "Executive Cab Pimple Saudagar to Mumbai",
        "description": "For corporate travelers and professionals, Swara Cab provides executive cab services from Pimple Saudagar to Mumbai. Enjoy premium seating, extra legroom, and a quiet environment ideal for working while you ride. Our executive cabs are driven by courteous, well-dressed chauffeurs who value your time and privacy. Whether it's an airport drop or client visit, arrive in style with our business-class travel option."
    },
    {
        "name": "Round Trip Taxi Pimple Saudagar to Mumbai",
        "description": "Planning to return the same day? Swara Cab offers round trip taxi services from Pimple Saudagar to Mumbai, perfect for business meetings, appointments, or shopping trips. Keep the same car and driver for both legs of the journey and save time and money. Our round trip service offers flexibility and peace of mind. Book once and enjoy smooth travel both ways."
    },
    {
        "name": "One-Way Cabs from Pimple Saudagar",
        "description": "Swara Cab’s one-way cab service from Pimple Saudagar to Mumbai is perfect for travelers who don’t need a return trip. You only pay for the distance traveled, making it a cost-effective option. Whether you're relocating, visiting friends, or heading to the airport, we offer convenient pickup times and vehicle choices. Avoid round-trip charges and travel on your own terms."
    },
    {
        "name": "Mumbai Airport Drop Pimple Saudagar",
        "description": "Heading to Mumbai Airport from Pimple Saudagar? Swara Cab provides on-time, hassle-free airport drop services. Our drivers are familiar with airport routes and ensure timely arrivals, even during peak hours. Enjoy spacious cars with ample luggage space and flight tracking for added convenience. Book in advance for stress-free travel to either T1 or T2 terminal."
    },
    {
        "name": "Affordable Cab Service Pimple Saudagar",
        "description": "Swara Cab offers affordable cab services from Pimple Saudagar to Mumbai without compromising on quality. Choose from a wide range of budget-friendly vehicles and enjoy clean, safe, and punctual rides. Our pricing is transparent—no surge, no hidden fees. Great for students, working professionals, and families. Enjoy more value per kilometer with Swara Cab."
    },
    {
        "name": "Verified Drivers Pimple Saudagar",
        "description": "Your safety matters to us. All Swara Cab drivers for Pimple Saudagar to Mumbai trips are background-verified and trained for intercity travel. Each driver follows traffic rules and maintains professional conduct throughout the journey. GPS tracking and ride details are shared in advance for added peace of mind. Travel confidently with our trusted team."
    },
    {
        "name": "Sedan Cabs Pimple Saudagar to Mumbai",
        "description": "Prefer a comfortable and stylish ride? Our sedan cabs from Pimple Saudagar to Mumbai are perfect for business and personal travel. With plush seating, AC, and smooth handling, they’re ideal for long journeys. Great for solo travelers or small families looking for a relaxed ride. Book your next sedan ride with Swara Cab for comfort and class."
    },
    {
        "name": "SUV Cabs from Pimple Saudagar",
        "description": "Need extra space or traveling with a group? Swara Cab offers spacious SUV cabs from Pimple Saudagar to Mumbai. Perfect for families, airport trips with luggage, or group outings. Our SUVs are well-maintained, air-conditioned, and driven by experienced chauffeurs. Travel together, comfortably and safely."
    },
    {
        "name": "Pickup & Drop Pimple Saudagar to Mumbai",
        "description": "Swara Cab provides seamless pickup and drop taxi services from Pimple Saudagar to any destination in Mumbai. Whether it’s a point-to-point city drop or a long-distance drop, we cover it all. Our drivers ensure on-time arrival and safe drop-off. Great for office commuters, students, or senior citizens. Reliable and available 24/7."
    },
    {
        "name": "Safe Ride Pimple Saudagar to Mumbai",
        "description": "Swara Cab ensures that every ride from Pimple Saudagar to Mumbai is secure and comfortable. From sanitized vehicles to real-time tracking, we go the extra mile for your safety. Female travelers, families, and senior citizens trust us for safe intercity travel. With driver ID verification and helpline support, you’re always in safe hands. Ride worry-free every time."
    },
    {
        "name": "Luxury Cab Service Pimple Saudagar",
        "description": "Looking for a premium travel experience? Swara Cab offers luxury cab services from Pimple Saudagar to Mumbai with high-end vehicles and elite service. Perfect for special occasions, VIP guests, or business executives. Our luxury fleet includes top-model sedans and SUVs with extra features like leather seats and premium audio. Travel in style with Swara Cab’s upscale service."
    }
],

"tableData": [
    ["Pimple Saudagar to Mumbai Cab Service", "AC Cabs Pimple Saudagar to Mumbai"],
    ["Online Cab Booking Pimple Saudagar", "Reliable Taxi Pimple Saudagar to Mumbai"],
    ["Executive Cab Pimple Saudagar to Mumbai", "Round Trip Taxi Pimple Saudagar to Mumbai"],
    ["One-Way Cabs from Pimple Saudagar", "Mumbai Airport Drop Pimple Saudagar"],
    ["Affordable Cab Service Pimple Saudagar", "Verified Drivers Pimple Saudagar"],
    ["Sedan Cabs Pimple Saudagar to Mumbai", "SUV Cabs from Pimple Saudagar"],
    ["Pickup & Drop Pimple Saudagar to Mumbai", "Safe Ride Pimple Saudagar to Mumbai"],
    ["Luxury Cab Service Pimple Saudagar", ""]
],



"whychoose": [
  {
    "WhyChooseheading": "Reliable and Timely Cab Service from Pimple Saudagar to Mumbai",
    "WhyChoosedescription": "Our cab service ensures punctual pickups and drop-offs, allowing you to travel from Pimple Saudagar to Mumbai stress-free. Whether you have an important business meeting or a family function, we prioritize your schedule and guarantee on-time arrivals to your destination."
  },
  {
    "WhyChooseheading": "Fleet of Comfortable and Well-Maintained Vehicles",
    "WhyChoosedescription": "Choose from a diverse range of vehicles including budget-friendly hatchbacks, spacious sedans, premium SUVs like Innova Crysta and Ertiga, all regularly serviced and sanitized. Every vehicle is equipped with air conditioning and comfortable seating, providing a relaxing journey irrespective of traffic or distance."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Charges",
    "WhyChoosedescription": "We provide clear and upfront fare estimates that include tolls, taxes, driver allowance, and parking charges, ensuring no unexpected costs at the end of your ride. Our competitive pricing is designed to offer the best value for your money without compromising service quality."
  },
  {
    "WhyChooseheading": "Experienced and Professional Drivers",
    "WhyChoosedescription": "Our drivers are thoroughly background-checked and trained in defensive driving and customer service. They possess excellent knowledge of the Pune-Mumbai Expressway and alternate routes to avoid traffic, ensuring a safe, smooth, and efficient ride every time."
  },
  {
    "WhyChooseheading": "24/7 Availability and Customer Support",
    "WhyChoosedescription": "Whether you need a cab for an early morning airport transfer or a late-night city commute, our service operates round the clock. Our customer care team is always available to assist with bookings, cancellations, or special requests, making your travel experience hassle-free."
  },
  {
    "WhyChooseheading": "Flexible Booking and Cancellation Policies",
    "WhyChoosedescription": "Book your Pimple Saudagar to Mumbai cab via website, app, or phone with instant confirmation. We offer flexible cancellation policies to accommodate last-minute changes in plans, ensuring convenience and peace of mind for all our customers."
  },
  {
    "WhyChooseheading": "Safe and Hygienic Travel Experience",
    "WhyChoosedescription": "In the interest of your health and safety, we sanitize all vehicles before every trip and ensure drivers follow strict hygiene protocols. Our commitment to cleanliness helps you travel with confidence, especially for long-distance rides."
  },
  {
    "WhyChooseheading": "Perfect for Corporate and Personal Travel",
    "WhyChoosedescription": "Our cab service caters to business travelers needing punctuality and professionalism, as well as families and tourists seeking comfort and reliability. From airport pickups to city tours, we customize your ride to suit your unique requirements."
  }
]








    }



const faqData = [
    {
        question: "Do you provide cab service from Pimple Saudagar to Mumbai?",
        answer: "Yes, Swara Cabs offers dependable cab services from Pimple Saudagar to Mumbai, including one-way drops and round trips."
    },
    {
        question: "What is the fare for a cab from Pimple Saudagar to Mumbai?",
        answer: "Fares start at ₹5,500 for a one-way trip in a sedan. Prices may vary depending on the vehicle type and travel time."
    },
    {
        question: "How can I book a cab from Pimple Saudagar to Mumbai?",
        answer: "You can book online through our website or call us at +91 9697780707 for instant booking and support."
    },
    {
        question: "What types of vehicles are available for this route?",
        answer: "We offer a variety of vehicles including sedans, SUVs, and tempo travellers to suit all travel needs and group sizes."
    },
    {
        question: "Is there an extra charge for tolls or night travel?",
        answer: "Our quoted fares are all-inclusive. A nominal night charge applies for travel between 10 PM and 6 AM."
    },
    {
        question: "Do you offer airport drop service from Pimple Saudagar?",
        answer: "Yes, we provide timely airport drops to both domestic and international terminals in Mumbai."
    },
    {
        question: "Can I schedule a return trip from Mumbai to Pimple Saudagar?",
        answer: "Yes, you can book a return trip in advance or as needed. We offer flexible scheduling options."
    },
    {
        question: "Is Swara Cabs safe for solo travelers?",
        answer: "Absolutely. All our drivers are background-verified and trained for safe and professional service."
    },
    {
        question: "How early should I book my cab from Pimple Saudagar?",
        answer: "We recommend booking at least 4 hours in advance to ensure availability, especially during peak hours."
    },
    {
        question: "What payment methods are accepted for this service?",
        answer: "We accept UPI, cash, credit/debit cards, and other major digital payment options."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Amol Deshmukh',
        review: 'I booked Swara Cabs from Pimple Saudagar to Mumbai and had a great experience. The driver was professional and the car was in excellent condition.'
    },
    {
        name: 'Mrs. Kavita Thombre',
        review: 'Swara Cabs made my travel from Pimple Saudagar to Mumbai airport smooth and comfortable. Booking was easy and service was prompt.'
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
  "name": "Pimple Saudagar to Mumbai Cab Service",
  "image": "https://www.swaracabs.in/assets/images/pimple-saudagar-to-mumbai-cab.jpg",
  "description": "Book Pimple Saudagar to Mumbai cab service with Swara Cabs. Choose from AC sedans and SUVs for one-way, round-trip, or airport drop. Verified drivers, luxury rides, and affordable pricing guaranteed.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "15254"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2299",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/pimple-saudagar-to-mumbai-cab-service"
  }
};





    return (
        <div>
<Helmet>
  <title>Pimple Saudagar to Mumbai Cab Service | Safe & Verified Drivers | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Pimple Saudagar to Mumbai cab service with Swara Cabs. Choose from AC sedans and SUVs for one-way, round-trip, or airport drop. Verified drivers, luxury rides, and affordable pricing guaranteed." 
  />
  <meta 
    name="keywords" 
    content="Pimple Saudagar to Mumbai Cab Service, AC Cabs Pimple Saudagar to Mumbai, Online Cab Booking Pimple Saudagar, Reliable Taxi Pimple Saudagar to Mumbai, Executive Cab Pimple Saudagar to Mumbai, Round Trip Taxi Pimple Saudagar to Mumbai, One-Way Cabs from Pimple Saudagar, Mumbai Airport Drop Pimple Saudagar, Affordable Cab Service Pimple Saudagar, Verified Drivers Pimple Saudagar, Sedan Cabs Pimple Saudagar to Mumbai, SUV Cabs from Pimple Saudagar, Pickup & Drop Pimple Saudagar to Mumbai, Safe Ride Pimple Saudagar to Mumbai, Luxury Cab Service Pimple Saudagar" 
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
                            <img src='/images/keyword/6.jpg' alt='img' />
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

export default Pimplesaudagartomumbai;