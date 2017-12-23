import { request, config } from '../utils'

const { api } = config
const { machineConfigs } = api

export async function query (params) {
  return request({
    //  url: 'http://localhost:8080/api/v1/jobConfig/list',
    url: machineConfigs,
    method: 'get',
    data: params,
  })
}
