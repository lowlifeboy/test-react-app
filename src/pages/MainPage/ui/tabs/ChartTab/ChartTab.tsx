import {memo} from 'react'
import {useQuery} from "react-query";

import {Chart} from "entities/Chart";
import {Api} from "app/api";
import PageLoader from "shared/ui/PageLoader/PageLoader";

export interface ChartTabProps {
  path: string
}

const ChartTab = memo(({ path }: ChartTabProps) => {
  const {isLoading, data: response} = useQuery(
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
