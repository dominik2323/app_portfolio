import React from 'react';
import {
	BioContainer,
	About,
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
/* Jsem designér z Brna, kterého baví dávat věcem smysl a&nbsp;krásu.<br /><br />Mám rád nové výzvy &mdash;&nbsp;právě se učím programovat, hrát na kytaru a&nbsp;kam můžu jezdím na kole bez přehazovačky. */
const Bio = ({ showContact, openContact }) => {
    return (
			<BioContainer showInfo={ showContact }>
				<div onClick={ () => openContact(false) } className='close-icon'>
    				<img src={ window.location.origin + '/public/img/icons/close.svg' } alt=''/>
				</div>
				<About>
    				<img src={ window.location.origin + '/public/img/generics/dominik.png' } alt='Dominik Tomczik'/>
    				<div>
						<p>Jmenuji se</p>
						<h1>Dominik Tomczik</h1>
						<p>
							Jsem designér z Brna, kterého baví dávat věcem smysl a&nbsp;krásu.
						</p>
						<Hr />
						<h1>Potřebuje vaše značka nebo produkt lépe zapůsobit?</h1>
						<p>
							Dejte mi vědět.<br />Za schůzku přece nic nedáte.<br /><br />
							dominik@tomczik.cz<br />
							775&nbsp;337&nbsp;604
						</p>
    				</div>
				</About>
			</BioContainer>
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