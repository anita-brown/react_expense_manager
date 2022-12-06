import { SelectColumnFilter, StatusPill } from "./ColumnFilter";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import Form from "../form/Form";
import { deleteExpenses } from "../../redux/features/expenseSlice";
import { useDispatch } from "react-redux";



export const columns = [
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Category",
    accessor: "category",
    Cell: StatusPill,
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "Action",
    accessor: (originalRow: any, rowIndex: any) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const dispatch = useDispatch();
      const handleDelete = () => {
        console.log("dlete")
        dispatch(deleteExpenses);
      };
      return (
        <div className="flex items-center gap-[5rem]">
          <i className="cursor-pointer">
            <AiFillEdit onClick={() => <Form />} color="#0077E6" size={25} />
          </i>
          <i className="cursor-pointer">
            <MdDelete onClick={handleDelete} color="red" size={25} />
          </i>
        </div>
      );
    },
  },
];

export const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};
