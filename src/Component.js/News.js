import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor(){
        super();
        this.state ={
            articles: [],
            loading:false,
            page:1
        }
    }
    
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c8708c1dd34f4188a3625d77599fabe7&page=1`;
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({articles:parseData.articles})
    }
    handelPrevClick = async ()  =>{
        console.log("objectprev");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c8708c1dd34f4188a3625d77599fabe7&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        })
    }
    handelNextClick = async ()  =>{
        console.log("object");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c8708c1dd34f4188a3625d77599fabe7&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles
        })
    }
    render() {
        return (
            <div className='container my-3'>
                <h1>Top HeadLines</h1>
                <div className="row">
                {this.state.articles.map((element) =>{
                return <div className="col-md-4" key={element.url}>
                    <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://www.gannett-cdn.com/presto/2021/12/31/PDTF/10f05d3a-a16f-4176-8724-e598373a79fb-12302021_peacbowl2h-7.jpg?auto=webp&crop=2399,1350,x0,y122&format=pjpg&width=1200"} newsUrl={element.url}/>
                </div>
            })} 
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-2" onClick={this.handelPrevClick}> &larr; Previous</button>
                <button type="button" className="btn btn-dark mx-2" onClick={this.handelNextClick}> Next &rarr;</button>
                </div>
            </div>
        )
    }
}