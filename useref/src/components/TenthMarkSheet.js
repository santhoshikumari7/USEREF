import React, {useRef} from 'react'

function TenthMarkSheet() {
    let firstNameInputRef =useRef();
    let lastNameInputRef =useRef();
    let engInputRef =useRef();
    let telInputRef =useRef();
    let hinInputRef =useRef();
    let mathInputRef =useRef();
    let sciInputRef =useRef();
    let sociInputRef =useRef();
    let resultParaRef =useRef();
  return (
    <div>
        <h1>Tenth MarkSheet</h1>
      <form>
        <div>
            <label>Firstname</label>
            <input ref={firstNameInputRef}></input>
        </div>
        <div>
            <label>Lastname</label>
            <input resf={lastNameInputRef}></input>
        </div>
        <div>
            <label>English</label>
            <input type='number'ref={engInputRef}></input>
        </div>
        <div>
            <label>Telugu</label>
            <input type='number' ref={telInputRef}></input>
        </div>
        <div>
            <label>Hindi</label>
            <input type='number' ref={hinInputRef}></input>
        </div>
        <div>
            <label>Maths</label>
            <input type='number' ref={mathInputRef}></input>
        </div>
        <div>
            <label>Science</label>
            <input type='number' ref={sciInputRef}></input>
        </div>
        <div>
            <label>Social</label>
            <input type='number' ref={sociInputRef}></input>
        </div>
        <div>
            <button type='button' onClick={()=>{
        let firstName = firstNameInputRef.current.value;
        let lastName =lastNameInputRef.current.value;
        let engMarks =Number(engInputRef.current.value);
        let telMarks =Number(telInputRef.curent.value);
        let hinMarks =Number(hinInputRef.current.value);
        let matMarks =Number(mathInputRef.current.value);
        let sciMarks =Number(sciInputRef.current.value);
        let sociMarks =Number(sociInputRef.current.value);

        let totalMarks =engMarks+telMarks+hinMarks+matMarks+sciMarks+sociMarks
        
        alert(`${firstName} ${lastName} got Total Marks are ${totalMarks}`);
         resultParaRef.current.innerHTML =`${firstName} ${lastName} got Total Marks are ${totalMarks}`      
            
            }}>calculate results</button>
        
        <button type='button'onClick={()=>{
            let a=20;
          
            console.log(b);
         let b= ()=>{
            console.log(a)
            b=30;
          }
        }}>scope of variables</button>
       
      </div>

    <p ref={resultParaRef}>please enter your marks and click it</p>
      </form>
    </div>
  )
}

export default TenthMarkSheet
