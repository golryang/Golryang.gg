import React, { Component } from 'react';
import MainContent from './PageComponents/MainContent';
import NavBar from './PageComponents/NavBar';
import SearchBar from './PageComponents/SearchBar';

class MainPages extends Component {
   render() {
      return (
         <div>
            <NavBar />
            <MainContent />
            <div
               style={{
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <SearchBar />
            </div>
         </div>
      );
   }
}

export default MainPages;
