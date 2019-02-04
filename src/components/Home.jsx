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
								<Element index="ii" size={0} text="accepting new work: david.latimore@me.com"/>
							</div>
							<hr/>
							<div className="tier">
	 							<Element index="i" size={1} text="Dial Up" url="http://www.dialupstuff.com"/>
								<Element index="ii" size={1} text="Lyrical Lemonade" url="http://www.lyricallemonade.com"/>
								<Element index="iii" size={1} text="Night Mode (Twitter)" url="https://www.theverge.com/2017/9/6/16263416/twitter-night-mode-desktop-roll-out-moon-icon"/>
								<Element index="iv" size={1} text="Rogue Agency" url="https://www.rogueagency.us/"/>
								<Element index="v" size={1} text="Scene VR" url="https://scene.knightlab.com/" />
							</div>
					  </div>
        );
    }
}

export default Home;
