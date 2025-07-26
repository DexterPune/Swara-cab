
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Mumbaipunecabbooking() {



    const cardData =
    {
        keyword: 'Mumbai Pune Cab Booking',
        heading: 'Swara Cabs : Mumbai Pune Cab Booking',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Mumbai to Pune. Pune, Maharashtra’s vibrant cultural and educational hub, is known for its historic landmarks, lush greenery, and dynamic urban life. Whether you are traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a seamless and hassle‑free cab booking experience. Covering approximately 150 kilometers via the Mumbai–Pune Expressway, the journey typically takes around 3 to 4 hours depending on traffic conditions. With our easy-to-use booking platform, well‑maintained fleet, and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
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
        "title": "Shaniwar Wada",
        "description": "Shaniwar Wada is one of the most iconic historical structures in Pune, built in 1732 by the Peshwas of the Maratha Empire. The fort was originally the seat of power for the Peshwas and witnessed several key events in Maratha history. Though much of the structure was destroyed by fire in 1828, the remaining ruins, including the massive Dilli Darwaza (main gate), strong ramparts, and open courtyards, speak volumes about its glorious past. The fort is also known for its haunting legends, making it a popular spot for heritage walks and history enthusiasts."
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
      "name": "Mumbai Pune Cab Booking",
      "description": "Experience seamless travel with our Mumbai to Pune cab booking services. Whether you're commuting for business or leisure, our platform offers a quick and convenient way to book a cab with real-time availability, multiple vehicle options, and verified drivers. Enjoy a hassle-free journey across the Expressway."
    },
    {
      "name": "Book Cab Mumbai to Pune Online",
      "description": "Book your cab online from Mumbai to Pune in just a few clicks. Our easy-to-use platform ensures quick reservations, secure payments, and transparent pricing. Choose from a wide range of vehicles to suit your budget and travel needs."
    },
    {
      "name": "AC Taxi Mumbai Pune Booking",
      "description": "Travel in comfort with our air-conditioned taxis from Mumbai to Pune. Book an AC taxi online and enjoy a cool, relaxing journey—even during the hottest days. Our cabs are equipped with modern amenities and operated by professional drivers."
    },
    {
      "name": "Affordable Cab Booking Mumbai Pune",
      "description": "Looking for a budget-friendly ride? Our affordable Mumbai to Pune cab services ensure you get the best value for your money. With no hidden charges and flexible options, enjoy cost-effective travel without compromising on comfort or safety."
    },
    {
      "name": "SUV Booking Mumbai Pune",
      "description": "Book a spacious SUV cab from Mumbai to Pune, ideal for families or groups with extra luggage. Our SUVs are perfect for long-distance highway travel, offering both comfort and power for a smooth ride across the Expressway."
    },
    {
      "name": "Sedan Taxi Booking Mumbai Pune",
      "description": "Choose our sedan taxi option for a sleek and comfortable ride from Mumbai to Pune. Sedans are perfect for solo travelers or small groups looking for an affordable yet premium cab experience."
    },
    {
      "name": "Round Trip Cab Booking Mumbai Pune",
      "description": "Plan your round trip between Mumbai and Pune with our convenient booking service. Enjoy special return trip rates, reserved pick-up times, and the same cab for your entire journey. Perfect for short business visits or weekend getaways."
    },
    {
      "name": "One-Way Cab Booking Mumbai Pune",
      "description": "Need a ride just one way? Book a one-way cab from Mumbai to Pune and pay only for the distance you travel. No return charges, no extra fees—just straightforward, reliable one-way taxi service tailored to your plans."
    },
    {
      "name": "Verified Drivers Mumbai to Pune",
      "description": "All our Mumbai to Pune cab drivers are thoroughly verified and trained to provide safe, courteous, and professional service. Travel with peace of mind knowing you're in capable hands throughout your journey."
    },
    {
      "name": "24/7 Cab Booking Mumbai Pune",
      "description": "Book a cab anytime, day or night. Our 24/7 Mumbai to Pune cab booking ensures you’re never stranded, whether it’s an early morning meeting or a late-night arrival. We're always available when you need a ride."
    },
    {
      "name": "Executive Taxi Booking Mumbai Pune",
      "description": "Travel in luxury and professionalism with our executive cab services. Ideal for corporate clients and business travelers, these vehicles come with plush seating, experienced chauffeurs, and priority service between Mumbai and Pune."
    },
    {
      "name": "Fast Cab Booking Mumbai Pune",
      "description": "Get on the road quicker with our fast Mumbai to Pune cab booking. Minimal wait times, real-time driver allocation, and easy online confirmation make it the best choice for urgent travel needs."
    },
    {
      "name": "Safe Ride Booking Mumbai to Pune",
      "description": "Your safety is our priority. Our cabs are regularly inspected, sanitized, and driven by trained professionals. We ensure a secure and comfortable journey on the Expressway from Mumbai to Pune."
    },
    {
      "name": "Airport Cab Booking Mumbai Pune",
      "description": "Book a cab from Mumbai Airport to Pune for a seamless airport transfer. Our drivers track your flight for timely pickups, help with luggage, and ensure a smooth ride to your destination in Pune."
    },
    {
      "name": "Expressway Cab Booking Mumbai to Pune",
      "description": "Travel swiftly via the Mumbai-Pune Expressway in our highway-optimized cabs. Enjoy faster travel times, fewer stops, and well-maintained vehicles designed for express travel between cities."
    }
  ],
  "tableData": [
    ["Mumbai Pune Cab Booking", "Book Cab Mumbai to Pune Online"],
    ["AC Taxi Mumbai Pune Booking", "Affordable Cab Booking Mumbai Pune"],
    ["SUV Booking Mumbai Pune", "Sedan Taxi Booking Mumbai Pune"],
    ["Round Trip Cab Booking Mumbai Pune", "One-Way Cab Booking Mumbai Pune"],
    ["Verified Drivers Mumbai to Pune", "24/7 Cab Booking Mumbai Pune"],
    ["Executive Taxi Booking Mumbai Pune", "Fast Cab Booking Mumbai Pune"],
    ["Safe Ride Booking Mumbai to Pune", "Airport Cab Booking Mumbai Pune"],
    ["Expressway Cab Booking Mumbai to Pune", ""]
  ],




"whychoose": [
  {
    "WhyChooseheading": "Easy and Quick Cab Booking",
    "WhyChoosedescription": "Book your Mumbai to Pune cab effortlessly through our streamlined online platform or mobile app, designed to provide a hassle-free and speedy booking experience."
  },
  {
    "WhyChooseheading": "Multiple Vehicle Options to Choose From",
    "WhyChoosedescription": "Select from a diverse fleet including budget-friendly sedans, spacious SUVs, and luxury cars, tailored to fit your travel style and group size."
  },
  {
    "WhyChooseheading": "Transparent Pricing with No Hidden Charges",
    "WhyChoosedescription": "Our cab booking service offers clear, upfront pricing inclusive of taxes, tolls, and other fees, ensuring complete transparency and no surprises at the end of your journey."
  },
  {
    "WhyChooseheading": "Real-Time Cab Tracking",
    "WhyChoosedescription": "Stay informed with live GPS tracking of your cab, so you know exactly when your ride will arrive and can plan your schedule accordingly."
  },
  {
    "WhyChooseheading": "24/7 Customer Support",
    "WhyChoosedescription": "Our dedicated support team is available round the clock to assist you with bookings, cancellations, route queries, and any other travel-related concerns."
  },
  {
    "WhyChooseheading": "Safe and Experienced Drivers",
    "WhyChoosedescription": "Travel with confidence knowing that our professional drivers are well-trained, courteous, and knowledgeable about the best routes between Mumbai and Pune."
  },
  {
    "WhyChooseheading": "Flexible Payment Options",
    "WhyChoosedescription": "Choose from a variety of secure payment methods including online wallets, credit/debit cards, UPI, or cash, making your transaction smooth and convenient."
  },
  {
    "WhyChooseheading": "Customizable Booking Plans",
    "WhyChoosedescription": "Whether you need a one-way trip, round-trip, or hourly rental, customize your booking to suit your specific travel needs and preferences."
  }
]




























    }


const faqData = [
    {
        question: "How can I book a cab from Mumbai to Pune?",
        answer: "You can easily book a cab from Mumbai to Pune via our website, mobile app, or by calling +91 9697780707."
    },
    {
        question: "What types of vehicles are available for Mumbai to Pune cab booking?",
        answer: "We offer a variety of vehicles including sedans, SUVs, Innova Crysta, and tempo travellers to suit your needs."
    },
    {
        question: "Is advance booking required for Mumbai to Pune cab service?",
        answer: "Advance booking is recommended to ensure vehicle availability, especially during peak seasons."
    },
    {
        question: "Are tolls and driver charges included in the booking fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included in the fare with no hidden charges."
    },
    {
        question: "Can I book a one-way or round-trip cab from Mumbai to Pune?",
        answer: "Yes, we provide both one-way and round-trip booking options to suit your travel plans."
    },
    {
        question: "What is the cancellation policy for Mumbai to Pune cab bookings?",
        answer: "Cancellations can be made up to 24 hours before the scheduled trip without any charges. Later cancellations may incur fees."
    },
    {
        question: "Is airport pickup and drop service available?",
        answer: "Yes, we offer convenient airport pickup and drop services for Mumbai and Pune airports."
    },
    {
        question: "Are your drivers experienced and professional?",
        answer: "Absolutely. All our drivers are well-trained, background-verified, and professional."
    },
    {
        question: "What payment methods are accepted for cab bookings?",
        answer: "We accept UPI, cash, debit/credit cards, and popular digital wallets."
    },
    {
        question: "How do I get confirmation after booking a cab?",
        answer: "You will receive an SMS and email confirmation with your booking details once your cab is confirmed."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Sameer Kulkarni',
        review: 'Booking a cab from Mumbai to Pune with Swara Cabs was smooth and hassle-free. The driver was punctual and courteous.'
    },
    {
        name: 'Ms. Neha Joshi',
        review: 'Excellent cab service for my Mumbai to Pune trip. The vehicle was clean and comfortable. Highly recommend Swara Cabs!'
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
  "name": "Mumbai Pune Cab Booking",
  "image": "https://www.swaracabs.in/assets/images/mumbai-pune-cab-booking.jpg",
  "description": "Book your Mumbai Pune cab online with Swara Cabs for affordable, reliable, and quick taxi bookings including AC, sedan, and SUV options available 24/7.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.9",
    "ratingCount": "9658"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1150",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/mumbai-pune-cab-booking"
  }
};







    return (
        <div>
<Helmet>
  <title>Mumbai Pune Cab Booking | Affordable & Reliable Taxi Service | Swara Cabs</title>
  <meta 
    name="description" 
    content="Book your Mumbai Pune cab online with Swara Cabs for affordable, reliable, and quick taxi bookings including AC, sedan, and SUV options available 24/7." 
  />
  <meta 
    name="keywords" 
    content="Mumbai Pune Cab Booking, Book Cab Mumbai to Pune Online, AC Taxi Mumbai Pune Booking, Affordable Cab Booking Mumbai Pune, SUV Booking Mumbai Pune, Sedan Taxi Booking Mumbai Pune, Round Trip Cab Booking Mumbai Pune, One-Way Cab Booking Mumbai Pune, Verified Drivers Mumbai to Pune, 24/7 Cab Booking Mumbai Pune, Executive Taxi Booking Mumbai Pune, Fast Cab Booking Mumbai Pune, Safe Ride Booking Mumbai to Pune, Airport Cab Booking Mumbai Pune, Expressway Cab Booking Mumbai Pune" 
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
                            <img src='/images/keyword/35.jpg' alt='img' />
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

export default Mumbaipunecabbooking;