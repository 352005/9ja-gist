import { useState } from 'react';

const CustomSelect = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block w-auto m-2 my-8">
      <button
        type="button"
        className="block font-ptsans w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        onClick={() => setOpen(!open)}
      >
        {selected}
        <span className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </span>
      </button>
      {open && (
        <ul
          className="absolute mt-1 w-full bg-white border border-gray-400 rounded shadow-lg z-10"
          onClick={() => setOpen(false)}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-200 px-4 py-2 font-ptsans"
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
