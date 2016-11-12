import React from 'react';

import { Table } from 'semantic-ui-react'
import style from './style.css';

const {Header, Body, Row, Cell, HeaderCell} =  Table;

const CustomTable = () => (
  <div className={style.table}>
    <Table  celled selectable>
      <Header>
        <Row>
          <HeaderCell>Name</HeaderCell>
          <HeaderCell>Status</HeaderCell>
          <HeaderCell>Notes</HeaderCell>
        </Row>
      </Header>

      <Body>
        <Row>
          <Cell>John</Cell>
          <Cell>No Action</Cell>
          <Cell>None</Cell>
        </Row>
        <Row>
          <Cell>Jamie</Cell>
          <Cell>Approved</Cell>
          <Cell>Requires call</Cell>
        </Row>
        <Row>
          <Cell>Jill</Cell>
          <Cell>Denied</Cell>
          <Cell>None</Cell>
        </Row>
        <Row>
          <Cell>John</Cell>
          <Cell>No Action</Cell>
          <Cell>None</Cell>
        </Row>
        <Row>
          <Cell>Jamie</Cell>
          <Cell>Approved</Cell>
          <Cell>Requires call</Cell>
        </Row>
        <Row>
          <Cell>Jill</Cell>
          <Cell>Denied</Cell>
          <Cell>None</Cell>
        </Row>
      </Body>
    </Table>
  </div>
);

export default CustomTable;
