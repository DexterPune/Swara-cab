
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Punetomumbaiinternationalairport() {



    const cardData =
    {
        keyword: 'Pune to Mumbai International Airport Cab',
        heading: 'Swara Cabs : Pune to Mumbai International Airport Cab',
        headingDescription: 'Swara Cabs offers reliable and affordable cab services from Pune to Mumbai International Airport, perfectly suited for business travelers, families, and tourists catching domestic or international flights. The approximate distance between Pune and Chhatrapati Shivaji Maharaj International Airport (CSMIA) is around 150 to 170 kilometers, and the journey typically takes 3 to 4 hours via the Mumbai–Pune Expressway, depending on traffic conditions. Swara Cabs ensures timely airport transfers with well-maintained AC vehicles, experienced drivers, and 24/7 customer support. Whether you need a sedan for solo travel, an SUV for a group, or a premium cab for a comfortable ride, the service is designed to meet all your travel needs with safety, punctuality, and convenience.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

      "topPlaces": [
  {
    "title": "Gateway of India",
    "description": "The Gateway of India is Mumbai's most iconic monument, built in 1924 to commemorate the visit of King George V and Queen Mary to India. Located on the waterfront in Colaba, this grand archway is an architectural blend of Indo-Saracenic, Mughal, and Gothic styles. It serves as a popular tourist gathering spot and the departure point for ferries to Elephanta Caves. Surrounded by street vendors, photographers, and the majestic Taj Mahal Palace Hotel, the Gateway is a symbol of Mumbai's colonial past and cosmopolitan present."
  },
  {
    "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
    "description": "A UNESCO World Heritage Site, CSMT is a stunning example of Victorian Gothic architecture blended with Indian influences. Originally known as Victoria Terminus, this busy railway station is both a transport hub and a cultural landmark. The building features high vaulted ceilings, stained glass windows, carved stonework, and turrets, making it a must-visit for architecture and history enthusiasts. It comes alive at night with beautiful illumination and is a proud symbol of Mumbai’s colonial heritage."
  },
  {
    "title": "Marine Drive",
    "description": "Marine Drive, also known as the Queen’s Necklace, is a picturesque 3.6-kilometer-long boulevard that stretches along the Arabian Sea coast from Nariman Point to Girgaon Chowpatty. Lined with palm trees and art deco buildings, it’s one of the best spots in Mumbai for evening strolls, stunning sunset views, and watching the city lights sparkle after dusk. The cool sea breeze and the sound of waves make it a peaceful retreat for locals and tourists alike."
  },
  {
    "title": "Elephanta Caves",
    "description": "Located on Elephanta Island, about an hour’s ferry ride from the Gateway of India, these ancient rock-cut caves are a UNESCO World Heritage Site. The caves date back to the 5th to 8th centuries and are primarily dedicated to Lord Shiva. The centerpiece is the monumental 20-foot sculpture of Trimurti, depicting three aspects of Shiva. Surrounded by thick forest and monkeys, this archaeological wonder offers a spiritual and historical experience away from the bustling city."
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
    "name": "Airport Drop Pune to Mumbai",
    "description": "Catch your flight on time with our dedicated airport drop service. Our drivers monitor traffic and flight schedules to ensure a timely drop from Pune to Mumbai Airport."
  },
  {
    "name": "One-Way Cab Pune to Mumbai",
    "description": "Book a one-way cab from Pune to Mumbai at affordable rates. Perfect for travelers needing a single trip without paying return fare. No hidden charges—just a smooth, efficient ride."
  },
  {
    "name": "AC Taxi Pune to Mumbai",
    "description": "Stay cool and comfortable on your Pune to Mumbai journey with our fully air-conditioned taxis. Modern interiors and smooth performance make your travel relaxing, even in peak summer."
  },
  {
    "name": "Sedan Taxi Pune to Mumbai",
    "description": "Choose our sedan taxi for a premium yet cost-effective ride. Ideal for solo travelers and small groups who want a stylish, smooth journey from Pune to Mumbai with great mileage."
  },
  {
    "name": "SUV Cab Pune to Mumbai",
    "description": "Need more room for your family or group? Our SUV cabs provide spacious interiors, ample luggage space, and a comfortable ride—great for long highway travel from Pune to Mumbai."
  },
  {
    "name": "Online Cab Booking Pune to Mumbai",
    "description": "Book your Pune to Mumbai cab online in minutes. Use our intuitive platform with real-time availability, multiple payment options, and instant booking confirmation for a hassle-free experience."
  },
  {
    "name": "Verified Drivers Pune to Mumbai",
    "description": "Travel with confidence thanks to our thoroughly verified and trained drivers. All drivers undergo background checks and safety training to ensure your ride is both safe and professional."
  },
  {
    "name": "Executive Travel Pune to Mumbai",
    "description": "Ride in luxury with our executive cab service from Pune to Mumbai. Premium vehicles, experienced chauffeurs, and high-end features ensure a professional experience for executives and VIP clients."
  },
  {
    "name": "Safe Taxi Ride Pune to Mumbai",
    "description": "Your safety is our priority. Our taxis are sanitized regularly, undergo routine maintenance, and our drivers follow all safety protocols to ensure you reach Mumbai safely from Pune."
  },
  {
    "name": "Affordable Cab Pune to Mumbai",
    "description": "Our Pune to Mumbai cab services are priced competitively without compromising comfort or reliability. Enjoy transparent pricing, no surge charges, and great value for every ride."
  },
  {
    "name": "24/7 Cab Pune to Mumbai",
    "description": "Whether it’s an early flight or a late-night business meeting, our cabs run 24/7 from Pune to Mumbai. Get reliable, round-the-clock service whenever you need to travel."
  },
  {
    "name": "Express Highway Cab Pune to Mumbai",
    "description": "Take the fastest route with our Express Highway cabs from Pune to Mumbai. Our drivers navigate the Mumbai–Pune Expressway efficiently, offering a quick, smooth, and scenic ride."
  },
  {
    "name": "Corporate Cab Hire Pune to Mumbai",
    "description": "Tailored for business professionals, our corporate cab hire includes premium cars, dedicated support, monthly invoicing, and priority scheduling to keep your travel stress-free and on time."
  },
  {
    "name": "Round Trip Pune to Mumbai Cab",
    "description": "Planning to return the same day or next? Book our round trip cab from Pune to Mumbai and back. Benefit from fixed pricing, priority service, and the same driver throughout your journey."
  }
],
"tableData": [
  ["Airport Drop Pune to Mumbai", "Online Cab Booking Pune to Mumbai"],
  ["One-Way Cab Pune to Mumbai", "AC Taxi Pune to Mumbai"],
  ["Round Trip Pune to Mumbai Cab", "Sedan Taxi Pune to Mumbai"],
  ["SUV Cab Pune to Mumbai", "Affordable Cab Pune to Mumbai"],
  ["Verified Drivers Pune to Mumbai", "Executive Travel Pune to Mumbai"],
  ["24/7 Cab Pune to Mumbai", "Safe Taxi Ride Pune to Mumbai"],
  ["Express Highway Cab Pune to Mumbai", "Corporate Cab Hire Pune to Mumbai"]
],


  "whychoose": [
    {
      "WhyChooseheading": "Reliable Pune to Mumbai International Airport Cab",
      "WhyChoosedescription": "Ensure timely arrivals with our reliable Pune to Mumbai International Airport cab service. Ideal for travelers catching international flights, our cabs provide punctual pickups and smooth transfers."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "Travel in comfort with our fleet of well-maintained sedans, SUVs, and luxury vehicles tailored for airport transfers, accommodating solo travelers and groups alike."
    },
    {
      "WhyChooseheading": "Experienced Airport Transfer Drivers",
      "WhyChoosedescription": "Our drivers specialize in airport routes and monitor flight schedules, ensuring you reach the international terminal with ample time and zero stress."
    },
    {
      "WhyChooseheading": "24/7 Cab Availability",
      "WhyChoosedescription": "Book a cab anytime, day or night. Our Pune to Mumbai International Airport cabs are available 24/7 to match the timing of early morning or late-night flights."
    },
    {
      "WhyChooseheading": "Transparent Airport Cab Pricing",
      "WhyChoosedescription": "Get fixed, all-inclusive fares with no hidden charges for your airport transfer. Our pricing covers tolls, taxes, and driver allowances upfront."
    },
    {
      "WhyChooseheading": "Instant Booking and Confirmation",
      "WhyChoosedescription": "Enjoy hassle-free online booking with instant confirmation and tracking. Plan your airport trip in just a few clicks with our user-friendly system."
    },
    {
      "WhyChooseheading": "Clean and Sanitized Airport Cabs",
      "WhyChoosedescription": "Travel safely in regularly sanitized, air-conditioned vehicles. We maintain cleanliness standards for every Pune to Mumbai International Airport ride."
    },
    {
      "WhyChooseheading": "Multiple Payment Options",
      "WhyChoosedescription": "Pay your fare using cards, UPI, wallets, or cash. We offer secure and convenient payment modes along with detailed invoices for every ride."
    }
  ]














    }


const faqData = [
    {
        question: "Do you offer cab services from Pune to Mumbai International Airport?",
        answer: "Yes, Swara Cabs provides reliable and comfortable cab services from Pune to Mumbai, including direct drop-offs at Chhatrapati Shivaji Maharaj International Airport."
    },
    {
        question: "What is the fare for a cab from Pune to Mumbai Airport?",
        answer: "Fares start from ₹6,000 for a sedan. The final fare depends on the vehicle type, pickup time, and the specific terminal at the Mumbai Airport."
    },
    {
        question: "How can I book a cab from Pune to Mumbai Airport?",
        answer: "You can book a cab through our website or by calling us directly at +91 9697780707."
    },
    {
        question: "Are tolls and driver charges included in the airport cab fare?",
        answer: "Yes, the fare includes all tolls, taxes, and driver allowances. No hidden charges."
    },
    {
        question: "Can I book a cab for night travel to Mumbai Airport?",
        answer: "Yes, Swara Cabs provides 24/7 service including night travel with a nominal night-time surcharge."
    },
    {
        question: "Do you offer doorstep pickup in Pune for airport transfers?",
        answer: "Yes, we provide doorstep pickup from any location in Pune and drop-off at your chosen terminal at Mumbai Airport."
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






// const puneAirportCabSchema = {
//   "@context": "https://schema.org",
//   "@type": "Product",
//   "name": "Pune to Mumbai International Airport Cab",
//   "image": "https://www.swaracabs.in/assets/images/pune-mumbai-airport-cab.jpg",
//   "description": "Book reliable Pune to Mumbai International Airport cab service with AC, sedan, and SUV options. Available for one-way, round trip, corporate travel, and airport drops with verified drivers and 24/7 support.",
//   "brand": {
//     "@type": "Brand",
//     "name": "Swara Cabs"
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "ratingValue": "4.7",
//     "ratingCount": "7896",
//     "bestRating": "5",
//     "worstRating": "1"
//   },
//   "offers": {
//     "@type": "Offer",
//     "priceCurrency": "INR",
//     "price": "1500",
//     "availability": "https://schema.org/InStock",
//     "url": "https://www.swaracabs.in/pune-to-mumbai-international-airport-cab"
//   }
// };

const puneAirportCabSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pune to Mumbai International Airport Cab",
  "image": "https://www.swaracabs.in/assets/images/pune-mumbai-airport-cab.jpg",
  "description": "Book Pune to Mumbai International Airport cab starting from ₹1500. AC Sedan & SUV options with verified drivers. 24x7 availability for one-way, round trip, and airport transfers.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "7896",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1500",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/pune-to-mumbai-international-airport-cab"
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
      "name": "Verified Customer"
    }
  },
  "areaServed": {
    "@type": "Place",
    "name": "Pune, Mumbai International Airport"
  },
  "serviceType": "Airport Transfer Service"
};




    return (
        <div>
<Helmet>
  <title>Pune to Mumbai International Airport Cab | Swara Cabs</title>
  <meta
    name="description"
    content="Book Pune to Mumbai International Airport cab service from ₹1500. AC sedan and SUV taxis with verified drivers for one-way, round trip, or airport pickup. 24/7 availability and fixed pricing."
  />
  <meta
    name="keywords"
    content="Pune to Mumbai International Airport Cab, Cab from Pune to Mumbai Airport, Airport Drop Taxi Pune to Mumbai, Online Cab Booking Pune to Airport, Pune Airport to Mumbai Drop Service, One-Way AC Cab Pune to Airport, Verified Driver Pune to Airport Ride, SUV Airport Cab Pune Mumbai, Affordable Airport Cab Pune to Mumbai, Pune to Chhatrapati Shivaji International Airport Taxi, 24x7 Pune Airport Transfer, Expressway Taxi Pune to Airport, Fixed Fare Pune to Mumbai Airport Cab"
  />
  <meta property="og:title" content="Pune to Mumbai International Airport Cab | Book Online – Swara Cabs" />
  <meta property="og:description" content="Reliable cab from Pune to Mumbai Airport. Book sedan or SUV from ₹1500 with Swara Cabs. Verified drivers and 24/7 availability for airport drop and pickup." />
  <meta property="og:image" content="https://www.swaracabs.in/assets/images/pune-mumbai-airport-cab.jpg" />
  <meta property="og:url" content="https://www.swaracabs.in/pune-to-mumbai-international-airport-cab" />
  <meta property="og:type" content="website" />
  
  <script type="application/ld+json">
    {JSON.stringify(puneAirportCabSchema)}
  </script>
</Helmet>



{/* <Helmet>
  <title>Pune to Mumbai International Airport Cab | Book AC, Sedan & SUV Taxi | Swara Cabs</title>
  <meta
    name="description"
    content="Book reliable Pune to Mumbai International Airport cab service with AC, sedan, and SUV options. Available for one-way, round trip, corporate travel, and airport drops with verified drivers and 24/7 support."
  />
  <meta
    name="keywords"
    content="Pune to Mumbai International Airport Cab, Airport Drop Pune to Mumbai, One-Way Cab Pune to Mumbai Airport, AC Taxi Pune to International Airport, Sedan Cab Pune to Mumbai Airport, SUV Cab Pune Airport Drop, Online Cab Booking Pune to Mumbai Airport, Verified Driver Pune Airport Ride, Executive Cab Pune to Airport, Safe Ride Pune to Mumbai Airport, Affordable Taxi Pune to Airport, 24/7 Airport Cab Pune to Mumbai, Expressway Cab Pune Airport, Corporate Cab Pune to Airport, Round Trip Cab Pune Airport"
  />
  <script type="application/ld+json">
    {JSON.stringify(puneAirportCabSchema)}
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
                            <img src='/images/keyword/61.jpg' alt='img' />
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

export default Punetomumbaiinternationalairport;