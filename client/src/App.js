import * as React from "react";
import './App.css';
// import {Api} from './api/api'
import {Route, Routes} from 'react-router-dom'
import {useLocalStorage} from 'react-use-storage'
import MenuBar from "./components/menuBar";

function App() {

    const [login, setLogin, removeValue] = useLocalStorage("login", null)

    const Main = () => {
        return <h1>main</h1>
    }

    return (
        <>
        <MenuBar>
            <h1>Hello app</h1>
        </MenuBar>

            <Routes>
                {/*<Route exact path={'/'} element={Main}/>*/}
            </Routes>
        </>
    );
}

export default App;
