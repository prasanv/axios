// @ts-nocheck
import React from "react";
import { Suspense } from "react";
import GetRepoDirs from "src/components/getRepoDirs";
import GetReposDetails from "../../../../components/getRepoDetails";
import "../../../../app/global.css";
import Link from "next/link";
import Spinner from "../../../../components/spinner";

const ReposPages = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to Repos page
      </Link>
      <Suspense fallback={<Spinner></Spinner>}>
        <GetReposDetails name={name} />
      </Suspense>
      <Suspense fallback={<div>...loading dir</div>}>
        <GetRepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default ReposPages;
