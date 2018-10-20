import React from 'react'
import {Link} from 'react-router-dom';

export default () => (
    <div>
        <h1>Home Page</h1>
        <div>
            <Link to="/mailTemplates">Mail Templates</Link>
            <div/>
            <Link to="/carBrands">Car Brands</Link>
        </div>
    </div>
);

