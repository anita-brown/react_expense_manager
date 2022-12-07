import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpenses } from "../../redux/features/expenseSlice";
import { v4 as uuid } from "uuid";
import { options } from "../../utils/utils";


const Form = ({ setAddNewExpense }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAddExpense, setAddExpense] = useState(false);

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    title: "",
    price: "",
    category: "",
    id: uuid(),
  });

  const handleAddExpenses = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { title, price, category } = values;
    if (title === "" || price === "" || category === "") {
      setValues({ ...values });
      return;
    }
    dispatch(addExpenses(values));
    setValues({
      title: "",
      price: "",
      category: "",
      id: uuid(),
    });
    setAddExpense(true);
    setAddNewExpense(false)
  };

  return (
    <form onSubmit={handleSubmit} action="" className="flex gap-1 flex-col mt-8">
      <label htmlFor="">Title</label>
      <input className="border border-gray-500 py-2 px-2 rounded" value={values.title} onChange={handleAddExpenses} type="text" name="title" required placeholder="Enter Expense Title..." />

      <label htmlFor="">Price</label>
      <input className="border border-gray-500 py-2 px-2 rounded" type="number" name="price" onChange={handleAddExpenses} value={values.price} required placeholder="Enter Price..." />

      <label htmlFor="">Category</label>
      <select required className="border border-gray-500 py-2 px-2 rounded" name="category" onChange={handleAddExpenses} value={values.category}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <button onClick={() => setAddExpense(true)} type="submit" className="mt-4 py-4 px-6 font-poppins font-medium text-[18px] text-white bg-black-gradient-2 rounded-[10px]">
        Add Expenses
      </button>
    </form>
  );
};

export default Form;
