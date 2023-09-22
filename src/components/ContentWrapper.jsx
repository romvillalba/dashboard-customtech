import React from 'react';
import { TopBar, ContentRowTop, Footer, MoviesTable } from './index'

export default function ContentWrapper({userInfo, productInfo}) {
  console.log("ContentWrapper", productInfo)
  return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
              <TopBar />
              <ContentRowTop categorys = {Object.keys(productInfo.countByCategory)} 
                            lastProduct={productInfo.products[productInfo.products.length - 1]}
                            userCount = {userInfo.count}
                            productCount = {productInfo.count} />
              
              <MoviesTable data = {productInfo.products} 
                           header = {['id', 'name', 'description', 'detail', 'id_category']}/>
              <MoviesTable data = {userInfo.users} 
                           header = {['id', 'name', 'email', 'detail']}/>
        </div>
              <Footer /> 
    </div>
  );
}