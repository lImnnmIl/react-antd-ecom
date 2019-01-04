import React, { Component } from 'react';
import '../../../sass/PageTitle.scss';

class PageTitle extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <h2 className="account-title">
                {title}
                {children}
            </h2>
        );
    }
}

export default PageTitle;