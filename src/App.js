import React from 'react';
import './App.css';
import CommentsListContainer from "./ComentsListContainer";

const App = () => {
  return (
    <div className="App">
      Tu będzie lista komentarzy!
      <CommentsListContainer />
    </div>
  );
};

export default App;