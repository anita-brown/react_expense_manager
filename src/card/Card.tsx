import React from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";


const Card = () => {
    const transactions = useSelector((state: any) => state.expense.transactions);
    console.log("itemId", transactions);
  return (
    <section className="mt-[5rem]">
      <div className="flex flex-col lg:flex sm:flex-row lg:flex-row sm:justify-between">
        <h1 className="text-x mb-2 font-semibold">Expense List</h1>
        <div className="flex gap-4 items-center">
          <label className="text-x font-semibold" htmlFor="">
            Filter
          </label>
          <select name="" id="" className="border border-gray-200 py-1 px-2 rounded outline-none">
            <option value="">All</option>
            <option value="">Food</option>
            <option value="">Medicals</option>
            <option value="">Transport</option>
            <option value="">Others</option>
          </select>
        </div>
      </div>
      {transactions.map((item:any, index: number) => (
        <div key={index} className=" mt-4 flex flex-col gap-2 block w-[full] h-[100px] p-6 bg-gradient-to-r from-gray-100 to-#fcfcfc-200 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-gray-100 hover:bg-gray-100">
          <div className="flex flex-row justify-between">
            <p className="text-[16px] text-gray-700 font-semibold">{item.title}</p>
            <p className="text-[16px] text-gray-700 font-semibold">{item.category}</p>
          </div>
          <div className="flex justify-between">
            <p>Price: #{item.price}</p>
            <div className="flex gap-2 items-center">
              <i>
                <AiFillEdit color="#0077E6" size={20} />
              </i>
              <i>
                <MdDelete color="red" size={20} />
              </i>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
