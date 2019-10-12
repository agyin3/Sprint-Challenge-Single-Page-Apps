import React, { useEffect, useState } from "react";
import styled  from 'styled-components';
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import SearchForm from "./SearchForm.js";

export default function CharacterList() {

  const CardWrapper = styled.div`
    width: 30%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    margin-bottom: 15px;
  `

  const Name = styled.h3`
    font-weight: bold;
    margin-bottom: -5px;
    text-align: center
  `

  const SubTitle = styled.p`
    text-align: center;

  `

  const CardImage = styled.img`
    width: 100%;
    hegiht: 50%;
  `

  const Button = styled.button`
    font-size: 14px;
    padding: 10px;
    color: blue;
    text-align: center;
    background: #fff;
    border: 1px solid blue;
  `

  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  const [page, setPage] = useState('https://rickandmortyapi.com/api/character/');

  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

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
    console.log(`Characters: ${characters.results}`)

  }, [page]);

  const nextPage = () => {
    characters.info.next !== '' ? setPage(characters.info.next) : setPage(page)
  }

  const prevPage = () => {
    characters.info.prev !== '' ? setPage(characters.info.prev) : setPage(page)
  }

  const handleChange = e => {
    setQuery(e.target.value);
    filterArray();
  }

  const filterArray = () => {
    let searchString = query;
    let nameArray = characters.results.map(index => index)
    console.log(nameArray);

    if(searchString.length > 0) {
      nameArray = nameArray.filter(l => {
        setCharacters(l.results.name.toLowerCase().match(searchString));
      })
    }
  }

  return (
    <section className="characters-list">
      <h2 className='page-title'>Characters</h2>
      <SearchForm handleChange={handleChange} value={query}/>
      <CharacterCard characters={characters} nextPage={nextPage} prevPage={prevPage}/>
    </section>
  );
}
