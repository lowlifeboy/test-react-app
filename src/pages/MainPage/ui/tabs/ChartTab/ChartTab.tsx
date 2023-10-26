import {memo} from 'react'
import {useQuery} from "react-query";

import {Chart} from "entities/Chart";
import {Api} from "app/api";
import PageLoader from "shared/ui/PageLoader/PageLoader";

export interface ChartTabProps {
  path: string
}

const ChartTab = memo(({ path }: ChartTabProps) => {
  const {isLoading, data} = useQuery(
    'chart',
    () => Api.getChartData(path.split('/')[1])
  )

  if (isLoading || !data) {
    return <PageLoader />
  }

  return (
    <Chart title="Some params by Months" labels={data.labels} datasets={data.datasets} />
  );
})

export default ChartTab
