import * as R from 'ramda'

const evalAspect = ( x ) => {
	switch ( x.aspectRatio ) {
		case 'sixteenToNine': return { aspect: 9/16, width: 6 }
		case 'square': return { aspect: 1, width: 4 }
		default: return { aspect: 1, width: 4 }
	}
}

const arrayOfWidths = R.map(x => evalAspect(x).width, data)
const sequence = ( i ) => ([
	0,
	i === 0 ? 0 : R.find(R.propEq(),arrayOfWidths),
	// find first el that will be lesser than first el + this el. if width === 12 => break
])

// const sizes = [{
//   id: 1,
//   size: 6
// }, {
//   id: 2,
//   size: 4
// }, {
//   id: 3,
//   size: 6
// }, {
//   id: 4,
//   size: 2
// }, {
//   id: 5,
//   size: 6
// }]

// const con = ( sum ) => R.find(x => sum + x.size <= 12, sizes) 
// const rest = R.reject(R.propEq(), sizes)
// console.log(
// 'picked', con(6),
// 'rest', rest,
//   R.propEq()
// )
// 6 4 2
const generateLgLayout = ( data ) => {
	var arrayOfAspects = R.map(x => evalAspect(x).aspect, data)
	var x = R.sum(R.slice(0, i, arrayOfWidths))
	var y = Math.floor(R.divide(i, 3)) * arrayOfWidths[i]
	var w = R.map(x => evalAspect(x).width, data)
	var h = w 
	return (data.map(( i ) => {
		return {
			i: i.toString(),
			x: x,
			y: y,
			w: w[i],
			h: h[i]
		}
	}))
}

const generateMdLayout = ( data ) => {
	var width = 12
	var height = 8
	return (data.map(( x, i ) => {
		return {
			i: i.toString(), 
			x: 0, 
			y: i * 2, 
			w: width, 
			h: height,
		}
	}))
}

export const generateLayout = ( data ) => {
console.log(generateLgLayout(data))
return {
	lg: generateLgLayout(data), 
	md: generateMdLayout(data)
}}