import React from 'react';

import { Table } from 'antd'
import style from './style.css';

import data from './data';

const {dataSource, columns} = data;

const CustomTable = () => (
  <Table bordered className={style.table} dataSource={dataSource} columns={columns} scroll={{ x: 1500, y: 300 }}/>
);

export default CustomTable;
