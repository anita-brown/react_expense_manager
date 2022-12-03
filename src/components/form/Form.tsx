import React from 'react'

const Form = () => {
  return (
    <form action="" className="flex gap-1 flex-col mt-8">
      <label htmlFor="">Title</label>

      <input className="border border-gray-500 py-2 px-2 rounded" type="text" placeholder="Enter Expense Title..." />
      <label htmlFor="">Price</label>

      <input className="border border-gray-500 py-2 px-2 rounded" type="number" placeholder="Enter Price..." />
      <label htmlFor="">Date</label>
      <input className="border border-gray-500 py-2 px-2 rounded" type="date" name="date" id="" />
      <label htmlFor="">Category</label>
      <select className="border border-gray-500 py-2 px-2 rounded" name="" id="">
        <option value="">None</option>
        <option value="">Food</option>
        <option value="">Medicals</option>
        <option value="">Transportation</option>
        <option value="">Other</option>
      </select>
      <button type="submit" className="mt-4 py-4 px-6 font-poppins font-medium text-[18px] text-white bg-black-gradient-2 rounded-[10px]">
        Add Expenses
      </button>
    </form>
  );
}

export default Form
