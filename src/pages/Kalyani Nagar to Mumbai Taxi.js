
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Kalyaninagartomumbaitaxi() {



    const cardData =
    {
        keyword: 'Kalyani Nagar to Mumbai Taxi',
        heading: 'Swara Cabs : Kalyani Nagar to Mumbai Taxi',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable taxi services for your journey from Kalyani Nagar to Mumbai. Mumbai, Maharashtra’s vibrant commercial and cultural capital, is known for its iconic skyline, bustling streets, and dynamic urban vibe. Whether you are traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a smooth and hassle-free experience. The distance from Kalyani Nagar to Mumbai is approximately 150 kilometers, with a travel time of around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet and experienced drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

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
                "title": "Elephanta Caves",
                "description": "Located on Elephanta Island, a short ferry ride from the Gateway of India, these ancient rock-cut caves are dedicated to Lord Shiva. The site features impressive sculptures and carvings, with the massive Trimurti statue being the main highlight."
            },
            {
                "title": "Juhu Beach",
                "description": "Juhu Beach is one of the most popular and accessible beaches in Mumbai. Known for its street food stalls offering bhel puri, pav bhaji, and more, it’s a favorite evening hangout spot for locals and tourists alike. It also offers a great view of the sunset."
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
        "name": "Kalyani Nagar to Mumbai Taxi",
        "description": "Travel comfortably from Kalyani Nagar to Mumbai with Swara Cab’s reliable taxi services. Whether it’s for a business trip, leisure travel, or a family outing, we provide timely pickups, well-maintained vehicles, and courteous drivers. Our taxis are equipped to ensure a safe and smooth ride across all distances. Make your journey stress-free with Swara Cab."
    },
    {
        "name": "Kalyani Nagar to Mumbai Cab Service",
        "description": "Swara Cab offers dependable cab services from Kalyani Nagar to Mumbai tailored to meet your travel preferences. With a wide range of car options—from hatchbacks to luxury sedans—you can travel in comfort and style. Our booking process is quick and hassle-free, and our drivers are trained to provide a professional experience every step of the way."
    },
    {
        "name": "AC Taxi Kalyani Nagar to Mumbai",
        "description": "Beat the heat with our fully air-conditioned taxis from Kalyani Nagar to Mumbai. Swara Cab ensures a relaxing ride with clean, climate-controlled vehicles ideal for long journeys. Whether you’re commuting during the day or traveling at night, our AC taxis offer a refreshing and smooth experience. Book now for a cool and comfortable journey."
    },
    {
        "name": "One-Way Taxi Kalyani Nagar to Mumbai",
        "description": "Looking for a one-way drop from Kalyani Nagar to Mumbai? Swara Cab’s one-way taxi service is perfect for those who don’t require a return trip. Enjoy affordable rates, reliable service, and doorstep pickup and drop. Pay only for what you need and travel at your own pace. Ideal for airport drops, short visits, and business meetings."
    },
    {
        "name": "Round Trip Taxi Kalyani Nagar to Mumbai",
        "description": "Planning a return journey the same day or after a few days? Book a round trip taxi from Kalyani Nagar to Mumbai with Swara Cab. Keep the same car and driver, travel flexibly, and save time on return bookings. Our round trip service is convenient for corporate travelers, family outings, and group tours. Enjoy a full-service experience both ways."
    },
    {
        "name": "Online Booking Kalyani Nagar to Mumbai Taxi",
        "description": "With Swara Cab’s online booking platform, securing a taxi from Kalyani Nagar to Mumbai has never been easier. Enter your travel details, get fare estimates, and book instantly through our website or app. Get SMS/email confirmations, live tracking, and 24/7 customer support. Fast, secure, and always available—book your ride online in just a few clicks."
    },
    {
        "name": "Affordable Fare Kalyani Nagar to Mumbai",
        "description": "Swara Cab offers affordable and transparent fares for trips from Kalyani Nagar to Mumbai. Whether you choose a sedan, SUV, or luxury cab, we provide competitive pricing with no hidden charges. Check estimated fares online before booking and travel within your budget. Enjoy premium services at a pocket-friendly cost with Swara Cab."
    },
    {
        "name": "Airport Drop Taxi Kalyani Nagar",
        "description": "Catch your flight on time with Swara Cab’s dedicated airport drop taxi service from Kalyani Nagar to Mumbai. Our drivers ensure punctual pickups and safe, fast routes to Mumbai Airport. Avoid parking hassles and public transport delays—travel with us for a stress-free start to your journey. Available for domestic and international terminals."
    },
    {
        "name": "Sedan Taxi Kalyani Nagar to Mumbai",
        "description": "Choose Swara Cab’s sedan taxi service from Kalyani Nagar to Mumbai for a comfortable and spacious ride. Our sedans are ideal for solo travelers, couples, or small families. Enjoy smooth handling, plush seating, and professional drivers who prioritize your comfort. Perfect for airport transfers, business trips, or city visits."
    },
    {
        "name": "SUV Taxi Kalyani Nagar to Mumbai",
        "description": "Need more space and power? Swara Cab’s SUV taxi service from Kalyani Nagar to Mumbai is perfect for larger groups or families with extra luggage. Our spacious SUVs offer comfort, safety, and the power to handle long-distance travel with ease. Travel together with enough room for everyone and everything."
    },
    {
        "name": "Executive Cab Kalyani Nagar to Mumbai",
        "description": "For those who need premium travel, Swara Cab offers executive cabs from Kalyani Nagar to Mumbai. These vehicles come with upgraded interiors, Wi-Fi (on request), and trained professional drivers. Ideal for corporate meetings, VIP clients, or travelers who prefer luxury and style. Arrive in Mumbai refreshed and ready for the day."
    },
    {
        "name": "24/7 Cab Booking Kalyani Nagar",
        "description": "Swara Cab provides 24/7 cab booking from Kalyani Nagar to Mumbai. Whether it’s a midnight airport drop or an early morning meeting, we’re available around the clock. Book any time through our app, website, or helpline. Our support team and drivers are always ready to ensure your travel is safe and timely, no matter the hour."
    },
    {
        "name": "Corporate Travel Taxi Kalyani Nagar",
        "description": "Swara Cab offers specialized taxi services for corporate travel from Kalyani Nagar to Mumbai. With billing support, priority service, and premium vehicle options, we cater to businesses, executives, and employees who require dependable and professional transportation. Set up corporate accounts for easy invoicing and scheduling."
    },
    {
        "name": "Verified Drivers Kalyani Nagar to Mumbai",
        "description": "Safety is a priority at Swara Cab. All our drivers from Kalyani Nagar to Mumbai are background-verified, experienced, and professionally trained. You’ll receive driver details before your trip and can track your cab in real-time. Travel confidently knowing you're in safe hands with a trusted Swara Cab driver."
    },
    {
        "name": "Reliable Taxi Service Kalyani Nagar to Mumbai",
        "description": "Swara Cab stands out for its reliable taxi service from Kalyani Nagar to Mumbai. From on-time arrivals to customer support, we ensure your trip goes smoothly. Our fleet is regularly maintained and all bookings are confirmed with timely updates. Rely on us for stress-free intercity travel any day of the week."
    }
],

"tableData": [
    ["Kalyani Nagar to Mumbai Taxi", "Kalyani Nagar to Mumbai Cab Service"],
    ["AC Taxi Kalyani Nagar to Mumbai", "One-Way Taxi Kalyani Nagar to Mumbai"],
    ["Round Trip Taxi Kalyani Nagar to Mumbai", "Online Booking Kalyani Nagar to Mumbai Taxi"],
    ["Affordable Fare Kalyani Nagar to Mumbai", "Airport Drop Taxi Kalyani Nagar"],
    ["Sedan Taxi Kalyani Nagar to Mumbai", "SUV Taxi Kalyani Nagar to Mumbai"],
    ["Executive Cab Kalyani Nagar to Mumbai", "24/7 Cab Booking Kalyani Nagar"],
    ["Corporate Travel Taxi Kalyani Nagar", "Verified Drivers Kalyani Nagar to Mumbai"],
    ["Reliable Taxi Service Kalyani Nagar to Mumbai", ""]
],





"whychoose": [
  {
    "WhyChooseheading": "Reliable and Timely Taxi Service from Kalyani Nagar to Mumbai",
    "WhyChoosedescription": "We understand the importance of punctuality, whether you’re heading to Mumbai for business or leisure. Our taxi service ensures on-time pickups and drop-offs, making your journey hassle-free and efficient."
  },
  {
    "WhyChooseheading": "Comfortable and Well-Maintained Fleet",
    "WhyChoosedescription": "Choose from a range of clean and spacious vehicles, including sedans and premium SUVs, all equipped with air conditioning and comfortable seating to make your ride relaxing and enjoyable."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing",
    "WhyChoosedescription": "Our pricing is upfront and inclusive of tolls, taxes, and driver allowances. There are no hidden charges, so you can plan your trip budget with confidence and without surprises."
  },
  {
    "WhyChooseheading": "Experienced and Professional Drivers",
    "WhyChoosedescription": "Our drivers are trained professionals familiar with the best routes from Kalyani Nagar to Mumbai. They prioritize your safety and comfort, ensuring a smooth and secure travel experience."
  },
  {
    "WhyChooseheading": "24/7 Taxi Availability",
    "WhyChoosedescription": "Whether you need an early morning pickup or a late-night drop, our taxi service operates round the clock to accommodate your travel schedule."
  },
  {
    "WhyChooseheading": "Easy and Flexible Booking Process",
    "WhyChoosedescription": "Booking your taxi is quick and convenient via our website, mobile app, or phone. We also offer flexible cancellation and rescheduling options to suit your changing plans."
  },
  {
    "WhyChooseheading": "Focus on Safety and Hygiene",
    "WhyChoosedescription": "We prioritize your well-being with regular vehicle sanitization and adherence to strict hygiene protocols. All vehicles come equipped with safety features like seat belts, airbags, and GPS tracking."
  },
  {
    "WhyChooseheading": "Ideal for Both Corporate and Personal Travel",
    "WhyChoosedescription": "Whether you’re traveling for work, airport transfers, or leisure, our Kalyani Nagar to Mumbai taxi service is designed to meet your unique needs with professionalism and comfort."
  }
]











    }



const faqData = [
    {
        question: "Do you offer taxi service from Kalyani Nagar to Mumbai?",
        answer: "Yes, Swara Cabs provides reliable taxi services from Kalyani Nagar, Pune to all locations in Mumbai, including airport transfers."
    },
    {
        question: "What is the fare for a Kalyani Nagar to Mumbai taxi?",
        answer: "Taxi fares start from ₹5,500 for a one-way sedan trip. The exact fare depends on the vehicle type and travel timing."
    },
    {
        question: "How can I book a taxi from Kalyani Nagar to Mumbai?",
        answer: "You can easily book online through our website or by calling +91 9697780707. Instant booking confirmation is available."
    },
    {
        question: "Which vehicles can I choose from for this route?",
        answer: "We offer a range of vehicles including sedans, SUVs, and tempo travellers, based on your travel requirements."
    },
    {
        question: "Is airport drop included in this service?",
        answer: "Yes, we offer punctual taxi service from Kalyani Nagar to Mumbai Domestic and International Airports."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, our fares are all-inclusive and cover tolls, driver allowance, and applicable taxes."
    },
    {
        question: "Do you provide late-night taxi service from Kalyani Nagar?",
        answer: "Yes, we operate 24/7. A nominal night charge applies for trips scheduled between 10 PM and 6 AM."
    },
    {
        question: "Is the service suitable for corporate travelers?",
        answer: "Absolutely. We serve many corporate clients from Kalyani Nagar and provide professional, punctual taxi service."
    },
    {
        question: "Can I book a round trip from Kalyani Nagar to Mumbai?",
        answer: "Yes, round trip and return journey bookings are available and can be customized to fit your schedule."
    },
    {
        question: "How far in advance should I book my taxi?",
        answer: "We recommend booking at least 4–6 hours in advance, especially during peak travel times, to ensure availability."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Pravin Kulkarni',
        review: 'I booked a Kalyani Nagar to Mumbai taxi with Swara Cabs and was very happy with the service. Clean car, on-time pickup, and courteous driver.'
    },
    {
        name: 'Ms. Snehal Purohit',
        review: 'Swara Cabs gave me a hassle-free ride from Kalyani Nagar to Mumbai Airport. Great communication and smooth journey throughout!'
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
  "name": "Kalyani Nagar to Mumbai Taxi",
  "image": "https://www.swaracabs.in/assets/images/kalyani-nagar-to-mumbai-taxi.jpg",
  "description": "Book Kalyani Nagar to Mumbai taxi service with Swara Cabs. Enjoy AC sedans and SUVs for one-way, round-trip, or airport transfers. Verified drivers and affordable fares guaranteed.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "9859"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2299",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/kalyani-nagar-to-mumbai-taxi"
  }
};





    return (
        <div>
<Helmet>
  <title>Kalyani Nagar to Mumbai Taxi | Reliable & Affordable | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Kalyani Nagar to Mumbai taxi service with Swara Cabs. Enjoy AC sedans and SUVs for one-way, round-trip, or airport transfers. Verified drivers and affordable fares guaranteed." 
  />
  <meta 
    name="keywords" 
    content="Kalyani Nagar to Mumbai Taxi, Kalyani Nagar to Mumbai Cab Service, AC Taxi Kalyani Nagar to Mumbai, One-Way Taxi Kalyani Nagar to Mumbai, Round Trip Taxi Kalyani Nagar to Mumbai, Online Booking Kalyani Nagar to Mumbai Taxi, Affordable Fare Kalyani Nagar to Mumbai, Airport Drop Taxi Kalyani Nagar, Sedan Taxi Kalyani Nagar to Mumbai, SUV Taxi Kalyani Nagar to Mumbai, Executive Cab Kalyani Nagar to Mumbai, 24/7 Cab Booking Kalyani Nagar, Corporate Travel Taxi Kalyani Nagar, Verified Drivers Kalyani Nagar to Mumbai, Reliable Taxi Service Kalyani Nagar to Mumbai" 
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
                            <img src='/images/keyword/9.jpg' alt='img' />
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

export default Kalyaninagartomumbaitaxi;