
import React, { useState } from "react";
import CustomLoginLayout from "../Components/CustomLayout";

export default function Home() {

    const [state, setState] = useState({
        int1: [],
        int2: [],
        remainder: [],
        total: []
    });
    const [input, setInput] = useState({ firstNumber: '', secondNumber: '' })

    const ExecuteCalculation = () => {
        const int1 = input.firstNumber.toString().split('')
        const int2 = input.secondNumber.toString().split('')
        const Total = []
        const remainder = [0]
        const greatLent = Math.max(int1.length, int2.length)
        var currentRemainder = 0
        for (var i = 1; i <= greatLent; i++) {
            var currentval1 = (int1[int1.length - i] === undefined || NaN) ? 0 : parseInt(int1[int1.length - i]);
            var currentval2 = (int2[int2.length - i] === undefined || NaN) ? 0 : parseInt(int2[int2.length - i]);
            var CurrentTotal = currentval1 + currentval2 + currentRemainder
            if (CurrentTotal >= 10) {
                var digits = ("" + CurrentTotal).split("");
                currentRemainder = parseInt(digits[0]);
                remainder.push(parseInt(digits[0]))
                Total.push(parseInt(digits[1]))
            } else {
                currentRemainder = 0
                remainder.push(0)
                Total.push(CurrentTotal)
            }
        }
        if (!(remainder[remainder.length - 1] == 0)) {
            Total.push(remainder[remainder.length - 1])
        }
        var updatedValue = { int1: int1, int2: int2, remainder: remainder.reverse(), total: Total.reverse() };
        console.info(updatedValue)
        setState(prvState => ({
            ...prvState,
            ...updatedValue
        }));

    };

    const handleChange = (event) => {
        const value=  event.target.value.replace(/[^0-9]/gi, '')
        if(value||value==''){
            setInput(values => ({
                ...values, [event.target.name]: value
            }))
        }
      
    }

    return (
        <div >
            <CustomLoginLayout
                LeftComponent={
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column', width: '100%' }}>
                        <div style={{ height: '40vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', minWidth: '40vh', backgroundColour: '#C0C0C0', border: '2px solid #D3D3D3', borderRadius: '8px', padding: '1rem' }}>
                       
                       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <div className="font-Primary">Remainder:  </div>
                                <div className="font-Primary">Number 1:  </div>
                                <div className="font-Primary">Number 2:  </div>
                                <div className="font-Primary">Total:  </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <div className="font-secondary">
                                    {state.remainder.map((item, index) => (<span key={index}>{item}</span>))}
                                </div>
                                <div className="font-secondary">
                                    {state.int1.map((item, index) => (<span key={index}>{item}</span>))}
                                </div>
                                <div className="font-secondary">
                                    {state.int2.map((item, index) => (<span key={index}>{item}</span>))}
                                </div>
                                <div className="font-secondary">
                                    {state.total.map((item, index) => (<span key={index}>{item}</span>))}
                                </div>
                            </div>
                        </div>

                    </div>}
                RightComponent={
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',flexDirection: 'column',  }}>
                          
                        <p className="header">Carry-Arithmetic-Algorithm</p>
                        <input
                            placeholder="Enter Number"
                            name='firstNumber'
                            value={input.firstNumber}
                            onChange={handleChange}
                            style={{ padding: '0.5rem', margin: '1rem 0rem', width: '75%' }} />

                        <input
                            placeholder="Enter Number"
                            name='secondNumber'
                            value={input.secondNumber}
                            onChange={handleChange}
                            style={{ padding: '0.5rem', margin: '1rem 0rem', width: '75%' }} />
                        <div
                            style={{ width: '77%' }}
                            className="button-container">
                            <button
                                style={{ width: '100%' }}
                                className='button-primary' onClick={() => ExecuteCalculation()}>Calculate</button>
                        </div>
                          
                          
                    </div>}
            />



        </div>
    );
}
