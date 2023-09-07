import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';



const Footer = () => {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year once when the component mounts
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000); // Update the year every second

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="text-white text-center">
      <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className="bg-gray-800 py-14">
          <p className="text-2xl mb-4">CONTACT US</p>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
      </div>
      <div className="bg-indigo-950	py-14">
          <p className="text-2xl mb-4">Follow US</p>
          <p>Join us on social media</p>
          <FontAwesomeIcon icon={faQuoteLeft} size='' />
      </div>
      </div>
      <div className='bg-gray-900 py-4'>
          <p>Copyright © {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
