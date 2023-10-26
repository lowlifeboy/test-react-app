import {
  ApiResponse,
  ApiTab,
  ApiChartData,
  ApiListItem,
  ApiTableData
} from "./entities";

export default interface IApi {
  getTabsList(): Promise<ApiResponse<ApiTab[]>>;
  getChartData(id: string): Promise<ApiResponse<ApiChartData>>;
  getListData(id: string): Promise<ApiResponse<ApiListItem[]>>;
  getTableData(id: string): Promise<ApiResponse<ApiTableData>>;
}
