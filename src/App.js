import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header';
import HeroSection from './components/HeroSlider';
import Footer from './components/Footer';
import About from './pages/About';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Fleets from './pages/TeamSection';
import Contact from './pages/Contact';
import Enquiry from './pages/ENQUIRY';
import Packages from './pages/Packages';
import Punetomumbaitaxifare from './pages/Pune to Mumbai Taxi Fare';
import ScrollToTop from './components/ScrollToTop';
import Punetomumbaionlinecabbooking from './pages/Pune to Mumbai Online Cab Booking';
import Pimprichichwadtomumbacab from './pages/Pimpri Chinchwad to Mumbai Cab';
import Banertomumbaicabs from './pages/Baner to Mumbai Cabs';
import Hinjewaditomumbaicabs from './pages/Hinjewadi to Mumbai Cab';
import Pimplesaudagartomumbai from './pages/Pimple Saudagar to Mumbai Cab Service';
import Wakadtomumbaicab from './pages/Wakad to Mumbai Cab';
import Hadapsartomumbaicab from './pages/Hadapsar to Mumbai Cab';
import Kalyaninagartomumbaitaxi from './pages/Kalyani Nagar to Mumbai Taxi';
import Koregaonparktomumbaicabs from './pages/Koregaon Park to Mumbai Cab';
import Kothrudtomumbaicabs from './pages/Kothrud to Mumbai Cab';
import Kharaditomumbaicabs from './pages/Kharadi to Mumbai Cab';
import Shivajinagartomumbaicab from './pages/Shivajinagar to Mumbai Cab';
import Punetomumbaiertigacab from './pages/Pune to Mumbai Ertiga Cab';
import Punetomumbaiinnovacrystacabs from './pages/Pune to Mumbai Innova Crysta Cab';
import Punetomumbaisedancabs from './pages/Pune to Mumbai Sedan Cab';
import Kondhwatomumbaicab from './pages/Kondhwa to Mumbai Cab';
import Vimannagartomumbaicabs from './pages/Viman Nagar to Mumbai Cabs';
import Katrajtomumbaicab from './pages/Katraj to Mumbai Cab Service';
import Punestationtomumbaicabservice from './pages/Pune Station to Mumbai Cabs Service';
import Mumbaitopunecabs from './pages/Mumbai to Pune Cabs';
import Mumbaiairporttopunecab from './pages/Mumbai Airport to Pune Cab';
import Dadartopunecabs from './pages/Dadar to Pune Cab';
import Mumbaitopuneonewaycab from './pages/Mumbai to Pune One Way Cab';
import Andheritopunecab from './pages/Andheri to Pune Cab';
import Bandratopunecabs from './pages/Bandra to Pune Cab';
import Santacruztopunecab from './pages/Santacruz to Pune Cab';
import Mumbaicentraltopunecab from './pages/Mumbai Central to Pune Cab';
import Bolivalitopunecab from './pages/Borivali to Pune Cab';
import Mumbaitopimprichichwadcab from './pages/Mumbai to Pimpri Chinchwad Cab';
import Navimumbaitopunecab from './pages/Navi Mumbai to Pune Cab';
import Mumbaiairporttopunecitycab from './pages/Mumbai Airport to Pune City Cab';
import Mumbaitopunedailycab from './pages/Mumbai to Pune Daily Cab';
import Mumbaitopuneonlinecab from './pages/Mumbai to Pune Online Cab';
import Mumbaipunecabbooking from './pages/Mumbai Pune Cab Booking';
import Jogeshwaritopunecabservice from './pages/Jogeshwari to Pune Cab Service';
import Goregaontopunecab from './pages/Goregaon to Pune Cab';
import Kandivalitopunecab from './pages/Kandivali to Pune Cab';
import Vileparletopunecabservice from './pages/Vile Parle to Pune Cab Service';
import Bhanduptopunecab from './pages/Bhandup to Pune Cab';
import Ghatkopertopunecabservice from './pages/Ghatkopar to Pune Cab Service';
import Kurlatopunetaxiservice from './pages/Kurla to Pune Taxi Service';
import Powaimumbaipunecabservice from './pages/Powai Mumbai Pune Cab Service';
import Chemburtopunecab from './pages/Chembur to Pune Cab';
import Terminal123mumbaiairport from './pages/Terminal 1,2,3 Mumbai Airport to Pune Cab';
import Thanetopunecabs from './pages/Thane to Pune Cab';
import Vikhrolitopunecabservice from './pages/Vikhroli to Pune Cab Services';
import Mumbaitopuneinnovacrystacab from './pages/Mumbai to Pune Innova Crysta Cab';
import Mumbaiairporttopuneertigaonrent from './pages/Mumbai Airport to Pune Ertiga on Rent';
import Mumbaiairportcarrentals from './pages/Mumbai Airport Car Rental';
import Panveltopunecab from './pages/Panvel to Pune Cab';
import Churchgatetopunecabservice from './pages/Church Gate to Pune Cab Service';
import Bycullatopunecabservice from './pages/Byculla to Pune Cab Service';
import Vashitopunecabs from './pages/Vashi to Pune Cab';
import Kharghartopunecab from './pages/Kharghar to Pune Cab';
import Mankhurdtopunecab from './pages/Mankhurd to Pune Cab';
import Punemumbaidailycabservice from './pages/Pune Mumbai Daily Cab Service';
import Puneairporttomumbaidailycabs from './pages/Pune Airport to Mumbai Daily Cab';
import Punetomumbaicab from './pages/Pune to Mumbai Cab';
import Punetomumbaiinternationalairport from './pages/Pune to Mumbai International Airport Cab';
import Punetomumbaionewaycab from './pages/Pune to Mumbai One Way Cab';
import Boatclubroadtomumbaicab from './pages/Boat Club Road to Mumbai Cab';
import Vishrantwaditomumbaicab from './pages/Vishrantwadi to Mumbai Cab';
import Alanditomumbaicabs from './pages/Alandi to Mumbai Cabs Service';
import Wagholitomumbaicab from './pages/Wagholi to Mumbai Cab';
import Onewaytaximumbaitopune from './pages/One Way Taxi Mumbai to Pune';
import Ertigacabbookinginpune from './pages/Ertiga Cab Booking in Pune';
import Kiacarenceonrentinpune from './pages/Kia Carens On Rent in Pune';
import Swiftdzireonrentinpune from './pages/Swift Dzire On Rent in Pune';
import Sedancabsbookinginpune from './pages/Sedan Cabs Booking in Pune';
import Forceurbaniaonrentinpune from './pages/Force Urbania On Rent in Pune';
import Navimumbaitopunecabservice from './pages/Navi Mumbai to Pune Cab Service';
import ContactButtons from './components/ContactButtons';


function App() {




  return (
    <Router>
      <Header/>
      <ScrollToTop/>
   <ContactButtons/>
      

      <Routes>

        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-fleet" element={<Fleets />} />
        <Route path="/term-condition" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/Pune-to-Mumbai-Taxi-Fare" element={<Punetomumbaitaxifare />} />






<Route path="/Pune-to-Mumbai-Online-Cab-Booking" element={<Punetomumbaionlinecabbooking />} />
<Route path="/Pimpri-Chinchwad-to-Mumbai-Cab" element={<Pimprichichwadtomumbacab />} />
<Route path="/Baner-to-Mumbai-Cabs" element={<Banertomumbaicabs />} />
<Route path="/Hinjewadi-to-Mumbai-Cab" element={<Hinjewaditomumbaicabs />} />
<Route path="/Pimple-Saudagar-to-Mumbai-Cab-Service" element={<Pimplesaudagartomumbai />} />
<Route path="/Wakad-to-Mumbai-Cab" element={<Wakadtomumbaicab />} />
<Route path="/Hadapsar-to-Mumbai-Cab" element={<Hadapsartomumbaicab />} />
<Route path="/Kalyani-Nagar-to-Mumbai-Taxi" element={<Kalyaninagartomumbaitaxi />} />
<Route path="/Koregaon-Park-to-Mumbai-Cab" element={<Koregaonparktomumbaicabs />} />
<Route path="/Kothrud-to-Mumbai-Cab" element={<Kothrudtomumbaicabs />} />
<Route path="/Kharadi-to-Mumbai-Cab" element={<Kharaditomumbaicabs />} />
<Route path="/Shivajinagar-to-Mumbai-Cab" element={<Shivajinagartomumbaicab />} />
<Route path="/Pune-to-Mumbai-Ertiga-Cab" element={<Punetomumbaiertigacab />} />
<Route path="/Pune-to-Mumbai-Innova-Crysta-Cab" element={<Punetomumbaiinnovacrystacabs />} />
<Route path="/Pune-to-Mumbai-Sedan-Cab" element={<Punetomumbaisedancabs />} />
<Route path="/Kondhwa-to-Mumbai-Cab" element={<Kondhwatomumbaicab />} />
<Route path="/Viman-Nagar-to-Mumbai-Cabs" element={<Vimannagartomumbaicabs />} />
<Route path="/Katraj-to-Mumbai-Cab-Service" element={<Katrajtomumbaicab />} />
<Route path="/Pune-Station-to-Mumbai-Cabs-Service" element={<Punestationtomumbaicabservice />} />



<Route path="/Mumbai-to-Pune-Cabs" element={<Mumbaitopunecabs />} />
<Route path="/Mumbai-Airport-to-Pune-Cab" element={<Mumbaiairporttopunecab />} />
<Route path="/Dadar-to-Pune-Cab" element={<Dadartopunecabs />} />
<Route path="/Mumbai-to-Pune-One-Way-Cab" element={<Mumbaitopuneonewaycab />} />
<Route path="/Andheri-to-Pune-Cab" element={<Andheritopunecab />} />
<Route path="/Bandra-to-Pune-Cab" element={<Bandratopunecabs />} />
<Route path="/Santacruz-to-Pune-Cab" element={<Santacruztopunecab />} />
<Route path="/Mumbai-Central-to-Pune-Cab" element={<Mumbaicentraltopunecab />} />
<Route path="/Borivali-to-Pune-Cab" element={<Bolivalitopunecab />} />
<Route path="/Mumbai-to-Pimpri-Chinchwad-Cab" element={<Mumbaitopimprichichwadcab />} />
<Route path="/Navi-Mumbai-to-Pune-Cab" element={<Navimumbaitopunecab />} />
<Route path="/Mumbai-Airport-to-Pune-City-Cab" element={<Mumbaiairporttopunecitycab />} />
<Route path="/Mumbai-to-Pune-Daily-Cab" element={<Mumbaitopunedailycab />} />
<Route path="/Mumbai-to-Pune-Online-Cab" element={<Mumbaitopuneonlinecab />} />
<Route path="/Mumbai-Pune-Cab-Booking" element={<Mumbaipunecabbooking />} />
<Route path="/Jogeshwari-to-Pune-Cab-Service" element={<Jogeshwaritopunecabservice />} />
<Route path="/Goregaon-to-Pune-Cab" element={<Goregaontopunecab />} />
<Route path="/Kandivali-to-Pune-Cab" element={<Kandivalitopunecab />} />
<Route path="/Vile-Parle-to-Pune-Cab-Service" element={<Vileparletopunecabservice />} />
<Route path="/Bhandup-to-Pune-Cab" element={<Bhanduptopunecab />} />


<Route path="/Ghatkopar-to-Pune-Cab-Service" element={<Ghatkopertopunecabservice />} />
<Route path="/Kurla-to-Pune-Taxi-Service" element={<Kurlatopunetaxiservice />} />
<Route path="/Powai-Mumbai-Pune-Cab-Service" element={<Powaimumbaipunecabservice />} />
<Route path="/Chembur-to-Pune-Cab" element={<Chemburtopunecab />} />
<Route path="/Terminal-1-2-3-Mumbai-Airport-to-Pune-Cab" element={<Terminal123mumbaiairport />} />
<Route path="/Thane-to-Pune-Cab" element={<Thanetopunecabs />} />
<Route path="/Vikhroli-to-Pune-Cab-Services" element={<Vikhrolitopunecabservice />} />
<Route path="/Mumbai-to-Pune-Innova-Crysta-Cab" element={<Mumbaitopuneinnovacrystacab />} />
<Route path="/Mumbai-Airport-to-Pune-Ertiga-on-Rent" element={<Mumbaiairporttopuneertigaonrent />} />
<Route path="/Mumbai-Airport-Car-Rental" element={<Mumbaiairportcarrentals />} />
<Route path="/Panvel-to-Pune-Cab" element={<Panveltopunecab />} />
<Route path="/Church-Gate-to-Pune-Cab-Service" element={<Churchgatetopunecabservice />} />
<Route path="/Byculla-to-Pune-Cab-Service" element={<Bycullatopunecabservice />} />
<Route path="/Vashi-to-Pune-Cab" element={<Vashitopunecabs />} />
<Route path="/Kharghar-to-Pune-Cab" element={<Kharghartopunecab />} />
<Route path="/Mankhurd-to-Pune-Cab" element={<Mankhurdtopunecab />} />
<Route path="/Pune-Mumbai-Daily-Cab-Service" element={<Punemumbaidailycabservice />} />
<Route path="/Pune-Airport-to-Mumbai-Daily-Cab" element={<Puneairporttomumbaidailycabs />} />
<Route path="/Pune-to-Mumbai-Cab" element={<Punetomumbaicab />} />



<Route path="/Pune-to-Mumbai-International-Airport-Cab" element={<Punetomumbaiinternationalairport />} />
<Route path="/Pune-to-Mumbai-One-Way-Cab" element={<Punetomumbaionewaycab />} />
<Route path="/Boat-Club-Road-to-Mumbai-Cab" element={<Boatclubroadtomumbaicab />} />
<Route path="/Vishrantwadi-to-Mumbai-Cab" element={<Vishrantwaditomumbaicab />} />
<Route path="/Alandi-to-Mumbai-Cabs-Service" element={<Alanditomumbaicabs />} />
<Route path="/Wagholi-to-Mumbai-Cab" element={<Wagholitomumbaicab />} />
<Route path="/One-Way-Taxi-Mumbai-to-Pune" element={<Onewaytaximumbaitopune />} />
<Route path="/Ertiga-Cab-Booking-in-Pune" element={<Ertigacabbookinginpune />} />
<Route path="/Kia-Carens-On-Rent-in-Pune" element={<Kiacarenceonrentinpune />} />
<Route path="/Swift-Dzire-On-Rent-in-Pune" element={<Swiftdzireonrentinpune />} />
<Route path="/Sedan-Cabs-Booking-in-Pune" element={<Sedancabsbookinginpune />} />
<Route path="/Force-Urbania-On-Rent-in-Pune" element={<Forceurbaniaonrentinpune />} />
<Route path="/Navi-Mumbai-to-Pune-Cab-Service" element={<Navimumbaitopunecabservice />} />

      </Routes>
   <Footer/>
    </Router>
  );
}



export default App;
