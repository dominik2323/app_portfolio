import React from 'react';
import styled from "styled-components";
import { Container } from 'reactstrap'
import Body from './Components/Body'
import { connect } from 'react-redux'
import { scheme } from '../consts/scheme'
import { 
	toggleContact,
} from '../../store/actions'
import {
	getPathname
} from '../../store/selectors'

const HeaderContainer = styled.div`
	position: absolute;
	top: 0; left: 0; right: 0; 
	background-color: ${ scheme.white };
	transition-timing-function: ease-in;
	transition: height 0.3s;
	z-index: 3;
`

const Header = ({ openContact, showContact, currentPath }) => {
    return (
		<HeaderContainer>
			<Container fluid>
				<Body toggleOpenContact={ openContact } />
			</Container>
		</HeaderContainer>
    )
}

export default connect(
	state => ({
		getPath: getPathname(state)
	}),
	dispatch => ({
		openContact(bool) {
			dispatch(toggleContact(bool))
		}
	})
)(Header)