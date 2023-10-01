import React from 'react';
import { TopBar, ContentRowTop, Footer, MoviesTable } from './index'

export default function ContentWrapper({userInfo, productInfo}) {
  const lastProd = productInfo.products.filter( p => !p.erased);
  const lastUser = userInfo.users.filter( p => !p.erased);
  return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
              <TopBar />
              <ContentRowTop categorys = {productInfo.countByCategory} 
                            lastProduct={lastProd[lastProd.length - 1]}
                            lastUser = {lastUser[lastUser.length - 1]}
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