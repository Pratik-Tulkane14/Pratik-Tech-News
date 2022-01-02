import React, { Component } from 'react'

export default  class NewsItem extends Component {
    
    render() {
        let {title, description, imageUrl ,url} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt={"https://www.gannett-cdn.com/presto/2021/12/31/PDTF/10f05d3a-a16f-4176-8724-e598373a79fb-12302021_peacbowl2h-7.jpg?auto=webp&crop=2399,1350,x0,y122&format=pjpg&width=1200"}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} target="_blank"  className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
      }  
}