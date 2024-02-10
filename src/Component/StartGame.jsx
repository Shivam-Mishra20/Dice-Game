import React from 'react'
import styled from "styled-components"
import img from '/images/dices.png'
const StartGame = ({toggle}) => {
    return (
        <Container>
            <img src={img} alt="Dice" className=' w-96' />
            <div className=' flex flex-col mx-4  items-end'>
                <h1 className=' text-6xl    whitespace-nowrap font-extrabold '> DICE GAME </h1>
                <button className='   bg-black  hover:bg-gray-600  text-yellow-600 font-bold py-2 px-4 rounded transition-colors' onClick={toggle}>Play Now</button>

            </div>


        </Container>

    );
}

export default StartGame

const Container = styled.div`
     width: 100%;

    display: flex;
    align-items:center;
    justify-content:space-between;
    padding: 10px 40px;
     
@media  (max-width: 800px) {
    flex-direction: column;
    padding: 10px 20px;

    h1{
        font-size: 45px;
    }

    

    
}
    

`