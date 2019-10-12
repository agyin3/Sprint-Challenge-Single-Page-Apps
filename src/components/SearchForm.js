import React from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
      <form>
        <input type="text" id="filter" placeholder="Search for..." vlaue={props.value} onChange={props.handleChange}/>
      </form>
    </section>
  );
}
