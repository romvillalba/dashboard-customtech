import React from 'react';
import './moviesTable.css'
// import PropTypes from 'prop-types'

export default function MoviesInDb({data, header}) {
  return (

        <ul className='moviesTableGridRows'>
            {header.map((row, i) => {
              return <li key={row + i}>{data[row]}</li>
            })}
        </ul>
  );
}

// MoviesInDb.propTypes = {
//   atributes: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     rating: PropTypes.string.isRequired,
//     genre: PropTypes.string.isRequired,
//     awards: PropTypes.string.isRequired
//   })
// }

// MoviesInDb.defaultProps = {
//   title: "aTitle",
//   length: 0,
//   rating: 0.0,
//   genre: "aGenre",
//   awards: 0
// }