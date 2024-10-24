//API 가져오기(백엔드)
//http://localhost:3000/api/hello가면 화면이 아닌 데이터를 보여줌! 서버한테 프론트엔드한테 주는 것이다.
import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    message: 'Hello next.js!', //키:값
    contents:
      '/app/api 폴더 생성 Next.js에서 백엔드 서비스 제공 가능 관습적으로 폴더명을 api로 씀 벡엔드 API의 파일명은 route.ts로 정해진 파일명을 사용',
  }
  return NextResponse.json(data)
}
