import React from 'react';
import styles from './meetingDisplayTable.module.css'

const MeetingDisplayTable = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Meeting Name</th>
          <th>Address</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>somethingsomething anon</td>
          <td>1234 alchie street</td>
          <td>Monday 11 am</td>
        </tr>
        <tr>
          <td>obj.Name</td>
          <td>obj.Address</td>
          <td>obj.Time</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MeetingDisplayTable;
