import React, { Component } from 'react';

class Cards extends Component {
    render(){
        return(
            <>
            <div className={`cards col-lg-5 col-md-5 ${this.props.type}`}>
                <div className="card-body">
                    <h6 className="cards-title ">{this.props.name}</h6>
                   <div className="storyPoints font-weight-light">
                    <span>+0</span>
                   </div>
                </div>
            </div>
        </> 
        );
    }
}

export default Cards;