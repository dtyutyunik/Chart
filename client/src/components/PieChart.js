import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

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
