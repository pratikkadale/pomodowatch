import React,{useEffect, useState} from 'react'
import './Countercomp.css';

const Countercomp = (props) => {

    let timer;
    const [minute, setMinute] = useState(props.breaktime)
    const [second, setSecond] = useState(0)
    const [stopst, setstopst] = useState(false)
    

    useEffect(() => {
          timer = stopst && setInterval(()=>{
              
              setSecond(second-1);
              if(second===0)
              {
                  setMinute(minute-1)
                  setSecond(59);
              }
            if(minute===0 && second===0 )
            {
                alert("Time Over")
            }
        },1000)
      
        return ()=> clearInterval(timer);
      
    },)
    
    const handelStop=()=>{
        
        if(stopst)
        {
            // setInterval(timer)
            setstopst(false);
        }
        else
        {
            // clearInterval(timer)
            setstopst(true);
        }
    }

    const handelRestart=()=>{
        setMinute(props.breaktime)
        setSecond(0)
    }
  
    
    return (
        <>
        <div className='Timercss'>{minute<10?'0'+minute:minute}:{second<10?'0'+second:second}</div>
        <div className='Controlbuttons'>             
            <button onClick={handelStop}>Start/Stop</button>
            <button onClick={handelRestart}>Restart</button>
        </div>
        </>
        )
}

export default Countercomp