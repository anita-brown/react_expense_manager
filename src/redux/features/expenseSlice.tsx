import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface ExpenseState {
  totalExpenseValue: number;
  transactions: string[] | any;
}

const initialState: ExpenseState = {
  totalExpenseValue: 0,
  transactions: [
    {
        id: 1,
        title: "Jollof Rice",
        date: "3 Dec 2022",
        category: "Food",
        price: "200"
    },
    {
        id: 2,
        title: "Lekki",
        date: "3 Dec 2022",
        category: "Transport",
        price: "1500"
    },
    {
        id: 3,
        title: "X-ray",
        date: "3 Dec 2022",
        category: "Medicals",
        price: "5000"
    },
    {
        id: 4,
        title: "Plane Ticket",
        date: "3 Dec 2022",
        category: "Others",
        price: "10000"
    },
    {
        id: 5,
        title: "Beans",
        date: "3 Dec 2022",
        category: "Food",
        price: "200"
    },
    {
        id: 6,
        title: "Ikeja",
        date: "3 Dec 2022",
        category: "Transport",
        price: "700"
    },
    {
        id: 7,
        title: "Blood Test",
        date: "3 Dec 2022",
        category: "Medicals",
        price: "1000"
    },
    {
        id: 8,
        title: "Web Design",
        date: "3 Dec 2022",
        category: "Others",
        price: "3500"
    },
    {
        id: 9,
        title: "Spaghetti",
        date: "3 Dec 2022",
        category: "Food",
        price: "2000"
    },
    {
        id: 10,
        title: "Eye Test",
        date: "3 Dec 2022",
        category: "Medicals",
        price: "2500"
    },
],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpenses: (state, action) => {
      const expense = action.payload;
      expense.id = uuid();
      state.transactions.push(expense);
    },
    editExpenses: () => {},
    deleteExpenses: (state, action) => {
      // const Id = action.payload.id;
      // const itemId = Id.map((item: any)=> item.id)
      // console.log("dd", Id, itemId);
      // state.transactions = Id
  //  return state.transactions = Id
      // state.transactions = state.transactions.filter((transaction: any) => transaction.id !== Id);
      // let { id } = action.payload
      // state.transactions.splice(id, 1);
      const del = state.transactions.filter((item: any) => item.id !== action.payload.id)
      console.log("del", del);
      return del
      // const splice = state.transactions.splice(
      //   state.transactions.findIndex((arrow: any) => arrow.id === itemId),
      //   1
      // );
      // console.log("splice", itemId, state.transactions);
    },

    // calculateExpense: (state, action: PayloadAction<void>) => {
    //   state.expense = state.expenseHistory.reduce((acc, ex) => {
    //     if (ex.price < 0) {
    //       return Math.abs(acc + ex.price);
    //     }
    //     return acc;
    //   }, 0);
    // },
  },
});

// export const { addExpenses, calculateExpense } = expenseSlice.actions;
export const { addExpenses, editExpenses, deleteExpenses } = expenseSlice.actions;

// const getTransactionsSelector = (state: ExpenseState) => state.transactions;

export default expenseSlice.reducer;
