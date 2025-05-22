import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
// import photo from "../../assets/Images/Group 22.png";
import photo1 from "../../assets/Images/Rectangle 45.png";
import photo2 from "../../assets/Images/Rectangle 47.png";
import photo3 from "../../assets/Images/Rectangle 50.png";
import photo4 from "../../assets/Images/Rectangle 48.png";
import photo5 from "../../assets/Images/Rectangle 49.png";
import photo6 from "../../assets/Images/Rectangle 51.png";
import photo7 from "../../assets/Images/image play.png";
import photo8 from "../../assets/Images/image 2.png";
import Logo2 from '../../assets/Images/Shaadi Sanskar 2.png';



const obj = [
  { image: photo1 },
  { image: photo2 },
  { image: photo3 },
  { image: photo4 },
  { image: photo5 },
  { image: photo6 },
];

const Footer = () => {
  return (
    <footer className="bg-[#53321B] text-[#EFE1CD] px-6 py-12 sm:px-10 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="jost">
          <img src={Logo2} alt="Logo2" className="h-20 w-30 mb-2" />
          <p className="mb-1">Shaadi Sanskar - Where true love begins.</p>
          <p className="mb-1">
            At Shaadi Sanskar, we believe in real connections that lead to lasting love. 
            Join a trusted platform where meaningful relationships begin.
          </p>
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 gilda-display-regular">Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            {obj.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-20 object-cover"
              />
            ))}
          </div>
        </div>

       

        {/* Social Icons Section on the Right */}
      <div className="">
  <h3 className="text-xl font-semibold gilda-display-regular lg:text-center">Follow us</h3>
  <div className="flex flex-wrap  mt-2 lg:justify-center items-center gap-2">
    {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
      <div
        key={idx}
        className="bg-[#D0BEA9] border border-[#EFE1CD] cursor-pointer rounded-lg p-3 w-12 h-12 flex items-center justify-center hover:scale-105 transition"
      >
        <Icon className="text-[#53321B] text-xl" />
      </div>
    ))}
  </div>
</div>



         {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 gilda-display-regular">Contact us</h3>
          <input
            type="email"
            placeholder="Enter Your Email"
            aria-label="Email"
            className="w-full p-2 mb-4 border-2 border-white rounded-full bg-transparent text-white placeholder:text-white"
          />
          {/* <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
            <img
              src={photo7}
              alt="Google Play"
              className="w-28 hover:opacity-80 transition"
            />
            <img
              src={photo8}
              alt="App Store"
              className="w-28 hover:opacity-80 transition"
            />
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
