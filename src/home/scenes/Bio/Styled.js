import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { scheme } from '../consts/scheme'
import React from 'react'


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
	div h1 {
		font-size: 26px;
		letter-spacing: .045em
		margin-bottom: 90px;
	}
`

export const ContactData = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 70px 80px;
	font-variant-numeric: oldstyle-nums;
	background-color: #CCCCCC;
	color: ${ scheme.black }
	h1 {
		font-size: 26px;
		letter-spacing: .025em;
		line-height: 36px;
		margin-bottom: 30px;
	}
	p {
		font-size: 18px;
		letter-spacing: .025em;
		line-height: 24px;
		margin-bottom: 60px;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		font-size: 18px;
		letter-spacing: .025em;
		line-height: 24px;
		font-weight: 900;
	}
	li:first-child {
		margin-right: 120px;
	}
	li {
		float: left;
	}
`

export const Hr = styled.span`
	width: 100%;
	height: 1px;
	position: absolute;
	top: -15px;
	left: 0;
	background-image: linear-gradient(to right, #FFF 20%, rgba(255, 255, 255, 0) 0%);
	background-position: top;
	background-size: 9px 1px;
	background-repeat: repeat-x;
`

export const Navigation = styled(({ active, ...props }) => <Link {...props} />)`
	color: ${ scheme.whiteBlue } !important;
	${ props => props.active && css`
		color: ${ scheme.gray } !important;
	`}
`

export const BioContainer = styled.div`
	position: fixed;
	right: 0px; top: 0; bottom: 0;
	background-color: ${ scheme.black };
	transition-timing-function: ease-in;
	transition: 0.2s;
	z-index: 10;
	transform: translateX(100%);
	color: ${ scheme.whiteBlue };
	overflow-y: scroll;
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
	${props => props.showInfo && css`
		transform: translateX(0%);
	`}
	.scroll {
		width: 600px;
		min-height: 1000px;
		position: relative;
	}
`