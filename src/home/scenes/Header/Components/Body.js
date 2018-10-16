import React, { Component } from 'react';
import { Row } from 'reactstrap'
import { Link } from 'react-router-dom'	
import {
	Beta,
	Burger,
	Name,
} from './StyledComponents/StyledBody'


export default class Body extends Component {
	render() {
		const { toggleOpenContact } = this.props
		return (
			<Row style={{ padding: "40px 0" }}>
				<Name 
						xl={ 9 }
						lg={ 9 }
						md={ 9 } 
						sm={ 8 }
						xs={ 12 }>
					<h1><Link to="/" onClick={ () => toggleOpenContact(false) }>Dominik Tomczik</Link></h1>
					<h2>( průmyslový  &&  grafický designér )</h2>
				</Name>
				<Beta 
						xl={{ size: 2, offset: 0 }} 
						lg={{ size: 2, offset: 0 }} 
						md={{ size: 2, offset: 0 }} 
						sm={{ size: 3, offset: 0 }} 
						xs={{ size: 6, offset: 0 }}
					>
					<div>BETA VERZE</div>
				</Beta>
				<Burger 
						xl={ 1 }
						lg={ 1 }
						md={ 1 } 
						sm={ 1 } 
						xs={ 6 }
						onClick={ () => toggleOpenContact(true) }>
    				<img src={ window.location.origin + '/public/img/icons/burger.svg' } alt='' />
				</Burger>
			</Row>
		);
	}
}
