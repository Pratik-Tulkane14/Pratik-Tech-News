import React, { Component } from 'react'

export default  class NewsItem extends Component {

    render() {
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src="" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">News Heading</h5>
                        <p className="card-text">This is para</p>
                        <a href=""  className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
      }  
}