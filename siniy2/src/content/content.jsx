import React from 'react';
import Home from './home/home';
import Footer from './footer/footer';
import { Route, Routes } from 'react-router-dom';
import Rightcontent from './gallery/rightcontent';
import Category from './gallery/category/category';
import Quotes from './quotes/quotes';
import About from './about/about';
import RequirePassword from './admin/admin';
function Content() {
    return (
        <div className="content">
            <div className="head-text">

            </div>
            <Routes>
            <Route path='/admin' element={<RequirePassword />} />
                <Route path='/about' element={<About />} />
                <Route path='/quotes' element={<Quotes />} />
                <Route path='/gallery/' element={<Rightcontent />}>
                    <Route path='/gallery/:id' element={<Category />} />
                </Route>
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </div> 
    )
}
export default Content