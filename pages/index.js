import { useEffect } from 'react';
import Dashboard from './dashboard/index';

export default function Index(props) {
    useEffect(() => {
        props.setPaths(['Home']);
    }, []);

    return <Dashboard />;
}
