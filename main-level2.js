const BASE_URL = "http://localhost:4000/todos";

// ============================================
// DOM 요소
// ============================================
const todoListEl = document.getElementById("todo-list");
const todoFormEl = document.getElementById("todo-form");
const todoInputEl = document.getElementById("todo-input");

// ============================================
// 아래 4개의 함수를 완성하세요.
//
// - getTodos: 할 일 목록을 불러와서 화면에 그립니다.
// - addTodo: 새 할 일을 추가하고 목록을 새로고침합니다.
// - toggleTodo: 완료 상태를 토글하고 목록을 새로고침합니다.
// - deleteTodo: 할 일을 삭제하고 목록을 새로고침합니다.
//
// 화면 그리기(DOM 조작)도 직접 구현해야 합니다.
// index.html의 구조와 style.css의 클래스명을 참고하세요.
//
// HTML 구조 참고:
//   <li class="todo-item completed">
//     <span class="title">제목</span>
//     <button class="btn-toggle">완료됨</button>
//     <button class="btn-delete">삭제</button>
//   </li>
//
// - completed인 항목은 li에 "completed" 클래스 추가
// - 토글 버튼 텍스트: completed면 "완료됨", 아니면 "미완료"
// ============================================

async function getTodos() {

}

async function addTodo(title) {

}

async function toggleTodo(id, completed) {

}

async function deleteTodo(id) {

}

// ============================================
// 이벤트 연결 (이미 완성됨 — 수정할 필요 없음)
// ============================================
todoFormEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = todoInputEl.value.trim();
  if (title) {
    addTodo(title);
    todoInputEl.value = "";
  }
});

// 페이지 로드 시 할 일 목록 불러오기
getTodos();
