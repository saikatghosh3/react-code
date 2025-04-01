import React from 'react'

const Bubbling = () => {

   
        function handleParentClick(){
            alert("Parent Clicked!");
        }

        function handleChildClick(event){
            event.stopPropagation();

            // if we dont use event.stopPropagation()  then bubbling will happen
            alert("Child Clicked!")
        }
    
  return (
    <div>
      <div onClick={handleParentClick} style={{padding: "20px", border : "2px solid black"}}>
        <button onClick={handleChildClick}> Click me !!</button>
      </div>
    </div>
  )
}

export default Bubbling
