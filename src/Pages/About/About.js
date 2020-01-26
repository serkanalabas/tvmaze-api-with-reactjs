import React, { Component } from 'react';
import { PBHeader } from '../../Components/'
import './About.scss';

class About extends Component {

	render(){
		return (
			<div className="main">
				<div>
					<PBHeader />
				</div>
				<h1 className="aboutText">
                    About :)
                </h1>
			</div>
		);
	}
}

export default About;
