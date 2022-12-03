import { SelectColumnFilter, StatusPill } from "./ColumnFilter";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

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
    accessor: (originalRow: any, rowIndex: any) => (
      <div className="flex items-center gap-[5rem]">
        <i className="cursor-pointer">
          <AiFillEdit color="#0077E6" size={25} />
        </i>
        <i className="cursor-pointer">
          <MdDelete color="red" size={25} />
        </i>
      </div>
    ),
  },
];

export const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};
