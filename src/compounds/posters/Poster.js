import React from 'react'
import "./post.css"
import axios from 'axios'
import {imageUrl,API_KEY } from '../constants/constant'
import { useEffect } from 'react'
import { useState } from 'react'
import Youtube from "react-youtube"

function Poster(props) {
  const [movie,setmovies]=useState([])
  const [Urlid,Urlsetid]=useState('')
  useEffect(()=>{
    
    
    axios.get(props.url).then((res)=>{
      console.log(res.data)
      setmovies(res.data.results)
    })

  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handlemove = (id)=>{
    console.log(id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-U`).then((responts)=>{
      if(responts.data.results.length!==0){
      Urlsetid(responts.data.results[0])
      }
      else{
        console.log('array emty')
      }
    })
  }
  return (
    
      <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>  
          {movie.map((obj)=>
 
            <img  onClick={()=>handlemove(obj.id)}className= {props.issmall ? 'smallposter' :'poste' }src={`${imageUrl+obj.backdrop_path}`}></img>

          )}
        
    </div>
   {Urlid && <Youtube opts={opts} videoId={Urlid.key}/>}

    </div>
   
  )
}

export default Poster
