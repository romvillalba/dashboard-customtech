import React from 'react';
import { Cards } from './index'

// class ContentRowMovies extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       totalMovies: [],
//       totalAwards: [],
//       actorsQuantity: []
//     }
//   }


//   async componentDidMount() {
//     try {
//       const apiMovies = await fetch('/api/movies')
//       const dataMovies = await apiMovies.json();

//       const apiActors = await fetch('/api/actors')
//       const dataActors = await apiActors.json()

//       const totalAwards = dataMovies.data.map((movie) => movie.awards).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//       this.setState({
//         totalMovies: dataMovies.data.length,
//         totalAwards: totalAwards,
//         actorsQuantity: dataActors.data.length
//       })

//     } catch (e) {
//       console.error(e)
//     }
//   }


//   render() {
//     return (
//       <div className='row'>
//         <Cards
//           title="Movies in Data Base"
//           quantity={this.state.totalMovies}
//           color="primary"
//           icon="fa-film" />
//         <Cards
//           title="Total awards"
//           quantity={this.state.totalAwards}
//           color="success"
//           icon="fa-award" />
//         <Cards
//           title="Actors quantity"
//           quantity={this.state.actorsQuantity}
//           color="warning"
//           icon="fa-user" />
//       </div>

//     )
//   }
// }

// export default ContentRowMovies


export default function ContentRowMovies({ userCount, productCount }) {
  console.log("u ",userCount,"p ",productCount )
  return (
    <div className='row'>
      <Cards
        title="Users in Data Base"
        quantity={userCount}
        color="primary"
        icon="fa-film" />
      <Cards
        title="Products in Data Base"
        quantity={productCount}
        color="success"
        icon="fa-award" />
      {/* <Cards
        title="Actors quantity"
        quantity={this.state.actorsQuantity}
        color="warning"
        icon="fa-user" /> */}
    </div>

  );
}