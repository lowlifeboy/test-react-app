import {memo} from 'react'

import AppListItem from "shared/ui/AppListItem/AppListItem";
import AppList from "shared/ui/AppList/AppList";
import {ApiListItem} from "app/api/entities/ApiListItem";

export interface ListProps {
  data: ApiListItem[]
}

const List = memo(({data}: ListProps) => {
  return (
    <AppList>
      {data.map((item) => {
        return <AppListItem key={item.id}>{item.title}: {item.text}</AppListItem>
      })}
    </AppList>
  )
})

export default List
