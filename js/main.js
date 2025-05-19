// index.html의 동작 처리
// 영화 리스트 출력 & 검색 필터링
import { movieList } from './movieList.js'

const movieListEl = document.getElementById('movieList');
const searchInput = document.getElementById('searchInput');



// 1. 영화 리스트 출력
function renderMovies(movieList) {  // 영화 리스트 출력하는 함수
  movieListEl.innerHTML = '' ;  // 기존 목록 초기화

  // !!! movieList 안의 .results 키의 배열을 꺼내 써 forEach문을 돈다.
  movieList.results.forEach((movie)=> { // 영화 카드 만드는 코드
    const col = document.createElement('div');  // 영화 하나 카드 요소
    col.className = 'col-md-2'; // 부트스트랩 적용

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
renderMovies(movieList);  // 처음에 한번 전체 출력



// 2. 검색 기능
searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase(); // 전부 소문자 처리
  const filtered = movieList.results.filter((movie)=>
    movie.original_title.toLowerCase().includes(keyword)
  );  // DB에서 영화제목 일치하는 항목 찾아 저장
  renderMovies({results:filtered}); // 결과값 출력
})