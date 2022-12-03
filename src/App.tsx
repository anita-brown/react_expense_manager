import React, { useMemo } from "react";
import Category from "./components/category/Category";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import { columns } from "./components/utils/Column";
import { mockData } from "./data/mock";


function App() {
   const data = useMemo(() => mockData, []);
  return (
    <div className="bg-dimWhite py-[2rem] px-[5rem] w-full">
      <Header />
      <Category />
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
