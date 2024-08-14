import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => {

  let [keyword, setKeyword] = useState("");
  const [focusedField, setFocusedField] = useState(false);
  const [noKeyword, setNoKeyword] = useState(false); // 검색어가 없는 경우
  const [noMatched, setNoMatched] = useState(false); // 검색어가 매칭되지 않는 경우
  const { contactList, filteredList } = useSelector(state => state);
  let dispatch = useDispatch();

  const searchByName = (event) => {
    event.preventDefault(); // 리로드 막기

    // 1. 검색어가 없는 경우
    if (keyword === "") {
      setNoKeyword(true);
      setNoMatched(false);
    }
    else {
      setNoKeyword(false);
      dispatch({type:"SEARCH_BY_NAME", payload:{keyword}});
    }
  };

  useEffect(() => {
    // 검색어가 있는 상태에서만 필터링 상태를 확인
    if (keyword !== "") {
      if (filteredList.length === 0) {
        setNoMatched(true);
      } else {
        setNoMatched(false);
      }
    } else {
      setNoMatched(false); // 검색어가 없을 때는 매칭 상태를 확인할 필요 없음
    }
  }, [filteredList, keyword]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchByName(event);
    }
  }
  
  return (
    <div>
      <div className={`search-form ${focusedField ? "focus" : ""}`}>
        <input
          text="text"
          placeholder="이름으로 검색"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocusedField(true)}
          onBlur={() => setFocusedField(false)}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" onClick={searchByName} />
      </div>
      <div className="msgs">
        {noKeyword && (<div className="msg-desc">키워드가 입력되지 않았습니다.</div>)}
        {noMatched && (<div className="msg-desc">검색 결과가 없습니다.</div>)}
      </div>
    </div>
  )
};

export default SearchBox;
