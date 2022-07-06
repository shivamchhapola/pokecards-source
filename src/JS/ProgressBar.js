import React from 'react'

const ProgressBar = ({ bgcolor, stat, height }) => {

  const containerStyles = {
    height: height,
    width: '100%',
    backgroundColor: "#D1D1D1",
    borderRadius: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${(stat*100)/255}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const labelStyles = {
    paddingRight: 5,
    color: 'white',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{stat}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
