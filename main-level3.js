const BASE_URl = "http://localhost:4000/todos";

// ============================================
// index.html과 style.css를 참고해서
// 할 일 목록 앱을 완성하세요.
//
// 요구사항:
// - 페이지 로드 시 서버에서 할 일 목록을 불러와 화면에 표시
// - 폼 제출 시 새 할 일을 서버에 추가
// - 토글 버튼 클릭 시 완료 상태를 서버에서 변경
// - 삭제 버튼 클릭 시 서버에서 할 일을 삭제
// ============================================

const BASE_URL = "http://localhost:4000/todos";

// ============================================
// DOM 요소
// ============================================
const todoListEl = document.getElementById("todo-list");
const todoFormEl = document.getElementById("todo-form");
const todoInputEl = document.getElementById("todo-input");

// ============================================
// 할 일 목록 불러오기 + 화면 표시
// ============================================
async function getTodos() {
  try {
    const response = await fetch(BASE_URL);
    const todos = await response.json();

    todoListEl.innerHTML = "";

    todos.forEach(function (todo) {
      const li = document.createElement("li");
      li.className = "todo-item";

      if (todo.completed) {
        li.classList.add("completed");
      }

      const titleSpan = document.createElement("span");
      titleSpan.className = "title";
      titleSpan.textContent = todo.title;

      const toggleBtn = document.createElement("button");
      toggleBtn.className = "btn-toggle";
      toggleBtn.textContent = todo.completed ? "완료됨" : "미완료";
      toggleBtn.addEventListener("click", function () {
        toggleTodo(todo.id, todo.completed);
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn-delete";
      deleteBtn.textContent = "삭제";
      deleteBtn.addEventListener("click", function () {
        deleteTodo(todo.id);
      });

      li.appendChild(titleSpan);
      li.appendChild(toggleBtn);
      li.appendChild(deleteBtn);
      todoListEl.appendChild(li);
    });
  } catch (error) {
    console.error("할 일 목록 불러오기 실패:", error);
  }
}

// ============================================
// 새 할 일 추가
// ============================================
async function addTodo(title) {
  try {
    await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        completed: false,
      }),
    });

    await getTodos();
  } catch (error) {
    console.error("할 일 추가 실패:", error);
  }
}

// ============================================
// 완료 상태 토글
// ============================================
async function toggleTodo(id, completed) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !completed,
      }),
    });

    await getTodos();
  } catch (error) {
    console.error("할 일 상태 변경 실패:", error);
  }
}

// ============================================
// 할 일 삭제
// ============================================
async function deleteTodo(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    await getTodos();
  } catch (error) {
    console.error("할 일 삭제 실패:", error);
  }
}

// ============================================
// 이벤트 연결
// ============================================
todoFormEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = todoInputEl.value.trim();

  if (title) {
    addTodo(title);
    todoInputEl.value = "";
  }
});

// ============================================
// 페이지 로드 시 목록 불러오기
// ============================================
getTodos();