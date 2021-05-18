import Head from 'next/head';
import Footer from './footer/footer';
import HeaderLayout from './header/header';

export default function Layout({ children, title = 'Appartment' }) {
    return (
        <>
            <Head>
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
                    rel="stylesheet"
                />
                <title>{title}</title>
            </Head>
            <div className="maincontent">
                <HeaderLayout></HeaderLayout>
                {children}
                <Footer></Footer>
            </div>
        </>
    );
}
