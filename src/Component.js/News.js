import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

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
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c8708c1dd34f4188a3625d77599fabe7&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({articles:parseData.articles,
            totalResults:parseData.totalResults,
            loading:false})
    }
    handelPrevClick = async ()  =>{
        console.log("previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c8708c1dd34f4188a3625d77599fabe7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading:false
        })
    }
    handelNextClick = async ()  =>{
        console.log("object");
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c8708c1dd34f4188a3625d77599fabe7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles,
            loading:false
        })
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                {!this.state.loading && this.state.articles.map((element) =>{
                return <div className="col-md-4" key={element.url}>
                    <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://www.gannett-cdn.com/presto/2021/12/31/PDTF/10f05d3a-a16f-4176-8724-e598373a79fb-12302021_peacbowl2h-7.jpg?auto=webp&crop=2399,1350,x0,y122&format=pjpg&width=1200"} newsUrl={element.url}/>
                </div>
            })} 
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-2" onClick={this.handelPrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark mx-2" onClick={this.handelNextClick}> Next &rarr;</button>
                </div>
            </div>
        )
    }
}