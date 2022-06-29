import '../styles/globals.scss';
import Header from '../components/layout/header/Header.js';
import Sidebar from '../components/layout/menu/Sidebar';
import SidebarShort from '../components/layout/menu/SidebarShort';

function App({ Component, pageProps }) {
    return (
        <div id="mainContainer">
            <div id="sidebarContainer">
                <Sidebar />
            </div>
            <div id="sidebarShortContainer">
                <SidebarShort />
            </div>
            <div id="headerContainer">
                <Header />
            </div>
            <div id="bodyContainer">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default App;
