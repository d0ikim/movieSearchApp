// index.html의 동작 처리
// 영화 리스트 출력 & 검색 필터링 & 페이징 작업
import { movieList } from './movieList.js'

const movieListEl = document.querySelector('#movieList');
const searchInput = document.querySelector('#searchInput');



// 1. 영화 리스트 출력
function renderMovies(movieArray) {  // 받은 영화 리스트 배열을 렌더링하는 함수
  movieListEl.innerHTML = '' ;  // 기존 목록 초기화

  // movieList배열의 forEach문을 돈다.
  movieArray.forEach((movie)=> { // 영화 카드 만드는 코드
    const col = document.createElement('div');  // 영화 하나 카드 요소
    col.className = 'col-md-4'; // 부트스트랩 적용

    // 줄거리 100자까지만 표시, 넘으면 ... 붙이기
    const shortOverview = movie.overview.length > 100 ? movie.overview.slice(0,100)+"..." : movie.overview;

    col.innerHTML = `
    <a href="detail.html?id=${movie.id}" class="card-link text-decoration-none text-reseet">
      <div class="card h-100">
        <img src="https://image.tmdb.org/t/p/w440_and_h660_face${movie.backdrop_path}" class="card-img-top" alt="${movie.title}">
        <div class="card-body">
          <h5 class="card-title">${movie.original_title}</h5>
          <p class="card-text">${shortOverview}</p>
        </div>
      </div>
    </a>
    `;  // 내부에 정보 담아

    movieListEl.appendChild(col); // 영화리스트요소에 추가
  })
}



// 2. 검색 기능
searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase(); // 전부 소문자 처리
  const filtered = movieList.results.filter((movie)=>
    movie.original_title.toLowerCase().includes(keyword)
  );  // DB에서 영화제목 일치하는 항목 찾아 저장
  renderMovies(filtered); // 결과값 출력
})



// 3-1. 페이징 기능(데이터를 여러 페이지로 나누는 작업)
const ITEMSPERPAGE = 15;                                        // 한 페이지 당 보여줄 영화 개수
let currentPage = 1;                                            // 현재 페이지
const TOTALMOVIES = movieList.results.length;                   // 총 영화 개수
const TOTALPAGES = Math.ceil(TOTALMOVIES/ITEMSPERPAGE);         // 총 페이지 수

const pagination = document.querySelector('#pagination');       // 페이지 버튼 영역

function renderPage(page, movies) { // 영화목록 중 페이지에 해당하는 영화만 15개씩 화면에 출력해주는 함수
  const start = (page-1) * ITEMSPERPAGE;
  const end = start + ITEMSPERPAGE;
  const pagedMovies = movies.slice(start,end);  // .slice(0,15) -> [0]~[14]까지 15개 영화 뽑음
  renderMovies(pagedMovies);  // 해당 페이지 영화 화면에 렌더링
  renderPagination(TOTALPAGES, movies); // 페이지 버튼도 새로 렌더링
}

// 3-2. 페이지네이션(페이지를 선택할 수 있게 UI를 보여주는 것) 버튼 UI 만들기 전담 함수
function renderPagination(totalpages,movies) {  // 1,2,3.. 페이지버튼을 필요한 수 만큼 "동적으로" 만들고, 눌렀을때 renderPage() 실행하게 연결해주는 함수
  pagination.innerHTML = '';  // 기존 버튼 초기화

  for(let i=1; i<=totalpages; i++) {  // 페이지 수 만큼
    console.log(`페이지 버튼${i} 생성`);

    const btn = document.createElement('button'); // 버튼 HTML 요소 만들기
    btn.className = `btn m-1 rounded-pill ${i === currentPage? 'btn-warning' : 'btn-outline-dark'}`; // 부트스트랩 적용
    btn.textContent = i;  // 페이지 번호 부여

    // 클릭하면 해당 페이지 렌더링
    btn.addEventListener('click', ()=>{
      currentPage = i;  // 현재페이지 변경
      renderPage(currentPage,movies);
    });

    pagination.appendChild(btn);  // 페이지네이션 버튼 영역에 버튼 채워넣음
  }
}

// renderMovies(movieList.results);  // 처음에 한번 전체 출력 하는 형태였으나 페이징기능추가로 변경
renderPage(currentPage, movieList.results); // 처음 한 번 전체 영화 보여주기
// renderPagination(TOTALPAGES, movieList.results);  // 페이지 버튼 만들기