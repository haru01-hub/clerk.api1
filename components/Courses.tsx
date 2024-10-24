import Link from 'next/link'

interface Course {
  id: string //불러올 데이터의 타입형을 선언
  tittle: string
  description: string
  link: string
  level: string
}
interface CoursesProps {
  courses: Course[] //배열데이터를 가져와 요청해 표시가능
}
const Courses: React.FC<CoursesProps> = async ({ courses }) => {
  return (
    <div className="grid-1">
      {
        courses.map((course: Course) => (
          //소괄호는 return이라는 뜻으로 html 작성 가능
          <div key={course.id} className="bg-blue-200 p-4 m-4 rounded-lg">
            <h2 className="text-lg font-bold">{course.tittle}</h2>
            <small>Level:{course.level}</small>
            <p className="mb-4">{course.description}</p>
            <Link
              href={course.link}
              target="_blank"
              className="py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg mb-4"
            >
              Go to Courses
            </Link>
          </div>
        ))
        //map함수는 배열데이터를 가지고 콜백함수를 씀. 각 성분에 대해 뭘 어떻게 할지(=화면에 표시)
        //각각의 배열 성분은 course로 지정
      }
    </div>
  )
  //grid는 세로 한줄로 표시할 거다.
} //Functional Components
//typescript는 좀 다름
export default Courses
