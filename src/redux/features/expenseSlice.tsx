import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
// 
export interface ExpenseState {
  totalExpenseValue: number;
  transactions: string[];
  //   expenseHistory: {
  //     expenseName: string;
  //       price: number;
  //   }[];
}
export interface IExpense {
  expenseName: string;
  price: number | string;
}
const initialState: any = {
  totalExpenseValue: 0,
  transactions: [],
  //   expenseHistory: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    getTransactions: (state) => {
      return state.transactions;
    },
    addExpenses: (state, actions) => {
      const expense = actions.payload;
      expense.id = uuid();
      expense.date = new Date(expense.date);

      state.transactions = [state.transactions, expense];
    },
    editExpenses: () => {},
    deleteExpenses: () => {},
    // addExpenses: (state, action: PayloadAction<IExpense>) => {
    //   if (typeof action.payload.price !== "number") {
    //     state.expenseHistory.push({
    //       expenseName: action.payload.expenseName,
    //       price: parseFloat(action.payload.price),
    //     });
    //   }
    // },
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
export const { getTransactions, addExpenses, editExpenses, deleteExpenses } = expenseSlice.actions;

const getTransactionsSelector = (state: ExpenseState) => state.transactions;

export default expenseSlice.reducer;
