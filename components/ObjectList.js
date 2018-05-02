import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatToTree } from '../utils/parseUtils';

class ObjectList extends Component {
    static propTypes = {
        list: PropTypes.array
    };

    static defaultProps = {
        list: []
    };

    mapData(items) {
        return items.map(item => {
            return <ul>
                <li>{ item.name }</li>
                { item.children.length ? <ul>
                    {
                        this.mapData(item.children)
                    }
                </ul> : null}
            </ul>
        })
    }


    render() {
        const DATA = formatToTree(this.props.list);

        return (
            <ul>
                <li>
                    { DATA.parent.name }
                </li>
                { this.mapData(DATA.parent.children) }
            </ul>
        );
    }
}


export default ObjectList;
