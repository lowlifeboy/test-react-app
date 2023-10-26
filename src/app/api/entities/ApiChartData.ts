export interface ApiChartData {
  title: string
  labels: string[],
  datasets: {
    label: string,
    data: number[],
  }[]
}
