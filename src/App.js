import Header from "./components/Header";
import Main from "./components/Main";
import {createRef, useRef} from "react";
import Footer from "./components/Footer";

function App() {
	const sectionRefs= useRef([createRef(), createRef(), createRef()]);
	
	return (
		<>
			<Header sectionRefs={sectionRefs}/>
			<Main sectionRefs={sectionRefs}/>
			<Footer/>
		</>
	);
}

export default App;
