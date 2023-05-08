import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props:CurrentBankomatPropsType) => {

    return (
        // В color передаем условие - если приходит 'Dollars', то отрисовываем background-color deepskyblue, если же нет, то уже #04d004
        <GeneralBancknote color={props.money.banknotes === 'Dollars' ? 'deepskyblue' : '#04d004'}>
            <Name>{props.money.banknotes}</Name>
            <Nominal>{props.money.value}</Nominal>
        </GeneralBancknote>
    );
};

const GeneralBancknote = styled.div`
  background-color: ${props => {
      if(props.color === 'deepskyblue') {
          return 'deepskyblue'
      } else {
          return '#04d004'
      }
    }
    
  };
  
  width: 400px;
  height: 200px;
  margin: 10px;
`
const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 50px;
`

const Nominal = styled.div`
  display: flex;
  justify-content: center;
  font-size: 60px;
  margin-top: 10px;
`

// --------------------------------------------------------------------------------------------------------------

// export const CurrentBankomat = (props:CurrentBankomatPropsType) => {
//
//     return (
//         props.money.banknotes === 'Dollars'
//             ? <GreenBancknote>
//                 <Name>{props.money.banknotes}</Name>
//                 <Nominal>{props.money.value}</Nominal>
//             </GreenBancknote>
//             : <BlueBancknote>
//                 <Name>{props.money.banknotes}</Name>
//                 <Nominal>{props.money.value}</Nominal>
//             </BlueBancknote>
//     );
// };
//
// const GreenBancknote = styled.div`
//   background-color: #04d004;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
// const BlueBancknote = styled.div`
//   background-color: deepskyblue;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
// const Name = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 30px;
//   margin-top: 50px;
// `
//
// const Nominal = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 60px;
//   margin-top: 10px;
// `
