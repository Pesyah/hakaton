import React from 'react';

const Account = (props) => {
    return (
        <button className="col-xs-2 account-btn header-btn btn-hover1"><a src={props.src}>{props.text}</a></button>
    );
};

export default Account;