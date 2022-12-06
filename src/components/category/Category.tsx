import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdEmojiTransportation, MdDevicesOther } from "react-icons/md";
import { BiPlusMedical } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";

const Category = () => {
  const transactions = useSelector((state: any) => state.expense.transactions);
  

  // const foodExpense = transactions.filter((item: any) => item.category === "food");
  // const medicalsExpense = transactions.filter((item: any) => item.category === "medicals");
  // const transportExpense = transactions.filter((item: any) => item.category === "transport");
  // const othersExpense = transactions.filter((item: any) => item.category === "others");

  // let resultFood = 0
  // for (const element of foodExpense) {
  //   resultFood += element.price * 1;
  //   // console.log("++", resultFood);
  // }
  // let resultMedical = 0
  // for (const element of medicalsExpense) {
  //   resultMedical += element.price * 1;
  //   // console.log("++", resultMedical);
  // }
  // let resultTransport = 0
  // for (const element of transportExpense) {
  //   resultTransport += element.price * 1;
  //   // console.log("++", resultTransport);
  // }
  // let resultOthers = 0
  // for (const element of othersExpense) {
  //   resultOthers += element.price * 1;
  //   // console.log("++", resultOthers);
  // }


  return (
    <section className="flex xs:gap-8 sm:gap-8 flex-wrap justify-between mt-[3rem] mb-[3rem]">
      <div className="flex items-center gap-8 block w-[250px] h-[150px] p-6 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-yellow-500 hover:bg-yellow-300">
        <i>
          <IoFastFoodOutline size={50} />
        </i>
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] text-gray-700 font-semibold">Food</h1>
          {/* <p className="text-[18px] text-gray-700 font-bold">#{resultFood}</p> */}
        </div>
      </div>
      <div className="flex items-center gap-4 block w-[250px] h-[150px] p-6 bg-gradient-to-r from-green-400 to-green-200 hover:bg-gradient-to-l hover:from-green-500 rounded-lg shadow-md hover:bg-green-300">
        <i>
          <MdEmojiTransportation size={50} />
        </i>
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-semibold">Transport</h1>
          {/* <p className="text-[18px] font-bold">#{resultTransport}</p> */}
        </div>
      </div>
      <div className="flex items-center gap-8 block w-[250px] h-[150px] p-6 bg-gradient-to-r from-red-400 to-red-200 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-red-500 hover:bg-red-300">
        <i>
          <BiPlusMedical size={40} />
        </i>
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-semibold">Medicals</h1>
          {/* <p className="text-[18px] font-bold">#{resultMedical}</p> */}
        </div>
      </div>
      <div className="flex items-center gap-8 block w-[250px] h-[150px] p-6 bg-gradient-to-r from-blue-400 to-blue-200 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:bg-blue-300">
        <i>
          <MdDevicesOther size={45} />
        </i>
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-semibold">Others</h1>
          {/* <p className="text-[18px] font-bold">#{resultOthers}</p> */}
        </div>
      </div>
    </section>
  );
};

export default Category;
