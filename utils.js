// Determined by API
export const getNumberFromRatingValue = (source, value) => {
  switch (source) {
    case 'Internet Movie Database':
      return +(value.split('/')[0]) * 10
    case 'Rotten Tomatoes':
      return +value.replace('%', '')
    case 'Metacritic':
      return +(value.split('/')[0])
    default:
      return NaN
  }
}
