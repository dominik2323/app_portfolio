import React from 'react'
import styled, { css } from 'styled-components'
import { scheme } from '../../../consts/scheme'


const ImageTitle = styled.div`
	position: absolute;
	bottom: 30px;
	left: 45px;
	font-size: 19px;
	letter-spacing: .03em;
	h1 {
		font-size: 20px;
		letter-spacing: .04em;
	}
	p {
		font-size: 14px;
		letter-spacing: .07em;
		margin: 0;
	}
	${ props => props.inverse && css`
		color: ${ scheme.white }
		h1 {
			letter-spacing: .07em;
		}
		h2 {
			letter-spacing: .1em;
		}
	`}
`

const RenderGridImage = ({ data }) => {
    return (
		<React.Fragment>
			<ImageTitle inverse={ data.title.inverse }>
				<h1>{ data.title.header }</h1>
				<p>{ data.title.subTitle }</p>
			</ImageTitle>
			<img src={ window.location.origin + '/public' + data.src } alt={ data.alt } />
		</React.Fragment>
    )
}

export default RenderGridImage