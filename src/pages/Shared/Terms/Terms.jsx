import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our terms and conditions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus rem illum qui, numquam expedita vitae reprehenderit hic quia? Sint nobis hic pariatur cupiditate dolore nesciunt repellat asperiores odit? Quasi molestiae cumque suscipit odio non quo repellat eligendi, atque perferendis ab!</p>
            <p>Go Back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;