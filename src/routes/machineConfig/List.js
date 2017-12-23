import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Button, Divider, Tag } from 'antd'
import classnames from 'classnames'
import { DropOption } from '../../components/DropOption'
import queryString from 'query-string'
import styles from './List.less'

const confirm = Modal.confirm

const List = ({ onDeleteItem, onEditItem, onRuleConfig,
  onStartJob, onStopJob, isMotion, location, ...tableProps }) => {
  location.query = queryString.parse(location.search)

  let spanSum = 0

  const startJob = (record, e) => {
    onStartJob(record)
  }

  const stopJob = (record, e) => {
    onStopJob(record)
  }

  const columns = [
    {
      title: 'ip',
      dataIndex: 'machine.ip',
      key: 'ip',
      render: (value, row, index) => {
        const obj = {
          children: value,
          props: {},
        };
        if (row.machine.jobSize > 1) {
          if (index == spanSum || spanSum == 0) {
            spanSum += row.machine.jobSize
            obj.props.rowSpan = row.machine.jobSize
          }else{
            obj.props.rowSpan = 0
          }
        } else {
          spanSum ++
        }
        return obj
      },
    },
    {
      title: 'job',
      dataIndex: 'jobId',
      key: 'job',
    },
    {
      title: '运行状态',
      key: 'status',
      render: (text, record, index) => {
        let runningTag
        if (record.status == 1) {
          runningTag = <Tag color="green">正在运行</Tag>
        } else {
          runningTag = <Tag color="red">已经停止</Tag>
        }
        return (<div>
          {runningTag}
        </div>)
      },
    },
    {
      title: '操作',
      key: 'operation',
      render: (text, record, index) => {
        let button
        if (record.status == 1) {
          button = <Button type="primary" onClick={e => stopJob(record, e)}>停止</Button>
        } else {
          button = <Button type="primary" onClick={e => startJob(record, e)}>启动</Button>
        }
        return (<div>
          {button}
        </div>)
      },
    },
  ]

  return (
    <div>
      <Table
        {...tableProps}
        className={classnames({ [styles.table]: true, [styles.motion]: isMotion })}
        bordered
        scroll={{ x: 1250 }}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    </div>
  )
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  onStartJob: PropTypes.func,
  onStopJob: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object,
}

export default List
