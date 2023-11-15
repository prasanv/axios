'use client';

import React from "react";

export default function Sample({
  params,
  searchParams,
}: any) {
  console.log({
    params,
    searchParams,
  });
    return <div>
      <h1>Next.js 13  Sample Page!</h1>
    </div>
  }