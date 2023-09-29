import React from 'react';

const menu = [
  { id: 0, name: 'Jobs' },
  { id: 1, name: 'Companies' },
  { id: 2, name: 'About' },
  { id: 3, name: 'Contact' },
  { id: 4, name: 'Blog' },
  { id: 5, name: 'Login' },
  { id: 6, name: 'Register' },
];

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className='logoDiv'>
        <h1 className='logo text-[25px] text-blueColor'>
          <strong>Job</strong>Search
        </h1>
      </div>
      <div className='menu flex gap-8'>
        {menu.map((item) => (
          <li className='menuList text-[#6f6f6f] hover:text-blueColor'>
            {item.name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
