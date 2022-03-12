import React from 'react';

const FooterLink = (props) => {
    return (
        <li><a href={props.href}>{props.text}</a></li>
    );
};

export default FooterLink;