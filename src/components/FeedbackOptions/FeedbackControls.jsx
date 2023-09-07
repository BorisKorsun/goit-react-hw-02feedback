import React, { Component } from 'react';

const FeedbackControls = ({ config }) => {
  return (
    <>
      {config.map(button => {
        return <button key={button} type="button">{button}</button>;
      })}
    </>
  );
};

export default FeedbackControls;
