import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
import * as Constants from '../../Constants/Constants.js'
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './PBHeader.scss';


class PBHeader extends Component {

	menuHandleClick = e => {
		const { changeSelecteMenu } = this.props

		changeSelecteMenu(e.key)
		this.props.history.push(e.key)
	};

	render(){
		const { selectedMenu } = this.props

		return (
            <Menu onClick={this.menuHandleClick} selectedKeys={[selectedMenu]} mode="horizontal">
				<Menu.Item key="/home">
					<Icon type="home" />
						Home
				</Menu.Item>

				<Menu.Item key="/about">
					<Icon type="info-circle" />
						About
				</Menu.Item>
          	</Menu>
		);
	}
}


const mapStateToProps = (state, ownProps) => {
	return {
		selectedMenu: state.HeaderMenuReducer.selectedMenu
	};
};

const mapDispatchToProps = dispacth => {
	return {
		changeSelecteMenu: (selectedMenu) => {
			dispacth({ type: Constants.CHANGE_SELECTED_MENU, payload: { selectedMenu } })
		}
	}
}

const PBHeaderConnected = connect(mapStateToProps, mapDispatchToProps)(PBHeader);

export default withRouter(PBHeaderConnected);
