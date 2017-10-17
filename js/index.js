$(document).ready(function () {
  var arr = [];
  var calculatorScreen = $('#screen');

  //added click event to all buttons
  $('span').click(function(event) {
    var target = event.target.innerText;

  //if statements for operators and add targets to array
  if (target === 'C') {
    $('#clear').click(function() {
      location.reload();
      $('#screen').empty()
      arr = [];
    })
  }

  if (target === '÷') {
    calculatorScreen.append('÷');
    arr.push('/');
  }
  if (target === 'x') {
    calculatorScreen.append('x')
    arr.push('*');
  } else if (target !== 'C' && target !== '='
  && target !== '÷' && target !== 'x') {
        calculatorScreen.append(target);
        arr.push(target);
      }
})
//define clear and equals functions
  $('#equals').click(function(event) {
    $('#screen').empty()
    let result = arr.join('');
    let total = eval(result);
    $('#screen').append(total);
  })
})
