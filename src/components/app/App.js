import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {MainPage, ComicsPage, Page404, SingleComicsPage} from '../pages';
import AppHeader from "../appHeader/AppHeader";


const App = () => {

        return (
            <Router>
                <div className="app">
                    <AppHeader/>
                    <main>
                        <Routes>
                        <Route path='*' element={<Page404 />} />
                        <Route path='/comics' element={<ComicsPage />} />
                        <Route path='/comics/:comicsID' element={<SingleComicsPage />} />
                        <Route path='/' element={<MainPage />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        )
}

export default App;