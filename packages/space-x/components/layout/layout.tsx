import React from 'react';
import MainHeader from './main-header';

const Layout = (props) => {
    return <div>
        <style jsx global>{`
            body {
                margin: 0;
                padding: 0;
                background: #e5e5e5;
            }
        `}</style>
        <MainHeader />
        <main>
            {props.children}
        </main>
    </div>;
}

export default Layout;