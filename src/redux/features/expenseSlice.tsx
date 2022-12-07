import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface ExpenseState {
  transactions: string[] | any;
}

const initialState: ExpenseState = {
  transactions: [],
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
    editExpenses: (state, action) => {
      let { transactions } = state;
      console.log("action", action.payload.id);
      state.transactions = transactions.map((item: any) => (item.id === action.payload.id ? action.payload : item));
    },
    deleteExpenses: (state, action) => {
      let { transactions } = state;
      state.transactions = transactions.filter((item: any) => item.id !== action.payload.id);
    },
  },
});

export const { addExpenses, editExpenses, deleteExpenses } = expenseSlice.actions;

export default expenseSlice.reducer;
