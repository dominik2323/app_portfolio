import React from 'react'
import styled from 'styled-components'
import { scheme } from '../../../consts/scheme'
import * as R from 'ramda'

const RenderGridTextConrainer = styled.div`
	padding: 140px ${ props => props.sidePadding };
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: ${ scheme.antracite };
	background-color: ${ scheme.lightGray };
	h1 {
		line-height: 63px;
		letter-spacing: .03em;
		font-weight: 400;
		font-variant-numeric: oldstyle-nums;
	}
	p {
		color: ${ scheme.gray };
		text-transform: uppercase;
		font-size: 15px;
		letter-spacing: .1em;
		margin-top: 40px;
	}
`

const evalPadding = ( x ) => {
	return (x > 6 ? '100px' : '50px') 
}
const RenderGridText = ({ data }) => {

    return (
		<RenderGridTextConrainer sidePadding={ evalPadding(data.cols) }>
			<h1>{ data.content.body }</h1>
			<p>{ data.content.subTitle }</p>
		</RenderGridTextConrainer>
    )
}

export default RenderGridText