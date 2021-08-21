// 클래스가 search 요소를 찾아서 변수(searchEl)에 저장
const searchEl = document.querySelector('.search');
// search 안에 있는 input 요소를 찾아서 변수(searchInputEl)에 저장
const searchInputEl = searchEl.querySelector('input');

// searchEl(클래스가 search 요소)가 클릭되면 동작
searchEl.addEventListener('click', function () {
  // searchInputEl(search 안에 있는 input) focus
  searchInputEl.focus();
});

// searchInputEl이 focus 되면 동작
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');

  // html 속성 추가, 힌트(placeholder) 
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// focus가 해제되면 동작
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// 올해의 년도를 반영
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();