import '../styles/globals.scss';
import Header from '../components/layout/header/Header.js';
import Sidebar from '../components/layout/menu/Sidebar';
import SidebarShort from '../components/layout/menu/SidebarShort';
import SidebarBottom from '../components/layout/menu/SidebarBottom';
import { useState } from 'react';

function App({ Component, pageProps }) {
    const [expandMenu, setExpandMenu] = useState(false);

    const toggleExpandMenu = () => {
        setExpandMenu(!expandMenu);
        const mainContainer = document.getElementById('mainContainer');
        const sidebarContainer = document.getElementById('sidebarContainer');
        const sidebarShortContainer = document.getElementById(
            'sidebarShortContainer'
        );

        if (expandMenu) {
            sidebarContainer.style.display = 'flex';
            sidebarShortContainer.style.display = 'none';
            mainContainer.style.gridTemplateAreas = `
                "sidebar header"
                "sidebar body"
             `;
        } else {
            sidebarContainer.style.display = 'none';
            sidebarShortContainer.style.display = 'flex';
            mainContainer.style.gridTemplateAreas = `
                "sidebarShort header"
                "sidebarShort body"
             `;
        }
    };

    return (
        <div id="mainContainer">
            <div id="sidebarContainer">
                <Sidebar
                    show={expandMenu}
                    toggleExpandMenu={toggleExpandMenu}
                />
            </div>
            <div id="sidebarShortContainer">
                <SidebarShort
                    show={!expandMenu}
                    toggleExpandMenu={toggleExpandMenu}
                />
            </div>
            <div id="sidebarBottomContainer">
                <SidebarBottom />
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
