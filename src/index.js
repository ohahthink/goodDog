// 상태관리객체
const state = {
  randomNumber : [],
  userInput : [],
  mung : 0,
  nyam : 0,
};

// 랜덤으로 중복되지 않는 세자리 숫자 생성


for (let i = 0; i<3; i++) {
  // 0-9까지 정수를 랜덤으로 생성
  let random = Math.floor(Math.random() * 10);
  // state.randomNumber가 random을 가지고 있을 경우 루프를 한번 더 순회한다
  if (state.randomNumber.includes(random)) {
    i--
  } else {
    // state.randomNumber가 random을 가지고 있지 않을 경우 생성한 수를 배열에 추가한다
    state.randomNumber.push(random)
  }
}

// 상태업데이트
document.getElementById('test').textContent = state.randomNumber


document.querySelector('.game-try-button').addEventListener('click', e => {
  e.preventDefault()

  //클릭 이벤트가 일어나면 input값을 가져와서 업데이트한다
  state.userInput.push(parseInt(document.querySelector(".game-input-1").value));
  state.userInput.push(parseInt(document.querySelector(".game-input-10").value));
  state.userInput.push(parseInt(document.querySelector(".game-input-100").value));

  console.log(state.userInput)
  drawList()
})


// 화면에 출력
function drawList() {
  const listtemplete = `<li>1회
        <input value="${state.userInput[0]}" type="text" class="game-input-1" maxlength="1" readonly>
        <input value="${state.userInput[1]}" type="text" class="game-input-10" maxlength="1" readonly>
        <input value="${state.userInput[2]}" type="text" class="game-input-100" maxlength="1" readonly>
        1멍 <span>1냠</span>
      </li>`;
  document.querySelector('.game-try-list').insertAdjacentHTML("beforeend", listtemplete);
}




