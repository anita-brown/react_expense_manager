import React, { useState } from "react";
import Form from "../form/Form";
import AddExpenses from "../transactions/AddExpenses";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(true);
  };
  return (
    <header className="">
      <h1 className="text-2xl font-semibold">Expense Manager</h1>
      <div className="flex lg:flex-row sm:flex-row flex-col gap-4 sm:justify-between lg:justify-between mt-6">
        <h2 className="w-[170px] py-4 px-6 font-poppins font-medium text-[18px] text-white bg-black-gradient-2 rounded-[10px]">Total: #20,000</h2>
        <div onClick={handleToggle}>
          <AddExpenses />
        </div>
      </div>
      <>{toggle && <Form />}</>
    </header>
  );
};

export default Header;
