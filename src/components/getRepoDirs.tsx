import React from 'react'
import axios from 'axios'
import '../app/global.css'
import { resolve } from 'path';

// https://api.github.com/repos/prasanv/agilitycms-nextjs/contents

const fetchRepoDirs = async (name:string) => {
    try {
        // git api
        // const res = await axios.get(`https://api.github.com/repos/prasanv/${name}/contents`);
        // return res.data;
        
        // Local Url
        const res = await axios.get(`http://localhost:9000/contents?name=${name}`);

        await new Promise((resolve) => setTimeout(resolve, 3000))
        return res.data[0].contents;
    } catch(err: any) {
        console.error("fetchRepoDirs", {"status":err.response?.status, "data":err.response?.data});
        return err.response;
    }
}

const GetRepoDirs = async ({ name }: {name:string}) => {
    const repoDirs = await fetchRepoDirs(name);
    const dirs = repoDirs?.filter((item: { type: string; }) => item.type === "dir");
    console.log(repoDirs.length);
    console.log(dirs);
  return (
    <div className='card'>
        <h3>Directories</h3>
      {dirs?.map((item: { name: string;} ) => (<p>{item.name}</p>))}
    </div>
  )
}

export default GetRepoDirs