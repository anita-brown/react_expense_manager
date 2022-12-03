import React from "react";
import Category from "./components/category/Category";
import Header from "./components/header/Header";
import AddExpenses from "./components/transactions/AddExpenses";

function App() {
  return (
    <div className="bg-dimWhite py-[2rem] px-[5rem] w-full">
      <Header/>
      <Category />
      {/* <AddExpenses /> */}
    </div>
  );
}

export default App;
