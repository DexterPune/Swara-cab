
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import Accordion from './Accordion';
import Testimonialskeywords from './Testimonialskeyword';

function Goregaontopunecab() {



    const cardData =
    {
        keyword: 'Goregaon to Pune Cab',
        heading: 'Swara Cabs : Goregaon to Pune Cab',
        headingDescription: 'Swara Cabs offers reliable, comfortable, and affordable cab services for your journey from Goregaon to Pune. Pune, Maharashtra’s vibrant cultural and educational hub, is known for its historic landmarks, lush greenery, and dynamic urban life. Whether you are traveling for a business meeting, visiting family, or catching a flight, Swara Cabs ensures a smooth and hassle‑free experience. Covering approximately 150–160 kilometers via the Mumbai–Pune Expressway, the journey typically takes around 3 to 4 hours depending on traffic conditions. With our well‑maintained fleet and professional drivers, Swara Cabs guarantees a safe, punctual, and comfortable ride tailored to your travel needs.',

        top: 'Top Places to Visit in Pune with Swara Cabs',

        "topPlaces": [
    
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
      "name": "Goregaon to Pune Cab",
      "description": "Enjoy a smooth and hassle-free journey from Goregaon to Pune with our reliable cab service. Whether you're traveling for work or leisure, our platform offers multiple vehicle choices, real-time availability, and verified drivers to ensure a comfortable and safe ride along the Mumbai-Pune Expressway."
    },
    {
      "name": "One-Way Cab Goregaon to Pune",
      "description": "Book a one-way cab from Goregaon to Pune with ease. Perfect for travelers who need a direct ride without worrying about return trips, our service guarantees transparent pricing, timely pickups, and a straightforward booking process with no hidden fees."
    },
    {
      "name": "Goregaon to Pune Online Taxi",
      "description": "Reserve your taxi from Goregaon to Pune online with our user-friendly platform. Experience quick bookings, secure payment options, and a variety of vehicles to suit your preferences, all accessible from the comfort of your home or office."
    },
    {
      "name": "AC Taxi Goregaon to Pune",
      "description": "Travel comfortably in our air-conditioned taxis from Goregaon to Pune. Ideal for hot days or longer trips, these taxis are equipped with modern amenities, ensuring a cool and relaxing ride driven by professional chauffeurs committed to your safety."
    },
    {
      "name": "Round Trip Goregaon to Pune Cab",
      "description": "Plan your round trip travel between Goregaon and Pune with our flexible cab booking service. Benefit from special return trip discounts, guaranteed pick-up times, and the convenience of traveling in the same vehicle for both legs of your journey."
    },
    {
      "name": "Affordable Cab Goregaon to Pune",
      "description": "Looking for cost-effective travel options? Our affordable Goregaon to Pune cab services offer budget-friendly rates without compromising on comfort or safety. Transparent pricing and no hidden charges make it the smart choice for economical travelers."
    },
    {
      "name": "Sedan Taxi Goregaon to Pune",
      "description": "Opt for our sedan taxis for a stylish and comfortable ride from Goregaon to Pune. Perfect for solo travelers or small groups, these vehicles provide a balance of luxury and affordability, ensuring a smooth journey on the expressway."
    },
    {
      "name": "SUV Cab Goregaon to Pune",
      "description": "Need extra space? Our SUV cabs from Goregaon to Pune are ideal for families, groups, or travelers with heavy luggage. Enjoy ample room, powerful performance, and a comfortable ride designed for highway travel."
    },
    {
      "name": "Corporate Travel Goregaon",
      "description": "Make a professional impression with our corporate cab services from Goregaon to Pune. Designed for business travelers, these rides offer punctuality, premium vehicles, and attentive chauffeurs to keep you focused on your work while we handle the logistics."
    },
    {
      "name": "Executive Cab Hire Goregaon",
      "description": "Experience luxury travel with our executive cab hire service from Goregaon to Pune. Featuring plush interiors, experienced drivers, and priority booking, this service is tailored for executives and VIP clients who expect the best."
    },
    {
      "name": "Verified Drivers Goregaon to Pune",
      "description": "Travel confidently knowing all our Goregaon to Pune drivers are thoroughly verified, background-checked, and professionally trained. We prioritize your safety and comfort on every trip."
    },
    {
      "name": "Goregaon Airport Pickup to Pune",
      "description": "Seamlessly book your airport transfer from Goregaon to Pune. Our drivers track your flight timings to ensure punctual pickups, assist with luggage, and provide a smooth, stress-free ride to your destination."
    },
    {
      "name": "24/7 Cab Booking Goregaon",
      "description": "Need a cab at any hour? Our 24/7 cab booking service from Goregaon to Pune guarantees round-the-clock availability so you’re never left stranded—whether it’s early morning or late at night."
    },
    {
      "name": "Safe Ride Goregaon to Pune",
      "description": "Your safety is our top priority. Our Goregaon to Pune cabs undergo regular maintenance and sanitation, with drivers trained in safe driving practices, ensuring you reach your destination securely and comfortably."
    },
    {
      "name": "Quick Cab Hire Goregaon",
      "description": "In a rush? Our quick cab hire service from Goregaon to Pune offers fast driver allocation, minimal waiting times, and instant online confirmation to get you moving without delay."
    }
  ],
  "tableData": [
    ["Goregaon to Pune Cab", "One-Way Cab Goregaon to Pune"],
    ["Goregaon to Pune Online Taxi", "AC Taxi Goregaon to Pune"],
    ["Round Trip Goregaon to Pune Cab", "Affordable Cab Goregaon to Pune"],
    ["Sedan Taxi Goregaon to Pune", "SUV Cab Goregaon to Pune"],
    ["Corporate Travel Goregaon", "Executive Cab Hire Goregaon"],
    ["Verified Drivers Goregaon to Pune", "Goregaon Airport Pickup to Pune"],
    ["24/7 Cab Booking Goregaon", "Safe Ride Goregaon to Pune"],
    ["Quick Cab Hire Goregaon", ""]
  ],




"whychoose": [
  {
    "WhyChooseheading": "Trusted Goregaon to Pune Cab Service",
    "WhyChoosedescription": "Our cab service from Goregaon to Pune is reliable and punctual, ensuring you reach your destination on time with a comfortable and hassle-free journey."
  },
  {
    "WhyChooseheading": "Diverse Fleet of Vehicles",
    "WhyChoosedescription": "Choose from a wide range of vehicles including budget sedans, spacious SUVs, and premium cars to perfectly fit your travel needs and preferences."
  },
  {
    "WhyChooseheading": "Transparent and Competitive Pricing",
    "WhyChoosedescription": "We offer upfront pricing with no hidden fees, including all tolls and taxes, so you get the best value for your money on your Goregaon to Pune trip."
  },
  {
    "WhyChooseheading": "Professional and Courteous Drivers",
    "WhyChoosedescription": "Our experienced drivers are knowledgeable about the safest and fastest routes between Goregaon and Pune, providing a smooth and secure ride every time."
  },
  {
    "WhyChooseheading": "Convenient Online Booking",
    "WhyChoosedescription": "Easily book your Goregaon to Pune cab online or via our mobile app, with instant confirmation and options to modify or cancel bookings as needed."
  },
  {
    "WhyChooseheading": "24/7 Customer Support",
    "WhyChoosedescription": "Our customer support team is available round-the-clock to assist you with bookings, inquiries, or any assistance you may require during your trip."
  },
  {
    "WhyChooseheading": "Comfort and Safety Guaranteed",
    "WhyChoosedescription": "Travel in clean, air-conditioned vehicles equipped with modern safety features to ensure a comfortable and secure journey from Goregaon to Pune."
  },
  {
    "WhyChooseheading": "Multiple Payment Options",
    "WhyChoosedescription": "Choose from various secure payment methods including credit/debit cards, UPI, wallets, or cash, with clear and detailed billing for your convenience."
  }
]




























    }


const faqData = [
    {
        question: "Do you provide cab services from Goregaon to Pune?",
        answer: "Yes, Swara Cabs offers reliable and comfortable cab services from Goregaon to Pune."
    },
    {
        question: "What is the fare for a cab from Goregaon to Pune?",
        answer: "Fares start from ₹6,000 for a sedan. Prices vary depending on vehicle type and travel time."
    },
    {
        question: "How can I book a cab from Goregaon to Pune?",
        answer: "You can book online through our website or call +91 9697780707 for quick and easy booking."
    },
    {
        question: "What types of vehicles are available for Goregaon to Pune trips?",
        answer: "We offer sedans, SUVs, Innova Crysta, and tempo travellers to suit your group size and preferences."
    },
    {
        question: "Are tolls and driver charges included in the fare?",
        answer: "Yes, all tolls, taxes, and driver allowances are included with no hidden fees."
    },
    {
        question: "Is night service available from Goregaon to Pune?",
        answer: "Yes, we operate 24/7 and provide night service with a nominal surcharge for late-night trips."
    },
    {
        question: "Can I book a round trip from Goregaon to Pune?",
        answer: "Yes, round-trip bookings are available and can be customized to your schedule."
    },
    {
        question: "Is it safe to travel with Swara Cabs?",
        answer: "Absolutely. All our drivers are professional, background-verified, and trained for your safety."
    },
    {
        question: "Do you offer doorstep pickup in Goregaon?",
        answer: "Yes, we provide convenient doorstep pickup service directly from your location in Goregaon."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept UPI, cash, debit/credit cards, and popular digital wallets for easy payment."
    }
];

const testimonialsData = [
    {
        name: 'Mr. Karan Mehta',
        review: 'Swara Cabs made my trip from Goregaon to Pune very comfortable and hassle-free. The driver was punctual and professional.'
    },
    {
        name: 'Ms. Ananya Joshi',
        review: 'Excellent service with clean vehicles and friendly drivers. Highly recommend Swara Cabs for Goregaon to Pune trips.'
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
  "name": "Goregaon to Pune Cab",
  "image": "https://www.swaracabs.in/assets/images/goregaon-pune-cab.jpg",
  "description": "Book Goregaon to Pune cab online with Swara Cabs for reliable, affordable, and safe taxi services including AC, sedan, and SUV options available 24/7.",
  "brand": {
    "@type": "Brand",
    "name": "Swara Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.7",
    "ratingCount": "9658"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1300",
    "availability": "https://schema.org/InStock",
    "url": "https://www.swaracabs.in/goregaon-to-pune-cab"
  }
};






    return (
        <div>
<Helmet>
  <title>Goregaon to Pune Cab | Affordable & Reliable Taxi Service | Swara Cabs</title>
  <meta
    name="description"
    content="Book Goregaon to Pune cab online with Swara Cabs for reliable, affordable, and safe taxi services including AC, sedan, and SUV options available 24/7."
  />
  <meta
    name="keywords"
    content="Goregaon to Pune Cab, One-Way Cab Goregaon to Pune, Goregaon to Pune Online Taxi, AC Taxi Goregaon to Pune, Round Trip Goregaon to Pune Cab, Affordable Cab Goregaon to Pune, Sedan Taxi Goregaon to Pune, SUV Cab Goregaon to Pune, Corporate Travel Goregaon, Executive Cab Hire Goregaon, Verified Drivers Goregaon to Pune, Goregaon Airport Pickup to Pune, 24/7 Cab Booking Goregaon, Safe Ride Goregaon to Pune, Quick Cab Hire Goregaon"
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
                            <img src='/images/keyword/37.jpg' alt='img' />
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

export default Goregaontopunecab;