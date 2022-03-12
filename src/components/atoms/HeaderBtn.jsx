import React from 'react';
import { Link } from 'react-router-dom';


const HeaderBtn = (props) => {
    return (
        <button className="col-xs-3 header-btn btn-hover1">
            <Link to={props.src}>{props.text}</Link>
        </button>
    );
};

export default HeaderBtn;