import {memo} from 'react'
import {useQuery} from "react-query";

import {Table} from "entities/Table";
import {Api} from "app/api";
import PageLoader from "shared/ui/PageLoader/PageLoader";

export interface TableTabProps {
  path: string
}

const TableTab = memo(({ path }: TableTabProps) => {
  const {isLoading, data: response} = useQuery(
    'table',
    () => Api.getTableData(path.split('/')[1])
  )

  if (isLoading || !response) {
    return <PageLoader />
  }

  return (
    <Table data={response.data} />
  );
})

export default TableTab
