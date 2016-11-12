import React from 'react';

import props from './dragger';

import { Upload, message } from 'antd';
import style from './style.css';

const Icon = require('antd/lib/icon');
const DraggerAnt = Upload.Dragger;

const Dragger = () => (
  <div className={style.dragger}>
        <DraggerAnt {...props}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </DraggerAnt>
  </div>
);

export default Dragger;
