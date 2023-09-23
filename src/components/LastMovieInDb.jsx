import React from 'react';
// import image from '../assets/images/1693275298039.jpg';

export default function LastMovieInDb({object}) {
      console.log(object)
      return (
            <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                        <div className="card-header py-3">
                              <h5 className="m-0 font-weight-bold text-gray-800">Last {object ? object.detail ? object.detail.includes("user") ? "user" : "product" : "" : "" } in Data Base</h5>
                        </div>
                        <div className="card-body">
                              <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={object ? object.image ? "/images/"+object.image : "" : ""} alt=" productImg " />
                              </div>
                              <p>{ object ? object.description ? object.description : object.name : ''}</p>
                              <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View {object ? object.detail ? object.detail.includes("user") ? "user" : "product": "" : "" } detail</a>
                        </div>
                  </div>
            </div>
      );
}
