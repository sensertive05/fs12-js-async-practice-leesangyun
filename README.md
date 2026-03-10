# Fetch 연습 과제 — 할 일 목록 앱

## 과제 소개

`fetch` API를 사용해서 서버와 통신하는 **할 일 목록(Todo)** 앱을 완성하는 과제입니다.
HTML과 CSS는 이미 완성되어 있으니, **JS 파일의 TODO 부분만 채우면 됩니다.**

## 실행 방법

### 1. 패키지 설치

```bash
npm i
```

### 2. 서버 실행

```bash
npx json-server db.json --port 4000
```

서버가 실행되면 `http://localhost:4000/todos` 에서 데이터를 확인할 수 있습니다.

### 3. 레벨 선택

본인에게 맞는 레벨을 골라 `index.html`의 `<script>` 태그를 수정하세요.

| 레벨 | 파일 | 난이도 | 설명 |
|------|------|--------|------|
| Level 1 | `main-level1.js` | 쉬움 | 함수 시그니처, DOM 헬퍼, 이벤트 연결이 제공됩니다. fetch 호출만 구현하세요. |
| Level 2 | `main-level2.js` | 보통 | 함수 시그니처와 이벤트 연결이 제공됩니다. DOM 조작과 fetch를 직접 구현하세요. |
| Level 3 | `main-level3.js` | 어려움 | 요구사항만 주어집니다. HTML/CSS를 참고해서 전부 직접 구현하세요. |

```html
<!-- index.html 하단에서 원하는 레벨 파일로 변경 -->
<script src="main-level1.js"></script>  <!-- 쉬움 -->
<script src="main-level2.js"></script>  <!-- 보통 -->
<script src="main-level3.js"></script>  <!-- 어려움 -->
```

### 4. 브라우저에서 열기

`index.html` 파일을 브라우저에서 열어 주세요.

## 요구사항

4개의 함수를 완성하세요.

| 함수 | HTTP 메서드 | 설명 |
|------|-------------|------|
| `getTodos()` | GET | 할 일 목록 불러오기 |
| `addTodo(title)` | POST | 새 할 일 추가하기 |
| `toggleTodo(id, completed)` | PATCH | 완료 상태 토글하기 |
| `deleteTodo(id)` | DELETE | 할 일 삭제하기 |

## 완성 확인

- 페이지를 열면 할 일 3개가 표시된다.
- 입력창에 텍스트를 입력하고 "추가" 버튼을 누르면 새 할 일이 추가된다.
- "미완료" / "완료됨" 버튼을 누르면 완료 상태가 토글된다.
- "삭제" 버튼을 누르면 할 일이 삭제된다.
