import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function DashboardPage() {
  const { userId } = auth()
  const user = await currentUser()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard(Server-side)</h1>
      <p className="mb-5">
        Welcome to dashboard. 이 페이지는 로그인된 사용자의 정보를 보여주는
        페이지입니다.
      </p>

      {
        //중괄호하면 자바스크립트를 쓸 수 있다.
        userId && ( //소괄호는 html  //&&는 연산자 이름
          <div>
            <p>UserID: {userId}</p>
            <p>Name: {user?.fullName}</p>
            <p>UserName: {user?.username} </p>
            <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
          </div>
        )
      }
    </div>
  )
}
