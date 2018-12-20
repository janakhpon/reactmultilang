import React from 'react';
import ReactDOM from 'react-dom';
import DisplayContent from './components/DisplayContent';
import { setDefaultTranslations, setDefaultLanguage } from 'react-multi-lang';
import en from './translations/en.json';
import mm from './translations/mm.json';

setDefaultTranslations({en, mm});
setDefaultLanguage('en');

class App extends React.Component{

    state = { firstname : "", lastname : ""}

    renderContent(){
        return(
            <div className="ui container">
            <DisplayContent/>
            </div>
        );

    }

    render(){
        return this.renderContent();
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

