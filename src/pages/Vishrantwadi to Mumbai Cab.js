
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Vishrantwaditomumbaicab() {



    const cardData =
    {
        keyword: 'Vishrantwadi to Mumbai Cab',
        heading: 'Swara Cabs : Vishrantwadi to Mumbai Cab',
        headingDescription: 'Swara Cabs offers a reliable and comfortable cab service from Vishrantwadi to Mumbai, ensuring a smooth and hassle-free travel experience for all types of passengers. Whether you are heading to Mumbai for business, a family visit, or a leisurely trip, this service provides convenient door-to-door pickup from Vishrantwadi, one of Pune’s prominent residential areas. The journey typically takes around 3 to 4 hours depending on traffic and road conditions, with experienced drivers navigating the route efficiently. Swara Cabs ensures that every ride is safe, punctual, and comfortable, thanks to their well-maintained vehicles, courteous staff, and round-the-clock customer support.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

      "topPlaces": [
  {
    "title": "Gateway of India",
    "description": "The Gateway of India is Mumbai's most iconic monument, built in 1924 to commemorate the visit of King George V and Queen Mary to India. Located on the waterfront in Colaba, this grand archway is an architectural blend of Indo-Saracenic, Mughal, and Gothic styles. It serves as a popular tourist gathering spot and the departure point for ferries to Elephanta Caves. Surrounded by street vendors, photographers, and the majestic Taj Mahal Palace Hotel, the Gateway is a symbol of Mumbai's colonial past and cosmopolitan present."
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
    "description": "Book a one-way cab from Vishrantwadi to Mumbai at affordable rates. Perfect for travelers needing a single trip without paying return fare. No hidden charges—just a smooth, efficient ride. Whether you're commuting for business, visiting family, or catching a flight, our one-way service is flexible and hassle-free."
  },
  {
    "name": "AC Taxi Pune to Mumbai",
    "description": "Enjoy a cool, refreshing ride from Vishrantwadi to Mumbai with our fully air-conditioned taxis. Perfect for beating the heat during summer and ensuring a comfortable trip. Our AC taxis are well-maintained with modern interiors to provide a relaxing environment throughout your journey."
  },
  {
    "name": "Sedan Taxi Pune to Mumbai",
    "description": "Choose our sedan taxi service from Vishrantwadi to Mumbai for a smooth and stylish ride. Ideal for solo travelers and small groups looking for a balance of luxury and cost-effectiveness. Our sedans provide comfortable seating, excellent mileage, and a quiet cabin for a peaceful trip."
  },
  {
    "name": "SUV Cab Pune to Mumbai",
    "description": "Travel comfortably from Vishrantwadi to Mumbai with our spacious SUV cabs. Ideal for families or groups needing extra space for luggage and passengers. With roomy interiors and a smooth ride, our SUVs make long highway trips convenient and enjoyable."
  },
  {
    "name": "Online Cab Booking Pune to Mumbai",
    "description": "Book your Vishrantwadi to Mumbai cab online quickly and easily. Our platform offers real-time availability, multiple payment options, and instant confirmation to make your booking process seamless and stress-free. Whether planning ahead or booking last minute, enjoy hassle-free rides."
  },
  {
    "name": "Verified Drivers Pune to Mumbai",
    "description": "Ride safely from Vishrantwadi to Mumbai with our verified and professional drivers. All drivers undergo strict background checks and training to ensure your safety and comfort. Expect punctuality, courteous service, and expert knowledge of routes."
  },
  {
    "name": "Executive Travel Pune to Mumbai",
    "description": "Experience luxury with our executive cab service from Vishrantwadi to Mumbai. Premium vehicles equipped with amenities like Wi-Fi, bottled water, and professional chauffeurs cater to corporate travelers and VIP clients. Enjoy a serene and productive journey."
  },
  {
    "name": "Safe Taxi Ride Pune to Mumbai",
    "description": "Your safety is our top priority for rides from Vishrantwadi to Mumbai. Our taxis are sanitized regularly, equipped with GPS tracking, and driven by safety-conscious professionals. We follow all protocols to ensure you reach your destination securely."
  },
  {
    "name": "Affordable Cab Pune to Mumbai",
    "description": "Get affordable cab services from Vishrantwadi to Mumbai without compromising quality. Transparent pricing and no hidden fees mean great value for every ride. Perfect for budget-conscious travelers seeking reliable transportation."
  },
  {
    "name": "24/7 Cab Pune to Mumbai",
    "description": "Our cabs operate 24/7 from Vishrantwadi to Mumbai, providing round-the-clock service for early morning flights, late-night meetings, or urgent travel needs. Book anytime and get reliable rides whenever you need."
  },
  {
    "name": "Airport Drop Pune to Mumbai",
    "description": "Ensure timely arrival at the Mumbai airport with our dedicated airport drop service from Vishrantwadi. Our drivers monitor flight schedules and traffic conditions to get you there on time, with assistance for luggage handling."
  },
  {
    "name": "Express Highway Cab Pune to Mumbai",
    "description": "Travel quickly and comfortably from Vishrantwadi to Mumbai using our express highway cab service. Our drivers utilize the fastest routes, including the Mumbai-Pune Expressway, to minimize travel time while ensuring safety and comfort."
  },
  {
    "name": "Round Trip Pune to Mumbai Cab",
    "description": "Plan your round trip from Vishrantwadi to Mumbai and back with fixed pricing and the convenience of the same driver throughout. Ideal for day trips, meetings, or events that require a return journey without hassle."
  },
  {
    "name": "Corporate Cab Hire Pune to Mumbai",
    "description": "Our corporate cab hire service from Vishrantwadi to Mumbai offers premium vehicles, priority scheduling, and flexible billing options. Perfect for businesses looking to provide professional transport solutions to their employees and clients."
  }
],
"tableData": [
  ["One-Way Cab Pune to Mumbai", "AC Taxi Pune to Mumbai"],
  ["Sedan Taxi Pune to Mumbai", "SUV Cab Pune to Mumbai"],
  ["Online Cab Booking Pune to Mumbai", "Verified Drivers Pune to Mumbai"],
  ["Executive Travel Pune to Mumbai", "Safe Taxi Ride Pune to Mumbai"],
  ["Affordable Cab Pune to Mumbai", "24/7 Cab Pune to Mumbai"],
  ["Airport Drop Pune to Mumbai", "Express Highway Cab Pune to Mumbai"],
  ["Round Trip Pune to Mumbai Cab", "Corporate Cab Hire Pune to Mumbai"]
],

  "whychoose": [
    {
      "WhyChooseheading": "Reliable Vishrantwadi to Mumbai Cab Service",
      "WhyChoosedescription": "Enjoy a dependable and timely cab ride from Vishrantwadi to Mumbai with our dedicated intercity service. Whether you're heading to the airport, for a business meeting, or a leisure trip, we ensure punctual pickups and smooth drop-offs to make your journey seamless and stress-free."
    },
    {
      "WhyChooseheading": "Comfortable Vehicles for Every Traveler",
      "WhyChoosedescription": "Our fleet includes clean, air-conditioned sedans, spacious SUVs, and premium vehicles to match your comfort and budget. Whether you're traveling solo or with family, we have the perfect cab option tailored to your requirements."
    },
    {
      "WhyChooseheading": "Affordable, Transparent Pricing",
      "WhyChoosedescription": "Travel from Vishrantwadi to Mumbai with confidence, knowing that our pricing is completely transparent and inclusive of tolls, taxes, and driver charges. No hidden costs—just straightforward, budget-friendly fares."
    },
    {
      "WhyChooseheading": "Skilled and Friendly Drivers",
      "WhyChoosedescription": "Our professional drivers are experienced in long-distance travel and well-acquainted with the routes between Vishrantwadi and Mumbai. They are courteous, reliable, and focused on ensuring a safe and pleasant journey for you."
    },
    {
      "WhyChooseheading": "24/7 Availability and Easy Scheduling",
      "WhyChoosedescription": "Whether it’s an early morning departure or a late-night return, our cab service operates 24/7 from Vishrantwadi. You can choose your preferred pickup time and book easily through our website or mobile app."
    },
    {
      "WhyChooseheading": "Simple and Fast Online Booking",
      "WhyChoosedescription": "Book your Vishrantwadi to Mumbai cab in just a few clicks with our hassle-free online system. Get instant booking confirmation, live driver tracking, and support from start to finish."
    },
    {
      "WhyChooseheading": "Clean, Sanitized Cabs for Safe Travel",
      "WhyChoosedescription": "We prioritize hygiene and passenger safety. All our vehicles undergo regular cleaning and sanitization, making sure your travel experience is not only comfortable but also safe and healthy."
    },
    {
      "WhyChooseheading": "Secure Payment Options and Detailed Invoices",
      "WhyChoosedescription": "Make payments using UPI, debit/credit cards, digital wallets, or cash. We provide clear billing with receipts for every ride, giving you full transparency and record-keeping convenience."
    }
  ]













    }


const faqData = [
    {
        question: "Do you offer cab services from Vishrantwadi, Pune to Mumbai?",
        answer: "Yes, Swara Cabs provides comfortable and timely cab services from Vishrantwadi to all areas of Mumbai, including the airport."
    },
    {
        question: "What is the fare for a cab from Vishrantwadi to Mumbai?",
        answer: "Fares start from ₹6,000 for a sedan. The total fare depends on the type of vehicle, pickup time, and the drop location in Mumbai."
    },
    {
        question: "How can I book a cab from Vishrantwadi to Mumbai?",
        answer: "Booking is easy through our website or by calling us directly at +91 9697780707."
    },
    {
        question: "Do you provide doorstep pickup from Vishrantwadi?",
        answer: "Yes, we offer doorstep pickup from any location in Vishrantwadi and drop you at your desired location in Mumbai."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included in the quoted fare. No hidden charges."
    },
    {
        question: "Is night travel available from Vishrantwadi to Mumbai?",
        answer: "Yes, Swara Cabs operates 24/7 including safe and reliable night travel with a nominal night-time surcharge."
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






const vishrantwadiToMumbaiCabSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Vishrantwadi to Mumbai Cab",
  "image": "https://www.swaracabs.in/assets/images/vishrantwadi-mumbai-cab.jpg",
  "description": "Book reliable Vishrantwadi to Mumbai cab service with AC, sedan, and SUV options. Available for one-way, round trip, corporate travel, and airport drops with verified drivers and 24/7 support.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "14356",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1350",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/vishrantwadi-to-mumbai-cab"
  }
};






    return (
        <div>
<Helmet>
  <title>Vishrantwadi to Mumbai Cab | Book AC, Sedan & SUV Taxi | Swara Cabs</title>
  <meta
    name="description"
    content="Book reliable Vishrantwadi to Mumbai cab service with AC, sedan, and SUV options. Available for one-way, round trip, corporate travel, and airport drops with verified drivers and 24/7 support."
  />
  <meta
    name="keywords"
    content="Vishrantwadi to Mumbai Cab, One-Way Cab Vishrantwadi to Mumbai, AC Taxi Vishrantwadi to Mumbai, Online Cab Booking Vishrantwadi, SUV Cab Vishrantwadi Mumbai, Sedan Cab Vishrantwadi to Mumbai, Executive Ride Vishrantwadi, Safe Cab Ride Vishrantwadi to Mumbai, Affordable Taxi Vishrantwadi to Mumbai, 24/7 Cab Booking Vishrantwadi, Verified Driver Vishrantwadi to Mumbai, Airport Drop Vishrantwadi to Mumbai, Express Cab Vishrantwadi Mumbai, Round Trip Cab Vishrantwadi, Corporate Taxi Vishrantwadi to Mumbai"
  />
  <script type="application/ld+json">
    {JSON.stringify(vishrantwadiToMumbaiCabSchema)}
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
                            <img src='/images/keyword/64.jpg' alt='img' />
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

export default Vishrantwaditomumbaicab;