import React from 'react';

export default function Expenses(props){
return(
  <div className="expenseList">
    <h2>Monthly Expense BreakDown</h2>
    {props.data.map((i,position)=>{
      return(
        <div key={position}>
          {i.name} --> ${i.amount}
          <button className="expenseButton" onClick={()=>props.remove(position)}> Remove Expense </button>
      </div>
      )
    })}
  </div>
)

}
