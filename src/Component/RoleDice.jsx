import React, { useState } from 'react'
import Rules from './Rules'
import img from '/images/dice/dice_1.png'

 
import styled from 'styled-components'

const RoleDice = ({currentDice, setcurrentDice, Roledices, score, setscore }) => {
   
    const [rules, setrules] = useState(false)
    //for updating and roling of dice use state

    const Toggle = () => {
        setrules(!rules)
    }

    console.log(currentDice)
    //random no genrate program

    return (

        <DiceContainer>
            <div onClick={Roledices}>
                <img src={`images/dice/dice_${currentDice}.png`} alt=" " className=' w-28' />
            </div>

            <div className=' flex flex-col'>
                <p>Click The Dice of Rolling</p>

                <button className='btn-bl' onClick={() => setscore(0)} >Reset Score</button>
                <button className='  btn-trans ' onClick={Toggle}> {rules ? "Close" : "Show"} Rules</button>

            </div>  
            <div>
                {rules && <Rules />}
            </div>



        </DiceContainer>
    )
}

export default RoleDice

const DiceContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

.dice{
    cursor: pointer;

}

p{

    font-size: 22px;
}
 .btn-bl{
    padding: 10px 20px;
    background: #000;
    margin-top: 2px;
    width: auto;
    color: whitesmoke;
    border-radius: 12px;
    border: 1px solid black;
    
}
 .btn-bl:hover{
    background: transparent;
    color: black;


}
.btn-trans{
    padding: 10px 20px;
    background: transparent;
    margin-top: 5px;
    margin-bottom: 8px;
    width: auto;
    color: black;
    border-radius: 12px;
    border: 1px solid black;

}
.btn-trans:hover{
    background: black;
    color: whitesmoke;
}

    


`