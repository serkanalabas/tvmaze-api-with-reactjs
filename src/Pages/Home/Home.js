import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { List, Avatar, Row, Col } from 'antd';
import axios from 'axios';
import * as Constants from '../../Constants/Constants.js'
import { PBHeader } from '../../Components/'
import { createSEOLink } from '../../Utils/GeneralUtils.js'
import './Home.scss';

class Home extends Component {

	componentDidMount() {
		this.getTvShows()
	}

	getTvShows = () => {
		const { updateTvShows } = this.props

		axios.get('http://api.tvmaze.com/search/shows?q=batman')
		  .then(res => {
			updateTvShows(res.data)
		})
	}

	render(){
		const { tvShows } = this.props
		return (
			<div className="main">
				<div>
					<PBHeader />
				</div>
				<Row className="titleRow">
					<Col span={12} offset={6}>
						<h1 className="title">
							Batman TV Shows 
						</h1>
					</Col>
				</Row>
				<Row>
					<Col span={12} offset={6}>
						<List
							itemLayout="horizontal"
							dataSource={tvShows}
							renderItem={(item, i) => (
								<Link to={`/shows/${i}/${ createSEOLink(item.show.name) }`}>
									<List.Item>
										<List.Item.Meta
											avatar={<Avatar src={`${item.show.image.medium}`} />}
											title={item.show.name}
											description={`${item.show.premiered}`}
										/>
									</List.Item>
								</Link>
							)}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		tvShows: state.TvShowsReducer.tvShows
	};
};

const mapDispatchToProps = dispacth => {
	return {
		updateTvShows: (newTvShows) => {
			dispacth({ type: Constants.UPDATE_TV_SHOWS, payload: { newTvShows } })
		}
	}
}

const HomeConnected = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeConnected;
