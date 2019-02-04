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
              <a href={this.props.url}>
                <h4 className="content"> {this.props.text} </h4>
              </a>
            </div>
          );
        } else {
          return(
            <div className="Element">
              <p className="index"> {this.props.index}. </p>
              <a href={this.props.url}>
                <h2 className="content"> {this.props.text} </h2>
              </a>
            </div>
          );
        }
      }

}

export default Element;
