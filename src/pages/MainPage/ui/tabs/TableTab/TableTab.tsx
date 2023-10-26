import {memo} from 'react'
import {useQuery} from "react-query";

import {Table} from "entities/Table";
import {Api} from "app/api";
import PageLoader from "shared/ui/PageLoader/PageLoader";

export interface TableTabProps {
  path: string
}

const TableTab = memo(({ path }: TableTabProps) => {
  const {isLoading, data} = useQuery(
    'table',
    () => Api.getTableData(path.split('/')[1])
  )

  if (isLoading || !data) {
    return <PageLoader />
  }

  console.log(data)

  return (
    <Table data={data} />
  );
})

export default TableTab
