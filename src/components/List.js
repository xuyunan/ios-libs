import React, { Component } from 'react';
import './List.css';
import Item from './Item';
import libs from '../resource/libs.json';

class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        console.log(libs)
        const items = libs.map((item, index) => {
            return <Item lib={item} key={index}/>
        })
        this.setState({
            items: items
        })
    }

	render() {
        return (
            <div className="list">
                {this.state.items}
            </div>
        )
    }
}

export default List;