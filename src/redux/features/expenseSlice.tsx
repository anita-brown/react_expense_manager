import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ExpenseState {
    expense: number;
    category: string[]
    transactions: string[]
//   expenseHistory: {
//     expenseName: string;
//       price: number;
//   }[];
}
export interface IExpense {
    expenseName: string;
  price: number | string;
}
const initialState: ExpenseState = {
    expense: 0,
    category: [],
    transactions: []
//   expenseHistory: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
    reducers: {
        getExpenses: () => {},
        addExpenses: () => { },
        editExpenses: () => { },
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
export const { getExpenses, addExpenses, editExpenses, deleteExpenses } = expenseSlice.actions;
export default expenseSlice.reducer;
