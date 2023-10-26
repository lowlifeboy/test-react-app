import IApi from './IApi';
import {$api} from "shared/api/api";
import {ApiTab} from "app/api/entities/ApiTab";
import {ApiResponse, ApiChartData, ApiListItem, ApiTableData} from "./entities";

export default class Api implements IApi {

  private async getData(path: string): Promise<any> {
    const {data} = await $api.get('/db.json')
    return data[path]
  }

  public async getTabsList(): Promise<ApiTab[]> {
    return this.getData('tabs')
  }

  public async getChartData(id: string): Promise<ApiChartData> {
    return this.getData(id)
  }

  public async getListData(id: string): Promise<ApiListItem[]> {
    return this.getData(id)
  }

  public async getTableData(id: string): Promise<ApiTableData> {
    return this.getData(id)
  }
}
