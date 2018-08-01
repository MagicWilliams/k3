import React from 'react';
import './Header.css';

class LinkItem extends React.Component {

    render() {
        return(
          <div id="LinkItem">
              <a>
                  <p>{this.props.text}</p>
              </a>
          </div>
        );
    }
}

class Header extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div id="Header">
              <div>
                  <h2 id="name"> david latimore </h2>
                  <h4> subtitle </h4>
              </div>
              <div id="links">
                  <LinkItem text="about" />
                  <LinkItem text="resume" />
                  <LinkItem text="contact" />
              </div>
            </div>
        );
    }
}

export default Header;
