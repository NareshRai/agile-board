import React, { Component } from 'react';
import Card from './cards'
import { Button,Modal } from 'react-bootstrap';

class Board extends Component {

    state = {
        cardsDetails:[{
          id:1,
          text:"React Js Upgrade"
        }],
        modalShow:false    
    }

    render(){
      
        //Handler to hide / show modal 
        const handleClose = () => this.setState({modalShow:false});
        const handleShow = () => this.setState({modalShow:true});
        // Handler to add new card with details with random ID
        const addCardHandler = (event) => { 
         this.setState((prevState) => ({
          cardsDetails:[
            ...prevState.cardsDetails,
            {id:'id'+Math.floor(Math.random()*20),text:this.element.value}
          ]
          }));
          this.setState({modalShow:false})
        }
        // Populate Card as per state values
        const boardDetails= this.state.cardsDetails.map((val,i)=>{
            return <Card name={val.text} type={this.props.type}/>;
        })

        return(
          <>
            {/* Board Section */}
                <div className="col-md-6">
                    <div className="boardSection mt-4">
                        <h3 className="position-relative boardTitle text-center font-weight-light font-italic">{this.props.name}
                        <button id="addCard" onClick={handleShow}></button>
                        </h3>
                      <div className="row">
                      {boardDetails}
                      </div>
                    </div>
                </div>
               
              {/* Modal */}
             <Modal show={this.state.modalShow} onHide={handleClose}>
               <Modal.Header closeButton>
                 <Modal.Title>Add New Card</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <textarea name="inputData" className="form-control"  ref={el => this.element = el} />
               </Modal.Body>
               <Modal.Footer>
                 <Button variant="secondary" onClick={handleClose}>
                   Close
                 </Button>
                 <Button variant="primary" onClick={addCardHandler}>
                   Save 
                 </Button>
               </Modal.Footer>
             </Modal>
             </>
        );
    }
}

export default Board; 