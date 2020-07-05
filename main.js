const result = document.querySelector('#result');
const prevResult = document.querySelector('#result2');
const btns = document.querySelector('div.btns');

let calcValue = '';
let scndValue = '';

for (let child of btns.children) {
  child.addEventListener('click', insert);
}

function insert(e) {
  let btnValue = e.target.value;
  switch (btnValue) {
    case 'C':
      result.value = '0';
      prevResult.value = '';
      calcValue = '';
      scndValue = '';
      break;

    case '<':
      calcValue += result.value;
      scndValue += prevResult.value;
      result.value = result.value.substr(0, result.value.length - 1);
      prevResult.value = prevResult.value.substr(0, prevResult.value.length - 1);
      if (result.value == '' && prevResult.value == '') {
        result.value = '0';
        prevResult.value = '';
        calcValue = '';
        scndValue = '';

      }

      break;

    case '*':
      calcValue += result.value + '*';
      scndValue += result.value + '*';
      result.value = '';
      prevResult.value = calcValue;
      break;
    case '/':
      calcValue += result.value + '/';
      scndValue += result.value + '/';
      result.value = '';
      prevResult.value = calcValue;
      break;

    case '-':
      calcValue += result.value + '-';
      scndValue += result.value + '-';
      result.value = '';
      prevResult.value = calcValue;

    case '+':
      calcValue += result.value + ' + ';
      result.value = '';
      break;

    case '=':
      if (result.value == '0') {
        result.value =  'Result is Undefined';
      } else if (prevResult.value == '0') {
        prevResult.value = '';
        scndValue = '';
      }

      calcValue += result.value;
      scndValue += prevResult.value;
      result.value = eval(calcValue);
      prevResult.value = result.value;
      calcValue = '';
      scndValue = '';
      break;

    default:
      result.value === '0' ? result.value = btnValue : result.value += btnValue;
  }
}
