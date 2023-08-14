## 목적

웹 개발자를 꿈꾸는 사람들은 한번씩 만들어보았을 TodoList를 만들어보면서 다양한 개발기술 + 지식 + 노하우를 습득합니다.

Github: https://github.com/f-lab-edu/React_TodoList

<br>
<br>
## 방법

**개발은 오로지 React, TypeScript로만 작성하며 다른 라이브러리는 사용하지않습니다**

- vite를 활용하여 개발환경을 Setting합니다.
- React만 사용하여 TodoList를 개발합니다.
- 하나의 기능이라도 깊게 생각하며 개발합니다.
  - 항상 “왜?”라는 질문을 가지고 생각합니다.
- repo에 issue를 남겨 코드리뷰를 받도록 합니다.
  - Issue생성 → Issue Number를 기준으로 branch생성 후 개발 → Pull Request를 통해 코드리뷰 이후 merge

<br>
<br>

## 요구사항

- 새로운 ToDo를 작성하는 Input이 존재합니다.
  - Input창 끝에는 + 버튼이 존재합니다.
- Todo List를 생성할 수 있게 합니다.
  - input에 아무런 Text가 존재하지 않더라도 생성한다면 빈칸이 생성됩니다.
  - input에 할 일을 작성하여 + 버튼을 누른다면 Todo List에 추가되게 합니다.
    - enter키를 사용하여도 Todo List에 추가하게 합니다.
  -
- Todo List를 수정할 수 있게 합니다.
  - Todo List에 마우스를 hover한다면 오른쪽 끝부분에 연필 logo가 생깁니다.
  - 연필 logo를 클릭한다면 list를 수정할 수 있게 합니다.
    - Todo List가 Input창으로 변합니다.
    - Input창에 작성된 Text로 Todo List가 수정됩니다.
    -
- Todo List를 삭제할 수 있게 합니다.
  - Todo List에 마우스를 hover한다면 오른쪽 끝부분에 쓰레기통 logo가 생깁니다.
  - 쓰레기통 logo를 클릭한다면 list가 삭제됩니다.
- Todo List를 완료할 수 있게합니다.
  - Todo List의 원형체크박스를 클릭한다면 해당 Todo List가 완료되었다는 표시를 합니다.
    - 체크박스를 클릭한다면 체크박스는 다른 색으로 변합니다.
    - 체크박스를 클릭한다면 체크표시가 체크박스에 존재합니다.
    - 체크박스를 클릭한다면 Text는 줄표시가 생성됩니다.
  - 완료되었는 Todo List의 원형 체크박스를 다시 클릭한다면 완료표시가 없어집니다.
    - 체크박스를 클릭한다면 체크박스는 원래 색으로 변합니다.
    - 체크박스를 클릭한다면 체크표시가 체크박스에 존재하지 않습니다..
    - 체크박스를 클릭한다면 Text는 줄표시가 없어집니다.
- 캘린더를 참고하여 하루마다 새로운 Todo List가 생성되도록 합니다.
  - 캘린더 기능을 개발합니다.
  - 이전날, 다음날 표시가 존재합니다.
    - 이전, 다음날을 클릭한다면 해당 날짜의 Todo List는 존재하고있어야합니다.
  - 연도, 요일, 캘린더 Logo를 클릭한다면 캘린더가 표시됩니다.
