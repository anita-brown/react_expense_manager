import React, { useEffect, useMemo, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
import { deleteExpenses, editExpenses } from "../../redux/features/expenseSlice";
import { useDispatch } from "react-redux";
import { classNames, options } from "../../utils/utils";

const Card = ({ setAddNewExpense, isEditing, setEditing }: any) => {
  const dispatch = useDispatch();
  const transactions = useSelector((state: any) => state.expense.transactions);
  const [transactionExpense, setTransactionsExpense] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [values, setValues] = useState({ title: "", price: "", category: "", id: "" });
  const { title, price, category, id } = values;

  useEffect(() => {
    setTransactionsExpense(transactions);
  }, [transactions]);
  const getFilteredList = () => {
    if (!selectedCategory) {
      return transactionExpense;
    }
    return transactionExpense.filter((item: any) => item.category === selectedCategory);
  };
  const filteredList = useMemo(getFilteredList, [selectedCategory, transactionExpense]);

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const onEditToggle = (id: string, title: string, price: string, category: string) => {
    setEditing(true);
    setAddNewExpense(false);
    setValues({ ...values, id, title, price, category });
  };

  const handleEditChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleEditSubmit = () => {
    if (title === "" || price === "" || category === "") {
      setValues({ ...values });
      return;
    }
    dispatch(editExpenses({ id, title, price, category }));
    setEditing(false);
  };

  return (
    <>
      {/* Edit Form */}
      {isEditing ? (
        <form className="flex gap-1 flex-col mt-8" onSubmit={handleEditSubmit}>
          {" "}
          <label htmlFor="">Title</label>
          <input required className="border border-gray-500 py-2 px-2 rounded" type="text" value={title} name="title" onChange={handleEditChange} />
          <label htmlFor="">Price</label>
          <input required className="border border-gray-500 py-2 px-2 rounded" type="number" value={price} name="price" onChange={handleEditChange} />
          <label htmlFor="">Category</label>
          <select required className="border border-gray-500 py-2 px-2 rounded" name="category" onChange={handleEditChange} value={category}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          <button type="submit" className="mt-4 py-4 px-6 font-poppins font-medium text-[18px] text-white bg-black-gradient-2 rounded-[10px]">
            Edit Expenses
          </button>
        </form>
      ) : (
        // Filter Card by Category
        <section className="mt-[5rem]">
          <div className="flex flex-col lg:flex sm:flex-row lg:flex-row sm:justify-between">
            <h1 className="text-x mb-2 font-semibold">Expense List</h1>
            <div className="flex gap-4 items-center">
              <label className="text-x font-semibold" htmlFor="">
                Filter
              </label>
              <select onChange={handleCategoryChange} name="" id="" className="border border-gray-200 py-1 px-2 rounded outline-none">
                <option value="">All</option>
                <option value="Food">Food</option>
                <option value="Medicals">Medicals</option>
                <option value="Transport">Transport</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          {/* Filtered Card List */}

          {filteredList?.map(({ title, price, category, id }: any) => (
            <div key={id} className=" mt-4 flex flex-col gap-2 block w-[full] h-[100px] p-6 bg-gradient-to-r from-gray-100 to-#fcfcfc-200 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-gray-100 hover:bg-gray-100">
              <div className="flex flex-row justify-between">
                <p className="text-[16px] text-gray-700 font-semibold">{title}</p>
                <p
                  className={classNames(
                    "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
                    category.startsWith("Transport") ? "bg-green-100 text-green-800" : null,
                    category.startsWith("Food") ? "bg-yellow-100 text-yellow-800" : null,
                    category.startsWith("Medicals") ? "bg-red-100 text-red-800" : null,
                    category.startsWith("Others") ? "bg-blue-100 text-blue-800" : null
                  )}
                >
                  {category}
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                  Price: <span className="font-bold">#{price}</span>
                </p>
                <div className="flex gap-2 items-center">
                  <i onClick={() => onEditToggle(id, title, price, category)}>
                    <AiFillEdit color="#0077E6" size={20} />
                  </i>
                  <i onClick={() => dispatch(deleteExpenses({ id }))}>
                    <MdDelete color="red" size={20} />
                  </i>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Card;
