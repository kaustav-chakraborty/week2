import React from 'react';
import Signup from './signup'; // Make sure the file path is correct
import Appbar from './Appbar';

function App() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#eeeeee"
    }}>
      <Signup />
      <Appbar></Appbar>
    </div>
  );
}

export default App;
