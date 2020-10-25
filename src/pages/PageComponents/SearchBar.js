import React, { Component } from 'react';
import { ABSOLUTE } from 'relateurl';
//import { AiOutlineCaretDown } from 'react-icons/ai';
class SearchBar extends Component {

   render() {
      const SearchBarDropDown = () =>{
         return(
            <div>
               <div>
                  {/* redux를 통한 상태관리 필요 및 상태 조정 함수임. SearchBarDropDown 컴포넌트를 만든 뒤 렌더 후 display값 조정 요망.*/}
               </div>
            </div>
         );
      }
      return (
         <form style={{display: "flex", flexDirection: "column", width: 624, height: 50,  }}>
            <div style={{display: "flex"}}>
               <input type="text" style={{flex: 1, fontSize: 20, fontWeight: 500, padding: 16, outline:"none"}} placeholder={"소환사명, 소환사명, ..."} onClick={SearchBarDropDown}/>
               <button>
                <span>KR</span>
               {/*<AiOutlineCaretDown  />*/}
                </button>
               <button>.GG</button>
            </div>
            <div style={{display: "flex", flex: 1, background: "gray"}}>
               <div style={{display: "flex", flex: 1, justifyContent: "center"}}>
                  <div style={{display: "flex", flexDirection: "column"}}>
                     최근검색
                     <div style={{display: "none"}}>
                        <div>For Example.</div>
                        <div>For Example.</div>
                        <div>For Example.</div>
                     </div>
                  </div>
               </div>
               <div style={{display: "flex", flex: 1, justifyContent: "center"}}>
                  <div style={{display: "flex", flexDirection: "column"}}>
                     최근검색
                     <div style={{display: "none"}}>
                        <div>For Example.</div>
                        <div>For Example.</div>
                        <div>For Example.</div>
                     </div>
                  </div>
               </div>
            </div>
         </form>
      );
   }
}

export default SearchBar;
