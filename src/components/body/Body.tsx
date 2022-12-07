import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import Category from "../category/Category";
import Form from "../form/AddForm";
import Header from "../header/Header";

const Body = () => {
  const transactions = useSelector((state: any) => state.expense.transactions);
  const [addNewExpense, setAddNewExpense] = useState(false);
  const [isEditing, setEditing] = useState(false);

  let result = 0;
  if (transactions && transactions.length > 0) {
    for (const element of transactions) {
      result += element.price * 1;
    }
  }

  return (
    <section>
      <Header />
      <div className="flex lg:flex-row sm:flex-row flex-col gap-4 sm:justify-between lg:justify-between mt-6">
        <h2 className="w-[170px] py-4 px-6 font-poppins font-medium text-[18px] text-white bg-black-gradient-2 rounded-[10px]">Total: #{result}</h2>
        <div>
          <button
            onClick={() => {
              setEditing(false);
              setAddNewExpense(true);
            }}
            type="button"
            className="py-4 px-6 font-poppins font-medium text-[18px] text-white bg-gray-gradient rounded-[10px]"
          >
            New Expenses
          </button>
        </div>
      </div>
      <>{addNewExpense && <Form setAddNewExpense={setAddNewExpense} />}</>
      <Category />
      <Card isEditing={isEditing} setEditing={setEditing} setAddNewExpense={setAddNewExpense} />
    </section>
  );
};

export default Body;
