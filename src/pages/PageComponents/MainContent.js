import React, { Component } from 'react';

class MainContent extends Component {
   render() {
      return (
         <div style={{ display: 'flex', height: 200 }}>
            <div
               style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", height: '100%', border: '1px solid #38393E' }}
            >
               <p style={{color: "white", fontSize: 48, fontWeight: 700}}>Lorem Ipsum.</p>
            </div>
         </div>
      );
   }
}

export default MainContent;
