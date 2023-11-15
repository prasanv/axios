import React from "react";

// Note: revalidate and cache doesn't work NextJS issue
// - If two fetch requests with the same URL in the same route have different revalidate values, the lower value will be used.
// - As a convenience, it is not necessary to set the cache option if revalidate is set to a number since 0 implies cache: 'no-store' and a positive value implies cache: 'force-cache'.
// - Conflicting options such as { revalidate: 0, cache: 'force-cache' } or { revalidate: 10, cache: 'no-store' } will cause an error.
export const revalidate = 3;



const fetchRandomImage = async() => {
  const res = await fetch('https://random.imagecdn.app/v1/image?width=500&height=150&category=buildings&format=json', { cache: 'no-store' });
  // const res = await fetch('https://random.imagecdn.app/v1/image?width=500&height=150&category=buildings&format=json', { next: { revalidate: 3 } });
  return await res.json();
}

// Important Note: In order avoid CORS error while a third-party url for image source, update the NextJs config file
export default async function Page() {
    const randomImage = await fetchRandomImage()
    console.log(randomImage.url);
    return <div>
      <h1>Hello, Next.js 13  Home Page!</h1>
      <img src={randomImage.url} alt="" />
    </div>
  }