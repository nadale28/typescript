1.  노드 프로젝트로 만들기
- npm init -y
- package.json 파일이 생성된다.

2. typescript 설치
- npm i typescript

3. typescript 초기화
- npx tsc --init
- tsconfig.json 파일이 생성된다.

4. tsconfig.json
* "allowJs": true
* typescript와 javascript를 동시에 사용할 수 있다.

* "esModuleInterop": true
* 

* "forceConsistentCasingInFileNames": true
* import * from "test" 이렇게 import 해올때 원래 대소문자 구분을 안한다.
* 그런데 linux 이런 운영체제에서 사용시에 대소문자 구분을 해서 에러가 발생하는 경우가 있다. 이걸 방지해준다.

* "skipLibCheck": true
* .d.ts files 이 파일들까지 타입 검사하는거는 시간낭비이기 떄문에 skip 한다. 주로 라이브러리 가져오면 저런게 있다고 한다.

5. 타입 검사
* npx tsc --noEmit

6. typescript playground 에서 테스트 해 볼수도 있다.