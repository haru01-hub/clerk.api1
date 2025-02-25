import Repo from '@/components/Repo'
import RepoDirs from '@/components/repoDirs'
import Link from 'next/link'
import React, { Suspense } from 'react'

export default function RepoDetailPage({
  params,
}: {
  params: { name: string }
}) {
  return (
    <div className="flex-col justify-start items-start max-w-lg">
      <Link
        href="/repos"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 roun"
      >
        Back to repositories
      </Link>

      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={params.name} />
      </Suspense>

      <Suspense fallback={<div>Loding directories</div>}>
        <RepoDirs name={params.name}></RepoDirs>
      </Suspense>
    </div>
  )
}
