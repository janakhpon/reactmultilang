import React from 'react';
import './NabBar.css';
import { translate, setLanguage, getLanguage } from 'react-multi-lang';

class DisplayContent extends React.Component {
    
    changeLang (lang) {
        setLanguage(lang)
      }


    render(){
        return(
            <div className="ui container">
    
            <div className="ui container navbar">
                <div class="ui animated fade button" tabindex="0" onClick = {() => this.changeLang('en')}>
                    <div class="visible content"> International Language </div>
                    <div class="hidden content">
                      Use  English
                 </div>
                </div>
                <div class="ui animated fade button" tabindex="0" onClick={() => this.changeLang('mm')}>
                    <div class="visible content"> Native Language </div>
                    <div class="hidden content">
                      Use  Burmese
                 </div>
                </div>
                <div class="ui animated fade button" tabindex="0">
                    <div class="visible content"> Current Selected Language  </div>
                    <div class="hidden content">
                    {getLanguage()}
                 </div>
                </div>
            </div>
    
                <form className="ui form">
    
                    <div className="field">
                        <label>{this.props.t('home.firstname')}</label>
                        <input type="text" name="first-name" placeholder={this.props.t('home.firstname')}/>
                     </div>
    
                     <div className="field">
                            <label>{this.props.t('home.lastname')}</label>
                            <input type="text" name="last-name" placeholder={this.props.t('home.lastname')}/>
                     </div>
    
                    <div className="inline field">
                                <div className="ui checkbox">
                                
                                    <input type="checkbox" tabindex="0" className="hidden" />
                                        <label>{this.props.t('home.term')}</label>
                        </div>
                    </div>
                                <button className="ui button negative" type="reset">{this.props.t('home.cancel')}</button>
                                <button className="ui button positive" type="submit">{this.props.t('home.save')}</button>
                </form>
    
            </div>
        );
    }
}

export default translate(DisplayContent);