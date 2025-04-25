import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import photo from "../../assets/Images/Group 22.png";
import photo1 from "../../assets/Images/Rectangle 45.png";
import photo2 from "../../assets/Images/Rectangle 47.png";
import photo3 from "../../assets/Images/Rectangle 50.png";
import photo4 from "../../assets/Images/Rectangle 48.png";
import photo5 from "../../assets/Images/Rectangle 49.png";
import photo6 from "../../assets/Images/Rectangle 51.png";
import photo7 from "../../assets/Images/image play.png";
import photo8 from "../../assets/Images/image 2.png";

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
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
        {/* Brand Section */}
        <div className="jost">
          <img src={photo} alt="shadiii" className="h-9 mb-4" />
          <p className="mb-1">Lorem ipsum dolor sit amet consectetur</p>
          <p className="mb-1">sit amet consectetur</p>
          <p className="mb-1">Lectus ac sed purus</p>
          <p className="mb-4">ultricies diam eu scelerisque.</p>
          <div className="flex gap-3 mt-4 flex-wrap">
            {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map(
              (Icon, idx) => (
                <div
                  key={idx}
                  className="bg-[#D0BEA9] text-[#53321B] rounded-full p-2.5 text-xl hover:scale-105 transition"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 gilda-display-regular">Follow us</h3>
          <ul className="space-y-2">
            {["Instagram", "Facebook", "Twitter", "LinkedIn"].map(
              (platform, i) => (
                <li
                  key={i}
                  className="hover:text-yellow-300 transition cursor-pointer jost"
                >
                  {platform}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 gilda-display-regular">Gallery</h3>
          <div className="grid grid-cols-3 gap-2 ">
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

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 gilda-display-regular">Contact us</h3>
          <input
            type="email"
            placeholder="Enter Your Email"
            aria-label="Email"
            className="w-full p-2 mb-4 border-2 border-white rounded-full bg-transparent text-white placeholder:text-white"
          />
          <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
