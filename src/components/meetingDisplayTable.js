import React from 'react';
import styles from './meetingDisplayTable.module.css'

const MeetingDisplayTable = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>30</td>
          <td>Engineer</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>25</td>
          <td>Designer</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MeetingDisplayTable;
