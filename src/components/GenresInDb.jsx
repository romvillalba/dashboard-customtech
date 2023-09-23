import React from 'react';
import { Genre } from './index'


export default function GenresInDb({categorys})  {
    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Categories</h5>
                  </div>
                  <div className="card-body fondoCaja">
                    <div className="row ">
                      { (Object.keys(categorys)).map( (name, i) => (
                          <Genre key = {name + i} name = {name} cantidad = {categorys[name]} />
                      ))}
                    </div>
                  </div>
            </div>
        </div>
    )
  

}


