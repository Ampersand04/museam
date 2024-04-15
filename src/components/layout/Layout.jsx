import PropTypes from 'prop-types';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

export function Layout({ children }) {
    window.scrollTo(0, 0);
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
