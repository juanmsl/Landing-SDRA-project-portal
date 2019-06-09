import React from 'react';

class WebsiteContainer extends React.Component {
    render = () => {

        const { children } = this.props;

        return (
            <main className="sdra-main">
                {children}
            </main>
        );
    };
}

export default WebsiteContainer;