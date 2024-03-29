let buyPrice = -1;
function saveBuyPrice() {
  buyPrice = document.getElementById('input1').value;
}

let deliveryFee = -1;
function saveDeliveryFee() {
  deliveryFee = document.getElementById('input2').value;
}

let weight = -1;
function saveWeight() {
  weight = document.getElementById('input3').value;
}

function checkNum(string) {
  if (string === '0') {
    return true;
  } else if (Number(string) === 0) {
    return false;
  } else if (string === -1) {
    return false;
  }
  return true
}

function calculatePrice() {
  let result = 0;
  let expectedLanding = ( Number(buyPrice) + Number(deliveryFee) + Number(weight) * 9.5 ) * 18;
  if (checkNum(buyPrice) === false || checkNum(deliveryFee) === false || checkNum(weight) === false) {
    alert('빈 칸에 숫자를 입력해주세요.');
    result = '오류';
  } else if (Number(buyPrice) < 0 || Number(deliveryFee) < 0 || Number(weight) < 0) {
    alert('0보다 큰 숫자를 입력해주세요.');
    result = '오류';
  } else if (Number(buyPrice) < 8000) {
    alert('8,000 KRW 미만 제품은 사장님에게 문의하세요.');
    result = '오류';
  } else {
    if (expectedLanding > 1800000) {
      result = Math.ceil(expectedLanding * 1.08 / 10000) * 10000;
    } else if (expectedLanding > 1500000) {
      result = Math.ceil(expectedLanding * 1.09 / 10000) * 10000;
    } else if (expectedLanding > 1200000) {
      result = Math.ceil(expectedLanding * 1.11 / 10000) * 10000;
    } else if (expectedLanding > 900000) {
      result = Math.ceil(expectedLanding * 1.15 / 10000) * 10000;
    } else if (expectedLanding > 600000) {
      result = Math.ceil(expectedLanding * 1.18 / 10000) * 10000;
    } else if (expectedLanding > 300000) {
      result = Math.ceil(expectedLanding * 1.22 / 10000) * 10000;
    } else {
      result = Math.ceil(expectedLanding * 1.25 / 10000) * 10000;
    }
  }
  document.getElementById('result').textContent = '판매가 : ' + result;
}
