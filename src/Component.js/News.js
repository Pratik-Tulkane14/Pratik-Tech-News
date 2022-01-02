import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    
    // constructor()
    //     super();
    //     this.state ={
    //         articles: this.articles
    //     }
    render() {
        return (
            <div className='container my-3'>
                <h1>Top HeadLines</h1>
                <div className="row">
                <div className="col-md-4">
                    <NewsItem title="Mytitle" description="Mydesc" imageUrl="https://www.gannett-cdn.com/presto/2021/12/31/USAT/440eafaa-f619-4157-9dfe-36607524ee60-AP_APTOPIX_Colorado_Wildfires.jpg?crop=4972,2797,x0,y110&width=3200&height=1801&format=pjpg&auto=webp"/>
                </div>
                <div className="col-md-4">
                    <NewsItem title="Mytitle" description="Mydesc"/>
                </div>
                <div className="col-md-4">
                    <NewsItem title="mytitle" description="mydesc"/>
                </div>
                </div>
            </div>
        )
    }
}