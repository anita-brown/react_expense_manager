import { randomUUID } from "crypto";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpenses } from "../../redux/features/expenseSlice";
import { v4 as uuid } from "uuid";

const Form = () => {
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "food", text: "Food" },
    { value: "medicals", text: "Medicals" },
    { value: "transport", text: "Transport" },
    { value: "others", text: "Others" },
  ];
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    title: "",
    price: "",
    date: "",
    category: "",
    id: uuid()
    // date: Date.now(),
  });

  const handleAddExpenses = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // console.log("vvv", values);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(addExpenses(values));
    setValues({
      title: "",
      price: "",
      date: "",
      category: "",
      id: uuid()
    });
  };

  return (
    <form onSubmit={handleSubmit} action="" className="flex gap-1 flex-col mt-8">
      <label htmlFor="">Title</label>
      <input className="border border-gray-500 py-2 px-2 rounded" value={values.title} onChange={handleAddExpenses} type="text" name="title" placeholder="Enter Expense Title..." />

      <label htmlFor="">Price</label>
      <input className="border border-gray-500 py-2 px-2 rounded" type="number" name="price" onChange={handleAddExpenses} value={values.price} placeholder="Enter Price..." />

      <label htmlFor="">Date</label>
      <input className="border border-gray-500 py-2 px-2 rounded" type="date" name="date" id="" onChange={handleAddExpenses} value={values.date} />

      <label htmlFor="">Category</label>
      <select className="border border-gray-500 py-2 px-2 rounded" name="category" onChange={handleAddExpenses} value={values.category}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <button type="submit" className="mt-4 py-4 px-6 font-poppins font-medium text-[18px] text-white bg-black-gradient-2 rounded-[10px]">
        Add Expenses
      </button>
    </form>
  );
};

export default Form;
