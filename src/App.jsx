import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import Search from './Components/Search/Search';
import Jobs from './Components/Job/Jobs';
import Value from './Components/Value/Value';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
};

export default App;
