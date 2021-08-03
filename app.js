const startInput = document.getElementById('start-input');
const startLabel = document.getElementById('start-label');
const endInput = document.getElementById('end-input');
const endLabel = document.getElementById('end-label');
const overInput = document.getElementById('over-input');
const overLabel = document.getElementById('over-label');
const resultInput = document.getElementById('result-input');
const resultLabel = document.getElementById('result-label');
const copyButton = document.getElementById('copy-button')
const buttonLabel = document.getElementById('button-label');
const settingButton = document.getElementById('setting-btn');
const settingContainer = document.getElementById('setting-cont');
const startTimeInput = document.getElementById('start-time-input');
const startTimeLabel = document.getElementById('start-time-label');
const endTimeInput = document.getElementById('end-time-input');
const endTimeLabel = document.getElementById('end-time-label');
const restTime1Input = document.getElementById('rest-time1-input');
const restTime1Label = document.getElementById('rest-time1-label');
const restTime2Input = document.getElementById('rest-time2-input');
const restTime2Label = document.getElementById('rest-time2-label');
const applyButton = document.getElementById('apply-button');

if (startInput.value.length > 0) {
  startLabel.className += ' focus';
}

if (endInput.value.length > 0) {
  endLabel.className += ' focus';
}

startInput.addEventListener('focus', () => {
  startLabel.className += ' focus';
});

startInput.addEventListener('blur', event => {
  let val = event.currentTarget.value;
  if (val.length === 0) {
    startLabel.className = 'nice-label';
  } 
  else {
    if (val.indexOf(':') < 0) {
      if (val.length === 3) {
        let time = '0' + val.slice(0, 1) + ':' + val.slice(1);
        startInput.value = time;
      }
      else {
        let time = val.slice(0, 2) + ':' + val.slice(2);
        startInput.value = time;
      }
    }
  }
});


endInput.addEventListener('focus', () => {
  endLabel.className += ' focus';
});

endInput.addEventListener('blur', event => {
  let val = event.currentTarget.value;
  if (event.currentTarget.value.length === 0) {
    endLabel.className = 'nice-label';
  }
  else {
    if (val.indexOf(':') < 0) {
      let time = val.slice(0, 2) + ':' + val.slice(2);
      endInput.value = time;
    }
  }
});


overInput.addEventListener('focus', () => {
  overLabel.className += ' focus';
});

overInput.addEventListener('blur', event => {
  let val = event.currentTarget.value;
  if (event.currentTarget.value.length === 0) {
    overLabel.className = 'nice-label';
  }
  else {
    if (val.indexOf(':') < 0) {
      let time = val.slice(0, 2) + ':' + val.slice(2);
      overInput.value = time;
    }

    let startTime = startInput.value.split(':');
    let endTime = endInput.value.split(':');
    let overTime = overInput.value.split(':');
    let restTime = '55';
    let restTime2 = '5';

    let start = dayjs().hour(startTime[0]).minute(startTime[1]).second(0);
    let end = dayjs().hour(endTime[0]).minute(endTime[1]).second(0);
    let over = dayjs().hour(overTime[0]).minute(overTime[1]).second(0);

    let min = end.diff(start, 'm');
    min -= restTime;
    let overmin = over.diff(end, 'm');
    if (overmin !== 0) {
      overmin -= restTime2;
    }
    let result = min + overmin;
    resultInput.value = ('00' + Math.floor(result / 60)).slice(-2) + ':' + ('00' + Math.floor(result % 60)).slice(-2);
  }
});


resultInput.addEventListener('focus', () => {
  resultLabel.className += ' focus';
});

resultInput.addEventListener('blur', event => {
  if (event.currentTarget.value.length === 0) {
    resultLabel.className = 'nice-label';
  }
});


copyButton.addEventListener('click', () => {
  resultInput.select();
  document.execCommand('copy');
  buttonLabel.className += ' show';
});

let flag = false
settingButton.addEventListener('click', () => {
  if (!flag) {
    settingContainer.className += ' show';
    let contentPosition = settingContainer.getBoundingClientRect();
    window.scrollTo(0, contentPosition.top);
  } else {
    settingContainer.className = 'setting-container';
  }
  flag = !flag;
});


// startTimeInput.addEventListener('focus', () => {
//   startTimeLabel.className += ' focus';
// });

// startTimeInput.addEventListener('blur', event => {
//   let val = event.currentTarget.value;
//   if (val.length === 0) {
//     startTimeLabel.className = 'nice-label';
//   } 
//   else {
//     if (val.length === 3) {
//       let time = '0' + val.slice(0, 1) + ':' + val.slice(1);
//       startTimeInput.value = time;
//     }
//     else {
//       let time = val.slice(0, 2) + ':' + val.slice(2);
//       startTimeInput.value = time;
//     }
//   }
// });