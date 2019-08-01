import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import LineItem from './LineItem';

import { personalCosts, relocationCosts } from '../cost data';



import 'antd/dist/antd.css';

const CalcPage = styled.div`
    margin-top: 100px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

const Results = styled.div`
    width: 80vw;
    height: 80px;
    //background-color: #DB6AA7;
    background-color: #6DFACC;
    border: 1px solid #66ccda;
    border-radius: 5px;
    h2{
        color: white;
    }
`

const CalculatorHolder = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
`
const Column = styled.div`
    width: 45%;
    max-width: 600px;
    height: 800px;
    background-color: mediumpurple;
    border-radius: 5px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    h2{
        font-size: 2.7rem;
        color: white;
    }
    h3{
        font-size: 2.5rem;
        color: #654EB0;
    }
    h4{
        font-size: 2rem;
        color: white;
    }
    
`

const SubtotalStyle = styled.div `
    //background-color: #DB6AA7;
    background-color: #6DFACC;
    border: 1px solid #66ccda;
    border-radius: 5px;
    padding: 1.2rem 3rem;
    width: 90%;
    height: auto;
`


const Calculator = props => {
    
    

    const [recurringTotal, setRecurringTotal] = useState(0);
    const [relocationTotal, setRelocationTotal] = useState(0);
    const [recurringCategoryTotals, setRecurringCategoryTotals] = useState({
        Food: 0,
        Transportation: 0,
        Health: 0,
        Debt: 0,
        Housing: 0,
        Utilities: 0,
        Clothing: 0
    });

    const [relocationCategoryTotals, setRelocationCategoryTotals] = useState({
        Career: 0,
        Lodging: 0,
        Housing: 0,
        Transportation: 0,
        Miscellaneous: 0,
    });

    



    const updateRecurringTotal = (amount) => {
        let newSum = recurringTotal + amount;
        setRecurringTotal(newSum);
    }

    const updateRelocationTotal = amount => {
        let newSum = relocationTotal + amount;
        setRelocationTotal(newSum);
    }

    return(
        <CalcPage>
            <Results>
                <h2>Total Cost for Relocation: ${recurringTotal + relocationTotal} </h2>
            </Results>
        
            <CalculatorHolder>
                <Column>
                    <h2>My Recurring Expenses</h2>
                    {personalCosts.map(category => {
                        return <LineItem key={category.name} category={category} updateRecurringTotal={updateRecurringTotal} 
                            />
                    })}
                    <SubtotalStyle><h4>Total Recurring Expenses: ${recurringTotal}</h4></SubtotalStyle>
                </Column>
                <Column>
                    <h2>My Relocation Expenses</h2>
                    {relocationCosts.map(category => {
                        return <LineItem key={category.name} category={category} updateRelocationTotal={updateRelocationTotal} 
                            />
                    })}
                    <SubtotalStyle><h4>Total Relocation Expenses: ${Math.floor(relocationTotal)}</h4></SubtotalStyle>
                </Column>
            </CalculatorHolder>
        </CalcPage>
    );
};

export default Calculator;