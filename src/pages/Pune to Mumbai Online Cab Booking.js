
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Punetomumbaionlinecabbooking() {



    const cardData =
    {
        keyword: 'Pune to Mumbai Online Cab Booking',
        heading: 'Swara Cabs : Pune to Mumbai Online Cab Booking',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable online cab booking services for your journey from Pune to Mumbai. Mumbai, the vibrant financial capital of India, is known for its historic landmarks, cultural richness, and dynamic city life. Whether you are planning a business trip, a family visit, or an airport transfer, our seamless online booking system ensures a quick and hassle-free experience. The distance from Pune to Mumbai is approximately 150 to 155 km, with a travel time of around 3 hours via the Expressway. With our well-maintained fleet and professional drivers, Swara Cabs provides a safe and convenient ride, making your travel smooth and worry-free.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

        "topPlaces": [
             {
                "title": "Marine Drive",
                "description": "Also known as the Queen’s Necklace, Marine Drive is a 3.6 km long boulevard that runs along the coast of South Mumbai. It's perfect for evening strolls, watching sunsets, or just enjoying the sea breeze. The view of the city’s skyline at night is breathtaking."
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
        "name": "Pune to Mumbai Online Cab Booking",
        "description": "Book your Pune to Mumbai cab online with ease through Swara Cab’s user-friendly platform. Whether you're planning a business trip, a family visit, or a weekend getaway, our streamlined booking system ensures a hassle-free reservation experience. Select your preferred car type, check fare estimates, and confirm your ride—all within minutes."
    },
    {
        "name": "Cab Booking App Pune to Mumbai",
        "description": "Swara Cab offers a dedicated cab booking app for quick and convenient Pune to Mumbai travel. Our app lets you choose vehicles, track rides in real-time, and get instant fare confirmations. Travel smart with a few taps and enjoy our dependable service and support."
    },
    {
        "name": "Instant Taxi Booking Pune to Mumbai",
        "description": "Need a cab urgently? Swara Cab provides instant taxi bookings from Pune to Mumbai, perfect for last-minute plans or emergencies. Our system matches you with nearby drivers quickly, ensuring minimal wait time and maximum efficiency, all while maintaining a safe and comfortable journey."
    },
    {
        "name": "One-Way Online Cab Pune to Mumbai",
        "description": "For travelers not planning a return trip, Swara Cab offers reliable one-way online cab bookings from Pune to Mumbai. Enjoy affordable fares, clean vehicles, and courteous drivers who’ll ensure a smooth journey without the need to pay for a round trip."
    },
    {
        "name": "Round Trip Cab Booking Pune to Mumbai",
        "description": "Planning to return the same day or within a few days? Swara Cab’s round trip booking from Pune to Mumbai offers excellent value and flexibility. Choose your pick-up and return times, and travel comfortably with the same cab and driver throughout your journey."
    },
    {
        "name": "Pune to Mumbai Airport Cab Online",
        "description": "Catch your flight on time with Swara Cab’s online airport cab booking from Pune to Mumbai. We offer reliable airport transfers with real-time tracking, experienced drivers, and clean vehicles. Our service ensures you reach the terminal safely and without stress."
    },
    {
        "name": "Book Cab Pune to Mumbai Instantly",
        "description": "With Swara Cab, booking a cab instantly for your Pune to Mumbai ride is just a few clicks away. Whether you're at home or on the go, our instant booking feature lets you reserve your ride quickly and begin your journey without delay."
    },
    {
        "name": "Online AC Taxi Pune to Mumbai",
        "description": "Travel in cool comfort with Swara Cab’s AC taxi services from Pune to Mumbai, bookable online anytime. Our fleet includes well-maintained air-conditioned cars that make long-distance travel refreshing and stress-free—perfect for every season."
    },
    {
        "name": "Pune to Mumbai Express Highway Cab Booking",
        "description": "Take the scenic and fastest route with Swara Cab’s express highway cab service from Pune to Mumbai. Our experienced drivers know the best routes along the Mumbai–Pune Expressway, ensuring timely arrivals, safe rides, and a smooth driving experience."
    },
    {
        "name": "Pune to Mumbai App-Based Taxi",
        "description": "Swara Cab’s app-based taxi service brings the convenience of digital booking to your Pune to Mumbai trip. With features like live tracking, fare previews, digital payments, and ride history, your experience is seamless from booking to drop-off."
    },
    {
        "name": "Pune to Mumbai Doorstep Cab Booking",
        "description": "Enjoy door-to-door convenience with Swara Cab’s doorstep pickup service for Pune to Mumbai travel. Just enter your location while booking and we’ll send a reliable cab to your exact address—no need to walk or wait at designated points."
    },
    {
        "name": "Online Taxi Pune to Mumbai 24/7",
        "description": "Swara Cab provides 24/7 online taxi bookings for your Pune to Mumbai journey. Whether it’s an early morning flight or a late-night emergency, our round-the-clock service ensures you always have a safe and dependable travel option."
    },
    {
        "name": "Pune to Mumbai Verified Cab Booking",
        "description": "Travel worry-free with Swara Cab’s verified cab services from Pune to Mumbai. All our drivers and vehicles are thoroughly vetted, ensuring your safety and providing peace of mind throughout your journey."
    },
    {
        "name": "Pune to Mumbai Sedan Booking Online",
        "description": "Looking for a comfortable sedan for your Pune to Mumbai trip? Swara Cab offers online booking for spacious sedans ideal for solo travelers, couples, or small families. Enjoy a smooth, stylish, and relaxing ride."
    },
    {
        "name": "Pune to Mumbai SUV Cab Booking",
        "description": "Need more space or traveling in a group? Swara Cab provides SUV bookings from Pune to Mumbai online. Our SUVs offer ample seating and luggage space, making long-distance travel enjoyable and comfortable for everyone."
    }
],

"tableData": [
    ["Pune to Mumbai Online Cab Booking", "Cab Booking App Pune to Mumbai"],
    ["Instant Taxi Booking Pune to Mumbai", "One-Way Online Cab Pune to Mumbai"],
    ["Round Trip Cab Booking Pune to Mumbai", "Pune to Mumbai Airport Cab Online"],
    ["Book Cab Pune to Mumbai Instantly", "Online AC Taxi Pune to Mumbai"],
    ["Pune to Mumbai Express Highway Cab Booking", "Pune to Mumbai App-Based Taxi"],
    ["Pune to Mumbai Doorstep Cab Booking", "Online Taxi Pune to Mumbai 24/7"],
    ["Pune to Mumbai Verified Cab Booking", "Pune to Mumbai Sedan Booking Online"],
    ["Pune to Mumbai SUV Cab Booking", ""]
],


    "whychoose": [
  {
    "WhyChooseheading": "Easy and Instant Online Cab Booking",
    "WhyChoosedescription": "Our platform allows you to book your Pune to Mumbai cab within seconds. With a user-friendly interface, you can easily select your pickup point, vehicle type, and travel time—no calls, no delays—just a smooth online experience from start to finish."
  },
  {
    "WhyChooseheading": "24/7 Booking Access from Anywhere",
    "WhyChoosedescription": "Whether you’re booking at midnight or early morning, our online system is available 24/7. Access your booking dashboard from any device—mobile, tablet, or desktop—and get real-time confirmations and updates at your fingertips."
  },
  {
    "WhyChooseheading": "Wide Choice of Vehicles Available Online",
    "WhyChoosedescription": "From budget-friendly sedans to premium SUVs like Innova Crysta, you can view and select from a wide fleet while booking online. Filter options by comfort, seating, luggage, or pricing based on your travel needs."
  },
  {
    "WhyChooseheading": "Real-Time Availability and Fare Estimates",
    "WhyChoosedescription": "Our online system shows real-time cab availability along with instant fare estimates including tolls, driver allowance, and taxes. You’ll always know what to expect before you confirm the ride."
  },
  {
    "WhyChooseheading": "Secure Online Payments and Booking Confirmation",
    "WhyChoosedescription": "Make payments safely through UPI, credit/debit cards, wallets, or net banking. Every booking includes an automated invoice and a confirmation SMS/email for peace of mind and travel proof."
  },
  {
    "WhyChooseheading": "Zero Booking Charges and No Hidden Fees",
    "WhyChoosedescription": "There are no extra charges when you book online. What you see is what you pay—no service fee, no convenience charges, and no last-minute add-ons."
  },
  {
    "WhyChooseheading": "Live Tracking and Cab Status Updates",
    "WhyChoosedescription": "After online booking, track your cab in real-time and get regular updates about your driver’s location, estimated arrival time, and contact details through SMS or app notifications."
  },
  {
    "WhyChooseheading": "Online Support and Live Chat Assistance",
    "WhyChoosedescription": "If you need help during or after booking, our live chat and online customer support team are ready to assist you with rescheduling, fare breakdowns, or any other travel concerns."
  }
]







    }



   const faqData = [
    {
        question: "Can I book a Pune to Mumbai cab online with Swara Cabs?",
        answer: "Yes, Swara Cabs offers easy online cab booking for Pune to Mumbai. You can book through our website or by calling us directly at +91 9697780707."
    },
    {
        question: "Is instant confirmation available for online bookings?",
        answer: "Yes, most bookings receive instant confirmation via SMS and email after payment or booking request submission."
    },
    {
        question: "What details are needed to book a cab online?",
        answer: "We require your pickup and drop location, preferred vehicle type, travel date and time, and contact details to confirm the booking."
    },
    {
        question: "What types of cabs are available for online booking?",
        answer: "We offer a variety of vehicles including sedans, SUVs, and tempo travellers to suit your travel and comfort requirements."
    },
    {
        question: "Can I schedule a cab for a later time or date?",
        answer: "Absolutely. You can pre-book your ride in advance for any date and time through our online portal or helpline."
    },
    {
        question: "Is the fare shown during online booking final?",
        answer: "Yes, the fare displayed during online booking is final and includes taxes, tolls, and driver charges—no hidden fees."
    },
    {
        question: "What if I need to cancel or reschedule my booking?",
        answer: "You can cancel or reschedule by contacting our support team. We offer free cancellation up to 12 hours before the scheduled trip."
    },
    {
        question: "Do I need to pay in advance for online booking?",
        answer: "You can choose to pay partially in advance or opt for full payment after the ride. Flexible payment options are available."
    },
    {
        question: "How can I track my booking status?",
        answer: "Once booked, you’ll receive live updates on your ride status via SMS or WhatsApp along with driver contact details."
    },
    {
        question: "Is customer support available for online bookings?",
        answer: "Yes, our customer support is available 24/7 to assist with online bookings, queries, and travel assistance."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Rohit Patil',
        review: 'Booked a Pune to Mumbai cab online with Swara Cabs and the process was super smooth. The driver arrived on time, and the journey was very comfortable.'
    },
    {
        name: 'Mrs. Sneha Apte',
        review: 'Swara Cabs made online cab booking effortless. Got a confirmation instantly and the ride experience from Pune to Mumbai was top-notch!'
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
  "name": "Pune to Mumbai Online Cab Booking",
  "image": "https://www.swaracabs.in/assets/images/pune-to-mumbai-cab-booking.jpg",
  "description": "Book Pune to Mumbai cabs online with Swara Cabs. Enjoy instant booking, reliable drivers, AC sedans and SUVs for one-way and round trip journeys. 24/7 verified cab services at affordable prices.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "9635"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2399",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/pune-to-mumbai-online-cab-booking"
  }
};







    return (
        <div>
<Helmet>
  <title>Pune to Mumbai Online Cab Booking | Instant & Verified | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Pune to Mumbai cabs online with Swara Cabs. Enjoy instant booking, reliable drivers, AC sedans and SUVs for one-way and round trip journeys. 24/7 verified cab services at affordable prices." 
  />
  <meta 
    name="keywords" 
    content="Pune to Mumbai Online Cab Booking, Cab Booking App Pune to Mumbai, Instant Taxi Booking Pune to Mumbai, One-Way Online Cab Pune to Mumbai, Round Trip Cab Booking Pune to Mumbai, Pune to Mumbai Airport Cab Online, Book Cab Pune to Mumbai Instantly, Online AC Taxi Pune to Mumbai, Pune to Mumbai Express Highway Cab Booking, Pune to Mumbai App-Based Taxi, Pune to Mumbai Doorstep Cab Booking, Online Taxi Pune to Mumbai 24/7, Pune to Mumbai Verified Cab Booking, Pune to Mumbai Sedan Booking Online, Pune to Mumbai SUV Cab Booking" 
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
                            <img src='/images/keyword/2.jpg' alt='img' />
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

export default Punetomumbaionlinecabbooking;