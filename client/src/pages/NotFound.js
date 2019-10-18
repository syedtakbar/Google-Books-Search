import React from 'react';
import Header from '../components/Header';
import Button from '../components/Link';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <Header title={"Page not found"}>
            </Header>
            <Link to="/">
                <Button label={"Back to Search"}/>
            </Link>
        </div>
    )
}