import dynamic from 'next/dynamic';

const loadingFunctionComponent = () => (
    <>
        <svg x="0px" y="0px" width="40px" margin="auto" height="40px" viewBox="0 0 50 50">
            <path
                fill="#000"
                d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="0.6s"
                    repeatCount="indefinite"
                />
            </path>
        </svg>
    </>
);

function MapDynamic({ MarkerItem, zoom, center, page }) {
    const Map = dynamic(() => import('./components/map/map'), {
        loading: loadingFunctionComponent,
        ssr: false,
    });
    return <Map MarkerItem={MarkerItem} zoom={zoom} center={center} page={page} />;
}

export default MapDynamic;
