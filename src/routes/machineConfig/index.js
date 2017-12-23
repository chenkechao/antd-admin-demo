import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Page } from '../../components/Page'
import queryString from 'query-string'
import List from './List'

const MachineConfig = ({ location, dispatch, machineConfig, loading }) => {
  location.query = queryString.parse(location.search)
  const { list, pagination } = machineConfig

  const listProps = {
    dataSource: list,
    loading: loading.effects['machineConfig/query'],
    pagination,
    location,
    onStartJob (item) {
      dispatch({
        type: 'machineConfig/startJob',
        payload: {
          jobId: item.jobId,
          machine: item.machine.ip,
        },
      })
    },
    onStopJob (item) {
      dispatch({
        type: 'machineConfig/stopJob',
        payload: {
          jobId: item.jobId,
          machine: item.machine.ip,
        },
      })
    },
  }
  return (
    <Page inner>
      <List {...listProps} />
    </Page>
  )
}

MachineConfig.propTypes = {
  machineConfig: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ machineConfig, loading }) => ({ machineConfig, loading }))(MachineConfig)
