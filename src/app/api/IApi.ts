import {
  ApiResponse,
  ApiTab,
  ApiChartData,
  ApiListItem,
  ApiTableData
} from "./entities";

export default interface IApi {
  getTabsList(): Promise<ApiTab[]>;
  getChartData(id: string): Promise<ApiChartData>;
  getListData(id: string): Promise<ApiListItem[]>;
  getTableData(id: string): Promise<ApiTableData>;
}
