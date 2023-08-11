// pages/TablePage.js
import React from 'react';
import MeetingDisplayTable from '../components/meetingDisplayTable'

const MeetingTable = () => {
  return (
    <div>
      <h1>List of Meetings</h1>
      <MeetingDisplayTable />
      <footer></footer>
    </div>
  );
};

export default MeetingTable;
