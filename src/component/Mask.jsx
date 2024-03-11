import React from "react"
import "../styles/mask-styles.scss";

class Mask extends React.Component {
   constructor(props) {
      super(props);
   }

   render () {
     return (
       <div className="mask" onClick={() => {
          this.props.pullBasket(false);
          this.props.fixRemovedItems();
        }}>
          
       </div>
     )
   };
}

export default Mask;
