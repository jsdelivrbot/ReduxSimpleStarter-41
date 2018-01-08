import React from 'react';
import ReactDOM from 'react-dom';

// components
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBEKl_Hw8tCNlKsdVC8zJsWf9vIRvSKREQ';

const App = () => {

	return (
		<div>
			<SearchBar/>
		</div>
	)

}

ReactDOM.render(<App/>, document.querySelector('.container'));