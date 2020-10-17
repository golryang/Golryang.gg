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
         <form style={{display: "flex", width: 624, height: 50 }}>
            <input type="text" style={{flex: 1}} onClick={SearchBarDropDown}/>
            <button>
               <span>KR</span>
              {/*<AiOutlineCaretDown  />*/}
            </button>
            <button>.GG</button>
         </form>
      );
   }
}

export default SearchBar;
