import React from 'react';

function Footer() {
  return (
    <div className=' grid grid-cols-1  md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className=' space-y-4 text-sm text-gray-800'>
        <h5 className=' font-bold'>COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Communication</p>
        <p>AirCover</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className=' space-y-4 text-sm text-gray-800'>
        <h5 className=' font-bold'>HOST</h5>
        <p>Airbnb your home</p>
        <p>AirCover for Hosts</p>
        <p>Hosting resources</p>
        <p>Community forum</p>
        <p>Hosting responsibly</p>
      </div>
      <div className=' space-y-4 text-sm text-gray-800'>
        <h5 className=' font-bold'>SUPPORT</h5>
        <p>Anti-discrimination</p>
        <p>Help Center</p>
        <p>Disability support</p>
        <p>Cancellation options</p>
        <p>Report neighborhood concern</p>
      </div>
      <div className=' space-y-4 text-sm text-gray-800'>
        <h5 className=' font-bold'>AIRBNB</h5>
        <p>Newsroom</p>
        <p>New features</p>
        <p>Careers</p>
        <p>Investors</p>
        <p>Gift cards</p>
      </div>
    </div>
  );
}

export default Footer;
