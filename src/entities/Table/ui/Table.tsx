import {memo} from 'react'
import AppTable from "shared/ui/AppTable/AppTable";
import {ApiTableData} from "app/api/entities/ApiTableData";

export interface TableProps {
  data: ApiTableData
}

const Table = memo(({ data }: TableProps) => {
  return <AppTable data={data} />
})

export default Table
