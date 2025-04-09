import { CgYoutube } from "react-icons/cg";
import { FaFacebookF,  FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const socialLinks = [
  { id: 1, icon: <FaFacebookF size={20} />, url: "https://www.facebook.com/profile.php?id=61566815472967&mibextid=ZbWKwL", color: "!text-blue-900 hover:!text-blue-500" },
  { id: 2, icon: <FaLinkedinIn size={20} />, url: "https://www.linkedin.com/company/shatralife/", color: "!text-blue-900 hover:!text-blue-500" },
  { id: 3, icon: <FaInstagram size={20} />, url: "https://www.instagram.com/_shastralife/?igsh=OTlybHpiMXJ3cnhs#", color: "!text-red-900 hover:!text-red-500" },
  { id: 4, icon: <CgYoutube size={20} />, url: "http://www.youtube.com/@ShastraLife", color: "!text-orange-900 hover:!text-orange-500" },
 
];  

const Footer = () => {
  return (
    <>
      <footer className="!bg-gradient-to-r from-orange-900 to-orange-950 !py-10 !text-white">
        <div className="!container !mx-auto !px-6 !grid !grid-cols-1 md:!grid-cols-3 !gap-10 !text-center !items-center md:!items-start md:!text-start">

          {/* Column 1: Logo & Brand */}
          <div className="sm:!flex sm:!flex-col sm:!text-start sm:!items-start" data-aos="fade-up">
          <img src={logo} className="!h-[60px] sm:!mx-0 !mx-auto" alt="Shastra Life Logo" />
            <h2 className="!text-2xl !font-bold">Shastra Life</h2>
            <p className="!text-lg !uppercase !font-medium text-gray-300">📿Bring blessings home</p>
           <div> <Link className="hover:!text-orange-500 !text-white" to='/about'>
           <strong> About Shastra Life</strong> 
          </Link>
          <br/>
           <Link className="hover:!text-orange-500 !decoration-0 !text-white" to={'/terms-conditions'}><strong>Terms & Conditions</strong></Link></div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="!space-y-2 sm:!text-start md:text-start" data-aos="fade-up" data-aos-delay="300">
            <h3 className="!text-2xl !font-semibold ">Contact Us</h3>
            <p><strong>Phone:</strong> <a href="tel:+919766713696" className="hover:!text-orange-500 !decoration-0 !text-white">+91 97667 13696</a></p>
            <p><strong>Email:</strong> <a href="mailto:contact.shastralife@gmail.com" className="hover:!text-orange-500  !decoration-0 !text-white">contact.shastralife@gmail.com</a></p>
            <p><strong>Address:</strong> Hanuman Nagar, Jalgaon, Rahata - 413723</p>
            <p><strong>Hours:</strong> 10:00 AM – 5:00 PM (Mon – Fri)</p>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="!flex !flex-col !items-center sm:!items-center sm:!text-center !space-y-4" data-aos="fade-up" data-aos-delay="500">
            <h3 className="!text-2xl !font-bold ">Follow Us</h3>
            <div className="!flex !space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  className={`!bg-gray-300 !p-3 !rounded-full hover:!scale-110 !transition !duration-300 !shadow-lg ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="!border-t !border-orange-500 !mt-8 !pt-4 !text-center !text-sm">
          © {new Date().getFullYear()} Shastra Life. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
