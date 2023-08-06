import "./header.scss";
import React from "react";
import { useState } from "react";
import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

function Search() {
  const [value, setValue] = useState('');
  const [matchedBooks, setMatchedBooks] = useState([]);

  const handleChange = (event) => {
    const searchQuery = event.target.value;
    setValue(searchQuery);
    // Send the book name to the backend server for search suggestions
    fetchSuggestions(searchQuery);
  };

  const fetchSuggestions = (searchQuery) => {
    // Replace 'http://localhost:8001/findbooks' with the actual URL of your backend API to fetch search suggestions.
    fetch('http://localhost:8001/findbooks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Tittle: searchQuery }),
    })
      .then(response => response.json())
      .then(data => {
        // Process the data received from the server
        console.log('Server response:', data);
        // Update the state with the matched books
        setMatchedBooks(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleClear = () => {
    setValue("");
    setMatchedBooks([]);
  };

  return (
    // <Tippy
    //   visible={value.length > 0}
    //   interactive={true}
    //   render={(attrs) => <div className="search-result">{value}</div>}
    //   placement="bottom"
    // >
    //   <div className="search-wrapper">
    //     <input
    //       className="search-input"
    //       type="text"
    //       placeholder="search-input"
    //       value={value}
    //       onChange={handleChange}
    //     />
    //     {value.length > 0 && (
    //       <button>
    //         <CloseCircleOutlined
    //           className="search-icon-close"
    //           onClick={handleClear}
    //         />
    //       </button>
    //     )}
    //     <Tippy content="Search" placement="right">
    //       <SearchOutlined className="search-icon-search" />
    //     </Tippy>
    //   </div>
    // </Tippy>
    <></>
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
