import {CardsData} from './CardsData'
import React from 'react';
import '../cssFiles/billboards.css'

const Card = (props) => (
    <div className="Playercard">
      <img src={ props.imgUrl } 
        alt={ props.alt || 'Image' } />
      <div className="card-content">
        <h2>{ props.title }</h2>
        <p>{ props.content }</p>
      </div>
    </div>
  );
  
  const CardContainer = (props) => (
    <div className="cards-container">
      {
        props.cards.map((card) => (
          <Card title={ card.title }
            content={ card.content }
            imgUrl={ card.imgUrl } />
        ))
      }
    </div>
  );
  
  class Billboards extends React.Component {
    render () {
    
      
      return(
        <div className="container">
          
          <CardContainer cards={ CardsData } />
        </div>
      );
    }
  }
  
export default Billboards