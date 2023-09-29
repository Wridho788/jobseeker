import React from 'react';

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>
        The Value that holds us true and to account
      </h1>
      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Falphabet-3%2F500%2FABC_alphabet_letter_font_graphic_language_text_S-512.png&f=1&nofb=1&ipt=5f2f26d3f627879138d3b3d71838c368f6592e47f4154815cbcc080a8b75d3c4&ipo=images'
                alt=''
                className='w-full h-full'
              />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eos
            asperiores amet laudantium sunt.
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F787%2F679%2Fpng-transparent-computer-icons-login-authentication-security-miscellaneous-logo-fingerprint-thumbnail.png&f=1&nofb=1&ipt=6caefc687f748438829bf7a2101ed510166daa61eade828ad3101cbdb9c93115&ipo=images'
                alt=''
                className='w-full h-full'
              />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Secured
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eos
            asperiores amet laudantium sunt.
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.lOzhmIva4PaCUbuIbo0wCAHaG7%26pid%3DApi&f=1&ipt=4b92e17fe29d40247d0587a08e7b3bf5f2dc46f12f7a41a66952344763f33e56&ipo=images'
                alt=''
                className='w-full h-full'
              />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Trusted
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eos
            asperiores amet laudantium sunt.
          </p>
        </div>
      </div>

      <div className='card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]'>
        <div>
          <h1 className='text-blueColor text-[30px] font-bold'>
            Ready to switch a career
          </h1>
          <h2 className='text-textColor text-[25px] font-bold'>
            Let's get started!
          </h2>
        </div>
        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Value;
