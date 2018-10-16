import React from 'react';
import {
	BioContainer,
	Navigation,
	About,
	ContactData,
	Hr
} from './Styled'
import { connect } from 'react-redux'
import { 
	isContactOpened,
} from '../../store/reducer'
import { 
	toggleContact,
} from '../../store/actions'
import Scrollbar from '../consts/Scrollbar'
const Bio = ({ showContact, openContact }) => {
    return (
    	<Scrollbar>
			<BioContainer showInfo={ showContact }>
			<div className='scroll'>
				<div onClick={ () => openContact(false) } className='close-icon'>
    				<img src={ window.location.origin + '/public/img/icons/close.svg' } alt=''/>
				</div>
				<About>
    				<img src={ window.location.origin + '/public/img/generics/dominik.png' } alt='Dominik Tomczik'/>
    				<div>
						<p>
							Jmenuji se
						</p>
						<h1>
							Dominik Tomczik
						</h1>
						<p>
							Jsem designér z Brna, kterého baví dávat věcem smysl a&nbsp;krásu.<br /><br />Mám rád nové výzvy &mdash;&nbsp;právě se učím programovat, hrát na kytaru a&nbsp;kam můžu jezdím na kole bez přehazovačky.
						</p>
    				</div>
				</About>
				<ContactData>
					<Hr />
					<h1>Potřebuje vaše značka nebo produkt lépe zapůsobit?</h1>
					<p>Dejte mi vědět. Za schůzku přece nic nedáte.</p>
					<ul>
						<li>dominik@tomczik.cz</li>
						<li>775&nbsp;337&nbsp;604</li>
					</ul>
				</ContactData>
			</div>
			</BioContainer>
    	</Scrollbar>
    )
}

export default connect(
	state => ({
		showContact: isContactOpened(state),
	}),
	dispatch => ({
		openContact(bool) {
			dispatch(toggleContact(bool))
		}
	})
)(Bio)