import React from 'react';

export default function Expenses(props){
return(
  <div>
    {props.data.map((i)=>{
      return(
        <div>
          Name is: {i.name} "   " Cost is: {i.amount}
      </div>
      )
    })}
  </div>
)

}
