import React from 'react';
import ListOfWeathers from './ListOfWeathers';
import SearchBox from './SearchBox';

export default function App() {
  return (
    <div className="App">
      <div className="heading_container hidden-xs"/>
      <h1>Weather Monster</h1>
      <SearchBox/>
      <ListOfWeathers/>
    </div>
  );

}