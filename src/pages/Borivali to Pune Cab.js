
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Bolivalitopunecab() {



    const cardData =
    {
        keyword: 'Borivali to Pune Cab',
        heading: 'Swara Cabs : Borivali to Pune Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Borivali to Pune. Pune, Maharashtra’s vibrant cultural and educational hub, is known for its historic landmarks, lush greenery, and dynamic city life. Whether you are traveling for a business meeting, a family visit, or catching a flight, Swara Cabs ensures a smooth and hassle-free experience. The road distance from Borivali to Pune is approximately 164 km, and depending on your chosen route and traffic conditions, the journey typically takes between 2 hours 20 minutes to 3 hours 30 minutes . With our well‑maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
     {
        "title": "Pataleshwar Cave Temple",
        "description": "Hidden amidst the urban chaos of JM Road, the Pataleshwar Cave Temple is a serene, 8th-century rock-cut shrine carved out of a single basalt rock. Dedicated to Lord Shiva, the temple features a beautifully carved sanctum, a circular Nandi Mandapa (pavilion), and intricate stone pillars that reflect ancient Indian architecture. Despite its location in the city, the temple offers a peaceful escape for spiritual seekers and architecture lovers. It’s also recognized as a protected monument by the Archaeological Survey of India."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "description": "The Raja Dinkar Kelkar Museum is a rich cultural repository, home to over 20,000 artifacts collected by Dr. Dinkar G. Kelkar in memory of his son. The museum showcases an incredible variety of items ranging from antique musical instruments and ancient sculptures to everyday household items from bygone eras. Each gallery offers a fascinating glimpse into India’s diverse artistic and cultural traditions. Located in the heart of Pune, it is a must-visit destination for art lovers, history buffs, and curious travelers alike."
    },
    {
        "title": "Shaniwar Wada",
        "description": "Shaniwar Wada is one of the most iconic historical structures in Pune, built in 1732 by the Peshwas of the Maratha Empire. The fort was originally the seat of power for the Peshwas and witnessed several key events in Maratha history. Though much of the structure was destroyed by fire in 1828, the remaining ruins, including the massive Dilli Darwaza (main gate), strong ramparts, and open courtyards, speak volumes about its glorious past. The fort is also known for its haunting legends, making it a popular spot for heritage walks and history enthusiasts."
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
      "name": "Borivali to Pune Cab",
      "description": "Travel comfortably from Borivali to Pune with our professional cab services. Whether you're heading out for business, leisure, or a family trip, we offer timely pickups, reliable vehicles, and experienced drivers to ensure a smooth ride on the Mumbai–Pune Expressway."
    },
    {
      "name": "One-Way Cab Borivali to Pune",
      "description": "Book a one-way cab from Borivali to Pune and avoid paying return fare. Our one-way services are perfect for travelers looking for convenience and affordability. Choose from sedans, SUVs, or premium vehicles for a ride that matches your travel needs."
    },
    {
      "name": "AC Taxi Borivali to Pune",
      "description": "Enjoy a cool and pleasant journey in our air-conditioned taxis from Borivali to Pune. With spacious seating, clean interiors, and smooth driving, our AC taxis are ideal for long-distance comfort, especially during the warmer months."
    },
    {
      "name": "Online Cab Booking Borivali",
      "description": "Easily book your Borivali to Pune cab online with just a few clicks. Our user-friendly platform lets you choose the vehicle, time, and payment mode. Get instant confirmation and transparent pricing—no surprises, no hidden costs."
    },
    {
      "name": "Affordable Cab Borivali to Pune",
      "description": "Looking for a budget-friendly ride to Pune? We offer affordable cab options from Borivali without compromising on comfort or service. Choose us for reliable, cost-effective travel backed by well-maintained vehicles and courteous drivers."
    },
    {
      "name": "Round Trip Taxi Borivali",
      "description": "Planning to return the same day or in a few days? Book our round trip taxi service from Borivali to Pune for added convenience. Enjoy discounted round-trip fares, reserved return pickups, and a dedicated driver at your service."
    },
    {
      "name": "Sedan Taxi Borivali to Pune",
      "description": "Our sedan taxis are ideal for small families or business travelers. Offering comfort, fuel efficiency, and a smooth ride, sedans are perfect for a peaceful drive from Borivali to Pune with ample legroom and luggage space."
    },
    {
      "name": "SUV Cab Borivali to Pune",
      "description": "Need extra space and comfort? Our SUV cabs from Borivali to Pune are great for families, groups, or travelers with luggage. Travel in style with powerful vehicles, comfortable seating, and premium on-road performance."
    },
    {
      "name": "Executive Taxi Borivali to Pune",
      "description": "Choose our executive taxi service for a premium travel experience. With leather interiors, extra legroom, and professional drivers, this option is perfect for corporate travelers or anyone who values luxury and service."
    },
    {
      "name": "Corporate Cab Hire Borivali",
      "description": "For business trips, client pickups, or official travel, our corporate cab services from Borivali to Pune ensure timely arrivals, invoicing support, and executive-class comfort. Book for individuals or teams with flexible packages."
    },
    {
      "name": "Airport Drop Cab Borivali",
      "description": "Catch your flight on time with our dedicated airport drop service from Borivali to Pune or vice versa. We track your schedule to ensure on-time drop-off, offering stress-free transfers for domestic or international travelers."
    },
    {
      "name": "Quick Cab Borivali to Pune",
      "description": "Need a cab on short notice? Our quick cab booking service ensures that you get a ride from Borivali to Pune fast. With minimal wait times and priority pickup, we make sure you’re on the road without delay."
    },
    {
      "name": "Safe Ride Borivali to Pune",
      "description": "Your safety is our priority. All our Borivali to Pune cabs are equipped with safety features, GPS tracking, and driven by verified professionals who follow all traffic and hygiene protocols. Travel securely, day or night."
    },
    {
      "name": "Verified Drivers Borivali to Pune",
      "description": "Ride with confidence knowing that all our drivers are background-checked, experienced, and trained for intercity travel. Whether you’re riding solo or with family, our verified drivers provide peace of mind on the road."
    },
    {
      "name": "24/7 Borivali to Pune Cab",
      "description": "We operate round the clock to serve your travel needs. No matter when you need a cab—from late-night pickups to early morning departures—we’re ready to get you from Borivali to Pune safely and promptly."
    }
  ],
  "tableData": [
    ["Borivali to Pune Cab", "One-Way Cab Borivali to Pune"],
    ["AC Taxi Borivali to Pune", "Online Cab Booking Borivali"],
    ["Affordable Cab Borivali to Pune", "Round Trip Taxi Borivali"],
    ["Sedan Taxi Borivali to Pune", "SUV Cab Borivali to Pune"],
    ["Executive Taxi Borivali to Pune", "Corporate Cab Hire Borivali"],
    ["Airport Drop Cab Borivali", "Quick Cab Borivali to Pune"],
    ["Safe Ride Borivali to Pune", "Verified Drivers Borivali to Pune"],
    ["24/7 Borivali to Pune Cab", ""]
  ],




"whychoose": [
  {
    "WhyChooseheading": "Reliable Pickups from Borivali",
    "WhyChoosedescription": "Our Borivali to Pune cab service offers timely and convenient pickups from anywhere in Borivali, including the railway station, residential areas, and business hubs, ensuring a smooth start to your journey."
  },
  {
    "WhyChooseheading": "Comfortable and Spacious Vehicles",
    "WhyChoosedescription": "Travel in style and comfort with our fleet of well-maintained vehicles, ranging from sedans to SUVs and premium models like Innova Crysta and Ertiga, all equipped with air conditioning and ample legroom."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing",
    "WhyChoosedescription": "We provide clear and competitive fare options for Borivali to Pune trips, inclusive of all tolls, taxes, and fees, with no hidden charges, giving you peace of mind about your travel expenses."
  },
  {
    "WhyChooseheading": "Experienced and Professional Drivers",
    "WhyChoosedescription": "Our courteous and knowledgeable drivers are familiar with the best routes between Borivali and Pune, ensuring a safe, efficient, and pleasant journey every time."
  },
  {
    "WhyChooseheading": "Sanitized and Safe Vehicles",
    "WhyChoosedescription": "Your health and safety are paramount; hence, we sanitize our vehicles regularly and equip them with essential safety features like airbags, seat belts, and GPS tracking for a secure ride."
  },
  {
    "WhyChooseheading": "24/7 Availability for Flexible Travel",
    "WhyChoosedescription": "Whether you need to depart early morning or late night, our Borivali to Pune cab service operates round the clock, catering to your travel schedule seamlessly."
  },
  {
    "WhyChooseheading": "Hassle-Free Online Booking",
    "WhyChoosedescription": "Book your cab easily through our website or mobile app with instant confirmation and real-time updates, simplifying your travel planning process."
  },
  {
    "WhyChooseheading": "Customized Travel Experience",
    "WhyChoosedescription": "We offer personalized travel options including multiple stops, luggage assistance, and vehicle choices to tailor the Borivali to Pune cab service to your specific needs."
  }
]























    }


const faqData = [
    {
        question: "Do you provide cab services from Borivali to Pune?",
        answer: "Yes, Swara Cabs offers reliable and comfortable cab services from Borivali, Mumbai to Pune."
    },
    {
        question: "What is the fare for a cab from Borivali to Pune?",
        answer: "Fares start from ₹5,700 for a sedan. Pricing varies based on vehicle type and travel time."
    },
    {
        question: "How can I book a cab from Borivali to Pune?",
        answer: "You can book online via our website or call +91 9697780707 for quick booking assistance."
    },
    {
        question: "What vehicle options are available for Borivali to Pune trips?",
        answer: "We provide sedans, SUVs, Innova Crysta, and tempo travellers depending on your group size and comfort preferences."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included with no hidden fees."
    },
    {
        question: "Is night service available from Borivali to Pune?",
        answer: "Yes, we operate 24/7 with a nominal surcharge for trips between 10 PM and 6 AM."
    },
    {
        question: "Can I book a round trip from Borivali to Pune?",
        answer: "Yes, round-trip bookings are available and customizable according to your schedule."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. Our drivers are professional, background-verified, and trained to ensure your safety."
    },
    {
        question: "Do you provide doorstep pickup in Borivali?",
        answer: "Yes, we offer doorstep pickup service directly from your location in Borivali."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept UPI, cash, debit/credit cards, and popular digital wallets for your convenience."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Rajesh Patil',
        review: 'Swara Cabs provided a comfortable and timely ride from Borivali to Pune. The driver was very professional.'
    },
    {
        name: 'Ms. Sneha Kulkarni',
        review: 'Excellent service from Borivali to Pune with Swara Cabs. The car was clean, and the driver was courteous.'
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
  "name": "Borivali to Pune Cab",
  "image": "https://www.swaracabs.in/assets/images/borivali-to-pune-cab.jpg",
  "description": "Book Borivali to Pune cab with Swara Cabs for safe, affordable, and reliable travel. Choose from AC taxis, sedans, SUVs with verified drivers, and enjoy round trips and one-way services 24/7.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "9878"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2799",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/borivali-to-pune-cab"
  }
};






    return (
        <div>
<Helmet>
  <title>Borivali to Pune Cab | Affordable & Reliable Taxi Service | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book Borivali to Pune cab with Swara Cabs for safe, affordable, and reliable travel. Choose from AC taxis, sedans, SUVs with verified drivers, and enjoy round trips and one-way services 24/7." 
  />
  <meta 
    name="keywords" 
    content="Borivali to Pune Cab, One-Way Cab Borivali to Pune, AC Taxi Borivali to Pune, Online Cab Booking Borivali, Affordable Cab Borivali to Pune, Round Trip Taxi Borivali, Sedan Taxi Borivali to Pune, SUV Cab Borivali to Pune, Executive Taxi Borivali to Pune, Corporate Cab Hire Borivali, Airport Drop Cab Borivali, Quick Cab Borivali to Pune, Safe Ride Borivali to Pune, Verified Drivers Borivali to Pune, 24/7 Borivali to Pune Cab" 
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
                            <img src='/images/keyword/29.jpg' alt='img' />
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

export default Bolivalitopunecab;