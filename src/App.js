import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Courses from './component/Courses/Courses';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Courses></Courses>
      <Footer></Footer>
    </div>
  );
}

export default App;
