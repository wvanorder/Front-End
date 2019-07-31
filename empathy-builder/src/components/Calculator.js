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
    background-color: tomato;
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
    background-color: #59B7FF;
    border-radius: 5px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    h2{
        font-size: 2.7rem;
        color: #ededed;
    }
    
`


const Calculator = props => {
    
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
        Housing: 0,
        Transportation: 0,
        Miscellaneous: 0,
    });

    const Sum = obj => {
        return Object.keys(obj).reduce((sum, key) => sum+parseFloat(obj[key] || 0), 0);
    };

    const recurringCalcTotal = Sum(recurringCategoryTotals)
    const relocationCalcTotal = Sum(relocationCategoryTotals)
 
    return(
        <CalcPage>
            <Results>
                <h2>Total Cost for Relocation: ${recurringCalcTotal + relocationCalcTotal} </h2>

            </Results>
        
            <CalculatorHolder>
                <Column>
                    <h2>My Recurring Expenses</h2>
                    {personalCosts.map(category => {
                        return <LineItem key={category.name} categoryTotals={recurringCategoryTotals} setCategoryTotals={setRecurringCategoryTotals} category={category}
                            />
                    })}
                    <h3>Total Recurring Expenses: ${recurringCalcTotal}</h3>
                </Column>
                <Column>
                    <h2>My Relocation Expenses</h2>
                    {relocationCosts.map(category => {
                        return <LineItem key={category.name} categoryTotals={relocationCategoryTotals} setCategoryTotals={setRelocationCategoryTotals} category={category} 
                            />
                    })}
                    <h3>Total Relocation Expenses: ${relocationCalcTotal}</h3>

                </Column>
            </CalculatorHolder>
        </CalcPage>
    );
};

export default Calculator;