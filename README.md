# BEB-06-SECOND-08


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



