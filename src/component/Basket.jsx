import React from "react"
import "../styles/basket-styles.scss";

class Basket extends React.Component {
   constructor(props) {
      super(props);
   }

   render () {
     return (
       <div className={`basket ${this.props.isMaskedOn ? 'active' : ''}`}>
          
       </div>
     )
   };
}

export default Basket;
