import React from 'react';
import './Home.css';
import Element from './Element/Element';

class Home extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="Home-container">
							<div className="tier">
								<Element index="i" size={0} text="david latimore ii"/>
							</div>
							<hr/>
							<div className="tier">
								<Element index="i" size={0} text="chicago-based developer & interface designer"/>
								<Element index="ii" size={0} text="accepting new work: hello@davidlatimore.me"/>
							</div>
							<hr/>
							<div className="tier">
							<Element index="i" size={1} text="Dial Up"/>
							<Element index="ii" size={1} text="Lyrical Lemonade"/>
							<Element index="iii" size={1} text="Twitter"/>
							<Element index="iv" size={1} text="Social Works Chicago"/>
							<Element index="v" size={1} text="Lyft"/>
							</div>

					  </div>
        );
    }
}

export default Home;
