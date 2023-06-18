import React from "react";

import "./header.scss";
function Search() {
  return (
    <>
      <form action="search.html" method="post" className="search-form">
        <input
          type="text"
          name="search_box"
          required
          placeholder="search courses..."
          maxlength="100"

        />
        <button type="submit" class="fas fa-search"></button>
      </form>
    </>
  );
}

export default Search;
