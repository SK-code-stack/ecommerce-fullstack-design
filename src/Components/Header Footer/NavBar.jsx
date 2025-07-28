import React, { useState, useEffect, useRef } from 'react';

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className='overflow-hidden w-full h-[56px] px-[9%] bg-white flex items-center justify-between text-base border-y-[1px] border-gray-200 '>

      {/* Left Navigation */}
      <div className='flex items-center gap-6 text-black'>
        {/* Hamburger + All Category */}
        <div className='flex items-center gap-1 cursor-pointer'>
          <i className="fas fa-bars text-xl"></i>
          <span>All category</span>
        </div>

        {/* Links after adding router replace l with link */}
        <l href="/hot-offers" className='cursor-pointer  text-black'>Hot offers</l>
        <l href="/gift-boxes" className='cursor-pointer no-underline text-black'>Gift boxes</l>
        <l href="/projects" className='cursor-pointer no-underline text-black'>Projects</l>
        <l href="/menu-item" className='cursor-pointer no-underline text-black'>Menu item</l>

        {/* Help Dropdown */}
        <div className='relative cursor-pointer' ref={dropdownRef}>
          <div onClick={() => setOpenDropdown(openDropdown === 'help' ? null : 'help')} className='flex items-center'>
            <span>Help</span>
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </div>
          {openDropdown === 'help' && (
            <div className='absolute top-full left-0 mt-1 bg-white shadow rounded-md text-sm z-10'>
              <a href="/faq" className='block px-4 py-2 hover:bg-gray-100'>FAQ</a>
              <a href="/support" className='block px-4 py-2 hover:bg-gray-100'>Support</a>
              <a href="/contact" className='block px-4 py-2 hover:bg-gray-100'>Contact Us</a>
            </div>
          )}
        </div>
      </div>

      {/* Right: Language & Country Select */}
      <div className='flex items-center gap-6 text-black' ref={dropdownRef}>

        {/* Language Dropdown */}
        <div className='relative cursor-pointer'>
          <div onClick={() => setOpenDropdown(openDropdown === 'language' ? null : 'language')} className='flex items-center gap-1'>
            <span>English, USD</span>
            <i className="fas fa-chevron-down text-xs"></i>
          </div>
          {openDropdown === 'language' && (
            <div className='absolute top-full right-0 mt-1 bg-white shadow rounded-md text-sm z-10'>
              <div className='px-4 py-2 hover:bg-gray-100'>English, USD</div>
              <div className='px-4 py-2 hover:bg-gray-100'>Español, EUR</div>
              <div className='px-4 py-2 hover:bg-gray-100'>Français, EUR</div>
              <div className='px-4 py-2 hover:bg-gray-100'>Deutsch, EUR</div>
            </div>
          )}
        </div>

        {/* Country Dropdown with Flags */}
        <div className='relative cursor-pointer'>
          <div onClick={() => setOpenDropdown(openDropdown === 'country' ? null : 'country')} className='flex items-center gap-1'>
            <span>Ship to</span>
            <img src="https://flagcdn.com/w40/de.png" alt="Germany" className='w-5 h-3 object-cover' />
            <i className="fas fa-chevron-down text-xs"></i>
          </div>
          {openDropdown === 'country' && (
            <div className='absolute top-full right-0 mt-1 bg-white shadow rounded-md text-sm z-10'>
              <div className='flex items-center px-4 py-2 hover:bg-gray-100'>
                <img src="https://flagcdn.com/w40/us.png" alt="USA" className='w-5 h-3 mr-2' />
                <span>USA</span>
              </div>
              <div className='flex items-center px-4 py-2 hover:bg-gray-100'>
                <img src="https://flagcdn.com/w40/in.png" alt="India" className='w-5 h-3 mr-2' />
                <span>India</span>
              </div>
              <div className='flex items-center px-4 py-2 hover:bg-gray-100'>
                <img src="https://flagcdn.com/w40/gb.png" alt="UK" className='w-5 h-3 mr-2' />
                <span>UK</span>
              </div>
              <div className='flex items-center px-4 py-2 hover:bg-gray-100'>
                <img src="https://flagcdn.com/w40/sa.png" alt="Saudi Arabia" className='w-5 h-3 mr-2' />
                <span>Saudi Arabia</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
