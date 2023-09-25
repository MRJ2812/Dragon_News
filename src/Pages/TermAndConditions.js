import React from 'react';
import { Link } from 'react-router-dom';

const TermAndConditions = () => {
    return (
        <div>
            <p>Accept term and conditon</p>
            <p>Go back to <Link to="/register">Registation</Link> page</p>
        </div>
    );
};

export default TermAndConditions;