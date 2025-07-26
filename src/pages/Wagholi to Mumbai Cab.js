
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Wagholitomumbaicab() {



    const cardData =
    {
        keyword: 'Wagholi to Mumbai Cab',
        heading: 'Swara Cabs : Wagholi to Mumbai Cab',
        headingDescription: 'Swara Cabs delivers a seamless and comfortable cab service from Wagholi (Pune) to Mumbai, tailored for business professionals, families, and tourists seeking stress-free travel. Covering a distance of around 150–170 km, the journey typically takes 3 to 4 hours via the Mumbai–Pune Expressway, depending on traffic conditions. Enjoy convenient door-to-door pickup in Wagholi, well-maintained air-conditioned vehicles, and skilled drivers who know the best routes and ensure timely arrival. With flexible booking options and round-the-clock customer support, Swara Cabs makes your ride to Mumbai smooth, reliable, and hassle-free—perfect whether you’re headed for a meeting, visiting loved ones, or taking a getaway.',

        top: 'Top Places to Visit in Mumbai with Swara Cabs',

      "topPlaces": [
  {
    "title": "Elephanta Caves",
    "description": "Located on Elephanta Island, about an hour’s ferry ride from the Gateway of India, these ancient rock-cut caves are a UNESCO World Heritage Site. The caves date back to the 5th to 8th centuries and are primarily dedicated to Lord Shiva. The centerpiece is the monumental 20-foot sculpture of Trimurti, depicting three aspects of Shiva. Surrounded by thick forest and monkeys, this archaeological wonder offers a spiritual and historical experience away from the bustling city."
  },
  {
    "title": "Gateway of India",
    "description": "The Gateway of India is Mumbai's most iconic monument, built in 1924 to commemorate the visit of King George V and Queen Mary to India. Located on the waterfront in Colaba, this grand archway is an architectural blend of Indo-Saracenic, Mughal, and Gothic styles. It serves as a popular tourist gathering spot and the departure point for ferries to Elephanta Caves. Surrounded by street vendors, photographers, and the majestic Taj Mahal Palace Hotel, the Gateway is a symbol of Mumbai's colonial past and cosmopolitan present."
  },
  {
    "title": "Marine Drive",
    "description": "Marine Drive, also known as the Queen’s Necklace, is a picturesque 3.6-kilometer-long boulevard that stretches along the Arabian Sea coast from Nariman Point to Girgaon Chowpatty. Lined with palm trees and art deco buildings, it’s one of the best spots in Mumbai for evening strolls, stunning sunset views, and watching the city lights sparkle after dusk. The cool sea breeze and the sound of waves make it a peaceful retreat for locals and tourists alike."
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
    "name": "Wagholi to Mumbai Cab",
    "description": "Travel from Wagholi to Mumbai with our reliable and comfortable cab service. Our professional drivers ensure timely pickups and safe journeys, while our well-maintained vehicles provide a smooth ride. Whether for business or leisure, count on us for a hassle-free and pleasant travel experience every time."
  },
  {
    "name": "One-Way Taxi Wagholi to Mumbai",
    "description": "Book a cost-effective one-way taxi from Wagholi to Mumbai, ideal for those who require a single trip without worrying about return fares. Our transparent pricing and professional service ensure a smooth and efficient ride, whether you're heading to work, the airport, or any destination in Mumbai."
  },
  {
    "name": "Online Booking Wagholi Mumbai Cab",
    "description": "Reserve your Wagholi to Mumbai cab quickly and securely through our user-friendly online booking platform. Enjoy real-time vehicle availability, multiple payment options, and instant confirmation. Whether booking in advance or last minute, our platform guarantees convenience and peace of mind."
  },
  {
    "name": "AC Taxi Wagholi to Mumbai",
    "description": "Stay comfortable on your trip from Wagholi to Mumbai with our fully air-conditioned taxis. Our modern, climate-controlled vehicles provide a refreshing and relaxing atmosphere, perfect for beating the heat and ensuring a pleasant journey throughout the year."
  },
  {
    "name": "Sedan Cab Wagholi Mumbai",
    "description": "Choose our sedan cabs for a stylish, smooth, and economical ride from Wagholi to Mumbai. Ideal for solo travelers and small groups, our sedans offer plush seating, excellent mileage, and a quiet cabin environment to make your trip enjoyable and efficient."
  },
  {
    "name": "SUV Cab Wagholi to Mumbai",
    "description": "Travel in spacious comfort with our SUV cabs from Wagholi to Mumbai. Perfect for families or groups needing extra legroom and luggage space, our SUVs provide a smooth ride on highways, ensuring you reach your destination relaxed and refreshed."
  },
  {
    "name": "Round Trip Cab Wagholi",
    "description": "Plan a convenient round trip from Wagholi to Mumbai and back with fixed pricing and a dedicated driver throughout. Whether for business meetings or family visits, this service guarantees comfort, reliability, and ease of travel without worrying about return bookings."
  },
  {
    "name": "Verified Driver Wagholi Mumbai",
    "description": "Travel confidently with our thoroughly vetted drivers for the Wagholi to Mumbai route. Our drivers undergo rigorous background checks and safety training to provide you with a professional, courteous, and secure travel experience every time you ride with us."
  },
  {
    "name": "Executive Cab Wagholi to Mumbai",
    "description": "Experience luxury and professionalism with our executive cab service from Wagholi to Mumbai. Premium vehicles equipped with modern amenities and driven by expert chauffeurs ensure a sophisticated travel experience, perfect for business executives and VIP clients."
  },
  {
    "name": "Corporate Taxi Wagholi",
    "description": "Our corporate taxi service from Wagholi to Mumbai offers flexible scheduling, premium vehicles, and dedicated support for your business travel needs. Enjoy hassle-free transportation tailored to keep your corporate commitments running smoothly and on time."
  },
  {
    "name": "Affordable Cab Wagholi to Mumbai",
    "description": "Get competitive and transparent pricing on Wagholi to Mumbai cab rides without compromising quality or comfort. Our affordable fares come with no hidden fees or surge charges, ensuring excellent value and a pleasant travel experience."
  },
  {
    "name": "Safe Travel Wagholi to Mumbai",
    "description": "Your safety is our priority on every trip from Wagholi to Mumbai. Our vehicles are regularly sanitized and maintained, and our drivers follow strict safety protocols to guarantee a clean, secure, and worry-free journey for all passengers."
  },
  {
    "name": "Airport Drop Wagholi to Mumbai",
    "description": "Ensure timely arrival at Mumbai Airport with our dedicated airport drop service from Wagholi. Our drivers track your flight and traffic conditions to provide punctual and hassle-free transfers, helping you catch your flight without any stress."
  },
  {
    "name": "24/7 Cab Wagholi to Mumbai",
    "description": "Our Wagholi to Mumbai cabs operate 24/7 to meet your travel needs any time of day or night. Whether it’s an early morning flight or a late-night meeting, count on us for prompt, reliable service available around the clock."
  },
  {
    "name": "Expressway Cab Wagholi Mumbai",
    "description": "Take the fastest and safest route from Wagholi to Mumbai with our expressway cab service. Our experienced drivers expertly navigate the Mumbai-Pune Expressway to reduce travel time while providing a comfortable and scenic journey."
  }
],
"tableData": [
  ["Wagholi to Mumbai Cab", "Online Booking Wagholi Mumbai Cab"],
  ["One-Way Taxi Wagholi to Mumbai", "AC Taxi Wagholi to Mumbai"],
  ["Sedan Cab Wagholi Mumbai", "SUV Cab Wagholi to Mumbai"],
  ["Round Trip Cab Wagholi", "Verified Driver Wagholi Mumbai"],
  ["Executive Cab Wagholi to Mumbai", "Corporate Taxi Wagholi"],
  ["Affordable Cab Wagholi to Mumbai", "Safe Travel Wagholi to Mumbai"],
  ["Airport Drop Wagholi to Mumbai", "24/7 Cab Wagholi to Mumbai"],
  ["Expressway Cab Wagholi Mumbai", ""]
],

  "whychoose": [
    {
      "WhyChooseheading": "Reliable Wagholi to Mumbai Cab Service",
      "WhyChoosedescription": "Our Wagholi to Mumbai cab service offers dependable and punctual intercity travel for commuters, tourists, and professionals. Whether you're heading to the airport, a business event, or simply traveling for leisure, we ensure timely pickups and hassle-free drop-offs from the growing suburb of Wagholi to bustling Mumbai."
    },
    {
      "WhyChooseheading": "Comfortable and Diverse Fleet Options",
      "WhyChoosedescription": "Travel in style and comfort with our range of well-maintained vehicles. From economical sedans to spacious SUVs and premium models, we offer travel solutions for solo riders, families, and business groups—ensuring a relaxed and enjoyable journey tailored to your needs."
    },
    {
      "WhyChooseheading": "Affordable, Transparent Pricing Structure",
      "WhyChoosedescription": "Say goodbye to hidden fees. Our Wagholi to Mumbai cab fares are clear, competitive, and inclusive of all charges like tolls, state taxes, and driver allowances. With upfront pricing, you’ll always know exactly what you're paying for."
    },
    {
      "WhyChooseheading": "Experienced and Polite Drivers",
      "WhyChoosedescription": "All our drivers are professional, background-verified, and well-versed with the Pune-Mumbai route. Their knowledge of traffic patterns, route preferences, and customer service ensures a safe, smooth, and courteous travel experience."
    },
    {
      "WhyChooseheading": "Flexible Pickup Times and 24/7 Availability",
      "WhyChoosedescription": "We operate around the clock to accommodate your schedule. Whether you need an early morning pickup or a late-night ride, our 24/7 Wagholi to Mumbai cab availability ensures you're never stranded or delayed."
    },
    {
      "WhyChooseheading": "Easy Online Booking with Instant Confirmation",
      "WhyChoosedescription": "Book your cab from Wagholi to Mumbai in just a few clicks using our streamlined website or mobile app. Enjoy instant confirmations, driver details, live tracking, and automated notifications to keep you updated every step of the way."
    },
    {
      "WhyChooseheading": "Safe, Clean, and Sanitized Vehicles",
      "WhyChoosedescription": "We adhere to high standards of vehicle hygiene and safety. Every cab is thoroughly cleaned, sanitized, and inspected before the trip to ensure your health, comfort, and peace of mind throughout the journey."
    },
    {
      "WhyChooseheading": "Multiple Payment Methods and Digital Invoices",
      "WhyChoosedescription": "Choose from secure payment options including UPI, credit/debit cards, wallets, or cash. Post-ride, receive a detailed digital invoice for transparent billing and record-keeping."
    }
  ]












    }


const faqData = [
    {
        question: "Do you offer cab services from Wagholi to Mumbai?",
        answer: "Yes, Swara Cabs provides reliable and convenient cab services from Wagholi, Pune to all locations in Mumbai, including the airport."
    },
    {
        question: "What is the fare for a cab from Wagholi to Mumbai?",
        answer: "Fares start from ₹6,000 for a sedan. The exact fare depends on the vehicle type, pickup time, and the drop-off location in Mumbai."
    },
    {
        question: "How can I book a cab from Wagholi to Mumbai?",
        answer: "You can easily book your cab online through our website or by calling us directly at +91 9697780707."
    },
    {
        question: "Is doorstep pickup available from Wagholi?",
        answer: "Yes, we provide doorstep pickup from any location in Wagholi for a hassle-free travel experience."
    },
    {
        question: "Do you operate cabs at night from Wagholi to Mumbai?",
        answer: "Yes, our services are available 24/7, including night travel with a small night-time surcharge."
    },
    {
        question: "Which cab options are available from Wagholi to Mumbai?",
        answer: "We offer sedans, SUVs, Ertiga, Innova Crysta, and tempo travellers to match your group size and comfort requirements."
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







const wagholiToMumbaiCabSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Wagholi to Mumbai Cab",
  "image": "https://www.swaracabs.in/assets/images/wagholi-mumbai-cab.jpg",
  "description": "Book reliable Wagholi to Mumbai cab service with AC, sedan, and SUV options. Available for one-way, round trip, corporate rides, and airport drops with verified drivers and 24/7 customer support.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "45675",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1350",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/wagholi-to-mumbai-cab"
  }
};





    return (
        <div>
<Helmet>
  <title>Wagholi to Mumbai Cab | Book AC, Sedan & SUV Taxi | Swara Cabs</title>
  <meta
    name="description"
    content="Book reliable Wagholi to Mumbai cab service with AC, sedan, and SUV options. Available for one-way, round trip, corporate rides, and airport drops with verified drivers and 24/7 customer support."
  />
  <meta
    name="keywords"
    content="Wagholi to Mumbai Cab, One-Way Taxi Wagholi to Mumbai, Online Booking Wagholi Mumbai Cab, AC Taxi Wagholi to Mumbai, Sedan Cab Wagholi Mumbai, SUV Cab Wagholi to Mumbai, Round Trip Cab Wagholi, Verified Driver Wagholi Mumbai, Executive Cab Wagholi to Mumbai, Corporate Taxi Wagholi, Affordable Cab Wagholi to Mumbai, Safe Travel Wagholi to Mumbai, Airport Drop Wagholi to Mumbai, 24/7 Cab Wagholi to Mumbai, Expressway Cab Wagholi Mumbai"
  />
  <script type="application/ld+json">
    {JSON.stringify(wagholiToMumbaiCabSchema)}
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
                            <img src='/images/keyword/66.jpg' alt='img' />
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

export default Wagholitomumbaicab;