import React from 'react'
import {useState} from 'react'



function Calculate() {

  const [number, setNumber] = useState('')



  const handleClick = (e) =>{
    
        setNumber(number.concat(e))
  
  }
  const handleSlice = () => {
    setNumber(number.slice(0, -1))
    

  }

  const handleClear = () => {
    setNumber('')
    
  }

  const handleAnswer = () =>{
    try{
      //  elslint-disable-next-line
        setNumber(eval(number).toString())
        
        
    }catch(error){
        setNumber('Invalid')
    }
  }

  return (
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="frame w-68 bg-gray-200 rounded py-12 px-9 mt-5">
            <div className="text-right text-3xl font-bold">
              <input type="text" className='print' style={{maxWidth:"237px", textAlign:"right", border:"2px solid #535a5c", paddingTop:"20px", paddingBottom:"20px"}} value={number} placeholder={0}/> 
              
            </div><br />
            <div className="grid grid-cols-4 gap-4">
              
           
        <button className="bg-gray-300 btn rounded" onClick={handleClear}>AC</button>
        <button className="bg-gray-300 btn rounded" onClick={()=>handleSlice()} style={{alignText:"center"}}>x</button>
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('%')}>%</button>
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('/')}>/</button>

  
  
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('1')}>1</button>
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('2')}>2</button>
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('3')}>3</button>
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('*')}>x</button>
 

   
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('4')}>4</button>
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('5')}>5</button>
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('6')}>6</button>
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('-')}>-</button>



        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('7')}>7</button>
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('8')}>8</button>
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('9')}>9</button>
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('+')}>+</button>

    
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('0')}>0</button>
        <button className="bg-gray-300 btn rounded" onClick={()=>handleClick('.')}>.</button>
        <button className="bg-gray-300 btn rounded" onClick={()=>handleAnswer()} style={{gridColumn: "3/5"}}>=</button>
    
            </div>
          </div>
        </div>
      </div>

  )
}

export default Calculate