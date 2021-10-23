import React, { Component } from 'react';
import style from './Home.module.css';

import axios from 'axios';

class Home extends Component {

    state = {
        movies: [],
        tv: []
    };

    getTrending = async (mediaType) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=52bbcddeda849047525b51d6f8a12361`);
        this.setState({ [mediaType]: data.results })
    };

    componentDidMount() {
        this.getTrending("movies");
        this.getTrending("tv");
    };

    render() {
        return (
            <>
                <div className="container my-5">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="item py-4">
                                <hr className="w-25 bg-white ml-0 mb-3" />
                                <h2>Trending<br />Movies<br />To Watch Now</h2>
                                <p className="text-muted mt-3" >Most Watched Movies By Day</p>
                                <hr className="w-75 bg-white ml-0 mt-3" />
                            </div>
                        </div>

                        {this.state.movies.slice(0, 10).map((value, index) => {
                            return (
                                <div key={index} className="col-md-2">
                                    <div className={style.items} >
                                        <img className="w-100" src={"https://image.tmdb.org/t/p/original" + value.poster_path} alt={value.original_title} />
                                        <h5>{value.original_title} {value.name}</h5>
                                    </div>
                                    <div className={style.items_after}>
                                        <h6>{value.vote_average}</h6>
                                    </div>
                                </div>
                            )
                        })}


                    </div>

                    <div className="row mt-4">

                        <div className="col-md-4">
                            <div className="item py-4">
                                <hr className="w-25 bg-white ml-0 mb-3" />
                                <h2>Trending<br />Tv<br />To Watch Now</h2>
                                <p className="text-muted mt-3" >Most Watched Tv By Day</p>
                                <hr className="w-75 bg-white ml-0 mt-3" />
                            </div>
                        </div>

                        {this.state.tv.slice(0, 10).map((value, index) => {
                            return (
                                <div key={index} className="col-md-2">
                                    <div className={style.items} >
                                        <img className="w-100" src={"https://image.tmdb.org/t/p/original" + value.poster_path} alt={value.original_title} />
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

export default Home;