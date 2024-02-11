 
import React, {useState,useEffect} from 'react'
import NumberSelect from './NumberSelect'
import RoleDice from './RoleDice'
 
 
 

//total three 3 components put in this component 
const TotalScore = () => {
    //for updating score
    const [score, setscore] = useState(0)
    //for what no is selected
    const [isSelected, setSelected] = useState()
    //what is curent dice img 
    const [currentDice, setcurrentDice] = useState(1)
    //for showing error
    const [error, seterror] = useState(false )

    useEffect(() => {
      if(score  <-10){
        alert('you are loosing the game 🫥')
         setscore(0)
        

      }
      else if(score>6){
        alert('you are  Winner 🏆')
        setscore(0)
      }
         
    },[ isSelected])
    


    const Roledices = () => {
        if(!isSelected) {
          seterror("You have no selectd number")
            return
            
        }

        const newRandomNumber = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 100
        setcurrentDice(newRandomNumber);
        if(isSelected === newRandomNumber){
            setscore(()=>score+newRandomNumber)
           
            

        }
        else{
            setscore((prev)=>prev-2);
            seterror(null)
        }
        setSelected(undefined)
        
      };

      

    return (
        <>
         
        <div>
             
            <main className=' flex  flex-col sm:flex-row   justify-around items-center  px-5 py-4'>
                <div className=' flex flex-col   items-center     my-2 '>
                    <h1 className='  text-center   text-6xl px-2 py-4  font-extrabold '>{score}</h1>
                   <div>
                   <p className=' text-xl  '>Total score</p>
                   </div>
                     
                </div>

                <div >
                   
                

                <NumberSelect isSelected={isSelected} setSelected={setSelected} erros={error} /></div>

                
            </main>

            <RoleDice currentDice={currentDice} setcurrentDice={setcurrentDice} Roledices={Roledices} score={score} setscore={setscore}  />
             
        </div>
        </>
    )
}

export default TotalScore
