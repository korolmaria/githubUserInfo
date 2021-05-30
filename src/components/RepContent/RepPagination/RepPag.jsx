import React from 'react';
import CountPages from './CountPages';
import IconNextRepos from './IconNextRepos';
import IconPrevRepos from './IconPrevRepos';

const RepPag = () => {
    return (
        <div className="repositories__pagination">
                <CountPages />
                <IconNextRepos />                
                <a href="#s" className="repositories__pagination__link">
                    1
                </a>
                <a href="#s" className="repositories__pagination__link active">
                    2
                </a>
                <a href="#s" className="repositories__pagination__link">
                    3
                </a>
                <a href="#s" className="repositories__pagination__link">
                    ...
                </a>
                <a href="#s" className="repositories__pagination__link">
                    10
                </a>
                <IconPrevRepos />                
            </div>
    );
}

export default RepPag;