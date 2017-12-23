import { request, config } from '../utils'

const { api } = config
const { machineConfig } = api

export async function startJob (params) {
  return request({
    url: machineConfig.replace('/:id', '/startJob'),
    method: 'get',
    data: params,
  })
}

export async function stopJob (params) {
  return request({
    url: machineConfig.replace('/:id', '/stopJob'),
    method: 'get',
    data: params,
  })
}

