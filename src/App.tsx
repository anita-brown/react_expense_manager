import React, { useCallback, useMemo, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Category from "./components/category/Category";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import { mockData } from "./data/mock";
import { columns } from "./components/utils/Column";
import { StatusPill, SelectColumnFilter } from "./components/utils/ColumnFilter";
import { deleteExpenses } from "./redux/features/expenseSlice";
import { IoTerminal } from "react-icons/io5";
import Card from "./card/Card";

function App() {
  const transactions = useSelector((state: any) => state.expense.transactions);
  console.log("itemId", transactions);

  // const [tableData, setTableData] = useState(transactions);

  // // const itemId = transactions?.map((item: any) => item.id);

  // const dispatch = useDispatch();

  // // const handleDelete = useCallback(
  // //   (index: any) => {
  // //     setTableData(tableData.filter((v: any, i: any) => i !== index));
  // //   },
  // //   [tableData]
  // // );
  // const handleDeleteItem = () => {
  //   // const filter = transactions.filter((item: any) => item.id !== id);
  //  const d = transactions.map((item: any)=> item.id)
  //   dispatch(deleteExpenses({ id: d }));
  //   console.log("delete", d);
  // };
  // // const handleDel = () => {

  // //     dispatch(deleteExpenses(handleDelete));
  // // }
  // // };

  
  return (
    <div className="bg-dimWhite py-[2rem] px-[5rem] w-full">
      <Header />
      <Category />
      <Card/>
      {/* <Table columns={columns} data={transactions} /> */}
    </div>
  );
}

export default App;
