import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import {createRef, useRef} from "react";

function App() {
	const refs= useRef([createRef(), createRef(), createRef()]);
	
	return (
		<div className="App">
			<Header refs={refs}/>
			<Main refs={refs}/>
			<footer>
				
			</footer>
		</div>
	);
}

export default App;
