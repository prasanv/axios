import React from 'react'
import axios from 'axios'
import '../app/global.css'

async function fetchReposDetails(name:string) {
    try {
        // git url
        // const res = await axios.get(`https://api.github.com/repos/prasanv/${name}`)
        // return res.data;

        // local url
        const res = await axios.get(`http://localhost:9000/repos?name=${name}`)
        return res.data[0];
    } catch (err) {
        console.error(err);
    }
}

async function fetchReposLangs(url:string) {
    try {
        const res = await axios.get(url)
        return res;
    } catch (err: any) {
        console.error(err.response?.status);
        return err.response;
    }
}

const GetRepoDetails = async (props: { name: string; }) => {
    const repoDetails = await fetchReposDetails(props.name);
    const langDetails = await fetchReposLangs(repoDetails?.languages_url);
    const languages = (langDetails?.status===200) ? Object.keys(langDetails.data) : null;
    // const languages = ['Typescript','CSS','HTML']
    // console.log(languages);

  return (
    <div>
        {repoDetails ? (
        <div className='card'>
            <h3>{repoDetails?.full_name}</h3>
            {repoDetails?.description?(<p>{repoDetails?.description}</p>):(<></>)}
            <p></p>
            <p>Type: {repoDetails?.visibility}</p>
            <p>Size: {repoDetails?.size}</p>
            Languages: {languages? (languages.map((lang) => (
            <span className='card-stat' key={lang}>{lang}</span>
        ))):(<span> Sorry, rate limit exceeded unable to fetch language data</span>)}
        </div>):(<></>)}
    </div>
  )
}

export default GetRepoDetails
