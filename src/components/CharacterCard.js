import React from "react";
import styled from 'styled-components';

export default function CharacterCard(props) {

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


  return(
    <section className="characters-list">
      <div className='grid-view'>
      {props.characters.results && props.characters.results.map(character => {
        return(
          <CardWrapper key={character.id}>
            <CardImage src={character.image} />
            <Name>{character.name}</Name>
            <SubTitle>{character.status}</SubTitle>
          </CardWrapper>
          )
        })}
      </div>
      <div className='button-wrapper'>
      <Button onClick={props.prevPage}>Prev</Button>
      <Button onClick={props.nextPage}>Next</Button>
      </div>
    </section>
  );
}
