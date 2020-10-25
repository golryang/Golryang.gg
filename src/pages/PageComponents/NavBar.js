/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
class NavBar extends Component {
   render() {
      return (
         <div
            style={{
               background: '#31353D',
               display: 'flex',
               alignItems: 'center',
               height: 48,
            }}
         >
            <a
               href=""
               style={{
                  color: 'white',
                  display: 'flex',
                  padding: 16,
                  fontWeight: 700,
                  cursor: 'pointer',
               }}
            >
               GolryanGG
            </a>
            <a href=""
               style={{
                  color: 'white',
                  display: 'flex',
                  padding: 16,
                  fontWeight: 700,
                  cursor: 'pointer',
               }}>
               Ranking
            </a>
            <a
               href=""
               style={{
                  color: 'white',
                  display: 'flex',
                  padding: 16,
                  fontWeight: 700,
                  cursor: 'pointer',
                  marginLeft: "auto",
               }}
            >
               로그인
            </a>
         </div>
      );
   }
}

export default NavBar;
