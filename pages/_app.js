import '../styles/globals.scss';

function App({ Component, pageProps }) {
    return (
        <div id="mainContainer">
            <Component {...pageProps} />
        </div>
    );
}

export default App;
