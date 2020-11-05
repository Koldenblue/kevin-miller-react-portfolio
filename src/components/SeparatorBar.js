import React from 'react';

function SeparatorBar(props) {

  return (
    <>
      <div className={`separator-${props.type}-top`}></div>
      <div className={`separator-${props.type}`}></div>
      <div className={`separator-${props.type}-bottom`}></div>
    </>
  )

}

export default SeparatorBar;