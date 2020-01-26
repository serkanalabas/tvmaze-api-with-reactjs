import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import * as Constants from '../../Constants/Constants.js'
import { PBHeader } from '../../Components/'
import './TvShowDetail.scss';

class TvShowDetail extends Component {

	render(){
		const { tvShows, tvShowId } = this.props

		return (
			<div className="main">
				<div>
					<PBHeader />
				</div>
				<Row className="titleRow">
					<Col span={12} offset={6}>
						<h1 className="title">
							{ tvShows[tvShowId].show.name }
						</h1>
					</Col>
				</Row>
				<Row className="imageRow">
					<Col span={12} offset={6}>
						<img src={`${ tvShows[tvShowId].show.image.medium }`} />
					</Col>
				</Row>
				<Row className="descRow">
					<Col span={12} offset={6}>
						<p>
							{ tvShows[tvShowId].show.summary }
						</p>
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

const TvShowDetailConnected = connect(mapStateToProps, mapDispatchToProps)(TvShowDetail);

export default TvShowDetailConnected;
