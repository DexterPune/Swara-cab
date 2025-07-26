
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Punetomumbaionewaycab() {



    const cardData =
    {
        keyword: 'Pune to Mumbai One Way Cab',
        heading: 'Swara Cabs : Pune to Mumbai One Way Cab',
        headingDescription: 'Swara Cabs offers a reliable and hassle-free Pune to Mumbai one-way cab service, ideal for business professionals, tourists, and families looking for a convenient travel option between the two cities. Covering a distance of approximately 150 to 170 kilometers, the journey typically takes around 3 to 4 hours via the Mumbai–Pune Expressway, depending on traffic conditions. With Swara Cabs, customers can expect on-time pickups, professional and courteous drivers, and clean, well-maintained vehicles suited for solo travelers as well as groups. Whether you’re heading for a meeting, a vacation, or returning home, this one-way service ensures a smooth, comfortable, and stress-free ride without the worry of return scheduling or additional logistics.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

      "topPlaces": [
  {
    "title": "Marine Drive",
    "description": "Marine Drive, also known as the Queen’s Necklace, is a picturesque 3.6-kilometer-long boulevard that stretches along the Arabian Sea coast from Nariman Point to Girgaon Chowpatty. Lined with palm trees and art deco buildings, it’s one of the best spots in Mumbai for evening strolls, stunning sunset views, and watching the city lights sparkle after dusk. The cool sea breeze and the sound of waves make it a peaceful retreat for locals and tourists alike."
  },
  {
    "title": "Elephanta Caves",
    "description": "Located on Elephanta Island, about an hour’s ferry ride from the Gateway of India, these ancient rock-cut caves are a UNESCO World Heritage Site. The caves date back to the 5th to 8th centuries and are primarily dedicated to Lord Shiva. The centerpiece is the monumental 20-foot sculpture of Trimurti, depicting three aspects of Shiva. Surrounded by thick forest and monkeys, this archaeological wonder offers a spiritual and historical experience away from the bustling city."
  },
  {
    "title": "Gateway of India",
    "description": "The Gateway of India is Mumbai's most iconic monument, built in 1924 to commemorate the visit of King George V and Queen Mary to India. Located on the waterfront in Colaba, this grand archway is an architectural blend of Indo-Saracenic, Mughal, and Gothic styles. It serves as a popular tourist gathering spot and the departure point for ferries to Elephanta Caves. Surrounded by street vendors, photographers, and the majestic Taj Mahal Palace Hotel, the Gateway is a symbol of Mumbai's colonial past and cosmopolitan present."
  },
  {
    "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
    "description": "A UNESCO World Heritage Site, CSMT is a stunning example of Victorian Gothic architecture blended with Indian influences. Originally known as Victoria Terminus, this busy railway station is both a transport hub and a cultural landmark. The building features high vaulted ceilings, stained glass windows, carved stonework, and turrets, making it a must-visit for architecture and history enthusiasts. It comes alive at night with beautiful illumination and is a proud symbol of Mumbai’s colonial heritage."
  },
  {
    "title": "Haji Ali Dargah",
    "description": "Haji Ali Dargah is a beautiful white-domed mosque and tomb situated on a small islet off the coast of Worli. Connected to the mainland by a narrow causeway, it is accessible only during low tide. Built in 1431 in memory of the wealthy merchant turned saint Haji Ali Shah Bukhari, the Dargah is an important religious site visited by people of all faiths. The structure, surrounded by the sea on all sides, creates a magical and spiritual ambiance."
  },
  {
    "title": "Juhu Beach",
    "description": "Juhu Beach is one of Mumbai’s most popular coastal spots, known for its vibrant street food stalls, especially local favorites like pav bhaji, vada pav, and bhel puri. Stretching over six kilometers, the beach is a lively destination for families, joggers, and Bollywood celebrities who reside nearby. It’s ideal for sunset photography, beach games, and soaking in the local flavor of Mumbai. The area also hosts occasional cultural events and live performances."
  },
  {
    "title": "Sanjay Gandhi National Park",
    "description": "A rare forest reserve in the heart of a metropolis, Sanjay Gandhi National Park is a sprawling green oasis offering nature trails, safari rides, and the ancient Kanheri Caves. Spanning over 100 square kilometers, it is home to leopards, deer, birds, butterflies, and over 1,000 species of flora. The park is a favorite among nature lovers, trekkers, and weekend adventurers looking to escape the urban chaos without leaving the city."
  },
  {
    "title": "Bandra-Worli Sea Link",
    "description": "The Bandra-Worli Sea Link is an engineering marvel and a visual spectacle, connecting the western suburbs of Bandra to Worli in South Mumbai. This 8-lane cable-stayed bridge offers a scenic drive over the Arabian Sea, reducing travel time and offering stunning cityscape views, especially at night when it’s illuminated. It symbolizes modern Mumbai and is often featured in films, photographs, and city tours."
  },
  {
    "title": "Colaba Causeway",
    "description": "A bustling street market in South Mumbai, Colaba Causeway is the go-to destination for street shopping, antiques, fashion, handicrafts, and quirky souvenirs. It also boasts famous cafes, bars, and eateries like Café Leopold and Theobroma. The mix of colonial architecture, vibrant shops, and the artistic vibe makes it a popular spot among tourists and locals for an authentic Mumbai experience."
  },
  {
    "title": "Siddhivinayak Temple",
    "description": "Dedicated to Lord Ganesha, Siddhivinayak Temple in Prabhadevi is one of the richest and most visited temples in Mumbai. Devotees queue up from early morning to seek blessings from the idol, which is carved from a single black stone and has a distinctive right-turned trunk. The temple is frequented by Bollywood celebrities, politicians, and spiritual seekers. Its peaceful premises and divine aura make it a spiritual anchor in the heart of the city."
  }
],

"services": [
  {
    "name": "One-Way Cab Pune to Mumbai",
    "description": "Book a one-way cab from Pune to Mumbai at affordable rates. Perfect for travelers needing a single trip without paying return fare. No hidden charges—just a smooth, efficient ride. Enjoy the convenience of point-to-point travel without worrying about return logistics, whether you're heading to a business meeting, catching a flight, or moving to the city."
  },
  {
    "name": "AC Taxi Pune to Mumbai",
    "description": "Stay cool and comfortable on your Pune to Mumbai journey with our fully air-conditioned taxis. Modern interiors and smooth performance make your travel relaxing, even in peak summer. Our AC taxis are regularly maintained for top performance, ensuring a refreshing escape from the outside heat and a pleasant atmosphere throughout the trip."
  },
  {
    "name": "Sedan Taxi Pune to Mumbai",
    "description": "Choose our sedan taxi for a premium yet cost-effective ride. Ideal for solo travelers and small groups who want a stylish, smooth journey from Pune to Mumbai with great mileage. With plush seating, quiet cabins, and efficient fuel usage, our sedans strike the perfect balance between luxury and economy, perfect for city professionals or couples."
  },
  {
    "name": "SUV Cab Pune to Mumbai",
    "description": "Need more room for your family or group? Our SUV cabs provide spacious interiors, ample luggage space, and a comfortable ride—great for long highway travel from Pune to Mumbai. Perfect for families, group tours, or travelers with extra luggage, our SUVs ensure comfort without compromise, even on extended expressway drives."
  },
  {
    "name": "Online Cab Booking Pune to Mumbai",
    "description": "Book your Pune to Mumbai cab online in minutes. Use our intuitive platform with real-time availability, multiple payment options, and instant booking confirmation for a hassle-free experience. Our seamless digital booking system saves time and effort, letting you schedule rides in advance or book last minute with full confidence."
  },
  {
    "name": "Verified Drivers Pune to Mumbai",
    "description": "Travel with confidence thanks to our thoroughly verified and trained drivers. All drivers undergo background checks and safety training to ensure your ride is both safe and professional. With courteous behavior, timely service, and expert navigation skills, our drivers are trusted by thousands of regular commuters between Pune and Mumbai."
  },
  {
    "name": "Affordable Cab Pune to Mumbai",
    "description": "Our Pune to Mumbai cab services are priced competitively without compromising comfort or reliability. Enjoy transparent pricing, no surge charges, and great value for every ride. Whether you're traveling for work, education, or leisure, our affordable options let you save money while enjoying high standards of service."
  },
  {
    "name": "Executive Travel Pune to Mumbai",
    "description": "Ride in luxury with our executive cab service from Pune to Mumbai. Premium vehicles, experienced chauffeurs, and high-end features ensure a professional experience for executives and VIP clients. Tailored for business travel, our executive rides offer Wi-Fi, bottled water, and a quiet cabin to catch up on work while en route."
  },
  {
    "name": "Safe Taxi Ride Pune to Mumbai",
    "description": "Your safety is our priority. Our taxis are sanitized regularly, undergo routine maintenance, and our drivers follow all safety protocols to ensure you reach Mumbai safely from Pune. Every vehicle is tracked in real-time, and emergency support is always available, making your journey secure day or night."
  },
  {
    "name": "Express Highway Cab Pune to Mumbai",
    "description": "Take the fastest route with our Express Highway cabs from Pune to Mumbai. Our drivers navigate the Mumbai–Pune Expressway efficiently, offering a quick, smooth, and scenic ride. Avoid city traffic, enjoy breathtaking views, and get to your destination in less time with highway-optimized vehicles and skilled drivers."
  },
  {
    "name": "Corporate Cab Hire Pune to Mumbai",
    "description": "Tailored for business professionals, our corporate cab hire includes premium cars, dedicated support, monthly invoicing, and priority scheduling to keep your travel stress-free and on time. Impress your clients or support employee mobility with flexible billing plans, timely pickups, and a strong focus on professionalism."
  },
  {
    "name": "24/7 Cab Pune to Mumbai",
    "description": "Whether it’s an early flight or a late-night business meeting, our cabs run 24/7 from Pune to Mumbai. Get reliable, round-the-clock service whenever you need to travel. Late-night pickups, early-morning airport drops, or urgent meetings—our all-hours availability ensures you never miss a ride opportunity."
  },
  {
    "name": "Airport Drop Pune to Mumbai",
    "description": "Catch your flight on time with our dedicated airport drop service. Our drivers monitor traffic and flight schedules to ensure a timely drop from Pune to Mumbai Airport. With baggage assistance, real-time route optimization, and timely alerts, we take care of your airport commute with precision and punctuality."
  }
],
"tableData": [
  ["One-Way Cab Pune to Mumbai", "AC Taxi Pune to Mumbai"],
  ["Sedan Taxi Pune to Mumbai", "SUV Cab Pune to Mumbai"],
  ["Online Cab Booking Pune to Mumbai", "Verified Drivers Pune to Mumbai"],
  ["Affordable Cab Pune to Mumbai", "Executive Travel Pune to Mumbai"],
  ["Safe Taxi Ride Pune to Mumbai", "Express Highway Cab Pune to Mumbai"],
  ["Corporate Cab Hire Pune to Mumbai", "24/7 Cab Pune to Mumbai"],
  ["Airport Drop Pune to Mumbai", ""]
],

  "whychoose": [
    {
      "WhyChooseheading": "Dependable Pune to Mumbai One Way Cab Service",
      "WhyChoosedescription": "Experience hassle-free and punctual one-way cab rides from Pune to Mumbai. Whether it's a business trip or personal travel, we guarantee on-time pickups and drop-offs with a focus on your comfort and convenience throughout the journey."
    },
    {
      "WhyChooseheading": "Variety of Comfortable Vehicle Options",
      "WhyChoosedescription": "Select from a diverse range of vehicles including budget-friendly sedans, roomy SUVs, and premium luxury cars. Our well-maintained fleet ensures a smooth and relaxing ride tailored to your group size and preference."
    },
    {
      "WhyChooseheading": "Transparent Pricing with No Hidden Costs",
      "WhyChoosedescription": "Our one-way cab service offers competitive and all-inclusive rates, covering tolls, taxes, and driver allowances. You can plan your travel expenses confidently with our upfront, transparent pricing model."
    },
    {
      "WhyChooseheading": "Skilled and Courteous Drivers",
      "WhyChoosedescription": "Travel safely with our experienced drivers who know the best routes between Pune and Mumbai. They provide courteous service, making your trip pleasant and stress-free."
    },
    {
      "WhyChooseheading": "Easy and Quick Online Booking",
      "WhyChoosedescription": "Book your Pune to Mumbai one-way cab effortlessly via our website or app. Benefit from instant booking confirmation, real-time vehicle tracking, and flexible cancellation policies."
    },
    {
      "WhyChooseheading": "Round-the-Clock Customer Support",
      "WhyChoosedescription": "Our dedicated customer service team is available 24/7 to assist you with your booking, answer any queries, and ensure a seamless travel experience from start to finish."
    },
    {
      "WhyChooseheading": "Clean and Well-Maintained Vehicles",
      "WhyChoosedescription": "All vehicles are regularly serviced and thoroughly cleaned to provide a hygienic and comfortable environment for your journey."
    },
    {
      "WhyChooseheading": "Multiple Secure Payment Methods",
      "WhyChoosedescription": "Pay securely using credit/debit cards, UPI, wallets, or cash. We provide clear billing and detailed receipts for every ride to keep your transactions transparent."
    }
  ]













    }


const faqData = [
    {
        question: "Do you provide one way cab services from Pune to Mumbai?",
        answer: "Yes, Swara Cabs offers convenient and affordable one way cab services from Pune to Mumbai."
    },
    {
        question: "What is the fare for a one way cab from Pune to Mumbai?",
        answer: "Fares for one way trips start from ₹6,000 for a sedan. Pricing varies depending on the vehicle type, time of travel, and drop location in Mumbai."
    },
    {
        question: "How do I book a one way cab from Pune to Mumbai?",
        answer: "You can book your one way cab through our website or by calling us directly at +91 9697780707."
    },
    {
        question: "Is round trip booking also available if needed?",
        answer: "Yes, while we offer one way services, you can also opt for a round trip if required. We provide flexible travel options."
    },
    {
        question: "Are there any hidden charges for one way bookings?",
        answer: "No, all fares include tolls, taxes, and driver allowances. There are no hidden charges."
    },
    {
        question: "Can I schedule a one way ride during the night?",
        answer: "Yes, Swara Cabs operates 24/7 and allows night-time bookings with a nominal night surcharge."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Nilesh Jadhav',
        review: 'Booked a cab from Pune to Mumbai with Swara Cabs. The ride was comfortable, the driver was punctual, and the car was clean and well-maintained.'
    },
    {
        name: 'Ms. Rupal Thakur',
        review: 'Highly satisfied with Swara Cabs for my Pune to Mumbai trip. Easy booking, timely service, and a very courteous driver.'
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







const puneToMumbaiOneWayCabSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Mumbai One Way Cab",
  "image": "https://www.swaracabs.in/assets/images/pune-mumbai-one-way-cab.jpg",
  "description": "Book reliable Pune to Mumbai one way cab service with AC, sedan, and SUV options. Available for one-way travel with verified drivers and 24/7 support for a safe and comfortable ride.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "8752",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1200",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/pune-to-mumbai-one-way-cab"
  }
};




    return (
        <div>
{/* <Helmet>
  <title>Pune to Mumbai One Way Cab | Book AC, Sedan & SUV Taxi | Swara Cabs</title>
  <meta
    name="description"
    content="Book reliable Pune to Mumbai one way cab service with AC, sedan, and SUV options. Available for one-way travel with verified drivers and 24/7 support for a safe and comfortable ride."
  />
  <meta
    name="keywords"
    content="Pune to Mumbai One Way Cab, One-Way AC Taxi Pune to Mumbai, Sedan Cab Pune to Mumbai, SUV One-Way Cab Pune, Online Booking Pune Mumbai One-Way, Verified Driver Pune to Mumbai, Affordable One Way Cab Pune, Executive Cab Pune Mumbai, Safe Taxi Pune to Mumbai, Expressway Ride Pune to Mumbai, Corporate One-Way Cab Pune, 24/7 Cab Pune to Mumbai, Airport Drop Pune to Mumbai, Comfortable Ride Pune to Mumbai, Instant Cab Booking Pune"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneToMumbaiOneWayCabSchema)}
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
                            <img src='/images/keyword/62.jpg' alt='img' />
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

export default Punetomumbaionewaycab;