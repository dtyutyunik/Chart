import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


export default function BarChart(props){

	let info=props.data.map((i)=>{
		return i.amount
	});
	let labels=props.data.map((i)=>{
		return i.name
	});

	let colors=props.data.map((i)=>{
		return i.color
	});



    return(
      <div className='barChart'>
      <Bar

      data={
         {labels: labels,
        	datasets: [{
          	data: info,
          	backgroundColor: colors,
						hoverBackgroundColor: 'red'
        }],

      }
      }
      options={{
        maintainAspectRatio: false
      }}
      />

      </div>
    )

}
