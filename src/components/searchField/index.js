import React, { Component } from 'react';
import { ajax } from 'jquery';
import styles from './searchField.module.css';

class SearchField extends Component {
    constructor() {
        super();
        
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        //this.setState({client: this.props.searchClient});
    }

    handleChange(e) {
       ajax({
            url: "https://api.giantbomb.com/search/",
            dataType: "jsonp",
            jsonp: 'json_callback',
            data: {
                api_key: this.props.apiKey,
                query: e.target.value,
                format: 'jsonp',
                field_list: 'name',
                resources: 'game'
            },
            success: function(res) {
                console.log(res);
            }
        });
    }

    render() {
        return (
            <div>
                <input 
                    className={styles.input}
                    type="text"
                    placeholder="Type here name of the game"
                    onChange={this.handleChange}
                />
            </div>
        );
    }

}

export default SearchField;