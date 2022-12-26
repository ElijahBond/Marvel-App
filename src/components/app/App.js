import { useState } from "react";

import AppHeader from "../appHeader/AppHeader";
import AppBanner from '../appBanner/AppBanner';
import ComicsList from '../comicsList/ComicsList';
import RandomChar from "../randomChar/RandomChar";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';
import CharList from "../charList/CharList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";


const App = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id)
    }

        return (
            <div className="app">
                <AppHeader/>
                <main>
                    {/* <ErrorBoundary>
                        <RandomChar/>
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                            <CharList onCharSelected={onCharSelected} />
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharInfo charId={selectedChar} />  
                        </ErrorBoundary>
                    </div> */}
                    <AppBanner />
                    <ComicsList />
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
}

export default App;