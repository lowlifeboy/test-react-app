import {memo, useEffect, useRef, useState} from 'react'

import {Chart} from "entities/Chart";
import {Api} from "app/api";
import {TableTabProps} from "pages/MainPage/ui/tabs/TableTab/TableTab";
import PageLoader from "shared/ui/PageLoader/PageLoader";
import {ApiChartData} from "app/api/entities";
import {useQuery, useQueryClient} from "react-query";

export interface ChartTabProps {
  path: string
}

const ChartTab = memo(({ path }: ChartTabProps) => {
  const {isLoading, error, data: response} = useQuery(
    'chart',
    () => Api.getChartData(path.split('/')[1])
  )

  if (isLoading || !response) {
    return <PageLoader />
  }

  return (
    <Chart title="Some params by Months" labels={response.data.labels} datasets={response.data.datasets} />
  );
})

export default ChartTab
