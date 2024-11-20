import React from 'react';

const Greeting = ({ name }) => {
  const showAlert = () => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <h1 data-testid="greeting-text">Hello, {name}</h1>
      <button data-testid="alert-button" onClick={showAlert}>
        Show Alert
      </button>
    </div>
  );
};

export default Greeting;
