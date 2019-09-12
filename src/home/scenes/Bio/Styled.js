import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { scheme } from '../consts/scheme'
import React from 'react'

export const BioContainer = styled.div`
	position: fixed;
	right: 0px; top: 0; bottom: 0;
	background-color: ${ scheme.black };
	transition-timing-function: ease-in;
	transition: 0.2s;
	width: 600px;
	font-variant: oldstyle-nums;
	z-index: 10;
	transform: translateX(100%);
	color: ${ scheme.whiteBlue };
	overflow-y: auto;
	${props => props.showInfo && css`
		transform: translateX(0%);
	`}
	.close-icon {
		position: absolute;
		top: 0;
		right: 15px;
		z-index: 9999;
		cursor: pointer;
	}
	.close-icon img {
		position: absolute;
		right: 30px;
		top: 43px;
		width: 40px;
		height: auto;
	}
	h1 {
		font-size: 26px;
		letter-spacing: .045em;
		margin-bottom: 50px;
		line-height: 36px;
	}
	@media (max-width: 768px) {
		transform: translateY(-100%);
		width: 100%;
		min-width: 575px;
		${ props => props.showInfo && css`
			transform: translateY(0%);
		`}
	}
`

export const About = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	justify-content: center;
	img {
		position: absolute;
		top: 50px;
		left: 50px;
		width: 255px;
		height: auto;
	}
	div {
		position: relative;
		padding-bottom: 80px;
		top: 170px;
		left: 80px;
		width: 270px;
		font-size: 16px;
		letter-spacing: .1em;
		line-height: 28px;
	}
	div p:first-child {
		font-size: 14px;
		letter-spacing: .12em;
		margin-bottom: 3px;
	}
`

export const Hr = styled.span`
	width: 300px;
	height: 1px;
	position: relative;
	display: block;
	background-image: linear-gradient(to right, #FFF 20%, rgba(255, 255, 255, 0) 0%);
	background-position: top;
	background-size: 9px 1px;
	background-repeat: repeat-x;
	margin: 80px 0;
`
