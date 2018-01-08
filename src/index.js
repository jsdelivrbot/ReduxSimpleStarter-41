import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// components
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBEKl_Hw8tCNlKsdVC8zJsWf9vIRvSKREQ';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({ key:API_KEY, term: 'surfboards'}, videos => this.setState({ videos }));
	}
	render(){
		return (
			<div>
				<SearchBar/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));