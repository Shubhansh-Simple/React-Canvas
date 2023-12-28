/*
 * Footer of Entire Application
 */

const Footer = () => {

  // Get current year
  const currentYear = new Date().getFullYear();
  const developerId = 'shubhansh7777@gmail.com';

  return (
    <footer>
      {/* Stick to bottom */}
      <div className='fixed-bottom text-center bg-dark'>
        <small className='text-white'>
          &copy; {currentYear} Copyright 
          <span> </span>
          <strong>{developerId}</strong>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
