import React, { useEffect, useState } from "react";
import styled  from 'styled-components';
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import SearchForm from "./SearchForm.js";

export default function CharacterList() {

  // **STATE**

  const [characters, setCharacters] = useState([]);

  const [query, setQuery] = useState("");

  const [page, setPage] = useState(`https://rickandmortyapi.com/api/character/?page=1`);


  // Search feature useEffect

  useEffect(() => {

    async function fetchData() {
      try {
        const charactersData = await axios.get(`${page}&name=${query}`);
        console.log(charactersData)
        setCharacters(charactersData.data)
      }
      catch(err) {
        console.log(err)
      }
    }

    fetchData()

  }, [query]);

  // Pagination useEffect

  useEffect(() => {

    async function fetchData() {
      try {
        const charactersData = await axios.get(`${page}`);
        console.log(charactersData)
        setCharacters(charactersData.data)
      }
      catch(err) {
        console.log(err)
      }
    }

    fetchData()

  }, [page]);

  // Next/Previous Page Functions

  const nextPage = () => {
    characters.info.next !== '' ? setPage(characters.info.next) : setPage(page)
  }

  const prevPage = () => {
    characters.info.prev !== '' ? setPage(characters.info.prev) : setPage(page)
  }

  // Search Function

  const handleChange = e => {
    setPage(`https://rickandmortyapi.com/api/character/?page=1&name=${e.target.value}`)
  }

  return (
    <section className="characters-list">
      <h2 className='page-title'>Characters</h2>
      <SearchForm handleChange={handleChange} value={query}/>
      <CharacterCard characters={characters} nextPage={nextPage} prevPage={prevPage}/>
    </section>
  );
}
