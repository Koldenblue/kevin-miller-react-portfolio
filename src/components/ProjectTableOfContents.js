import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectTableOfContents() {
  let styles={
    tableOfContents: {
      backgroundColor: 'red',
      height: '200px',
      zIndex: '9999',
      position: 'fixed'
    }
  }

  return (
    <div style={styles.tableOfContents}>
      <a href='#bartender'>Express Bartender</a>
      <a href='#connect'>Connect 4</a>
    </div>
  )
}