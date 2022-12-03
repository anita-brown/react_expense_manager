import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdEmojiTransportation, MdDevicesOther } from "react-icons/md";
import { BiPlusMedical } from "react-icons/bi";

const Category = () => {
  return (
    <section className="flex xs:gap-8 sm:gap-8 flex-wrap justify-between mt-[3rem]">
      <div className="flex items-center gap-8 block w-[250px] h-[150px] p-6 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-yellow-500 hover:bg-yellow-300">
        <i>
          <IoFastFoodOutline size={50} />
        </i>
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] text-gray-700 font-semibold">Food</h1>
          <p className="text-[18px] text-gray-700 font-bold">#5000.00</p>
        </div>
      </div>
      <div className="flex items-center gap-4 block w-[250px] h-[150px] p-6 bg-gradient-to-r from-green-400 to-green-200 hover:bg-gradient-to-l hover:from-green-500 rounded-lg shadow-md hover:bg-green-300">
        <i>
          <MdEmojiTransportation size={50} />
        </i>
        <div className="flex flex-col gap-">
          <h1 className="text-[18px] font-semibold">Transportation</h1>
          <p className="text-[18px] font-bold">#5000.00</p>
        </div>
      </div>
      <div className="flex items-center gap-8 block w-[250px] h-[150px] p-6 bg-gradient-to-r from-red-400 to-red-200 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-red-500 hover:bg-red-300">
        <i>
          <BiPlusMedical size={40} />
        </i>
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-semibold">Medicals</h1>
          <p className="text-[18px] font-bold">#5000.00</p>
        </div>
      </div>
      <div className="flex items-center gap-8 block w-[250px] h-[150px] p-6 bg-gradient-to-r from-blue-400 to-blue-200 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:bg-blue-300">
        <i>
          <MdDevicesOther size={45} />
        </i>
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-semibold">Others</h1>
          <p className="text-[18px] font-bold">#5000.00</p>
        </div>
      </div>
    </section>
  );
};

export default Category;
