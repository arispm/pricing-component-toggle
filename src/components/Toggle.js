import React from 'react';

const Toggle = () => {
  return (
    <>
      <div class="flex flex-row justify-center my-4 text-sm tracking-tight font-medium text-gray-700">
        <p class="mx-3">Annually</p>

        <label class="relative inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" id="toggle" onClick={myFunction} />
          <div class="w-11 h-6 bg-[#696fdd] rounded-full peer peer-focus:ring-4   peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#b3b5c6]"></div>
        </label>

        <p class="mx-3">Monthly</p>
      </div>
    </>
  );
};

function myFunction() {
  var x = document.querySelectorAll('.annual');
  var y = document.querySelectorAll('.month');
  for (var i = 0; i < x.length; i++) {
    if (document.getElementById('toggle').checked == true) {
      x[i].classList.add('hidden');
      y[i].classList.remove('hidden');
    } else {
      x[i].classList.remove('hidden');
      y[i].classList.add('hidden');
    }
  }
}

export default Toggle;
