import ReactGA from 'react-ga'

export const GoogleAnalytics = () => {
	ReactGA.initialize('UA-127453808-1')
	ReactGA.pageview('/')
}