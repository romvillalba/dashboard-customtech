import React from 'react';
import { ContentRowMovies, LastMovieInDb, GenresInDb } from './index'

export default function ContentRowTop({ categorys, lastProduct, userCount, productCount }) {
      return (
            <div className="container-fluid">
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                  </div>
                  <ContentRowMovies userCount = {userCount}
                                    productCount = {productCount} />

                  <div className="row">
                        <LastMovieInDb product={lastProduct} />
                        <GenresInDb categorys={categorys} />
                  </div>
            </div>

      );
}