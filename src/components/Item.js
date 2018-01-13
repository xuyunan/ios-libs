import React, { Component } from 'react';
import './Item.css';

class Item extends Component {

	render() {

        let bgStyle = {
            backgroundColor: this.props.lib.bgcolor
        }

        let textStyle = {
            color: this.props.lib.textcolor
        }

        return (
            <div className="item" style={bgStyle}> 
                <h2 className="item-title">
                    <a style={textStyle} href={this.props.lib.url}>{this.props.lib.name}</a>
                </h2>
                <div className="item-summary" style={textStyle}>{this.props.lib.summary}</div>
            </div>
        )
    }
}

export default Item;