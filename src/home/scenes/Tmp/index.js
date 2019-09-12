import React, { Component } from 'react';
import { selectFilteredProjects } from '../../store/selectors'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import * as R from 'ramda'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { generateLayout } from './generateLayout'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

const Item = styled.div`
	background-color: #F5F5F5;
	font-size: 21px;
	font-weight: 900;
	img {
		object-fit: cover;
		width: 100%;
	}
`
const GridContainer = styled.div`
	width: 1300px;
	margin: auto;
`

class Tmp extends Component {
	render() {
		const { data } = this.props
		const numItems = R.range(0, 2)
		console.log(generateLayout(data))
		return (
			<GridContainer>
				<ResponsiveReactGridLayout 
					layouts={ generateLayout(data) }
					rowHeight={ 100 }
				    isDraggable={ false }
				    isResizable={ false }
		        	breakpoints={{ lg: 1200, md: 768 }}
	    		    cols={{ lg: 12, md: 12 }}>
	        		{ data.map(( x, i ) => {
	        			return(
							<Item key={ i }>
								<img src={ 'public/' + x.landingPageImage.src } alt={ x.landingPageImage.alt }/>
							</Item>
	        			)
	        		}) }
				</ResponsiveReactGridLayout>
			</GridContainer>
		)
	}
}
export default connect(
	state => ({
		data: selectFilteredProjects(state)
	})
)(Tmp)