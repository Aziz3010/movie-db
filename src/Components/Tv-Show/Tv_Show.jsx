import React, { Component } from 'react';
import style from './Tv-Show.module.css';

import axios from 'axios';

class Tv_Show extends Component {
    state = {tv:[]};

    getTrendingTv = async () => {
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361`);        
        this.setState({tv:data.results})
    };

    componentDidMount() {
        this.getTrendingTv();
    };

    render() {
        return (
            <>
                <div className="container my-3">
                    <div className="row">
  
                        <div className="col-md-12 text-center">
                            <div className="item py-4">
                                <hr className="w-50 bg-white mb-3" />
                                <h2>Trending<br/>Tv<br/>To Watch Now</h2>
                                <p className="text-muted mt-3" >Most Watched Tv By Day</p>
                                <hr className="w-100 bg-white mt-3" />
                            </div>
                        </div>

                        {this.state.tv.map((value, index)=>{
                            return(
                                <div key={index} className="col-md-2">
                                    <div className={style.items} >
                                        <img className="w-100" src={"https://image.tmdb.org/t/p/original"+value.poster_path} alt={value.original_title} />
                                        <h5>{value.original_title} {value.name}</h5>
                                    </div>
                                    <div className={style.items_after}>
                                        <h6>{value.vote_average}</h6>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </>
        );
    }
}

export default Tv_Show;