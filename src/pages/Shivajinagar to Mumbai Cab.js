
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Shivajinagartomumbaicab() {



    const cardData =
    {
        keyword: 'Shivajinagar to Mumbai Cab',
        heading: 'Swara Cabs : Shivajinagar to Mumbai Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Shivajinagar (Pune) to Mumbai. Mumbai, Maharashtra’s bustling commercial and cultural hub, is celebrated for its iconic skyline, rich heritage, and vibrant urban life. Whether you are traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a seamless and hassle-free experience. The road distance between Shivajinagar and Mumbai is approximately 145–150 kilometers, with a travel time of around 2 to 3 hours depending on traffic conditions. With our well-maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

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
    "name": "Shivajinagar to Mumbai Cab",
    "description": "Travel conveniently from Shivajinagar to Mumbai with Swara Cab's premium intercity cab services. Whether you're planning a business trip, a family outing, or a solo journey, our well-maintained vehicles and professional drivers ensure a comfortable and punctual ride. Enjoy a smooth drive on the Mumbai-Pune Expressway with affordable pricing and flexible booking options."
  },
  {
    "name": "Shivajinagar to Mumbai Taxi Booking",
    "description": "Book your Shivajinagar to Mumbai taxi instantly with Swara Cab's seamless online and offline booking options. Choose from a variety of vehicle types including sedans, SUVs, and luxury cars to match your travel needs. With real-time tracking, transparent billing, and courteous chauffeurs, your trip is guaranteed to be pleasant and hassle-free."
  },
  {
    "name": "One-Way Cab Shivajinagar to Mumbai",
    "description": "Looking for a one-way taxi from Shivajinagar to Mumbai? Swara Cab offers budget-friendly, reliable one-way cab services with no hidden return charges. Perfect for airport transfers, business meetings, or weekend getaways, our one-way cabs offer flexibility, safety, and comfort at competitive rates."
  },
  {
    "name": "AC Taxi Shivajinagar to Mumbai",
    "description": "Beat the heat during your long journey with Swara Cab's fully air-conditioned taxis from Shivajinagar to Mumbai. Enjoy a cool, comfortable ride in our climate-controlled sedans or SUVs, equipped with clean interiors and courteous drivers trained to ensure passenger satisfaction throughout the journey."
  },
  {
    "name": "Round Trip Cab Shivajinagar",
    "description": "Planning to return the same day or within a few days? Swara Cab offers affordable round-trip cab packages from Shivajinagar to Mumbai. Keep the same car and driver throughout your trip and enjoy complete peace of mind with pre-scheduled pickups and reliable service for both legs of your journey."
  },
  {
    "name": "Airport Drop Cab Shivajinagar",
    "description": "Need a ride to Mumbai Airport from Shivajinagar? Swara Cab provides timely and dependable airport drop services. Our drivers are experienced in expressway travel and ensure on-time arrivals so you never miss a flight. Choose us for a safe, prompt, and stress-free airport transfer experience."
  },
  {
    "name": "Online Booking Shivajinagar to Mumbai",
    "description": "With Swara Cab’s user-friendly online platform, booking a cab from Shivajinagar to Mumbai takes just a few clicks. Get instant confirmation, track your ride in real-time, and choose your preferred vehicle—all from the comfort of your home. Our online booking is available 24/7 and includes secure payment options."
  },
  {
    "name": "Shivajinagar to Mumbai Sedan Cab",
    "description": "Choose Swara Cab’s comfortable sedan cabs for your trip from Shivajinagar to Mumbai. Our sedans are ideal for individuals and small groups, offering a smooth ride, spacious interiors, and excellent mileage. Whether it’s a short visit or a day-long plan, our sedans ensure a pleasant ride every time."
  },
  {
    "name": "SUV Taxi Shivajinagar to Mumbai",
    "description": "For extra space and comfort, opt for Swara Cab’s SUV taxi services from Shivajinagar to Mumbai. Perfect for families, groups, or travelers with heavy luggage, our SUVs offer a premium travel experience with more legroom, luggage space, and higher ride quality, especially for long-distance highway travel."
  },
  {
    "name": "Executive Taxi Shivajinagar",
    "description": "Travel in style with Swara Cab’s executive taxi services from Shivajinagar to Mumbai. Our premium cabs come equipped with luxurious interiors and experienced chauffeurs who offer a professional, smooth, and comfortable experience ideal for business executives, VIP guests, and high-end travelers."
  },
  {
    "name": "Corporate Cab Hire Shivajinagar",
    "description": "Swara Cab offers dedicated corporate cab hire services from Shivajinagar to Mumbai for business travelers and corporate teams. Enjoy perks like priority booking, monthly invoicing, premium vehicles, and professionally trained drivers. We ensure timely and efficient transportation to and from business hubs and airports."
  },
  {
    "name": "Verified Drivers Shivajinagar to Mumbai",
    "description": "Safety comes first at Swara Cab. All our drivers on the Shivajinagar to Mumbai route are background-verified, professionally trained, and adhere to traffic regulations. We ensure you travel with courteous drivers who prioritize your safety, comfort, and punctuality at every step."
  },
  {
    "name": "Budget Taxi Shivajinagar",
    "description": "Swara Cab offers budget-friendly taxi services from Shivajinagar to Mumbai without compromising on quality. Enjoy economical fares with clean, comfortable vehicles and reliable service. Our transparent pricing policy means no hidden charges, just honest fares for a smooth intercity ride."
  },
  {
    "name": "Safe Ride Shivajinagar to Mumbai",
    "description": "Experience a safe and secure ride from Shivajinagar to Mumbai with Swara Cab. Our vehicles are sanitized regularly, fitted with GPS tracking, and driven by responsible professionals. Whether traveling alone or with family, your safety and peace of mind are our top priorities."
  },
  {
    "name": "Shivajinagar to Mumbai Expressway Taxi",
    "description": "Save time and enjoy a fast, scenic ride with our Expressway taxi service from Shivajinagar to Mumbai. Swara Cab drivers take the efficient Mumbai-Pune Expressway route, ensuring a quicker and smoother travel experience. With toll-inclusive options and reliable service, your intercity journey is always convenient and stress-free."
  }
],

"tableData": [
  ["Shivajinagar to Mumbai Cab", "Shivajinagar to Mumbai Taxi Booking"],
  ["One-Way Cab Shivajinagar to Mumbai", "AC Taxi Shivajinagar to Mumbai"],
  ["Round Trip Cab Shivajinagar", "Airport Drop Cab Shivajinagar"],
  ["Online Booking Shivajinagar to Mumbai", "Shivajinagar to Mumbai Sedan Cab"],
  ["SUV Taxi Shivajinagar to Mumbai", "Executive Taxi Shivajinagar"],
  ["Corporate Cab Hire Shivajinagar", "Verified Drivers Shivajinagar to Mumbai"],
  ["Budget Taxi Shivajinagar", "Safe Ride Shivajinagar to Mumbai"],
  ["Shivajinagar to Mumbai Expressway Taxi", ""]
],




"whychoose": [
  {
    "WhyChooseheading": "Reliable Cab Service from Shivajinagar to Mumbai",
    "WhyChoosedescription": "We offer dependable cab services that guarantee on-time pickups and drop-offs from Shivajinagar to Mumbai. Whether you’re traveling for work, vacation, or catching a flight, you can count on our punctuality and professionalism throughout the journey."
  },
  {
    "WhyChooseheading": "Clean, Comfortable & Air-Conditioned Cabs",
    "WhyChoosedescription": "Our fleet includes well-maintained vehicles—ranging from sedans to premium SUVs like Innova Crysta and Ertiga—offering air-conditioning, ample legroom, and cushioned seating to ensure you enjoy a smooth and restful ride to Mumbai."
  },
  {
    "WhyChooseheading": "Upfront and Transparent Pricing",
    "WhyChoosedescription": "Our pricing model is transparent and straightforward. You’ll receive a complete fare breakdown that includes tolls, taxes, and driver charges—so there are no last-minute surprises or hidden costs. What you see is what you pay."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Drivers",
    "WhyChoosedescription": "All our drivers are trained professionals with years of experience in long-distance travel. They know the Pune–Mumbai route thoroughly, maintain safe driving practices, and provide polite, respectful service throughout your ride."
  },
  {
    "WhyChooseheading": "24/7 Cab Availability in Shivajinagar",
    "WhyChoosedescription": "Whether you need an early morning drop at Mumbai airport or a late-night return from the city, our cab service from Shivajinagar is available around the clock to meet your schedule. We're here when you need us, day or night."
  },
  {
    "WhyChooseheading": "Hassle-Free Online Booking System",
    "WhyChoosedescription": "Book your Shivajinagar to Mumbai cab easily through our user-friendly website, mobile app, or customer support. Get instant confirmations, fare estimates, and flexible booking options—all designed to make your travel experience smoother."
  },
  {
    "WhyChooseheading": "Safety First – Every Ride, Every Time",
    "WhyChoosedescription": "All cabs are GPS-enabled, thoroughly sanitized before every trip, and driven by vetted professionals. Seat belts, airbags, and other safety measures are in place to give you peace of mind during your journey."
  },
  {
    "WhyChooseheading": "Perfect for Personal, Airport, and Corporate Travel",
    "WhyChoosedescription": "Whether you’re heading to Mumbai for leisure, catching a flight from the airport, or attending an important business meeting, our cab services from Shivajinagar are tailored to fit your exact travel needs with maximum comfort and reliability."
  }
]














    }



const faqData = [
    {
        question: "Do you offer cab services from Shivajinagar to Mumbai?",
        answer: "Yes, Swara Cabs provides prompt and reliable cab services from Shivajinagar, Pune to all destinations in Mumbai, including airport transfers."
    },
    {
        question: "What is the fare for a Shivajinagar to Mumbai cab?",
        answer: "Our fares start from ₹5,500 for a one-way trip in a sedan. Prices may vary depending on the vehicle type and time of travel."
    },
    {
        question: "How can I book a cab from Shivajinagar to Mumbai?",
        answer: "You can book online through our website or call us at +91 9697780707 for fast and easy booking."
    },
    {
        question: "What vehicle options are available for this route?",
        answer: "We provide sedans, SUVs, and tempo travellers to meet the needs of individuals, families, or groups."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, our fares are all-inclusive and cover tolls, taxes, and driver allowances. No hidden costs."
    },
    {
        question: "Do you provide airport drops from Shivajinagar to Mumbai?",
        answer: "Yes, Swara Cabs offers timely and professional airport drop services to both domestic and international airports in Mumbai."
    },
    {
        question: "Can I book a cab for night travel from Shivajinagar?",
        answer: "Yes, we operate 24/7. Night travel is available with a nominal surcharge between 10 PM and 6 AM."
    },
    {
        question: "Is it possible to book a round trip from Shivajinagar to Mumbai?",
        answer: "Yes, you can book both one-way and round trips with flexible return options tailored to your schedule."
    },
    {
        question: "Is Swara Cabs safe for solo or female travelers?",
        answer: "Absolutely. Our drivers are verified and trained to ensure a safe and secure journey for all passengers."
    },
    {
        question: "What payment options are available for this cab service?",
        answer: "We accept UPI, cash, credit/debit cards, and all major digital wallets for your convenience."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Sandeep Jadhav',
        review: 'I booked a cab from Shivajinagar to Mumbai with Swara Cabs. Excellent service, punctual driver, and very clean car. Highly recommended!'
    },
    {
        name: 'Ms. Sneha Pathak',
        review: 'Swara Cabs made my airport transfer from Shivajinagar to Mumbai very easy and stress-free. Great service and smooth ride!'
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
  "name": "Shivajinagar to Mumbai Cab",
  "image": "https://www.swaracabs.in/assets/images/shivajinagar-to-mumbai-cab.jpg",
  "description": "Book Shivajinagar to Mumbai cab with Swara Cabs for safe, reliable, and affordable travel. AC sedans and SUVs available for one-way, round-trip, and airport transfers with verified drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "9968"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2299",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/shivajinagar-to-mumbai-cab"
  }
};








    return (
        <div>
<Helmet>
  <title>Shivajinagar to Mumbai Cab | Safe & Affordable | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Shivajinagar to Mumbai cab with Swara Cabs for safe, reliable, and affordable travel. AC sedans and SUVs available for one-way, round-trip, and airport transfers with verified drivers." 
  />
  <meta 
    name="keywords" 
    content="Shivajinagar to Mumbai Cab, Shivajinagar to Mumbai Taxi Booking, One-Way Cab Shivajinagar to Mumbai, AC Taxi Shivajinagar to Mumbai, Round Trip Cab Shivajinagar, Airport Drop Cab Shivajinagar, Online Booking Shivajinagar to Mumbai, Shivajinagar to Mumbai Sedan Cab, SUV Taxi Shivajinagar to Mumbai, Executive Taxi Shivajinagar, Corporate Cab Hire Shivajinagar, Verified Drivers Shivajinagar to Mumbai, Budget Taxi Shivajinagar, Safe Ride Shivajinagar to Mumbai, Shivajinagar to Mumbai Expressway Taxi" 
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
                            <img src='/images/keyword/13.jpg' alt='img' />
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

export default Shivajinagartomumbaicab;