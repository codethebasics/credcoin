import BalanceCard from '../components/layout/card/BalanceCard';
import Dashboard from './dashboard/Dashboard';
import Header from '../components/layout/header/Header.js';
import Sidebar from '../components/layout/menu/Sidebar';

export default function Index(props) {
    return (
        <div id="mainContainer">
            <div id="sidebarContainer">
                <Sidebar />
            </div>
            <div id="headerContainer">
                <Header />
            </div>
            <div id="bodyContainer">
                <Dashboard />
            </div>
        </div>
    );
}
