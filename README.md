# BEB-06-SECOND-08

* Project Name : SteemEight
* Member :김준섭 (BE/SM/Web3), 이정원(BE), 문지훈(FE/GitGub운영), 최진영(FE)
* Role & Function:
<img width="950" alt="image" src="https://user-images.githubusercontent.com/81156500/200607024-6572ec0c-f929-43a4-869c-5511a69cffbe.png">


# Detail View

* Login/Logout
https://user-images.githubusercontent.com/81156500/200611349-12049f9c-4b62-4266-8c1a-abb641458ea0.mov

* Market
https://user-images.githubusercontent.com/81156500/200611762-08d85c29-9305-4ffe-84ae-64bc060fb88b.mov

* My Page
https://user-images.githubusercontent.com/81156500/200611807-7ff4b4d5-fcc6-4525-87c3-706c12a731b7.mov

* Post 

<img width="1720" alt="스크린샷 2022-11-09 오전 12 47 34" src="https://user-images.githubusercontent.com/81156500/200611870-2376591b-4988-48b6-9f94-09cd47a9d01d.png">

 
# 회의록 (전체미팅)
22'Oct'27 (참석하신분: 김준섭, 문지훈, 최진영, 이정원)
* 역할 구분
* 의사소통 / 팀웍 가능한 시간 공유
    이름    방해 금지 시간
    이정원    주말: 오후, 평일 : 새벽 1시 이후
    김준섭    주말: 오전, 평일:  새벽1시 이후
    최진영    주말: 오후 , 평일: 밤 12시 이후 
    문지훈    토요일, 
    미팅시간: 10:00 ~ 11:00 (매일)

    FE   : 문지훈, 최진영
    SM  : 김준섭
    BE   : 이정원, 김준섭
    
22'Oct'28 (참석하신분: 김준섭, 문지훈, 최진영, 이정원)
* Git사용벙에 대한 전반적인 설명 - 문지훈님
* FE 구조 설명

22'Oct'31 (참석하신분: 김준섭, 문지훈, 최진영, 이정원)
* FE , BE, SM 진행 현황 확인
    * FE  :  로그인 페이지 완료, 페이지 저장내용 추가 에정
    * SM :  기능 구현 완료
        * 메인서버에서 토큰 발행
        * 글작성 또는 좋아요 획득시 코인 보상
        * NFT 발행 
        * 보상으로 획득한 코인으로 NFT 구매
        * 보상으로 획득한 코인 전송
    * BE : Mysql 기능 구현에 대한 점검 
* 페이지 작성에 대한 FE / BE 기능에 대한 조율
    * 회원가입, 페이지 저장 내용에 대한 조율 ( 댓글 기능은, advanced로 ..)

22'Nov'01 (참석하신분: 김준섭, 문지훈, 최진영)
* Solidity control component 제공
* Transfer / Mint Page 작성 중 - FE
<img width="1094" alt="image" src="https://user-images.githubusercontent.com/81156500/199141659-1f790917-1983-4c14-b9ca-095bedff41ee.png">

* NFT 민트 
    * 아래 정보 + 판매하고 싶은 가격 ( 고정시켜  )
    * 생성 : DB 저장
    * 화면 보여주는 : DB 에서 끌기
    * 구매, 이동 : DB update
* Posting, main page 용 DB 저장 내용 변경
* 로그인 시,  server 에서 DB 내용과 비교 대조하여 결과 보내주기 
<img width="912" alt="image" src="https://user-images.githubusercontent.com/81156500/199141685-f0e9ac29-7007-448f-8acb-87ce6b298ceb.png">

22'Nov'02 (참석하신분: 김준섭, 이정원, 문지훈, 최진영)
* 현재 진행 과정 점검 및 future plan 작성
    * 기능구현: 토요일 
    * 기타 CSS, debug: 일요일
<img width="1358" alt="image" src="https://user-images.githubusercontent.com/81156500/199409822-7855ffc1-4c36-4faa-8cdc-c00d257e0e59.png">
* 내일 미팅 : 오전 10:15 , (진영님은 경조사 )
* BE 
    * NFT, posting endpoint 완성 하기
    <img width="914" alt="image" src="https://user-images.githubusercontent.com/81156500/199409932-7d760778-fe73-4ff1-8b57-3ac99d6075c9.png">

* FE
    * Mypage
        * Endpoint 확인 필요
        * Token transfer 확인
    * Market place
        * 구성 예정
    * NFT mint
        * Endpoint 확인
    * posting
        * 구성은완료
        * 기능 추가 예정
        * Endpoint 확인

22'Nov'03 ( 참석하신 분 : 김준섭, 이정원 , 문지훈 / 최진영 (경조사))
* Endpoint
    * Endpoint 체크
        * 이정원
            * http/localhost:8080/post/${nickname}
            * 로그인 데이터 필요 register는 성공여부
        * 김준섭
            * Mint DB 요소 변경
            * 마켓 플레이스 sell 등록 시, false -> true 변경 ( id )
            * 마켓 플레이스에서 true 데이터만 전달 ( id )

22'Nov'04 ( 참석하신 분: 김준섭, 이정원, 문지훈, 최진영 )
2022.11.04
* BE 
    * 1차 merge 완료
    * 좋아요 기능 구현 생각
    * Error code 구현
* FE
        * Mypage
            * 로그인 유지관련 검토
            * Css 마무리
        * Post
            * 글작성 저장하고, 화면 보여주기
            * 좋아요, 보상받기 
            
2022.11.07  (참석자 : 김준섭, 이정원, 문지훈, 최진영)
* FE
    * Mint,MyPage, Market place 
        * 기능 구현 완료
        * CSS 업데이트 예정 
    * Post
        * 화면 구성 완료
        * Like, text 작성시 보상 시스템 구현 ( web3 연결 )
        * DB 저장 
            * Like update 하는것 정원님이랑 맞춰보기
            * Text 작성 후 DB 저장 정원님이랑 맞춰보기
    * Footer update 예정
* BE
    * 2차머지
    * Post - FE 랑 맞춰보기 (like, text 작성 )
    * NFT mint - 지훈님이랑 논의하기 
* 전체머지
    * 월요일 저녁 8시 

2022.11.08 ( 참석자 : 김준섭, 문지훈, 최진영 )
* FE:
    * 머지완료
* BE
    * Like server 수정

