import React from 'react';
import image from '../assets/images/mandalorian.jpg';

export default function LastMovieInDb({product}) {
      return (
            <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                        <div className="card-header py-3">
                              <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                        </div>
                        <div className="card-body">
                              <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={image} alt=" productImg " />
                              </div>
                              <p>{ product ? product.description : ''}</p>
                              <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                        </div>
                  </div>
            </div>
      );
}
