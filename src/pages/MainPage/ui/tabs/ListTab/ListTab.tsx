import {memo} from 'react'
import {useQuery} from "react-query";

import {List} from 'entities/List';
import {Api} from "app/api";
import PageLoader from "shared/ui/PageLoader/PageLoader";

export interface ListTabProps {
  path: string
}

const ListTab = memo(({ path }: ListTabProps) => {
  const {isLoading, data} = useQuery(
    'list',
    () => Api.getListData(path.split('/')[1])
  )

  if (isLoading || !data) {
    return <PageLoader />
  }

  return (
    <List data={data} />
  );
})

export default ListTab
