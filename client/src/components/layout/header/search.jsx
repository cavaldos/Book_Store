// import "./header.scss";
// import React from "react";
// import { useState } from "react";
// import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
// import Tippy from "@tippyjs/react/headless";
// import "tippy.js/dist/tippy.css";
// import axios from "axios";
// function Search() {
//   //http://localhost:8001/search/code
//   const [value, setValue] = useState("");
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   const handleClear = () => {
//     setValue("");
//   };

//   return (
//     <>
//       <Tippy
//         visible={value.length > 0}
//         interactive={true}
//         render={(attrs) => <div className="search-result">{value}</div>}
//         placement="bottom"
//       >
//         <div className="search-wrapper">
//           <input
//             className="search-input"
//             type="text"
//             placeholder="search-input"
//             value={value}
//             onChange={handleChange}
//           />
//           {value.length > 0 && (
//             <button>
//               <CloseCircleOutlined
//                 className="search-icon-close"
//                 onClick={handleClear}
//               />
//             </button>
//           )}
//           <Tippy content="Search" placement="right">
//             <SearchOutlined className="search-icon-search" />
//           </Tippy>
//         </div>
//       </Tippy>
//     </>
//   );
// }

// export default Search;



import "./header.scss";
import React, { useState } from "react";
import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import axios from "axios";

function Search() {
  const [value, setValue] = useState("");
  const [tooltipContent, setTooltipContent] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  let typingTimeout = null;

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setValue(searchValue);
    clearTimeout(typingTimeout);

    typingTimeout = setTimeout(() => {
      fetchTooltipContent(searchValue);
    }, 1000);
  };

  const handleClear = () => {
    setValue("");
    setSuggestions([]);
  };

  const fetchTooltipContent = (searchValue) => {
    const apiUrl = `http://localhost:8001/search/${searchValue}`;
    axios
      .get(apiUrl)
      .then((response) => {
        const titles = response.data.map((item) => item.Tittle);
        setTooltipContent(titles.join(", "));
        setSuggestions(titles);
      })
      .catch((error) => console.log(error));
  };

  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion);
    setSuggestions([]);
    fetchTooltipContent(suggestion);
  };

  return (
    <>
      <Tippy
        visible={value.length > 0}
        interactive={true}
        render={(attrs) => (
          <div className="search-result">{tooltipContent}</div>
          
        )}
        placement="bottom"
      >
        <div className="search-wrapper">
          <input
            className="search-input"
            type="text"
            placeholder="search-input"
            value={value}
            onChange={handleChange}
          />
          {value.length > 0 && (
            <button>
              <CloseCircleOutlined
                className="search-icon-close"
                onClick={handleClear}
              />
            </button>
          )}
          <Tippy content="Search" placement="right">
            <SearchOutlined className="search-icon-search" />
          </Tippy>
        </div>
      </Tippy>
      {suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Search;
/*
import "./header.scss";
import React, { useState } from "react";
import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

function Search() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  const getSearchResults = async () => {
    try {
      const response = await fetch(`https://example-api.com/search?q=${value}`);
      const data = await response.json();
      const searchResults = data.results;
      const filteredResults = searchResults.filter((result) =>
        result.title.toLowerCase().includes(value.toLowerCase())
      );
      if (filteredResults.length > 0) {
        return (
          <div className="search-result">
            {filteredResults.map((result) => (
              <div key={result.id}>{result.title}</div>
            ))}
          </div>
        );
      } else {
        return <div className="search-result">No results found</div>;
      }
    } catch (error) {
      console.error(error);
      return <div className="search-result">Error fetching search results</div>;
    }
  };

  return (
    <Tippy
      interactive={true}
      visible={value.length > 0}
      render={(attrs) => getSearchResults()}
    >
      <div className="search-wrapper">
        <input
          className="search-input"
          type="text"
          placeholder="search-input"
          value={value}
          onChange={handleChange}
        />
        {value.length > 0 && (
          <button>
            <CloseCircleOutlined
              className="search-icon-close"
              onClick={handleClear}
            />
          </button>
        )}
        <Tippy content="Search" placement="right">
          <SearchOutlined className="search-icon-search" />
        </Tippy>
      </div>
    </Tippy>
  );
}

export default Search;


*/
/*
import "./header.scss";
import React, { useState } from "react";
import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

function Search() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  const getSearchResults = () => {
    // Replace this example code with your own data source and search logic
    const searchResults = [
      "Search result 1",
      "Search result 2",
      "Search result 3",
      "Search result 4",
      "Search result 5",
    ];
    const filteredResults = searchResults.filter((result) =>
      result.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredResults.length > 0) {
      return (
        <div className="search-result">
          {filteredResults.map((result) => (
            <div key={result}>{result}</div>
          ))}
        </div>
      );
    } else {
      return <div className="search-result">No results found</div>;
    }
  };

  return (
    <Tippy
      interactive={true}
      visible={value.length > 0}
      render={(attrs) => getSearchResults()}
    >
      <div className="search-wrapper">
        <input
          className="search-input"
          type="text"
          placeholder="search-input"
          value={value}
          onChange={handleChange}
        />
        {value.length > 0 && (
          <CloseCircleOutlined
            className="search-icon-close"
            onClick={handleClear}
          />
        )}
        <Tippy content="Search" placement="right">
          <SearchOutlined className="search-icon-search" />
        </Tippy>
      </div>
    </Tippy>
  );
}

export default Search;


*/
