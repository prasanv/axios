// 'use client'
import Link from 'next/link';
import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepos = async () => {
    // Note: The primary rate limit for unauthenticated requests is 60 requests per hour per IP.
    // Actual url to get the repos from github https://api.github.com/users/prasanv/repos
    const response = await fetch('http://localhost:9000/repos');
    const repos = response.json();
    // adding 2 sec wait to view the spinner
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return repos;
}

const ReposPage = async () => {
    const repos = await fetchRepos();
  return (
    <div className='repos-container'>
      <h2>Repositories</h2>
      <ul className='repo-list'>
        {repos?.map((repo: any) => (
            <Link key={repo.id} href={`/code/repos/${repo.name}`}>
                <li>
                    <h3>{repo.name}</h3>
                    <p>{repo.visibility}</p>
                    <div className='repo-details'>
                        <span>
                            <FaStar /> {repo.stargazers_count}
                        </span>
                        <span>
                            <FaCodeBranch /> {repo.forks_count}
                        </span>
                        <span>
                            <FaEye /> {repo.watchers_count}
                        </span>
                </div>
                </li>
            </Link>
        ))}
      </ul>
    </div>
  )
}

export default ReposPage
