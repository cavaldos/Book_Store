import "./header.scss";
import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import axios from "axios";
import { Input, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const { Search } = Input;

function Searchs() {
  const navigate = useNavigate();
  const params = useParams();

  const [value, setValue] = useState("");
  const [tooltipContent, setTooltipContent] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [idSearch, setIdSearch] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state variable for loading

  let typingTimeout = null;

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setValue(searchValue);
    setIsSearchClicked(false);
    clearTimeout(typingTimeout);

    typingTimeout = setTimeout(() => {
      fetchTooltipContent(searchValue);
    }, 1000);
  };

  function handleSearch() {
    setValue("");
    setSuggestions([]);

    navigate(`/detail-book/${idSearch}`);
  }

  const fetchTooltipContent = (searchValue) => {
    const apiUrl = `${process.env.REACT_APP_API_PORT}/search/${searchValue}`;
    setIsLoading(true); // Set loading to true before making the API call
    axios
      .get(apiUrl)
      .then((response) => {
        const titles = response.data.map((item) => item.Tittle);
        const id = response.data.map((item) => item._id);
        setTooltipContent(titles.join(", "));
        setSuggestions(titles);
        setIdSearch(id);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false); // Set loading to false after the API call is completed
      });
  };

  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion);
    setSuggestions([]);
    fetchTooltipContent(suggestion);
  };

  const handleSearchClick = () => {
    setIsSearchClicked(true);
    handleSearch(value);
  };

  return (
    <>
      <Tippy
        visible={value.length > 0}
        interactive={true}
        render={() => (
          <div className="search-result">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
        placement="bottom"
      >
        <div>
          <Search
            className="search-input"
            type="text"
            placeholder="search-input"
            value={value}
            onChange={handleChange}
            onSearch={handleSearchClick}
            loading={isLoading} // Pass the loading state to the loading prop of Search
          />
        </div>
      </Tippy>
    </>
  );
}

export default Searchs;
