import {memo, useEffect, useRef, useState} from 'react'
import {Table} from "entities/Table";
import {Api} from "app/api";
import PageLoader from "shared/ui/PageLoader/PageLoader";
import {ApiTableData} from "app/api/entities";
import {useQuery} from "react-query";

export interface TableTabProps {
  path: string
}

const TableTab = memo(({ path }: TableTabProps) => {
  const {isLoading, error, data: response} = useQuery(
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
