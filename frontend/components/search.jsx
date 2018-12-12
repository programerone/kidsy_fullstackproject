import React from 'react';

class SearchForm extends React.Component{

    render(){
        return(
            <div className="searchbar">
                <input type="text" className="inputSearch"/><button className="search">Search</button>
                <g><path d="M11 9h2v-3h3v-2h-3v-3h-2v3h-3v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01-1.74-.96h-.01l-1.1 2-2.76 5h-7.02l-.13-.27-2.24-4.73-.95-2-.94-2h-3.27v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2h-11.58c-.13 0-.25-.11-.25-.25z"></path></g>
            </div>
        )
    }
}

export default SearchForm;