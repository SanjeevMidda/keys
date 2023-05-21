import React from 'react'

function Key({backgroundColor, animation}) {

    let styles ={
        backgroundColor: backgroundColor,
        animation: animation,
    }

  return (
    <div className="key" style={styles}>
        <div className="circle"></div>
    </div>
  )
}

export default Key