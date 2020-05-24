import React, { Component } from 'react';
import Board from './Component/board';
import './App.css';

class App extends Component{
   state = {
       board:[{
           id:1,
           name:'What went well',
           type:"board1"
           },{
            id:2,
            name:'What can improved',
            type:"board2"
           },{
            id:3,
            name:'Start doing',
            type:"board3"
           },{ 
            id:4,
            name:'Action items',
            type:"board4"
         }]
   };

  

    render(){
        // Create different board 
      const boardDetails= this.state.board.map((val,i)=>{
            return <Board name={val.name} type={val.type}/>;
        })
        
        return (
            <>
                <h1 className="text-center mt-3" >Agile Board</h1>  
                <div className="row"> {boardDetails} </div>
            </>
        )
    }
}

export default App;