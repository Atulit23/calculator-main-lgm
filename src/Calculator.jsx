import React, { useState } from 'react'

export default function Calculator() {
    const calcDigits = [1, 2, 3, '/', 4, 5, 6, '-', 7, 8, 9, '+', 0, '.', 'C', '*', '(', ')', '=']
    var [num, setNum] = useState('')
    return (
        <main>
            <div className="calculator__main">
                <div className="text">
                    {num == '' ? <p className="val">0</p> : <p className="val">{num}</p>}
                    <button className="ac" onClick={() => {
                        setNum('')
                    }}>AC</button>
                </div>
                <div className="calculator__board">
                    <div className="calc__main">
                        {
                            calcDigits.map((item, index) => (
                                <button className='calc__digit' onClick={() => {
                                    if (item == 'C') {
                                        setNum(num.toString().substring(0, num.length - 1))
                                    }
                                    else if (item == '=') {
                                        setNum(eval(num))
                                    }
                                    else {
                                        setNum(num + item.toString())
                                    }
                                }}>{item}</button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
