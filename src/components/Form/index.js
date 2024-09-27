import React, { useState } from 'react';
import * as C from "./styles";
import Grid from "../Grid"

const Form = ({ handleAdd, transactionList ,setTransactionList }) => {
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setExpense] = useState(false); 

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert('Enter the description and value!');
            return;
        } else if (amount < 1) {
            alert('The value has to be positive!');
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: parseFloat(amount),
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc('');
        setAmount('');
    };

    return (
        <C.Container>
            <C.InputContent>
                <C.Label>Description</C.Label>
                <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Value</C.Label>
                <C.Input
                    value={amount}
                    type="number"
                    onChange={(e) => setAmount(e.target.value)}
                />
            </C.InputContent>
            <C.InputContent>
                <C.RadioGroup>
                    <C.Input
                        type="radio"
                        id="rIncome"
                        name="group1"
                        checked={!isExpense} 
                        onChange={() => setExpense(false)}
                    />
                    <C.Label htmlFor="rIncome">Inflow</C.Label>
                    <C.Input
                        type="radio"
                        id="rExpense"
                        name="group1"
                        checked={isExpense} 
                        onChange={() => setExpense(true)}
                    />
                    <C.Label htmlFor="rExpense">Outflow</C.Label>
                </C.RadioGroup>
                <C.Button onClick={handleSave}>Adding</C.Button>
            </C.InputContent>
            <Grid itens={transactionList} setItens={setTransactionList} />
        </C.Container>
    );
};

export default Form;

