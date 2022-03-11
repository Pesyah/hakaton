import React from 'react';

const HeaderBtn = (props) => {
    return (
        <button className="col-xs-3 header-btn btn-hover1"><a src={props.src}>{props.text}</a></button>
    );
};

export default HeaderBtn;