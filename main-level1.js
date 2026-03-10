const BASE_URL = "http://localhost:4000/todos";

// ============================================
// DOM 요소
// ============================================
const todoListEl = document.getElementById("todo-list");
const todoFormEl = document.getElementById("todo-form");
const todoInputEl = document.getElementById("todo-input");

// ============================================
// 화면 그리기 (이미 완성됨 — 수정할 필요 없음)
// ============================================
function renderTodos(todos) {
  todoListEl.innerHTML = "";

  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.className = "todo-item" + (todo.completed ? " completed" : "");

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
}

// ============================================
// 아래 4개의 함수를 완성하세요.
// ============================================

// 할 일 목록 불러오기
async function getTodos() {
  try {
    const response = await fetch(BASE_URL);
    const todos = await response.json();
    renderTodos(todos);
  } catch (error) {
    console.error("할 일 목록 불러오기 실패:", error);
  }
}

// 새 할 일 추가하기
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

    getTodos();
  } catch (error) {
    console.error("할 일 추가 실패:", error);
  }
}

// 할 일 완료 토글하기
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

    getTodos();
  } catch (error) {
    console.error("할 일 토글 실패:", error);
  }
}

// 할 일 삭제하기
async function deleteTodo(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    getTodos();
  } catch (error) {
    console.error("할 일 삭제 실패:", error);
  }
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