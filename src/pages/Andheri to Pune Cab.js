
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Andheritopunecab() {



    const cardData =
    {
        keyword: 'Andheri to Pune Cab',
        heading: 'Swara Cabs : Andheri to Pune Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Andheri to Pune. Pune, Maharashtra’s vibrant cultural and educational hub, is known for its historic landmarks, lush greenery, and dynamic city life. Whether you are traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a smooth and hassle‑free experience. Covering approximately 150–160 kilometers via the Mumbai–Pune Expressway, the journey typically takes around 3 to 4 hours depending on traffic conditions. With our well‑maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
     {
        "title": "Shaniwar Wada",
        "description": "Shaniwar Wada is one of the most iconic historical structures in Pune, built in 1732 by the Peshwas of the Maratha Empire. The fort was originally the seat of power for the Peshwas and witnessed several key events in Maratha history. Though much of the structure was destroyed by fire in 1828, the remaining ruins, including the massive Dilli Darwaza (main gate), strong ramparts, and open courtyards, speak volumes about its glorious past. The fort is also known for its haunting legends, making it a popular spot for heritage walks and history enthusiasts."
    },
     {
        "title": "Pataleshwar Cave Temple",
        "description": "Hidden amidst the urban chaos of JM Road, the Pataleshwar Cave Temple is a serene, 8th-century rock-cut shrine carved out of a single basalt rock. Dedicated to Lord Shiva, the temple features a beautifully carved sanctum, a circular Nandi Mandapa (pavilion), and intricate stone pillars that reflect ancient Indian architecture. Despite its location in the city, the temple offers a peaceful escape for spiritual seekers and architecture lovers. It’s also recognized as a protected monument by the Archaeological Survey of India."
    },
    {
        "title": "Sinhagad Fort",
        "description": "Sinhagad Fort is a majestic hill fortress located about 30 kilometers from Pune, standing tall at an altitude of 1,312 meters. Known for its strategic location, the fort has played a crucial role in many battles, including the famous battle of Tanaji Malusare, a brave Maratha warrior. Today, it is a favorite trekking destination for adventure lovers and history buffs alike. Once at the top, visitors are rewarded with stunning views of the surrounding Sahyadri hills, rustic food stalls serving traditional Maharashtrian dishes like pithla-bhakri, and a strong sense of Maratha pride."
    },
    {
        "title": "Aga Khan Palace",
        "description": "The Aga Khan Palace is a majestic building located in the Yerwada area of Pune, built in 1892 by Sultan Aga Khan III. It holds great historical importance as it served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other freedom fighters during the Quit India Movement. The palace now houses a museum dedicated to Mahatma Gandhi, with photographs, personal items, and his ashes. The beautiful Italian arches, sprawling lawns, and peaceful surroundings make it a tranquil place to explore the legacy of India’s freedom struggle."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "description": "The Raja Dinkar Kelkar Museum is a rich cultural repository, home to over 20,000 artifacts collected by Dr. Dinkar G. Kelkar in memory of his son. The museum showcases an incredible variety of items ranging from antique musical instruments and ancient sculptures to everyday household items from bygone eras. Each gallery offers a fascinating glimpse into India’s diverse artistic and cultural traditions. Located in the heart of Pune, it is a must-visit destination for art lovers, history buffs, and curious travelers alike."
    },
    {
        "title": "Osho Ashram (Osho International Meditation Resort)",
        "description": "Located in the lush and upscale Koregaon Park area, the Osho International Meditation Resort is a globally renowned spiritual retreat founded by spiritual teacher Osho. The ashram offers a wide range of meditation practices, wellness programs, spa treatments, and dynamic activities aimed at personal growth and mindfulness. Surrounded by tall bamboo trees, modern architecture, and a calm atmosphere, it attracts seekers from around the world. Visitors can take day passes or stay longer to experience a unique blend of spiritual retreat and luxurious comfort."
    },
    {
        "title": "Pune Okayama Friendship Garden",
        "description": "Also known as Pu La Deshpande Garden, the Pune Okayama Friendship Garden is one of the largest Japanese-style gardens outside Japan, inspired by the famous Korakuen Garden in Okayama. Sprawling across 10 acres, the garden features meticulously landscaped lawns, flowing streams, arched bridges, and tranquil walking paths. It's an ideal place for family picnics, photography, meditation, or simply unwinding amidst nature. The garden also hosts a musical fountain show in the evenings, adding to the charm of this beautifully designed space."
    },
    {
        "title": "Dagdusheth Halwai Ganpati Temple",
        "description": "The Dagdusheth Halwai Ganpati Temple is one of Pune’s most beloved spiritual landmarks, visited by thousands of devotees each day. Dedicated to Lord Ganesha, the temple is known for its grand celebrations during Ganesh Chaturthi and its beautifully adorned deity that exudes peace and blessings. Located in Budhwar Peth, the temple is a fine example of modern temple architecture, with ornate gold embellishments and intricate carvings. The temple’s trust is also involved in numerous social welfare activities, adding a layer of social service to spiritual devotion."
    },
    {
        "title": "Khadakwasla Dam",
        "description": "Khadakwasla Dam, situated just 20 km from Pune, is a favorite weekend retreat for locals. The dam is built on the Mutha River and is surrounded by scenic hills and lush greenery, making it a perfect place for nature lovers and photographers. Visitors often enjoy local snacks like corn, bhel, and tea by the waterfront. The area is also en route to Sinhagad Fort and National Defence Academy (NDA), making it a good pitstop for a full-day trip. The cool breeze and calming ambiance make it ideal for morning drives and romantic evening outings."
    }
],

  "services": [
    {
      "name": "Andheri to Pune Cab",
      "description": "Planning a trip from Andheri to Pune? Swara Cabs offers dependable and comfortable cab services for this long-distance journey. Whether you're traveling for work or leisure, our well-maintained fleet ensures a hassle-free ride. Enjoy door-to-door pickup and drop services with experienced drivers who are well-versed in the route."
    },
    {
      "name": "AC Taxi Andheri to Pune",
      "description": "Beat the heat and travel in total comfort with our air-conditioned taxis from Andheri to Pune. Swara Cabs provides clean, sanitized, and climate-controlled vehicles to ensure your journey is cool and pleasant—no matter the weather or time of day."
    },
    {
      "name": "Online Cab Booking Andheri",
      "description": "Booking a cab from Andheri to Pune has never been easier. Use Swara Cabs' secure online platform to reserve your ride in just a few clicks. Choose your vehicle type, confirm your schedule, and enjoy instant booking confirmation with 24/7 support."
    },
    {
      "name": "One-Way Taxi Andheri to Pune",
      "description": "Only need a ride to Pune? Swara Cabs offers affordable one-way taxi services from Andheri, saving you money with no return fare. It’s the ideal solution for students, professionals, and families traveling one direction without hassle."
    },
    {
      "name": "Affordable Cab Andheri to Pune",
      "description": "Looking for a budget-friendly cab from Andheri to Pune? Swara Cabs provides economical fares without compromising safety or comfort. Our transparent pricing and no hidden charges policy make your travel both affordable and stress-free."
    },
    {
      "name": "Round Trip Cab Andheri",
      "description": "Need a ride to Pune and back? Our round-trip cab services from Andheri give you flexibility and convenience. Whether it's a same-day return or a multi-day stay, enjoy reliable transportation both ways with a single booking."
    },
    {
      "name": "Executive Cabs Andheri to Pune",
      "description": "Travel in style with Swara Cabs’ executive service from Andheri to Pune. Designed for business professionals and those who value comfort, our executive cars feature premium interiors, courteous drivers, and timely pickups for a smooth and elegant ride."
    },
    {
      "name": "Andheri to Pune Sedan Taxi",
      "description": "Perfect for individuals and small families, our sedan taxis from Andheri to Pune offer comfort, space, and affordability. Enjoy a relaxing ride in a clean, well-equipped car with ample luggage room and professional service."
    },
    {
      "name": "SUV Cabs from Andheri",
      "description": "Traveling with a group or lots of luggage? Book our SUV cab from Andheri to Pune. With spacious interiors, strong performance, and great comfort, SUVs like Innova or Ertiga are perfect for long-distance family or group travel."
    },
    {
      "name": "Airport Drop Cab Andheri to Pune",
      "description": "Need to travel from Andheri to Pune after arriving at Mumbai Airport? Swara Cabs provides reliable airport-to-Pune transfers with doorstep pickup, flight tracking, and on-time arrivals. Ideal for travelers who prefer a smooth transition from air to road."
    },
    {
      "name": "Andheri to Pune Verified Drivers",
      "description": "Your safety is our priority. All Swara Cabs drivers are background-verified, well-trained, and experienced in intercity travel. Ride with confidence knowing you're in safe hands for the journey from Andheri to Pune."
    },
    {
      "name": "Corporate Taxi Andheri to Pune",
      "description": "For corporate clients and business professionals, Swara Cabs offers dedicated corporate taxi services from Andheri to Pune. Enjoy professional-grade service, invoicing support, and privacy for your business travel needs."
    },
    {
      "name": "Safe Cab Service Andheri",
      "description": "Safety comes standard in every ride. Our cabs are GPS-enabled, regularly sanitized, and driven by licensed professionals who prioritize customer well-being. Choose Swara Cabs for a safe and dependable journey from Andheri to Pune."
    },
    {
      "name": "24/7 Booking Andheri to Pune",
      "description": "No matter when you need to travel, Swara Cabs is available 24/7. Book your Andheri to Pune cab anytime—day or night—and enjoy seamless service with support around the clock. We’re just a click away whenever you’re ready to go."
    },
    {
      "name": "Quick Pickup Andheri to Pune Cab",
      "description": "In a hurry? Swara Cabs provides fast and punctual pickups from Andheri to Pune. Our cabs are strategically located to minimize wait times and get you on the road quickly, especially during urgent or last-minute travel plans."
    }
  ],
  "tableData": [
    ["Andheri to Pune Cab", "AC Taxi Andheri to Pune"],
    ["Online Cab Booking Andheri", "One-Way Taxi Andheri to Pune"],
    ["Affordable Cab Andheri to Pune", "Round Trip Cab Andheri"],
    ["Executive Cabs Andheri to Pune", "Andheri to Pune Sedan Taxi"],
    ["SUV Cabs from Andheri", "Airport Drop Cab Andheri to Pune"],
    ["Andheri to Pune Verified Drivers", "Corporate Taxi Andheri to Pune"],
    ["Safe Cab Service Andheri", "24/7 Booking Andheri to Pune"],
    ["Quick Pickup Andheri to Pune Cab", ""]
  ],




"whychoose": [
  {
    "WhyChooseheading": "Convenient Pickups from Andheri",
    "WhyChoosedescription": "Our cab service provides prompt and reliable pickups from Andheri, one of Mumbai’s busiest suburbs. Whether you are starting from the railway station, metro, or any locality within Andheri, we ensure a timely departure for your Pune trip."
  },
  {
    "WhyChooseheading": "Wide Variety of Comfortable Vehicles",
    "WhyChoosedescription": "Select from a fleet of well-maintained vehicles including sedans, SUVs, and premium cars. All vehicles come with air conditioning, spacious seating, and modern amenities to make your journey from Andheri to Pune comfortable and relaxing."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing",
    "WhyChoosedescription": "We offer clear pricing with no hidden charges for Andheri to Pune cabs. Our fare structure includes tolls and taxes, providing you with a complete cost estimate upfront so you can plan your travel budget confidently."
  },
  {
    "WhyChooseheading": "Professional and Experienced Drivers",
    "WhyChoosedescription": "Our drivers are well-trained, courteous, and familiar with the best routes between Andheri and Pune. Their expertise helps avoid traffic congestion and ensures a safe and smooth ride to your destination."
  },
  {
    "WhyChooseheading": "Safe and Sanitized Vehicles",
    "WhyChoosedescription": "Your safety is our priority. All our vehicles are thoroughly sanitized before every trip and equipped with essential safety features like seat belts, airbags, and GPS tracking for your peace of mind."
  },
  {
    "WhyChooseheading": "24/7 Service Availability",
    "WhyChoosedescription": "No matter the time of your travel, our Andheri to Pune cab service operates around the clock. We accommodate early morning flights, late-night arrivals, and everything in between, ensuring you’re covered whenever you need us."
  },
  {
    "WhyChooseheading": "Easy and Quick Online Booking",
    "WhyChoosedescription": "Booking your cab from Andheri to Pune is fast and convenient via our website or mobile app. Receive instant booking confirmations and real-time updates on your ride status for a hassle-free experience."
  },
  {
    "WhyChooseheading": "Customized Travel Options",
    "WhyChoosedescription": "We understand that each traveler has unique needs. Whether you require additional stops, luggage assistance, or specific vehicle preferences, our services are tailored to provide a personalized travel experience."
  }
]





















    }



const faqData = [
    {
        question: "Do you provide cab services from Andheri to Pune?",
        answer: "Yes, Swara Cabs offers reliable and comfortable cab services from Andheri, Mumbai to Pune."
    },
    {
        question: "What is the fare for a cab from Andheri to Pune?",
        answer: "The fare starts from ₹5,700 for a sedan. Prices vary depending on vehicle type and travel time."
    },
    {
        question: "How can I book a cab from Andheri to Pune?",
        answer: "You can book easily online through our website or call +91 9697780707 for quick booking assistance."
    },
    {
        question: "What vehicle types are available for Andheri to Pune trips?",
        answer: "We offer sedans, SUVs, Innova Crysta, and tempo travellers to suit different group sizes and preferences."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included with no hidden fees."
    },
    {
        question: "Is night service available from Andheri to Pune?",
        answer: "Yes, we operate 24/7, with a small surcharge for trips between 10 PM and 6 AM."
    },
    {
        question: "Can I book a round trip from Andheri to Pune?",
        answer: "Yes, round-trip bookings are available and can be scheduled to fit your plans."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. Our drivers are professionally trained and background-verified for your safety."
    },
    {
        question: "Do you offer doorstep pickup in Andheri?",
        answer: "Yes, our cabs pick you up directly from your location in Andheri."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept UPI, cash, debit/credit cards, and popular digital wallets for convenient payment."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Rohit Sharma',
        review: 'Swara Cabs provided a smooth and comfortable ride from Andheri to Pune. The driver was courteous and professional.'
    },
    {
        name: 'Ms. Sneha Kulkarni',
        review: 'Excellent service and punctual pickup from Andheri. Highly recommend Swara Cabs for Mumbai to Pune trips.'
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
  "name": "Andheri to Pune Cab",
  "image": "https://www.swaracabs.in/assets/images/andheri-to-pune-cab.jpg",
  "description": "Book Andheri to Pune cab with Swara Cabs for reliable, affordable, and safe travel. Options include AC sedans and SUVs, one-way and round trip rides, 24/7 availability with verified drivers.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "9568"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2599",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/andheri-to-pune-cab"
  }
};




    return (
        <div>
<Helmet>
  <title>Andheri to Pune Cab | Reliable & Affordable Taxi | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Andheri to Pune cab with Swara Cabs for reliable, affordable, and safe travel. Options include AC sedans and SUVs, one-way and round trip rides, 24/7 availability with verified drivers." 
  />
  <meta 
    name="keywords" 
    content="Andheri to Pune Cab, AC Taxi Andheri to Pune, Online Cab Booking Andheri, One-Way Taxi Andheri to Pune, Affordable Cab Andheri to Pune, Round Trip Cab Andheri, Executive Cabs Andheri to Pune, Andheri to Pune Sedan Taxi, SUV Cabs from Andheri, Airport Drop Cab Andheri to Pune, Andheri to Pune Verified Drivers, Corporate Taxi Andheri to Pune, Safe Cab Service Andheri, 24/7 Booking Andheri to Pune, Quick Pickup Andheri to Pune Cab" 
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
                            <img src='/images/keyword/25.jpg' alt='img' />
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

export default Andheritopunecab;