import React from 'react';
import './Element.css';

class Element extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
          <div className="Element">
              <p className="index"> {this.props.index}. </p>
              {this.props.size == 0 && (
                <h4 className="content"> {this.props.text} </h4>
              )}
              {this.props.size == 1 && (
                <h2 className="content"> {this.props.text} </h2>
              )}
          </div>
        );
    }
}

export default Element;
