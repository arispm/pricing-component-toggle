import React from 'react';

const Card = () => {
  return (
    <>
      <div class="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center">
        <div class="border rounded-lg md:rounded-r-none text-center p-14 mx-auto md:mx-0 my-2 md:my-6 bg-[#f6f6fe] font-medium z-10 shadow-lg">
          <div class="">Basic</div>
          <div className="font-bold text-6xl py-8 w-56">
            <div id="month" class="month hidden">
              $19.99
            </div>
            <div id="annual" class="annual">
              $199.99
            </div>
          </div>
          <hr></hr>
          <div class="text-sm my-3">500 GB Storage</div>
          <hr></hr>
          <div class="text-sm my-3">2 Users Allowed</div>
          <hr></hr>
          <div class="text-sm my-3">Send up to 3 GB</div>
          <hr></hr>
          <a href="#" target="_blank">
            <div class="bg-[#696fdd] border border-[#696fdd]  hover:bg-transparent text-[#f6f6fe] hover:text-[#696fdd] font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer">Learn More</div>
          </a>
        </div>

        <div class="border-transparent rounded-lg text-center p-14 mx-auto md:mx-0 my-2 bg-gradient text-[#f6f6fe] font-medium z-10 shadow-lg bg-gradient-to-r from-[#a3a8f0] to-[#696fdd]">
          <div class="py-4">
            Professional
            <div className="font-bold text-6xl py-8 w-56">
              <div id="month" class="month hidden">
                $24.99
              </div>
              <div id="annual" class="annual">
                $249.99
              </div>
            </div>
            <hr></hr>
            <div class="text-sm my-3">1 TB Storage</div>
            <hr></hr>
            <div class="text-sm my-3">5 Users Allowed</div>
            <hr></hr>
            <div class="text-sm my-3">Send up to 10 GB</div>
            <hr></hr>
            <a href="#" target="_blank">
              <div class="bg-[#f6f6fe] hover:bg-transparent border border-[#f6f6fe]  text-[#696fdd] hover:text-white font-bold uppercase text-xs mt-5 py-2 mpx-4 rounded cursor-pointer">Learn More</div>
            </a>
          </div>
        </div>

        <div class="border rounded-lg  md:rounded-l-none text-center p-14 mx-auto md:mx-0 my-2 md:my-6 bg-[#f6f6fe] font-medium z-10 shadow-lg">
          <div class="">Master</div>
          <div className="font-bold text-6xl py-8 w-56">
            <div id="month" class="month hidden">
              $39.99
            </div>
            <div id="annual" class=" annual">
              $399.99
            </div>
          </div>
          <hr></hr>
          <div class="text-sm my-3">2 TB Storage</div>
          <hr></hr>
          <div class="text-sm my-3">10 Users Allowed</div>
          <hr></hr>
          <div class="text-sm my-3">Send up to 20 GB</div>
          <hr></hr>
          <a href="#" target="_blank">
            <div class="bg-[#696fdd] border border-[#696fdd] hover:bg-transparent text-[#f6f6fe] hover:text-[#696fdd] font-bold uppercase text-xs mt-5 py-2 px-4 rounded cursor-pointer">Learn More</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
