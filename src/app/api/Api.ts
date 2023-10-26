import IApi from './IApi';
import {$api} from "shared/api/api";
import {ApiTab} from "app/api/entities/ApiTab";
import {ApiResponse, ApiChartData, ApiListItem, ApiTableData} from "./entities";

export default class Api implements IApi {

  private async getData(path: string): Promise<any> {
    return $api.get(path)
  }

  public async getTabsList(): Promise<ApiResponse<ApiTab[]>> {
    return this.getData('/tabs');
  }

  public async getChartData(id: string): Promise<ApiResponse<ApiChartData>> {
    return this.getData(id);
  }

  public async getListData(id: string): Promise<ApiResponse<ApiListItem[]>> {
    return this.getData(id);
  }

  public async getTableData(id: string): Promise<ApiResponse<ApiTableData>> {
    return this.getData(id);
  }
}
