import React from 'react';

export default function Expenses(props){
return(
  <div>
    {props.data.map((i,position)=>{
      return(
        <div key={position}>
          Name is: {i.name} "   " Cost is: {i.amount}
          <button onClick={()=>props.remove(position)}> Remove Expense </button>
      </div>
      )
    })}
  </div>
)

}
