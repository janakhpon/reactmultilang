import React from 'react';
import './NabBar.css';

const NavBar = props => {
    return (
        <div className="ui container navbar">
            <div class="ui animated fade button" tabindex="0">
                <div class="visible content"> International Language </div>
                <div class="hidden content">
                  Use  English
             </div>
            </div>
            <div class="ui animated fade button" tabindex="0">
                <div class="visible content"> Native Language </div>
                <div class="hidden content">
                  Use  Burmese
             </div>
            </div>
        </div>
    );
}

export default NavBar;