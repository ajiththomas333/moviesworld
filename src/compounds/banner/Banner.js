import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../constants/constant'
import axios from "../../axios"
import "./banner.css" 



function Banner() {
  const[movie,setMovie]=useState([])
  
  useEffect(()=>{
    
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      console.log(Response.data.results[8]);
      setMovie(Response.data.results[2]);
    })
  },[])
  
  return (
    
     
    <div
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
     className="banner">
        <div className="contect">       
            <h1 className="title">{movie? movie.title:""}</h1>
            <div className='banner_button'>
                <button className="button">play</button>
                <button className="button">mylist</button>

            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>

        </div>
        <div className="fade"></div>
      
    </div>
    
  )
}

export default Banner
