import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle ) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("LinkedIn all day!", "Premiun signup -- 909 readers")}
            {newsArticle("Software Engineer Forums", "EY consulting -- 159 readers")}
            {newsArticle("Apple to launch new product", "Dodgecoin -- 80 readers")}
            {newsArticle("Tesla to accept Dogecoin as payment", "Seattle Times newsletter - 1500 readers")}
            {newsArticle("4th stimulus pay passed senate", "152 new job postings -- 701 readers")}
            {newsArticle("Vaccines to be spread across the country", "Seattle Devs -- 132 readers")}
        </div>
        
    )
}

export default Widgets
