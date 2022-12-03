import React from "react";
import AddExpenses from "../transactions/AddExpenses";

const Header = () => {
  return (
    <header>
      <h1 className="text-xl font-semibold">Expense Manager</h1>
      <div className="flex justify-between mt-6">
        <h2 className="py-4 px-6 font-poppins font-medium text-[18px] text-white bg-black-gradient-2 rounded-[10px]">Total: #20,000</h2>
        <div>
          <AddExpenses />
        </div>
      </div>
      <form action="" className="flex flex-col mt-8">
        <label htmlFor="">Expense title</label>

        <input type="text" placeholder="Enter Expense Title..." />
        <label htmlFor="">Price</label>

        <input type="number" placeholder="Enter Price..." />
        <label htmlFor="">Category</label>
        <select name="" id="">
          <option value=""></option>
          <option value="">Food</option>
          <option value="">Medicals</option>
          <option value="">Transportation</option>
        </select>
        <button className="py-4 px-6 font-poppins font-medium text-[18px] text-white bg-black-gradient-2 rounded-[10px]">Add Expenses</button>
      </form>
    </header>
  );
};

export default Header;
