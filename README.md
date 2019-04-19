# schedule-maker
대학교 수강 과목 목록을 조합해 시간표를 생성해주는 웹 서비스

## 사용방법
### Database (8.x)
`mysql -u root -p`  
`create user 'smuser'@'%' identified by 'sm';`  
`grant all on smdb.* to 'smuser'@'%';`  
`create user 'smuser'@'localhost' identified by 'sm';`  
`grant all on smdb.* to 'smuser'@'localhost';`  
`flush privileges;`  

### Project
`git clone git@github.com:gyumin-kim/schedule-maker.git`  
1. IDE를 통해 `ScheduleMakerApplication` 실행. 혹은
2. `cd schedule-maker`  
`mvn package`  
`java -jar target/schedule-maker-0.0.1-SNAPSHOT.jar`  
`http://localhost:8080으로 접속`  


## 진행현황 및 메모
[Trello](https://trello.com/b/MviPpSDa/schedule-maker)에서 진행함.

## 사용 기술
- Spring Boot
- JPA (Spring Data JPA)
  - `Course`와 `Section`이라는 domain 객체를 구현하였다. `Course`는 예를 들어 
  '컴퓨터구조', '운영체제'와 같은 '과목'을 의미하며, `Section`은 한 Course에 대한 여러 클래스
  (같은 과목이라도 교수가 다르거나 강의실이 다른 등의 형태로 별도의 클래스로 운영될 수 있다고 가정)를
  의미한다. 한 `Course`에는 3개의 `Section`이 존재한다.
  - `Section` 내부의 `periods`라는 배열은 해당 section의 수업이 이뤄지는 시간
  (ex. 월12목78)을 의미한다. 앞자리의 알파벳은 요일을 의미하며, 'A'는 월요일, 'B'는 화요일, ... 
  등과 같다. 뒷자리의 숫자는 1~8교시 중 하나를 의미한다.
  - `Section` 내부에 바로 `periods` 배열을 넣지 않고 sections를 id, course 등의 필드가  
  포함된 객체 배열 형태로 설계한 것은, 추후 특정 section에 교수 이름이나 강의실 번호 등의 
  추가 정보를 삽입할 수 있는 가능성을 염두에 둔 것이다.
- Thymeleaf + Vanilla JS

## 아쉬운 점, 추가하고 싶은 것
- 시간표 경우의 수를 계산하는 함수(`updateSchedules()`)에 DFS(backtracking) 방식을 사용했는데, 
이 함수를 구현하느라 너무 많은 시간을 소모한 점.
- 모든 시간표 조합의 결과 데이터를 받아오는 것까지는 구현했으나, 실제 UI로 표현하는 데까지는 시간이 부족했다.
- '사용자의 입력에 대한 편의성' 평가 기준을 완벽하게 만족하기 위해서는, 검색 시 자동완성 기능을 추가하거나 
애초에 전체 course 리스트가 하단에 나타나도록 하는 것이 좋을 것 같다. 현재로서는 특정 과목을 정확하게 
검색하지 않는 이상 어떤 과목이 있는지는 사용자가 알 수 없다.
- 초기에는 React를 통해 프론트엔드 개발을 진행하다가, 아직 React에 익숙하지 않아서인지 
기능구현과 무관한 부분에서 에러를 고치느라 시간이 오래 걸렸다. 그래서 상대적으로 익숙한 Thymeleaf에 
Vanilla JS를 사용하는 방식으로 변경하였다. React를 적용해서 프로젝트를 완료했다면 더 좋았을 것이다.
- 대학별로 별도의 정보가 관리되도록 한다면, `College`와 같은 domain 객체를 추가하여 사용자가 
학교를 선택하고, 선택된 학교의 정보만 서버에 요청하는 형태이면 될 것 같다.
- Spring Security를 적용하여 로그인 기능, 개인별로 담아놓은 과목 데이터를 저장하는 기능
