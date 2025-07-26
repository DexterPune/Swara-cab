
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Kharaditomumbaicabs() {



    const cardData =
    {
        keyword: 'Kharadi to Mumbai Cab',
        heading: 'Swara Cabs : Kharadi to Mumbai Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Kharadi to Mumbai. Mumbai, Maharashtra’s vibrant commercial and cultural capital, is celebrated for its iconic skyline, bustling streets, and dynamic urban life. Whether you’re traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a smooth and hassle-free experience. The distance from Kharadi to Mumbai is approximately 155 to 160 kilometers, with a travel time of around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet and experienced drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

        "topPlaces": [
            
              {
                "title": "Colaba Causeway",
                "description": "Colaba Causeway is a vibrant shopping street in South Mumbai, famous for its street shops, fashion boutiques, cafés, and old-world charm. It’s a great place to shop for quirky accessories, clothes, antiques, and experience Mumbai’s bustling vibe."
            },
             {
                "title": "Gateway of India",
                "description": "The Gateway of India is one of Mumbai’s most iconic landmarks, built during the British Raj. Overlooking the Arabian Sea, it attracts thousands of tourists and locals alike. The nearby ferry rides to Elephanta Caves and its historical significance make it a must-visit spot in the city."
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
        "name": "Kharadi to Mumbai Cab",
        "description": "Planning a trip from Kharadi to Mumbai? Swara Cab offers dependable cab services with professional drivers and well-maintained vehicles. Whether you're traveling for business, leisure, or a family visit, we provide a smooth and stress-free travel experience tailored to your schedule."
    },
    {
        "name": "Online Taxi Kharadi to Mumbai",
        "description": "Book your cab online from Kharadi to Mumbai easily through Swara Cab. Our user-friendly booking platform gives you instant confirmation, transparent pricing, and multiple cab options. Enjoy the convenience of secure digital booking 24/7."
    },
    {
        "name": "One-Way Cab from Kharadi",
        "description": "Need a drop-off to Mumbai? Swara Cab offers cost-effective one-way cab services from Kharadi. Pay only for the one-way journey and avoid unnecessary return charges. Ideal for airport drops, client meetings, or quick getaways."
    },
    {
        "name": "Kharadi to Mumbai Airport Cab",
        "description": "Reach Mumbai Airport on time with Swara Cab’s airport transfer service from Kharadi. We specialize in punctual airport drop-offs, offering real-time tracking and professional chauffeurs who know the fastest and safest routes to the airport."
    },
    {
        "name": "Round Trip Cab Kharadi to Mumbai",
        "description": "Book a round trip cab from Kharadi to Mumbai with Swara Cab and enjoy flexible return scheduling, consistent pricing, and the comfort of keeping the same vehicle for both journeys. Ideal for business meetings, family functions, or weekend plans."
    },
    {
        "name": "AC Taxi Kharadi to Mumbai",
        "description": "Enjoy a relaxed journey from Kharadi to Mumbai in a fully air-conditioned Swara Cab. Our AC taxis are perfect for long-distance comfort, ensuring you travel cool and refreshed regardless of the season or time of day."
    },
    {
        "name": "Sedan Cab Kharadi to Mumbai",
        "description": "Swara Cab offers elegant sedan cab options from Kharadi to Mumbai. Suitable for solo travelers, couples, or small families, our sedans provide a spacious and comfortable ride at competitive fares, with experienced drivers ensuring a pleasant journey."
    },
    {
        "name": "SUV Cab Hire Kharadi to Mumbai",
        "description": "Travel in style and comfort with Swara Cab’s SUV taxi service from Kharadi to Mumbai. Our spacious SUVs are ideal for families, groups, or travelers with extra luggage. Enjoy stability and superior legroom throughout the ride."
    },
    {
        "name": "Reliable Cabs Kharadi",
        "description": "Count on Swara Cab for reliable and prompt service from Kharadi to Mumbai. With on-time pickups, trained drivers, and clean vehicles, we prioritize your safety and comfort. Trusted by thousands of customers for consistent service quality."
    },
    {
        "name": "Verified Drivers Kharadi to Mumbai",
        "description": "Your safety is our top concern. All Swara Cab drivers on the Kharadi to Mumbai route are background-verified, professionally trained, and courteous. Sit back and enjoy a secure journey with experienced chauffeurs behind the wheel."
    },
    {
        "name": "24/7 Cab Kharadi",
        "description": "Need a ride from Kharadi at any hour? Swara Cab offers round-the-clock taxi services to Mumbai. Whether it’s early morning or midnight, our cabs are available 24/7 with assured availability and real-time tracking for complete peace of mind."
    },
    {
        "name": "Executive Cabs from Kharadi",
        "description": "Upgrade your travel with Swara Cab’s executive cab service from Kharadi to Mumbai. Ride in premium vehicles with added features and luxury, ideal for business executives, high-end travel, or VIP clients who expect more from every ride."
    },
    {
        "name": "Affordable Taxi Kharadi to Mumbai",
        "description": "Looking for budget-friendly travel? Swara Cab offers affordable taxi options from Kharadi to Mumbai. Choose from various cab types, all priced transparently and without hidden fees. Comfort and savings go hand in hand with us."
    },
    {
        "name": "Corporate Cab Booking Kharadi",
        "description": "Swara Cab provides professional corporate cab services from Kharadi to Mumbai. Enjoy timely service, clean vehicles, and executive chauffeurs. Ideal for employee travel, client pickups, and corporate meetings. Monthly billing available for registered companies."
    },
    {
        "name": "Business Travel Kharadi to Mumbai",
        "description": "For business travelers, Swara Cab offers reliable, comfortable, and efficient transportation from Kharadi to Mumbai. Reach meetings, conferences, or airports on time with our business-class travel solutions tailored for professionals."
    }
],

"tableData": [
    ["Kharadi to Mumbai Cab", "Online Taxi Kharadi to Mumbai"],
    ["One-Way Cab from Kharadi", "Kharadi to Mumbai Airport Cab"],
    ["Round Trip Cab Kharadi to Mumbai", "AC Taxi Kharadi to Mumbai"],
    ["Sedan Cab Kharadi to Mumbai", "SUV Cab Hire Kharadi to Mumbai"],
    ["Reliable Cabs Kharadi", "Verified Drivers Kharadi to Mumbai"],
    ["24/7 Cab Kharadi", "Executive Cabs from Kharadi"],
    ["Affordable Taxi Kharadi to Mumbai", "Corporate Cab Booking Kharadi"],
    ["Business Travel Kharadi to Mumbai", ""]
],





"whychoose": [
  {
    "WhyChooseheading": "On-Time Pickup and Drop from Kharadi to Mumbai",
    "WhyChoosedescription": "Our Kharadi to Mumbai cab service is built on punctuality. Whether you're catching a flight, heading to a business meeting, or attending a personal event, our drivers ensure timely pickups and efficient drop-offs using real-time route optimization for a stress-free journey."
  },
  {
    "WhyChooseheading": "Comfortable and Sanitized Vehicles",
    "WhyChoosedescription": "Travel in fully air-conditioned, clean, and spacious vehicles that are thoroughly sanitized before every ride. From economy sedans to premium SUVs like Innova Crysta and Ertiga, we have the perfect ride to suit your comfort and style for the long journey to Mumbai."
  },
  {
    "WhyChooseheading": "Affordable and Transparent Pricing",
    "WhyChoosedescription": "Our fares are competitive and clearly defined. You’ll receive upfront quotes that include tolls, driver charges, and taxes — with absolutely no hidden costs. We believe in 100% transparency so you can book your cab with confidence."
  },
  {
    "WhyChooseheading": "Professional and Courteous Drivers",
    "WhyChoosedescription": "Our experienced drivers are well-versed with the Pune–Mumbai route, including expressways and alternate paths to avoid traffic. They are professionally trained, polite, and committed to offering a safe and respectful travel experience every time."
  },
  {
    "WhyChooseheading": "24/7 Cab Availability from Kharadi",
    "WhyChoosedescription": "Need a cab at midnight or early morning from Kharadi to Mumbai? We operate 24/7 to accommodate your schedule. Our support team is also available round the clock to assist with bookings, modifications, or urgent travel needs."
  },
  {
    "WhyChooseheading": "Seamless Booking Experience",
    "WhyChoosedescription": "Booking your cab is simple and quick through our website, mobile app, or phone. You get instant confirmation, flexible scheduling, and the option to modify or cancel as needed, all designed to make your journey planning smooth and stress-free."
  },
  {
    "WhyChooseheading": "Focus on Safety and Hygiene",
    "WhyChoosedescription": "All cabs are equipped with essential safety features like seat belts, airbags, and GPS tracking. We also maintain strict cleanliness protocols, including regular vehicle sanitization and driver hygiene checks to ensure a safe and healthy ride."
  },
  {
    "WhyChooseheading": "Ideal for Airport Transfers, Business Trips & Leisure Travel",
    "WhyChoosedescription": "Whether you're heading to Mumbai Airport, attending a business meeting, or planning a family trip, our Kharadi to Mumbai cab service offers customized transport solutions that prioritize comfort, timeliness, and professional service."
  }
]













    }



const faqData = [
    {
        question: "Do you offer cab services from Kharadi to Mumbai?",
        answer: "Yes, Swara Cabs provides reliable and safe cab services from Kharadi, Pune to all parts of Mumbai, including airport transfers."
    },
    {
        question: "What is the fare for a Kharadi to Mumbai cab?",
        answer: "Fares start at ₹5,600 for a one-way sedan. Pricing depends on the vehicle type, travel time, and route."
    },
    {
        question: "How can I book a cab from Kharadi to Mumbai?",
        answer: "You can book directly through our website or call us at +91 9697780707. We offer quick booking with instant confirmation."
    },
    {
        question: "Which vehicle options are available for this route?",
        answer: "We offer a variety of vehicles including sedans, SUVs, and tempo travellers based on your needs and group size."
    },
    {
        question: "Are toll charges and driver allowances included in the fare?",
        answer: "Yes, all our fares are inclusive of tolls, taxes, and driver charges. There are no hidden costs."
    },
    {
        question: "Do you provide airport drop service from Kharadi to Mumbai Airport?",
        answer: "Absolutely. We specialize in on-time airport drop services from Kharadi to both domestic and international terminals in Mumbai."
    },
    {
        question: "Can I book a cab late at night from Kharadi?",
        answer: "Yes, Swara Cabs operates 24/7. Night travel is available with a nominal surcharge for travel between 10 PM and 6 AM."
    },
    {
        question: "Is round trip booking available for Kharadi to Mumbai?",
        answer: "Yes, we offer both one-way and round trip options. You can schedule your return trip in advance for a seamless experience."
    },
    {
        question: "Is it safe for solo or female passengers to travel?",
        answer: "Yes, your safety is our top priority. All our drivers are background-verified and trained to ensure a secure ride."
    },
    {
        question: "What payment modes are accepted for the Kharadi to Mumbai cab?",
        answer: "We accept UPI, cash, credit/debit cards, and all major digital wallets for your convenience."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Yogesh Rane',
        review: 'I had a great experience traveling from Kharadi to Mumbai with Swara Cabs. The ride was smooth, and the driver was very professional.'
    },
    {
        name: 'Ms. Aarti Dixit',
        review: 'Swara Cabs provided an excellent cab from Kharadi to Mumbai Airport. The vehicle was clean, arrived on time, and the booking was super easy.'
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
  "name": "Kharadi to Mumbai Cab",
  "image": "https://www.swaracabs.in/assets/images/kharadi-to-mumbai-cab.jpg",
  "description": "Book Kharadi to Mumbai cab with Swara Cabs for reliable, affordable, and comfortable travel. AC sedans and SUVs available for one-way, round-trip, and airport transfers with verified drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "5897"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2299",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/kharadi-to-mumbai-cab"
  }
};




    return (
        <div>
<Helmet>
  <title>Kharadi to Mumbai Cab | Reliable & Affordable | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Kharadi to Mumbai cab with Swara Cabs for reliable, affordable, and comfortable travel. AC sedans and SUVs available for one-way, round-trip, and airport transfers with verified drivers." 
  />
  <meta 
    name="keywords" 
    content="Kharadi to Mumbai Cab, Online Taxi Kharadi to Mumbai, One-Way Cab from Kharadi, Kharadi to Mumbai Airport Cab, Round Trip Cab Kharadi to Mumbai, AC Taxi Kharadi to Mumbai, Sedan Cab Kharadi to Mumbai, SUV Cab Hire Kharadi to Mumbai, Reliable Cabs Kharadi, Verified Drivers Kharadi to Mumbai, 24/7 Cab Kharadi, Executive Cabs from Kharadi, Affordable Taxi Kharadi to Mumbai, Corporate Cab Booking Kharadi, Business Travel Kharadi to Mumbai" 
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
                            <img src='/images/keyword/12.jpg' alt='img' />
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

export default Kharaditomumbaicabs;