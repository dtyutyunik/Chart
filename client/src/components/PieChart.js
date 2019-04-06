import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


export default function PieChart(props){
  let expense=0;
   props.expenses.forEach(function(i){
      expense+=Number(i.amount);
  });

  let balance=props.savings-expense;

    return(
      <div className='pieChart'>
        <Pie
        data={{ labels: [
      		'Expenses',
      		'Savings'
      	],
        datasets:[{
          data: [expense,balance],
          backgroundColor: [
      		'red',
      		'green',
      		],
        }],
        }

        }
        width={200}
        height={200}
        options={{
          maintainAspectRatio: false
        }}
        />
      </div>
    )

}

// <Pie
// data={this.props.data}
// width={250}
// height={250}
// options={{
//   maintainAspectRatio: false
// }}/>
