import React, { useState, useEffect } from "react";
import axios from 'axios';
// import noImage from "../assets/img/delete.svg"
import noImage from "../assets/img/no_image.png"
import './newsList.css'
import Loader from "react-loader-spinner";

const API_KEY = "pub_1318e2d3bd46a9597bcfa0903c6cbed76bcb"
const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=us,gb,jp,au,sg&language=en`
// const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=us,gb,jp,au,sg&language=en`

export default function NewsList() {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState([]);
    const [error, setError] = useState(null);

    // const HandleFetch = () => {
        // useEffect(() => (async function fetchData() {
        //     let result;
    
        //     try{
        //         result = await axios.get(`${URL}`);
        //         console.log(result)
        //         setResults(result.data.results)
                
        //     } catch (error) {
        //         setError(error);
        //         console.log(error)
        //     }

        //     fetchData();

        // }),[]);

        const fetchData = async() => {

            try{
                const response = await fetch(`${URL}`); //Use to fetching data
                const result = await response.json(); //Read and parse data from response
                console.log(response)
                console.log(result)
                setResults(result.results)
                
            } catch (error) {
                setError(error);
                console.log(error)
            }

        }

        const fetchDataQuery = async() => {

            try{
                const response = await fetch(`${URL}&q=${query}`); //Use to fetching data
                const result = await response.json(); //Read and parse data from response
                console.log(response)
                console.log(result)
                setResults(result.results)
                
            } catch (error) {
                setError(error);
                console.log(error)
            }
        }
        
        useEffect(() => {
            // const abortControleer = new AbortController();

            

            fetchData();

            // return function cleanup() {
            //     abortControleer.abort();
            // }
        }, [])
    // }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         let result;

    //         try{
    //             result = await axios.get(`${URL}`);
    //             console.log(result.data.results)
    //             setResults(result.data.results)
    //         } catch (error) {
    //             setError(error)
    //         }
    //     }

    //     fetchData();
    // }, [])
    
    // Promise.fetchData()

    return(
        <div className="container-fluid container-news">
            
            <h1 className="headline text-center my-5 font-monospace fw-bold">News Headline</h1>
            <div style={{margin:"20px auto", width:"650px", height:"40px", borderRadius:"20px", boxShadow: "-1px 2px 15px -1px rgba(110,110,110,0.44)"}}>
                <input style={{width:"500px", height:"40px", border:"0px", borderRadius:"20px", paddingLeft:"20px", verticalAlign:"center"}} type="text" placeholder="Vaccination, Met gala" onChange={e => setQuery(e.target.value)} name="search" />
                <button style={{borderRadius:"50px", border:"0px", marginLeft:"10px", height:"35px", background:"white", verticalAlign:"center"}} onClick={fetchDataQuery}>Search</button>
            </div>
            
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mx-5 my-5">
                {results.map((result) => (
                    <div className="col">
                        <div className="card h-100 shadow">
                            <img className="card-img-top img-head mb-2" src={result.image_url === null? noImage : result.image_url} alt="img" />
                            <a style={{color:"black"}} href={result.link} className="card-body  text-decoration-none">
                                <p className="card-title text-title">{result.title}</p>
                            </a>
                            <div className="card-footer">
                                <small className="text-muted">Created on : {result.pubDate}</small>
                            </div>
                        </div>
                    </div>
                
                
            ))}
            </div>

        {/* <button onClick={() => Promise.fetchData()} type="button">A</button> */}
        </div>
    )
    
}