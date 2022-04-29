import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import {createRef, useRef} from "react";
import Footer from "./components/Footer";

function App() {
	const refs= useRef([createRef(), createRef(), createRef()]);
	
	return (
		<div className="App">
			<Header refs={refs}/>
			<Main refs={refs}/>
			<Footer/>
		</div>
	);
}

export default App;
