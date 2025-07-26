
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Kothrudtomumbaicabs() {



    const cardData =
    {
        keyword: 'Kothrud to Mumbai Cab',
        heading: 'Swara Cabs : Kothrud to Mumbai Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Kothrud to Mumbai. Mumbai, Maharashtra’s vibrant commercial and cultural capital, is famous for its iconic skyline, bustling streets, and diverse attractions. Whether you are traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a smooth and hassle-free experience. The distance from Kothrud to Mumbai is approximately 150 kilometers, with a travel time of around 3 to 4 hours depending on traffic conditions. With our well-maintained fleet and experienced drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

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
                "title": "Colaba Causeway",
                "description": "Colaba Causeway is a vibrant shopping street in South Mumbai, famous for its street shops, fashion boutiques, cafés, and old-world charm. It’s a great place to shop for quirky accessories, clothes, antiques, and experience Mumbai’s bustling vibe."
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
        "name": "Kothrud to Mumbai Cab",
        "description": "Travel from Kothrud to Mumbai with ease using Swara Cab’s dependable intercity cab service. Whether you're heading for business, a personal trip, or a vacation, our clean, punctual, and well-maintained cabs offer a smooth and comfortable journey. Enjoy door-to-door pickup, professional service, and real-time tracking throughout your ride."
    },
    {
        "name": "Kothrud to Mumbai AC Taxi",
        "description": "Beat the heat and travel in total comfort with Swara Cab’s air-conditioned taxis from Kothrud to Mumbai. Our AC taxis are ideal for long-distance journeys, ensuring a relaxing and refreshing ride regardless of the weather. Choose from a range of AC-equipped sedans, SUVs, and premium models."
    },
    {
        "name": "Online Cab Booking Kothrud",
        "description": "Book your cab online from Kothrud to Mumbai in just minutes. Swara Cab offers a fast and secure online booking platform where you can check availability, get real-time fare estimates, and instantly confirm your trip. Enjoy a hassle-free experience backed by 24/7 support and SMS/email confirmations."
    },
    {
        "name": "One-Way Taxi Kothrud to Mumbai",
        "description": "Swara Cab provides affordable one-way taxi services from Kothrud to Mumbai. Ideal for airport drops or one-time visits, you only pay for the distance traveled. Get doorstep pickup, a clean vehicle, and a courteous driver without any return fare charges. Flexible timing and availability included."
    },
    {
        "name": "Kothrud to Mumbai Round Trip Cab",
        "description": "Planning to return the same day or after a few days? Swara Cab offers convenient round trip cab packages from Kothrud to Mumbai. Keep the same car and driver for the entire journey, save on rebooking, and travel at your own pace. Ideal for business travel, weekend plans, or family visits."
    },
    {
        "name": "Airport Cab Kothrud to Mumbai",
        "description": "Ensure timely airport travel with Swara Cab’s Kothrud to Mumbai Airport cab service. We provide reliable transfers to both domestic and international terminals. Our drivers are trained to choose the fastest routes, helping you reach the airport on time, every time—day or night."
    },
    {
        "name": "Affordable Cab Kothrud to Mumbai",
        "description": "Looking for a budget-friendly travel option? Swara Cab offers competitive rates for all Kothrud to Mumbai routes. Our transparent pricing, no hidden fees, and economical vehicle options make your travel comfortable and cost-effective. Get more value for your money with our reliable service."
    },
    {
        "name": "Kothrud to Mumbai Sedan Taxi",
        "description": "Choose our sedan taxi service from Kothrud to Mumbai for a premium yet affordable experience. Perfect for solo travelers, couples, or small families, our sedans offer ample legroom, luggage space, and a smooth ride. Enjoy executive comfort at reasonable rates."
    },
    {
        "name": "SUV Cab Kothrud to Mumbai",
        "description": "Travel with extra comfort and space with Swara Cab’s SUV taxi service from Kothrud to Mumbai. Whether you have more passengers or extra luggage, our SUVs ensure a comfortable and safe ride. Ideal for group travel, family outings, or long trips along the expressway."
    },
    {
        "name": "Kothrud to Mumbai Expressway Cab",
        "description": "Experience a fast and scenic ride with our expressway cab service from Kothrud to Mumbai. Swara Cab’s drivers are trained for highway travel, ensuring a smooth, efficient, and enjoyable journey using the Mumbai–Pune Expressway. Travel time is reduced and comfort is maximized."
    },
    {
        "name": "Corporate Cab Hire Kothrud",
        "description": "Swara Cab offers dedicated corporate cab services from Kothrud to Mumbai. Whether it’s employee transport, executive travel, or business meetings, our premium vehicles, trained chauffeurs, and timely service ensure a seamless experience. Monthly billing and corporate accounts available on request."
    },
    {
        "name": "Safe Cab Ride Kothrud",
        "description": "Your safety is our top priority. All Swara Cab vehicles from Kothrud to Mumbai are GPS-enabled, sanitized regularly, and driven by background-verified drivers. We follow strict safety protocols to ensure you and your family have a secure journey at any time of day."
    },
    {
        "name": "Executive Cab Kothrud to Mumbai",
        "description": "Travel in luxury with Swara Cab’s executive taxi service from Kothrud to Mumbai. Our fleet includes high-end vehicles with plush interiors, professional chauffeurs, and added features like Wi-Fi (on request). Ideal for VIP guests, business leaders, and anyone seeking a premium travel experience."
    },
    {
        "name": "24/7 Taxi Kothrud to Mumbai",
        "description": "Swara Cab offers round-the-clock cab services from Kothrud to Mumbai. Whether it's a late-night airport drop or an early-morning departure, we are always available. Book online or by phone any time, and we’ll be at your doorstep with a reliable cab ready to go."
    },
    {
        "name": "Quick Cab Kothrud to Mumbai",
        "description": "Need a cab urgently? Swara Cab offers quick response cab service from Kothrud to Mumbai. With our wide driver network in Pune, we ensure minimal waiting time and prompt pickups. Book instantly and hit the road without delay."
    }
],

"tableData": [
    ["Kothrud to Mumbai Cab", "Kothrud to Mumbai AC Taxi"],
    ["Online Cab Booking Kothrud", "One-Way Taxi Kothrud to Mumbai"],
    ["Kothrud to Mumbai Round Trip Cab", "Airport Cab Kothrud to Mumbai"],
    ["Affordable Cab Kothrud to Mumbai", "Kothrud to Mumbai Sedan Taxi"],
    ["SUV Cab Kothrud to Mumbai", "Kothrud to Mumbai Expressway Cab"],
    ["Corporate Cab Hire Kothrud", "Safe Cab Ride Kothrud"],
    ["Executive Cab Kothrud to Mumbai", "24/7 Taxi Kothrud to Mumbai"],
    ["Quick Cab Kothrud to Mumbai", ""]
],





"whychoose": [
  {
    "WhyChooseheading": "Reliable and Punctual Kothrud to Mumbai Cab Service",
    "WhyChoosedescription": "We prioritize timely pickups and drop-offs to ensure your journey from Kothrud to Mumbai is smooth and stress-free. Our drivers keep track of traffic updates to avoid delays, so you reach your destination on time every time."
  },
  {
    "WhyChooseheading": "Comfortable and Well-Maintained Vehicles",
    "WhyChoosedescription": "Our fleet includes a range of clean and well-serviced vehicles, from budget-friendly sedans to premium SUVs like Innova Crysta and Ertiga, all equipped with air conditioning and spacious seating for your comfort during the long ride."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing",
    "WhyChoosedescription": "We offer clear and upfront pricing for Kothrud to Mumbai cab rides, inclusive of all taxes, tolls, and driver allowances. Our transparent pricing policy means no hidden charges, helping you plan your travel budget confidently."
  },
  {
    "WhyChooseheading": "Experienced and Professional Drivers",
    "WhyChoosedescription": "Our drivers are licensed professionals with extensive knowledge of routes between Kothrud and Mumbai. They prioritize your safety and provide courteous service, ensuring a comfortable and secure journey."
  },
  {
    "WhyChooseheading": "24/7 Availability to Fit Your Schedule",
    "WhyChoosedescription": "No matter the time of day or night, our Kothrud to Mumbai cab service is available round the clock to accommodate your travel needs, whether it's for business, airport transfers, or leisure."
  },
  {
    "WhyChooseheading": "Easy and Flexible Booking Process",
    "WhyChoosedescription": "Booking your cab is simple via our website, app, or customer support. We provide flexible cancellation and rescheduling options to keep your travel plans hassle-free and adaptable."
  },
  {
    "WhyChooseheading": "Focus on Safety and Hygiene",
    "WhyChoosedescription": "We maintain strict hygiene standards with regular vehicle sanitization and driver health checks. Our cars are equipped with safety features such as seat belts, airbags, and GPS tracking to ensure your peace of mind throughout your trip."
  },
  {
    "WhyChooseheading": "Perfect for Business and Personal Travel",
    "WhyChoosedescription": "Whether you’re traveling for a corporate meeting, airport transfer, or a family trip, our Kothrud to Mumbai cab service offers professional, reliable, and comfortable transportation tailored to your needs."
  }
]












    }



const faqData = [
    {
        question: "Do you provide cab service from Kothrud to Mumbai?",
        answer: "Yes, Swara Cabs offers prompt and comfortable cab service from Kothrud, Pune to all major locations in Mumbai, including airport transfers."
    },
    {
        question: "What is the fare for a Kothrud to Mumbai cab?",
        answer: "Our one-way fares start from ₹5,500 for a sedan. The final fare depends on the vehicle type and travel timing."
    },
    {
        question: "How can I book a cab from Kothrud to Mumbai?",
        answer: "You can book online through our website or call +91 9697780707 for immediate assistance and booking confirmation."
    },
    {
        question: "What vehicle options are available for this route?",
        answer: "We provide sedans, SUVs, and tempo travellers to suit different group sizes and travel preferences."
    },
    {
        question: "Do you provide airport drop service from Kothrud to Mumbai?",
        answer: "Yes, Swara Cabs specializes in on-time and safe airport drop services to both Mumbai Domestic and International Airports."
    },
    {
        question: "Are tolls and taxes included in the fare?",
        answer: "Yes, our fares are all-inclusive, covering toll charges, driver allowance, and taxes. No hidden fees."
    },
    {
        question: "Is night travel available from Kothrud?",
        answer: "Yes, we operate 24/7. Night travel is available with a small additional charge for pickups between 10 PM and 6 AM."
    },
    {
        question: "Can I book a round trip from Kothrud to Mumbai?",
        answer: "Yes, round-trip services are available and can be scheduled based on your return time and convenience."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. All our drivers are background-verified and trained to ensure a safe and smooth journey."
    },
    {
        question: "What are the payment options for this service?",
        answer: "We accept UPI, cash, credit/debit cards, and popular digital wallets for your convenience."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Ajinkya Joshi',
        review: 'I booked a cab from Kothrud to Mumbai with Swara Cabs. The vehicle was clean, the driver was courteous, and the journey was very smooth.'
    },
    {
        name: 'Ms. Neha Kulkarni',
        review: 'Swara Cabs provided excellent service for my Kothrud to Mumbai airport trip. Easy booking, transparent fare, and a safe ride!'
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
  "name": "Kothrud to Mumbai Cab",
  "image": "https://www.swaracabs.in/assets/images/kothrud-to-mumbai-cab.jpg",
  "description": "Book Kothrud to Mumbai cab with Swara Cabs for safe, affordable, and reliable travel. Choose AC sedans and SUVs for one-way, round-trip, and airport transfers with verified drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "8547"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2299",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/kothrud-to-mumbai-cab"
  }
};






    return (
        <div>
<Helmet>
  <title>Kothrud to Mumbai Cab | Reliable & Affordable | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Kothrud to Mumbai cab with Swara Cabs for safe, affordable, and reliable travel. Choose AC sedans and SUVs for one-way, round-trip, and airport transfers with verified drivers." 
  />
  <meta 
    name="keywords" 
    content="Kothrud to Mumbai Cab, Kothrud to Mumbai AC Taxi, Online Cab Booking Kothrud, One-Way Taxi Kothrud to Mumbai, Kothrud to Mumbai Round Trip Cab, Airport Cab Kothrud to Mumbai, Affordable Cab Kothrud to Mumbai, Kothrud to Mumbai Sedan Taxi, SUV Cab Kothrud to Mumbai, Kothrud to Mumbai Expressway Cab, Corporate Cab Hire Kothrud, Safe Cab Ride Kothrud, Executive Cab Kothrud to Mumbai, 24/7 Taxi Kothrud to Mumbai, Quick Cab Kothrud to Mumbai" 
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
                            <img src='/images/keyword/11.jpg' alt='img' />
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

export default Kothrudtomumbaicabs;