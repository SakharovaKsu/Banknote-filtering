import React from 'react';
import {CurrentBankomat} from "./CurrentBankomat";
import {MoneyType} from "./App";
import styled from "styled-components";

type CityPropsType = {
    data: MoneyType[] //встречаем денюжки
}

export const City = (props: CityPropsType) => {

    // const mappedMoney = props.data.map(el => {
    //         return (
    //             <div>
    //                 <div>{el.banknotes}</div>
    //                 <div>{el.value}</div>
    //                 <div>{el.number}</div>
    //             </div>
    //         )
    //     })

    const mappedMoney = props.data.map(el => <CurrentBankomat money={el} />)

    return (
        <Wrapper>{mappedMoney}</Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 30px;
`

// Ну и наконец давайте версточку натянем, для этого будем использовать StyledComponents
// npm add styled-components
// npm add @types/styled-components

//3
// Вроде все норм, ну точнее почти норм- дублирование-это грех. Хотелось бы от него избавиться.
// И StyledComponents нам в этом отлично поможет, ведь он может принимать пропсы!
// Как это сделать в документашке