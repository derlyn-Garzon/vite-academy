import React, { useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const PhoneVerification = () => {
    const [positionCode, setPositionCode ] = useState(0);
    const firstInputRef = useRef(null);
    const secondInputRef = useRef(null);
    const thirdInputRef = useRef(null);
    const fourthInputRef = useRef(null);
    const navigate = useNavigate();

    const handleKeyboard= (e) =>{
        e.preventDefault();
        console.log(e.target.value);
        if(positionCode==0){
            firstInputRef.current.value = e.target.value;
            setPositionCode(positionCode+1);
            console.log('position code');
            console.log(positionCode);            
        } 
        if(positionCode==1){
            secondInputRef.current.value = e.target.value;
            setPositionCode(positionCode+1);
            console.log(positionCode);
        } 
        
        if(positionCode==2){
            thirdInputRef.current.value = e.target.value;
            setPositionCode(positionCode+1);
            console.log(positionCode);
        } 
        
        
        if(positionCode==3){
            fourthInputRef.current.value = e.target.value;
            setPositionCode(positionCode+1);
            console.log(positionCode);
            
            //aplica pasar hacer un enrutamiento
            navigate('/landing');
        } 



        //setPositionCode(positionCode+1);

    }
    const handleKeyboardDelete= (e) =>{
        e.preventDefault();
        if(positionCode==1){
            firstInputRef.current.value = '';
            setPositionCode(positionCode-1);
            console.log(positionCode);
        } 

        if(positionCode==2){
            secondInputRef.current.value = '';
            setPositionCode(positionCode-1);
            console.log(positionCode);
        } 
        

        if(positionCode==3){
            thirdInputRef.current.value = '';
            setPositionCode(positionCode-1);
            console.log(positionCode);
            //redirige a landing
          
        } 

    }
    
    return (
    <>
        <body style={{height: '100vh',  display: 'flex', flexDirection: 'column'}}>
        
            <div class="container-fluid image-container" style={{ textAlign: 'center', fontFamily:'Inter', color:'#4B4B4B',width:'100%' }}>

                <div style={{fontSize:'24px', fontWeight:'700', marginTop:'70px', textAlign:'left'}}>
                    Phone verification
                </div>
                <div style={{fontSize:'14px', fontWeight:'400',  textAlign:'left'}}>  
                    Sign in to an existing account
                    using your phone number
                </div>

                <form>
                    <div class="codePhone">
                        <div class="">
                            <input className='codeInput'
                                    type="text"
                                    id="number0"
                                    name="number0"
                                    ref={firstInputRef}
                                    disabled
                            />
                        </div>
                        <div class="">
                            <input className='codeInput'
                                type="text"
                                id="number1"
                                name="number1"
                                ref={secondInputRef}
                                disabled
                            />
                        </div>
                        <div class="">
                            <input className='codeInput'
                                type="text"
                                id="number2"
                                name="number2"
                                ref={thirdInputRef}
                                disabled
                            />
                        </div>
                        <div class="">
                            <input className='codeInput'
                                type="text"
                                id="number3"
                                name="number3"
                                ref={fourthInputRef}
                                disabled
                            />
                        </div>
                    </div>
                </form>


                <div class="container mt-5" style={{marginLeft: '-20px'}}>
                    <div class="keyboard">
                        <button onClick={handleKeyboard} value={1} className="btn btn-secondary col-md-4 ">1</button>
                        <button onClick={handleKeyboard} value={2} className="btn btn-secondary col-md-4 ">2</button>
                        <button onClick={handleKeyboard} value={3} className="btn btn-secondary col-md-4">3</button>
                        <button onClick={handleKeyboard} value={4} className="btn btn-secondary col-md-4">4</button>
                        <button onClick={handleKeyboard} value={5} className="btn btn-secondary col-md-4">5</button>
                        <button onClick={handleKeyboard} value={6} className="btn btn-secondary col-md-4">6</button>
                        <button onClick={handleKeyboard} value={7} className="btn btn-secondary col-md-4">7</button>
                        <button onClick={handleKeyboard} value={8} className="btn btn-secondary col-md-4">8</button>
                        <button onClick={handleKeyboard} value={9} className="btn btn-secondary col-md-4">9</button>
                        <button  value={'no'} className="btn btn-secondary col-md-4"></button>
                        <button onClick={handleKeyboard} value={0} className="btn btn-secondary col-md-4">0</button>
                        <button onClick={handleKeyboardDelete} value={'delete'} className="btn btn-secondary col-md-4"> x  </button>
                    </div>
                </div>

            </div> 
            
                   
            
        </body>    
    </>
  )
}

export default PhoneVerification