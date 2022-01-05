import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: 'general'
    }
    static propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,

    }
    constructor(){
        super();
        this.state ={
            articles: [],
            loading:false,
            page:1
        }
    }
    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c8708c1dd34f4188a3625d77599fabe7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({articles:parseData.articles,
            totalResults:parseData.totalResults,
            loading:false})
    }
    async componentDidMount(){
        this.updateNews();

    }
    handelPrevClick = async ()  =>{
            this.setState({page: this.state.page -1})
            this.updateNews();
    }
    handelNextClick = async ()  =>{
                this.setState({page: this.state.page +1})
                this.updateNews();
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'style={{margin: '35px 0px'}}>Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                {!this.state.loading && this.state.articles.map((element) =>{
                return <div className="col-md-4" key={element.url}>
                    <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://www.gannett-cdn.com/presto/2021/12/31/PDTF/10f05d3a-a16f-4176-8724-e598373a79fb-12302021_peacbowl2h-7.jpg?auto=webp&crop=2399,1350,x0,y122&format=pjpg&width=1200"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
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