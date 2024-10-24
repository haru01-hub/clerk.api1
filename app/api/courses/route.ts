import { NextResponse } from 'next/server'
import courses from './data.json' //이 폴더에 있는 데이터를 가져와 courses라는 이름으로 받아오겠다? json이라는 형태로!

export async function GET() {
  return NextResponse.json(courses)
}
