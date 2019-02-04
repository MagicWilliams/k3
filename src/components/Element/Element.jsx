import React from 'react';
import './Element.css';

class Element extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

      const small = !this.props.size;
        if (small) {
          return(
            <div className="Element-small">
              <p className="index"> {this.props.index}. </p>
              <h4 className="content"> {this.props.text} </h4>
            </div>
          );
        } else {
          return(
            <div className="Element">
              <p className="index"> {this.props.index}. </p>
              <h2 className="content"> {this.props.text} </h2>
            </div>
          );
        }
      }

}

export default Element;
