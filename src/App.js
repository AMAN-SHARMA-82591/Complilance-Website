import React from 'react'
import './App.css';
import Section_1 from './Section-1/Section-1';
import Section_2 from './Section-2/Section-2';


function App() {
  return (
    <div className="App">
            <section className="section-1">
                  <Section_1 />
            </section>
            <section className="section-2">
                  <Section_2 />
            </section>
    </div>
  );
}

export default App;
