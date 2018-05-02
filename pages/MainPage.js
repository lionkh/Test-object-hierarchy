import { Component } from 'react';

import ObjectList from '../components/ObjectList';

class MainPage extends Component {
    render() {
        const SERVER_LIST = [
            {
                id: 1,
                name: 'director',
                parentId: null
            },
            {
                id: 11,
                name: 'project-manager',
                parentId: 1
            },
            {
                id: 111,
                name: 'developer',
                parentId: 11,
            },
            {
                id: 112,
                name: 'developer',
                parentId: 11,
            },
            {
                id: 1111,
                name: 'designer',
                parentId: 111,
            },
            {
                id: 1121,
                name: 'designer',
                parentId: 112,
            },
        ];

        return <div className="main-page">
            <ObjectList list={SERVER_LIST}/>
        </div>
    }
}

export default MainPage;