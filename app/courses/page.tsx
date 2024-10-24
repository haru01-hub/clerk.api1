//브라우저가 랜더링할 때 필요
'use client'

import Courses from '@/components/Courses'
//api 폴더 안에 있는 courses와 달리 얘는 프론트엔드 작업환경이다.
// 가장 먼저 서버에서 읽어오는 것을 해야한다.
import React, { useEffect, useState } from 'react'

export default function CoursesPage() {
  const [courses, setCourses] = useState([]) //이게 불러오는 명령어!useState는 서버에 있는 내용이 변경될 수 있는데, 최신 버전으로 다운로드 받기 위해서는 const[courses]만 쓰면 고정된 것, useState를 써주면 변경될 수 있다. 함수명인 setCourses를 이용하면 변수명?을 바꿀 수 있음. set함수명(=setCourse)
  const [loading, setLoading] = useState(true)
  //데이터가 뜨기 전까지 로딩 값으로! 이때는 트루고! 만약 데이터가 불러와졌다면 if 그럼 useState(false)

  useEffect(() => {
    const fetchCourses = async () => {
      //async는 비동기 함수
      const res = await fetch('api/courses') //fetch는 주소를 주면 거기서 데이터 읽어와라!이럼 get으로 받아옴
      const data = await res.json() //앞에 데이터를 json형태로 다시 가공해서 data(변수명)으로 부르자!
      setCourses(data) //여기서 데이터 가져가서 맨 위의 [courses,~~]로 들어간다는 의미!
      setLoading(false) //데이터를 다 읽어왔다는 뜻!
    }
    fetchCourses()
  }, []) //()안에는 콜백함수, 페이지를 열면 함수를 실행시켜라? 서버 일시키기 (콜백함수,조건)
  if (loading) {
    //로딩값?으로 변경되었을 때??
    return <div>Loading...</div> //데이터가 안왔을 때에는 이 값을!
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <Courses courses={courses} />
    </div>
  )
  return <div>CoursesPage</div>
}
