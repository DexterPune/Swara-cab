
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Kurlatopunetaxiservice() {



    const cardData =
    {
        keyword: 'Kurla to Pune Taxi Service',
        heading: 'Swara Cabs : Kurla to Pune Taxi Service',
        headingDescription: 'Swara Cabs offers dependable, comfortable, and budget-friendly taxi services for your journey from Kurla to Pune. Pune, a dynamic city known for its cultural richness, educational institutions, and growing IT hubs, is an ideal destination for both business and leisure travelers. Whether you are heading there for an important meeting, a weekend getaway, or to reconnect with loved ones, Swara Cabs ensures a smooth and stress-free ride. The distance from Kurla to Pune is around 150 to 160 kilometers, and the journey via the Mumbai–Pune Expressway generally takes about 3 to 4 hours, depending on traffic conditions. With a well-maintained fleet and experienced chauffeurs, Swara Cabs provides a safe, timely, and personalized travel experience tailored to your needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
    {
        "title": "Shaniwar Wada",
        "description": "Shaniwar Wada is one of the most iconic historical structures in Pune, built in 1732 by the Peshwas of the Maratha Empire. The fort was originally the seat of power for the Peshwas and witnessed several key events in Maratha history. Though much of the structure was destroyed by fire in 1828, the remaining ruins, including the massive Dilli Darwaza (main gate), strong ramparts, and open courtyards, speak volumes about its glorious past. The fort is also known for its haunting legends, making it a popular spot for heritage walks and history enthusiasts."
    },
     {
        "title": "Sinhagad Fort",
        "description": "Sinhagad Fort is a majestic hill fortress located about 30 kilometers from Pune, standing tall at an altitude of 1,312 meters. Known for its strategic location, the fort has played a crucial role in many battles, including the famous battle of Tanaji Malusare, a brave Maratha warrior. Today, it is a favorite trekking destination for adventure lovers and history buffs alike. Once at the top, visitors are rewarded with stunning views of the surrounding Sahyadri hills, rustic food stalls serving traditional Maharashtrian dishes like pithla-bhakri, and a strong sense of Maratha pride."
    },
    {
        "title": "Raja Dinkar Kelkar Museum",
        "description": "The Raja Dinkar Kelkar Museum is a rich cultural repository, home to over 20,000 artifacts collected by Dr. Dinkar G. Kelkar in memory of his son. The museum showcases an incredible variety of items ranging from antique musical instruments and ancient sculptures to everyday household items from bygone eras. Each gallery offers a fascinating glimpse into India’s diverse artistic and cultural traditions. Located in the heart of Pune, it is a must-visit destination for art lovers, history buffs, and curious travelers alike."
    },
    {
        "title": "Aga Khan Palace",
        "description": "The Aga Khan Palace is a majestic building located in the Yerwada area of Pune, built in 1892 by Sultan Aga Khan III. It holds great historical importance as it served as a prison for Mahatma Gandhi, Kasturba Gandhi, and other freedom fighters during the Quit India Movement. The palace now houses a museum dedicated to Mahatma Gandhi, with photographs, personal items, and his ashes. The beautiful Italian arches, sprawling lawns, and peaceful surroundings make it a tranquil place to explore the legacy of India’s freedom struggle."
    },
    {
        "title": "Pataleshwar Cave Temple",
        "description": "Hidden amidst the urban chaos of JM Road, the Pataleshwar Cave Temple is a serene, 8th-century rock-cut shrine carved out of a single basalt rock. Dedicated to Lord Shiva, the temple features a beautifully carved sanctum, a circular Nandi Mandapa (pavilion), and intricate stone pillars that reflect ancient Indian architecture. Despite its location in the city, the temple offers a peaceful escape for spiritual seekers and architecture lovers. It’s also recognized as a protected monument by the Archaeological Survey of India."
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
    "name": "Kurla to Pune Taxi Service",
    "description": "Enjoy a smooth and reliable taxi journey from Kurla to Pune with our professional cab service. Ride comfortably in well-maintained vehicles, driven by courteous and experienced chauffeurs. Whether it’s a personal trip or a business visit, we ensure timely pickups, fair pricing, and a hassle-free travel experience via the Mumbai–Pune Expressway."
  },
  {
    "name": "One-Way Taxi Kurla to Pune",
    "description": "Looking for a cost-effective one-time ride? Our one-way taxi service from Kurla to Pune is designed for travelers who only need a drop without paying for return. No hidden fees, just transparent pricing and quality service for solo trips, student travel, or quick relocations."
  },
  {
    "name": "AC Taxi Kurla to Pune",
    "description": "Beat the heat with our fully air-conditioned taxis from Kurla to Pune. Designed for comfort and equipped with climate control, these cabs ensure a pleasant ride even during peak summer or long hours on the highway. Perfect for families, seniors, or business travelers."
  },
  {
    "name": "Online Booking Taxi Kurla",
    "description": "Book your Kurla to Pune taxi easily through our secure online platform. Get instant fare estimates, real-time cab availability, and immediate confirmation. Ideal for both last-minute travel and advance planning with 24/7 support and user-friendly interface."
  },
  {
    "name": "Affordable Fare Kurla to Pune",
    "description": "Travel smart with our affordable taxi fares from Kurla to Pune. We offer competitive pricing with no surprise charges, making quality cab travel accessible for daily commuters, students, and budget-conscious passengers who value safety and punctuality."
  },
  {
    "name": "Sedan Cab Kurla to Pune",
    "description": "Choose our sedan cab service from Kurla to Pune for a premium yet affordable ride. Ideal for couples, individuals, or small families seeking style and comfort, our sedans offer plush seating, smooth rides, and great mileage—perfect for highway travel."
  },
  {
    "name": "SUV Taxi Kurla",
    "description": "Need more room? Our SUV taxi service in Kurla is perfect for group travel to Pune. With ample luggage space and seating for up to 6 passengers, SUVs are ideal for family trips, friends’ outings, or when you're carrying extra baggage."
  },
  {
    "name": "Round Trip Cab Kurla to Pune",
    "description": "Planning to return the same day or later? Book our round trip cab from Kurla to Pune and enjoy discounted return fares, the same driver and vehicle for both trips, and flexibility in return scheduling. Ideal for business or short personal visits."
  },
  {
    "name": "Kurla to Pune Executive Cab",
    "description": "Upgrade your journey with our executive cab service from Kurla to Pune. Experience high-end vehicles, professional chauffeurs, on-time pickups, and priority support—perfect for corporate clients, VIPs, and anyone who prefers traveling in style and comfort."
  },
  {
    "name": "Verified Driver Kurla",
    "description": "Your safety is our top priority. All drivers operating our Kurla to Pune cabs are background-verified, professionally trained, and adhere to the highest standards of road safety and customer service to ensure a safe and respectful journey."
  },
  {
    "name": "24/7 Cab Booking Kurla to Pune",
    "description": "We operate around the clock! Whether it's an early morning meeting or a midnight emergency, our 24/7 cab service from Kurla to Pune ensures you're always covered with timely pickups and dependable drivers."
  },
  {
    "name": "Safe Taxi Kurla to Pune",
    "description": "Enjoy peace of mind on your journey from Kurla to Pune with our safety-first approach. Our vehicles are sanitized regularly, undergo routine maintenance, and our drivers are trained in hygiene and emergency response protocols for your protection."
  },
  {
    "name": "Kurla Airport to Pune Cab",
    "description": "Need an airport pickup or drop? Our Kurla airport to Pune cab service ensures timely transfers with flight monitoring, luggage assistance, and professional chauffeurs—ensuring a seamless airport experience and smooth ride to your destination."
  },
  {
    "name": "Corporate Travel Kurla to Pune",
    "description": "Designed for business travelers, our corporate cab service from Kurla to Pune includes luxury vehicles, monthly invoicing, priority bookings, and experienced drivers. Travel in comfort while staying on schedule and within budget."
  },
  {
    "name": "Quick Cab Kurla to Pune",
    "description": "Need a cab urgently? Use our quick cab service from Kurla to Pune and get a taxi assigned instantly. Ideal for last-minute plans, urgent trips, or when you're in a rush and need a reliable ride immediately."
  }
],
"tableData": [
  ["Kurla to Pune Taxi Service", "Online Booking Taxi Kurla"],
  ["One-Way Taxi Kurla to Pune", "AC Taxi Kurla to Pune"],
  ["Round Trip Cab Kurla to Pune", "Sedan Cab Kurla to Pune"],
  ["SUV Taxi Kurla", "Affordable Fare Kurla to Pune"],
  ["Verified Driver Kurla", "Kurla to Pune Executive Cab"],
  ["24/7 Cab Booking Kurla to Pune", "Safe Taxi Kurla to Pune"],
  ["Quick Cab Kurla to Pune", "Kurla Airport to Pune Cab"],
  ["Corporate Travel Kurla to Pune", ""]
],




"whychoose": [
  {
    "WhyChooseheading": "Reliable Kurla to Pune Taxi Service",
    "WhyChoosedescription": "Experience dependable and timely Kurla to Pune taxi service with us. We ensure prompt pickups and drop-offs so you can focus on your plans without worrying about delays, whether it’s for business or leisure travel."
  },
  {
    "WhyChooseheading": "Wide Range of Vehicle Options",
    "WhyChoosedescription": "Select the perfect vehicle for your Kurla to Pune trip from our extensive fleet, including economical sedans for solo travelers, spacious SUVs for families or groups, and luxury cars for those wanting to travel in style and comfort."
  },
  {
    "WhyChooseheading": "Transparent and Affordable Pricing",
    "WhyChoosedescription": "Our Kurla to Pune taxi service offers clear and competitive pricing with no hidden costs. The fare covers tolls, taxes, and driver allowances, helping you stay within your budget while enjoying quality service."
  },
  {
    "WhyChooseheading": "Experienced and Courteous Drivers",
    "WhyChoosedescription": "Our professional drivers are well-versed with the best routes from Kurla to Pune. They prioritize your safety and comfort, ensuring a smooth and pleasant journey while providing courteous and helpful service."
  },
  {
    "WhyChooseheading": "Convenient Online Booking",
    "WhyChoosedescription": "Book your Kurla to Pune taxi quickly and easily via our website or mobile app. Benefit from instant booking confirmation, real-time cab tracking, and flexible cancellation or rescheduling options tailored to your needs."
  },
  {
    "WhyChooseheading": "24/7 Customer Support",
    "WhyChoosedescription": "Our customer support team is available 24/7 to assist with your Kurla to Pune taxi bookings, handle inquiries, and offer help throughout your travel experience, making your trip worry-free and comfortable."
  },
  {
    "WhyChooseheading": "Clean and Well-Maintained Vehicles",
    "WhyChoosedescription": "Travel in clean, air-conditioned vehicles that are regularly serviced and sanitized for your safety. Our taxis for the Kurla to Pune route come equipped with modern amenities to make your journey relaxing."
  },
  {
    "WhyChooseheading": "Multiple Secure Payment Options",
    "WhyChoosedescription": "Pay for your Kurla to Pune taxi with ease using multiple secure payment methods such as credit/debit cards, UPI, digital wallets, or cash. We ensure transparent billing and provide detailed receipts for every ride."
  }
]






























    }


const faqData = [
    {
        question: "Do you offer taxi services from Kurla to Pune?",
        answer: "Yes, Swara Cabs provides reliable and comfortable taxi services from Kurla to Pune."
    },
    {
        question: "What is the fare for a taxi from Kurla to Pune?",
        answer: "Fares start from ₹6,000 for a sedan. The exact fare depends on vehicle type and travel time."
    },
    {
        question: "How can I book a taxi from Kurla to Pune?",
        answer: "You can book a taxi through our website or call us directly at +91 9697780707."
    },
    {
        question: "What types of vehicles are available for Kurla to Pune trips?",
        answer: "We offer a range of vehicles including sedans, SUVs, Innova Crysta, and tempo travellers."
    },
    {
        question: "Are tolls and driver charges included in the taxi fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included in the fare. No hidden charges."
    },
    {
        question: "Can I book a taxi for night travel from Kurla to Pune?",
        answer: "Yes, we offer 24/7 taxi services including night travel with a nominal night-time surcharge."
    },
    {
        question: "Is a round trip option available from Kurla to Pune?",
        answer: "Yes, you can book both one-way and round-trip rides based on your convenience."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. Our drivers are professional, trained, and background-verified to ensure your safety."
    },
    {
        question: "Do you offer doorstep pickup in Kurla?",
        answer: "Yes, we provide hassle-free doorstep pickup from any location in Kurla."
    },
    {
        question: "What payment methods can I use?",
        answer: "We accept UPI, cash, debit/credit cards, and all major digital wallets for your convenience."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Nilesh Jadhav',
        review: 'Booked a taxi from Kurla to Pune with Swara Cabs. The ride was smooth, the driver was friendly, and the vehicle was in great condition.'
    },
    {
        name: 'Ms. Rupal Thakur',
        review: 'Fantastic experience with Swara Cabs. On-time pickup from Kurla, clean vehicle, and courteous driver. Highly recommend their service!'
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
  "name": "Kurla to Pune Taxi Service",
  "image": "https://www.swaracabs.in/assets/images/kurla-pune-cab.jpg",
  "description": "Affordable and reliable Kurla to Pune taxi service offering AC, sedan, and SUV taxis. Book online for one-way or round trip rides, airport transfers, and corporate travel.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "7458",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1300",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/kurla-to-pune-taxi-service"
  }
};








    return (
        <div>
<Helmet>
  <title>Kurla to Pune Taxi Service | Affordable & Reliable Cab | Swara Cabs</title>
  <meta
    name="description"
    content="Affordable and reliable Kurla to Pune taxi service offering AC, sedan, and SUV taxis. Book online for one-way or round trip rides, airport transfers, and corporate travel."
  />
  <meta
    name="keywords"
    content="Kurla to Pune Taxi Service, One-Way Taxi Kurla to Pune, AC Taxi Kurla to Pune, Online Booking Taxi Kurla, Affordable Fare Kurla to Pune, Sedan Cab Kurla to Pune, SUV Taxi Kurla, Round Trip Cab Kurla to Pune, Kurla to Pune Executive Cab, Verified Driver Kurla, 24/7 Cab Booking Kurla to Pune, Safe Taxi Kurla to Pune, Kurla Airport to Pune Cab, Corporate Travel Kurla to Pune, Quick Cab Kurla to Pune"
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
                            <img src='/images/keyword/42.jpg' alt='img' />
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

export default Kurlatopunetaxiservice;