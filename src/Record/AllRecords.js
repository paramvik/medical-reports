import React from 'react';
import RecordData from './RecordData';
import RecordImg from './RecordImg';
import styles from './AllRecords.module.css';

import { records } from '../data';

const AllRecords = (props) => {
  let filteredRecords = records.filter(record => {
    if(props.filter === "All") return true;
    return record.type === props.filter;
  });
  return filteredRecords.map(record => {
    return <div key={Math.random()*1000} className={styles.Card}>
      <RecordImg photo={record.img} text={record.type}/>
      <RecordData {...record} />
    </div>;
  });
};

export default AllRecords;