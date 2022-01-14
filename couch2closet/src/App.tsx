import React from 'react';
import PageMeta from './components/MetaSection';
import './App.css';
import PageHeader from './components/HeaderSection';
import BodySection from './components/SearchSection';

function App() {
  return (
    <>
      <PageMeta />
      <PageHeader />
      <hr></hr>
      <BodySection />
    </>
  );
}

export default App;
