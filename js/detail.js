// detail.html의 동작 처리
import { movieList } from "./movieList.js";

const GENRE_MAP = { // 장르ID: 이름 맵
  28: "액션",
  12: "모험",
  16: "애니메이션",
  35: "코미디",
  80: "범죄",
  99: "다큐멘터리",
  18: "드라마",
  10751: "가족",
  14: "판타지",
  36: "역사",
  27: "공포",
  10402: "음악",
  9648: "미스터리",
  10749: "로맨스",
  878: "SF",
  10770: "TV 영화",
  53: "스릴러",
  10752: "전쟁",
  37: "서부",
};

// 1. 링크/detail.html?id=***** <- 쿼리스트링(id) 읽기
const urlParams = new URLSearchParams(window.location.search);  // 브라우저 주소창의 ?id=123 처럼 생긴 쿼리정보를 객체로 바꿔줘!
const movieId = Number(urlParams.get('id'));  // 그 중에서 id의 값만 꺼내서 숫자형태로 변수에 저장해줘!

// 2. id로 영화 데이터 찾아 렌더링하기
const movie = movieList.results.find((movie) => movie.id === movieId); // movieList객체 속 results 배열 안에서, id값이 위에서저장한 쿼리정보인 movieId와 같은 '첫 번째' 영화를 찾아서 저장해

if (movie) {  // 영화 정보 찾으면,
  const genreNames = movie.genre_ids.map((id)=> GENRE_MAP[id] || `알 수 없음 (${{id}})` // 각각의 장르ID숫자들 맵에서 찾아 이름으로 바꾸기
  )
  // console.log(genreNames);  // 숫자배열들 이름으로 바뀌었나 확인

  const section = document.querySelector('section');
  section.innerHTML += `
    <div class="card mx-auto" style-"max-width:900px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}" class="img-fluid rounded-start" alt="${movie.original_title}">
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${movie.title} <small class="text-muted">(${movie.original_title})</small></h5>
            <p class="card-text"><strong>줄거리:</strong> ${movie.overview}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>개봉일:</strong> ${movie.release_date}</li>
              <li class="list-group-item"><strong>언어:</strong> ${movie.original_language.toUpperCase()}</li>
              <li class="list-group-item"><strong>장르ID:</strong> ${genreNames.join(", ")}</li>
              <li class="list-group-item"><strong>평점:</strong> ${movie.vote_average} / 10 (${movie.vote_count}명 투표)</li>
              <li class="list-group-item"><strong>인기도:</strong> ${movie.popularity.toLocaleString()}</li>
              <li class="list-group-item"><strong>성인 영화 여부:</strong> ${movie.adult?"Y":"N"}</li>
              <li class="list-group-item"><strong>비디오 제공 여부:</strong> ${movie.video?"Y":"N"}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
} else alert("영화 정보를 찾을 수 없습니다.")
