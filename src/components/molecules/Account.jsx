import React from 'react';
import { Link } from 'react-router-dom';

const Account = (props) => {
    return (
    <button className="col-xs-2 account-btn header-btn btn-hover1">
        <div>
            <Link to="/registration">Войти</Link>
        </div>
    </button>
    );
};

export default Account;