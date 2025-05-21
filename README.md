# 🎬 movieSearchApp

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)  
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=flat-square&logo=font-awesome&logoColor=white)  
![Animate.css](https://img.shields.io/badge/Animate.css-FF4081?style=flat-square&logo=css3&logoColor=white) 
![Typed.js](https://img.shields.io/badge/Typed.js-007ACC?style=flat-square&logo=javascript&logoColor=white) 
![AOS](https://img.shields.io/badge/AOS-000000?style=flat-square&logo=css3&logoColor=white)  
![Responsive](https://img.shields.io/badge/Responsive%20Design-%F0%9F%93%8D-blue?style=flat)
![Last Commit](https://img.shields.io/github/last-commit/d0ikim/movieSearchApp?style=flat)
![GitHub stars](https://img.shields.io/github/stars/d0ikim/movieSearchApp?style=social)

영화 정보를 검색하고, 상세한 정보를 확인할 수 있는 웹 애플리케이션입니다.
장르, 개봉일, 줄거리, 평점 등 다양한 정보를 확인할 수 있어요!

## 🔍 주요 기능

- 🎯 **영화 검색**: 영화 제목으로 검색 가능
- 📋 **상세 정보 보기**: 장르, 개봉일, 줄거리, 평점 등 상세한 정보 제공
- 💡 **정적 데이터 사용**: movieList.js에 미리 정의된 영화 데이터 사용
- 📱 **반응형 디자인**: Bootstrap을 이용한 다양한 화면 대응
- 💬 **원어 표기 지원**: 영화의 원어(title 및 언어 코드) 제공

## 📁 폴더 구조
movieSearchApp/
├── index.html # 메인 페이지 (검색 화면)
├── detail.html # 영화 상세 페이지
├── about.html # 개발자 소개 페이지
├── js/
│ ├── main.js # 메인 로직
│ ├── detail.js # 상세 페이지 로직
│ └── movieList.js # 정적 영화 데이터
└── README.md # 프로젝트 설명 파일

## 🛠️ 사용 기술

- HTML5
- JavaScript (ES6)
- Bootstrap 5
- Font Awesome
- Animate.css
- Typed.js
- AOS

## ✅ 사용 방법

1. 이 저장소를 클론하세요:
  ` ```bash
     git clone https://github.com/d0ikim/movieSearchApp.git`
2. 폴더로 이동:
   `cd movieSearchApp`
3. `index.html` 파일을 브라우저로 열면 바로 실행됩니다. 서버 없이 로컬에서 실행되는 정적 웹 페이지입니다.

## ℹ️ 참고사항
현재는 movieList.js 파일에 포함된 샘플 영화 데이터를 사용합니다.
TMDB API나 OMDb API를 연결해 실시간 검색 기능으로 확장할 수 있어요!

detail.html은 주소에 ?id=영화ID 쿼리를 추가해 영화 정보를 표시합니다.

## 👤 만든 사람
깃허브: @d0ikim
