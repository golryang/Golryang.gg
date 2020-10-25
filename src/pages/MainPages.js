import React, { Component } from 'react';
import MainContent from './PageComponents/MainContent';
import NavBar from './PageComponents/NavBar';
import SearchBar from './PageComponents/SearchBar';

class MainPages extends Component {
   render() {
      return (
         <div style={{display: "flex", flexDirection: "column"}}>
            <NavBar />
            <MainContent />
            <div style={{display: "flex", flexDirection: "column", alignItems: "space-between"}}>
            <div
               style={{
                  height: '500px',
                  display: 'flex',
                  justifyContent: 'center',
               }}
            >
               <SearchBar />
               <div style={{display: "flex", justifyContent: "center"}}></div>
               </div>
            <div style={{display: "flex", justifyContent: "center", color: "white"}}>Footer</div>
            </div>
         </div>
      );
   }
}

export default MainPages;
