import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../reducers/userReducer';

const Account = (props) => {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
    <button className="col-xs-2 account-btn header-btn btn-hover1">
        <div>
            {(() => {
                if (isAuth) {
                    return <div onClick={() => {dispatch(logout())}}>Выйти</div>
                }
                else {
                    return <Link to="/login">Войти</Link>
                }
            })()}
        </div>
    </button>
    );
};

export default Account;