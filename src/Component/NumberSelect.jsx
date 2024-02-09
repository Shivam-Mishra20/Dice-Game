
 
import styled from 'styled-components'

const NumberSelect = ({erros,isSelected,setSelected}) => {
    
    
    const arr = [1, 2, 3, 4, 5, 6]

    return (
        <>

            <div className=' flex items-end flex-col '>
                <p className=' text-red-500  text-l font-semibold'>{erros ? erros:""}</p>

                <div className=' flex gap-2  items-end justify-end' >
                    {arr.map((val, i) => (
                        <Box selected={val === isSelected} key={i} onClick={() => { setSelected(val) }} className=' gap-4'>{val}</Box>

                    ))}

                </div>
                <div className='my-2'>
                    <p>Selected Number is {isSelected}</p>
                </div>



            </div>

        </>
    )
}

export default NumberSelect

// {Component styleing }

const Box = styled.div`

padding:  15px;
width: 72px;
display:  inline-flex;
flex-direction: row;
align-items: center;
 
justify-content: center;

height: 72px;
 text-align: center;
font-weight: bolder;

font-size:20px ;
border: 1px solid black;
color:  ${(props) => props.selected ? "white" : "black"};
background: ${(props) => props.selected ? "black" : "white"};

@media (max-width:600px) {
    
        padding: 5px 10px;
        width: 30px;
        height: 30px;
        align-items: center;
    
    
}

    

`;