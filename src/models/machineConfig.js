/* global window */
import modelExtend from 'dva-model-extend'
import { config } from '../utils'
import { startJob,stopJob } from '../services/machineConfig'
import * as machineConfigService from '../services/machineConfigs'
import { pageModel } from './common'
const { query } = machineConfigService

export default modelExtend(pageModel, {
  namespace: 'machineConfig',

  state: {
    currentItem: {},
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/machineConfig') {
          const payload = location.query || { current: 1, pageSize: 10 }
          dispatch({
            type: 'query',
            payload,
          })
        }
      })
    },
  },

  effects: {
    * query ({ payload = {} }, { call, put }) {
      console.log('fdas')
      const data = yield call(query, payload)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      }
    },
    * startJob ({ payload }, { call, put, select }) {
      const data = yield call(startJob, payload )
      if (data.success) {
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },
    * stopJob ({ payload }, { call, put, select }) {
      const data = yield call(stopJob, payload )
      if (data.success) {
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },
  },

  reducers: {
  },
})
