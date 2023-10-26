import {memo, useEffect, useRef, useState} from 'react'

import {List} from 'entities/List';
import {Api} from "app/api";
import PageLoader from "shared/ui/PageLoader/PageLoader";
import {ApiListItem} from "app/api/entities";
import {useQuery} from "react-query";

export interface ListTabProps {
  path: string
}

const ListTab = memo(({ path }: ListTabProps) => {
  const {isLoading, error, data: response} = useQuery(
    'list',
    () => Api.getListData(path.split('/')[1])
  )

  if (isLoading || !response) {
    return <PageLoader />
  }

  return (
    <List data={response.data} />
  );
})

export default ListTab
