import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";
import styled from "styled-components";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filterValue:BanknotsType) => void // давайте подумаем, setFilter -это гpузчик, у которого всегда в руках товар
  }

export const Country = (props: CountryPropsType) => {
    const setAll = () => {
        // засетаем 'All'
        props.setFilterValue('All')
    }

    const setDollars = () => {
        // засетаем 'Dollars'
        props.setFilterValue('Dollars')
    }

    const setRUBLS = () => {
        // засетаем 'RUBLS'
        props.setFilterValue('RUBLS')
    }

    return (
        <div>
            <Button onClick={setAll}>All</Button>
            <Button onClick={setDollars}>Dollars</Button>
            <Button onClick={setRUBLS}>RUBLS</Button>
            <City data={props.data}/>
        </div>
    );
};


const Button = styled.button`
  background-color: beige;
  color: #444;
  border: 2px solid #04d004;
  padding: 5px 10px;
  text-transform: uppercase;
  margin: 5px;
  
  &:hover {
    background-color: #04d004;
    color: beige;
  }
  
  &:active {
    background-color: #282c34;
  }
`

