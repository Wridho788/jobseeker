import React from 'react';
// import {AiOutlineSearch} from react-icons
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const relevanceList = [
  { id: 0, name: 'Relevance' },
  { id: 1, name: 'Inclusive' },
  { id: 2, name: 'Starts With' },
  { id: 3, name: 'Contains' },
];

const typeList = [
  { id: 0, name: 'Full-Time' },
  { id: 1, name: 'Remote' },
  { id: 2, name: 'Contract' },
  { id: 3, name: 'Part-Time' },
];

const levelList = [
  { id: 0, name: 'Senior' },
  { id: 1, name: 'Beginner' },
  { id: 2, name: 'Intermediate' },
  { id: 3, name: 'Advocate' },
];
const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form action=''>
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
          <div className='flex gap-2 items-center'>
            {' '}
            <AiOutlineSearch className='text-[25px] icon' />
            <input
              type='text'
              className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
              placeholder='Search Job Here...'
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>
          <div className='flex gap-2 items-center'>
            {' '}
            <BsHouseDoor className='text-[25px] icon' />
            <input
              type='text'
              className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
              placeholder='Search By Company...'
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>
          <div className='flex gap-2 items-center'>
            {' '}
            <CiLocationOn className='text-[25px] icon' />
            <input
              type='text'
              className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
              placeholder='Search By Location...'
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>

          <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>
            Search
          </button>
        </div>
      </form>

      <div className='singleSearch flex items-center gap-10 justify-center'>
        <div className='secDiv flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>
            Sort By:
          </label>

          <select
            name=''
            id='relevance'
            className='bg-white rounded-[3px] px-4 py-1'>
            {relevanceList.map((item, id) => (
              <option value={item.id} key={id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className='secDiv flex items-center gap-2'>
          <label htmlFor='type' className='text-[#808080] font-semibold'>
            Type:
          </label>

          <select
            name=''
            id='type'
            className='bg-white rounded-[3px] px-4 py-1'>
            {typeList.map((item, id) => (
              <option value={item.id} key={id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className='secDiv flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>
            Level:
          </label>

          <select
            name=''
            id='level'
            className='bg-white rounded-[3px] px-4 py-1'>
            {levelList.map((item, id) => (
              <option value={item.id} key={id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>
      </div>
    </div>
  );
};

export default Search;
