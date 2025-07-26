
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Banertomumbaicabs() {



    const cardData =
    {
        keyword: 'Baner to Mumbai Cabs',
        heading: 'Swara Cabs : Baner to Mumbai Cabs',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Baner to Mumbai. Mumbai, the vibrant commercial and cultural hub of Maharashtra, is renowned for its iconic skyline, bustling streets, and dynamic energy. Whether you are traveling for a business meeting, a family visit, or an airport transfer, Swara Cabs ensures a smooth and hassle-free experience. The road distance between Baner and Mumbai is approximately 160–170 km via the Mumbai–Pune Expressway and adjoining highways, with a travel time of around 3 to 4 hours depending on traffic. With our well-maintained fleet—ranging from compact Sedans and Swift Dzire to spacious Ertiga and premium Innova Crysta—and experienced drivers, Swara Cabs guarantees a safe, timely, and comfortable ride tailored to your travel needs',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

        "topPlaces": [
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
                "title": "Elephanta Caves",
                "description": "Located on Elephanta Island, a short ferry ride from the Gateway of India, these ancient rock-cut caves are dedicated to Lord Shiva. The site features impressive sculptures and carvings, with the massive Trimurti statue being the main highlight."
            },
            {
                "title": "Juhu Beach",
                "description": "Juhu Beach is one of the most popular and accessible beaches in Mumbai. Known for its street food stalls offering bhel puri, pav bhaji, and more, it’s a favorite evening hangout spot for locals and tourists alike. It also offers a great view of the sunset."
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
        "name": "Baner to Mumbai Cabs",
        "description": "Swara Cab offers reliable and comfortable cabs from Baner to Mumbai for all types of travelers. Whether it’s a daily commute, weekend travel, or a business trip, we have vehicles to suit your needs. Enjoy clean, well-maintained cars driven by experienced chauffeurs who ensure a safe and timely journey. With easy booking and transparent pricing, your travel experience is smooth from start to finish. Choose Swara Cab for dependable door-to-door travel."
    },
    {
        "name": "Baner to Mumbai Taxi Booking",
        "description": "Book your Baner to Mumbai taxi easily with Swara Cab's seamless online platform. We offer a wide selection of vehicles ranging from hatchbacks to SUVs for both solo travelers and families. Our drivers are trained professionals with excellent route knowledge to ensure a comfortable and quick ride. Enjoy real-time tracking, on-time pickups, and secure payment options. Whether booked in advance or instantly, your ride is just a click away."
    },
    {
        "name": "Cab Service Baner to Mumbai",
        "description": "Looking for a reliable cab service from Baner to Mumbai? Swara Cab is your trusted partner for smooth intercity travel. Our services are tailored to your schedule, with 24/7 availability and customizable routes. We ensure quality vehicles, professional drivers, and excellent support throughout your trip. Travel stress-free and on your own terms with Swara Cab’s dependable service."
    },
    {
        "name": "AC Cabs from Baner to Mumbai",
        "description": "Beat the heat and enjoy comfort with Swara Cab’s AC cabs from Baner to Mumbai. All our vehicles come with efficient air conditioning, ensuring a cool and relaxing journey in all seasons. Whether you're headed to a meeting or the airport, travel in peace and quiet. Our AC cabs are regularly sanitized and well-maintained for your safety and convenience. Perfect for long drives and day trips alike."
    },
    {
        "name": "Online Baner to Mumbai Cab Hire",
        "description": "Swara Cab offers quick and easy online cab hire from Baner to Mumbai. Our platform lets you book your preferred vehicle in just a few steps, with instant confirmation and multiple payment options. From economy to premium rides, we’ve got vehicles to fit every budget and group size. Avoid the hassle of last-minute cab hunting — hire online and ride with confidence. Get fair rates and punctual service every time."
    },
    {
        "name": "Executive Cab Baner to Mumbai",
        "description": "Travel in style with Swara Cab’s executive cab service from Baner to Mumbai. Designed for business professionals and premium travelers, our executive cars offer spacious seating, air conditioning, and courteous chauffeurs. Each vehicle is equipped to provide a quiet and smooth ride so you can relax or work en route. Perfect for meetings, airport drops, or important events. Arrive refreshed and on time with our high-end service."
    },
    {
        "name": "Baner to Mumbai Airport Drop Cab",
        "description": "Need a timely airport drop from Baner to Mumbai? Swara Cab provides punctual and reliable airport transfer services. Our drivers track flight timings to ensure early arrivals and stress-free check-ins. Choose from multiple vehicle types based on your luggage and group size. We offer fixed pricing and round-the-clock availability for all airport transfers. Trust us to get you to the terminal safely and comfortably."
    },
    {
        "name": "One-Way Cabs from Baner to Mumbai",
        "description": "Swara Cab offers cost-effective one-way cab options for travelers heading from Baner to Mumbai. Whether it's a short trip or an extended stay, you only pay for the journey you take—no return charges. It's a great solution for students, professionals, and out-of-town guests. With flexible pickup times and safe rides, one-way travel has never been easier. Book online and enjoy smooth, uninterrupted service."
    },
    {
        "name": "Reliable Cab Baner to Mumbai",
        "description": "When reliability matters, Swara Cab delivers trusted transport from Baner to Mumbai. We pride ourselves on punctual pickups, clean vehicles, and courteous drivers. Whether it’s a last-minute booking or a scheduled trip, you can count on us to be there. Our service includes regular vehicle inspections and verified driver backgrounds. Ride confidently with a team that values your time and safety."
    },
    {
        "name": "Baner to Mumbai Chauffeur Driven Cab",
        "description": "Experience personalized service with Swara Cab’s chauffeur-driven rides from Baner to Mumbai. Our professional drivers ensure a relaxing and smooth journey while you sit back and enjoy the view or get work done. All chauffeurs are trained, background-verified, and courteous. Whether it's business travel or a leisurely ride, we make sure your trip is pleasant from start to finish. Enjoy top-class hospitality on the road."
    },
    {
        "name": "Round Trip Taxi Baner to Mumbai",
        "description": "Planning to return the same day? Swara Cab’s round trip taxi service from Baner to Mumbai offers ultimate convenience. You get the same driver and vehicle for both legs of your journey, saving you time and hassle. It’s a cost-effective choice for business trips, events, or weekend outings. Enjoy total flexibility in timing and routes. Book once and relax throughout your journey."
    },
    {
        "name": "Comfortable Cab Baner to Mumbai",
        "description": "Swara Cab prioritizes comfort with every ride from Baner to Mumbai. Our vehicles are equipped with plush seats, air-conditioning, and smooth suspension to ensure a relaxing travel experience. We also offer bottled water, mobile charging points, and music on request. Whether it’s a short drop or a long drive, your comfort is never compromised. Travel with Swara Cab and arrive refreshed and ready."
    },
    {
        "name": "Affordable Fare Baner to Mumbai Cab",
        "description": "Get the best value for money with Swara Cab’s affordable fare cabs from Baner to Mumbai. We offer competitive pricing with no hidden charges, making long-distance travel accessible for everyone. Choose from multiple vehicle categories to match your budget. Despite low rates, we guarantee top service, clean cars, and professional drivers. Travel more, worry less—with Swara Cab."
    },
    {
        "name": "Premium Taxi Baner to Mumbai",
        "description": "Looking for a touch of luxury? Swara Cab’s premium taxi service from Baner to Mumbai features high-end vehicles, extra legroom, and exceptional service. Perfect for VIP clients, executives, or special occasions. Our premium taxis are equipped with top amenities and driven by trained chauffeurs. Enjoy an elevated travel experience from start to finish. Book your premium ride now for maximum comfort and style."
    },
    {
        "name": "Quick Cab Booking Baner to Mumbai",
        "description": "Need a cab fast? Swara Cab’s quick booking service gets you a taxi from Baner to Mumbai in minutes. Our system locates the nearest driver and confirms your ride instantly. Whether you're booking late at night or during rush hours, we make it easy and stress-free. No long waits, no complicated steps — just quick, safe, and efficient service. Ideal for spontaneous trips or emergency travel needs."
    }
],

"tableData": [
    ["Baner to Mumbai Cabs", "Baner to Mumbai Taxi Booking"],
    ["Cab Service Baner to Mumbai", "AC Cabs from Baner to Mumbai"],
    ["Online Baner to Mumbai Cab Hire", "Executive Cab Baner to Mumbai"],
    ["Baner to Mumbai Airport Drop Cab", "One-Way Cabs from Baner to Mumbai"],
    ["Reliable Cab Baner to Mumbai", "Baner to Mumbai Chauffeur Driven Cab"],
    ["Round Trip Taxi Baner to Mumbai", "Comfortable Cab Baner to Mumbai"],
    ["Affordable Fare Baner to Mumbai Cab", "Premium Taxi Baner to Mumbai"],
    ["Quick Cab Booking Baner to Mumbai", ""]
],



"whychoose": [
  {
    "WhyChooseheading": "Trusted Cab Service from Baner to Mumbai",
    "WhyChoosedescription": "Our cab service from Baner to Mumbai is known for punctuality, safety, and professionalism. Whether you're traveling for business, a family function, or catching a flight, we ensure timely pickups and comfortable drop-offs at your exact destination in Mumbai."
  },
  {
    "WhyChooseheading": "Wide Range of Cabs for Every Need",
    "WhyChoosedescription": "Choose from our diverse fleet of vehicles—economical hatchbacks, comfortable sedans, spacious SUVs, and luxury cabs—depending on your budget and group size. Every car is clean, air-conditioned, and maintained to high standards for a premium travel experience."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Costs",
    "WhyChoosedescription": "We believe in fair pricing. Our Baner to Mumbai cab fare includes all essential charges like tolls, parking, driver allowance, and taxes. You’ll receive a detailed fare estimate before the ride, so there are no last-minute surprises."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Drivers",
    "WhyChoosedescription": "Our drivers are professionally trained and have excellent knowledge of Pune-Mumbai routes, including expressways and alternative routes to avoid traffic. They ensure a smooth, respectful, and safe ride for all passengers."
  },
  {
    "WhyChooseheading": "24/7 Availability and Emergency Support",
    "WhyChoosedescription": "Need a cab early morning or late at night? Our services operate around the clock with a support team available 24/7 to assist you with bookings, queries, or urgent rescheduling without any hassle."
  },
  {
    "WhyChooseheading": "One-Way and Return Trip Packages",
    "WhyChoosedescription": "We offer both one-way and round-trip packages tailored to your schedule. Whether you're headed to Mumbai for a single drop or planning to return the same day, we offer flexible cab options to match your itinerary."
  },
  {
    "WhyChooseheading": "Instant Booking and Confirmation",
    "WhyChoosedescription": "Booking a cab from Baner to Mumbai is quick and seamless. Use our website or call our helpline to confirm your ride in just minutes. Receive driver details, fare info, and live location tracking right after booking."
  },
  {
    "WhyChooseheading": "Safe and Secure Ride Experience",
    "WhyChoosedescription": "All our vehicles are GPS-enabled and driven by background-verified drivers. Your safety is our top priority. We also sanitize our cars regularly to ensure a hygienic travel experience, especially for long-distance routes."
  }
]








    }



const faqData = [
    {
        question: "Do you provide cab service from Baner to Mumbai?",
        answer: "Yes, Swara Cabs offers reliable cab services from Baner, Pune to various locations across Mumbai, including airport transfers and city drops."
    },
    {
        question: "What is the fare for a Baner to Mumbai cab?",
        answer: "Our fares start at ₹5,500 for a one-way sedan. Pricing may vary based on the vehicle type and travel time."
    },
    {
        question: "Can I book a cab from Baner to Mumbai online?",
        answer: "Absolutely. You can book online through our website or by calling +91 9697780707 for instant confirmation."
    },
    {
        question: "Which types of vehicles are available for this route?",
        answer: "We offer a wide range including sedans, SUVs, and tempo travellers to meet your comfort and group size requirements."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, all our fares are inclusive of toll charges, taxes, and driver allowance—there are no hidden fees."
    },
    {
        question: "Do you offer airport drops from Baner to Mumbai Airport?",
        answer: "Yes, we provide direct and on-time cab services from Baner to Chhatrapati Shivaji Maharaj International Airport, Mumbai."
    },
    {
        question: "Is late-night cab service available from Baner?",
        answer: "Yes, we operate 24/7. A nominal night surcharge applies for pickups between 10 PM and 6 AM."
    },
    {
        question: "How early should I book a cab from Baner to Mumbai?",
        answer: "We recommend booking at least 4–6 hours in advance for a smooth experience, especially during peak hours."
    },
    {
        question: "Can I schedule a return trip from Mumbai to Baner?",
        answer: "Yes, you can pre-book a round trip or schedule a return based on your convenience."
    },
    {
        question: "Is the service suitable for business or corporate travelers?",
        answer: "Definitely. We cater to both personal and business travel needs with punctual service and well-maintained vehicles."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Abhijeet Kulkarni',
        review: 'Booked a Baner to Mumbai cab with Swara Cabs. The ride was smooth, on time, and the driver was very courteous. Great experience overall!'
    },
    {
        name: 'Ms. Rucha Naik',
        review: 'Used Swara Cabs for a business trip from Baner to Mumbai. Booking was easy and the car was clean and well-maintained. Highly recommended!'
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
  "name": "Baner to Mumbai Cabs",
  "image": "https://www.swaracabs.in/assets/images/baner-to-mumbai-cab.jpg",
  "description": "Book Baner to Mumbai cabs with Swara Cabs for reliable, AC chauffeur-driven rides. Enjoy comfortable one-way or round-trip journeys at affordable fares with easy online booking.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "8545"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2199",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/baner-to-mumbai-cabs"
  }
};







    return (
        <div>
<Helmet>
  <title>Baner to Mumbai Cabs | Comfortable & Affordable | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Baner to Mumbai cabs with Swara Cabs for reliable, AC chauffeur-driven rides. Enjoy comfortable one-way or round-trip journeys at affordable fares with easy online booking." 
  />
  <meta 
    name="keywords" 
    content="Baner to Mumbai Cabs, Baner to Mumbai Taxi Booking, Cab Service Baner to Mumbai, AC Cabs from Baner to Mumbai, Online Baner to Mumbai Cab Hire, Executive Cab Baner to Mumbai, Baner to Mumbai Airport Drop Cab, One-Way Cabs from Baner to Mumbai, Reliable Cab Baner to Mumbai, Baner to Mumbai Chauffeur Driven Cab, Round Trip Taxi Baner to Mumbai, Comfortable Cab Baner to Mumbai, Affordable Fare Baner to Mumbai Cab, Premium Taxi Baner to Mumbai, Quick Cab Booking Baner to Mumbai" 
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
                            <img src='/images/keyword/4.jpg' alt='img' />
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

export default Banertomumbaicabs;