
const w0 = 0.35
const w1 = (Math.PI * 2) / 15
const f0 = Math.PI / 2
const f1 = Math.PI / 3
const fd = 14

let st = []

function Diagram1() {
  let ctx = document.getElementById('canvas1');
  let myChart = new Chart (ctx, {
   type: 'line',
   data: {
    labels: [], //Подписи оси x
    datasets: [
     {
      label: 'Задание 1', //Метка
      data: [], //Данные
      borderColor: 'red', //Цвет
      borderWidth: 4, //Толщина линии
      fill: false //Не заполнять под графиком
     }
     //Можно добавить другие графики
    ]
   },
   options: {
    responsive: true, //Вписывать в размер canvas
    scales: {
     xAxes: [{
      display: true
     }],
     yAxes: [{
      display: true
     }]
    }
   }
  });
  //Заполняем данными
  for (x = 3; x <= 200; x += 0.5) {
    myChart.data.labels.push(x)
    myChart.data.datasets[0].data.push(f(x));
  }

   function f(x) { 
    return Math.sin(w0 * x + f0) + Math.sin(w1 * x + f1)
  }
  //Обновляем
  myChart.update();
 }

 function Diagram2() {
  let ctx = document.getElementById('canvas2');
  let myChart = new Chart (ctx, {
   type: 'line',
   data: {
    labels: [], //Подписи оси x
    datasets: [
     {
      label: 'Задание 2', //Метка
      data: [], //Данные
      borderColor: 'red', //Цвет
      borderWidth: 0.5, //Толщина линии
      fill: false //Не заполнять под графиком
     }
     //Можно добавить другие графики
    ]
   },
   options: {
    responsive: true, //Вписывать в размер canvas
    scales: {
     xAxes: [{
      display: true
     }],
     yAxes: [{
      display: true
     }]
    }
   }
  });
  //Заполняем данными
  for (x = 3; x <= 200; x += 1/fd) {
    myChart.data.labels.push(x)
    myChart.data.datasets[0].data.push(f(x));
    st.push(f(x))
  }

   function f(x) { 
    return Math.sin(w0 * x + f0) + Math.sin(w1 * x + f1)
  }
  //Обновляем
  myChart.update();
 }

 function Diagram3() {
  let ctx = document.getElementById('canvas3');
  let myChart = new Chart (ctx, {
   type: 'line',
   data: {
    labels: [], //Подписи оси x
    datasets: [
     {
      label: 'Задание 3', //Метка
      data: [], //Данные
      borderColor: 'red', //Цвет
      borderWidth: 0.5, //Толщина линии
      fill: false //Не заполнять под графиком
     }
     //Можно добавить другие графики
    ]
   },
   options: {
    responsive: true, //Вписывать в размер canvas
    scales: {
     xAxes: [{
      display: true
     }],
     yAxes: [{
      display: true
     }]
    }
   }
  });
  //Заполняем данными
  let h = [-0.145, 0.057, 0.515, 0.515, 0.057, -0.145]
  let convs = []
  for(let i = 0; i < st.length; ++i){
      conv = 0
      console.log(conv)
      for(let j = 0; j < h.length; ++j){
        if((i - j) < 0){
          conv += h[j] * 0
        }
        else{
          conv += h[j] * st[i - j]
        }
      }
      convs.push(conv)
  }
  for(let n = 0; n < st.length; ++n){
    myChart.data.labels.push(st[n])
  }
  for(let g = 0; g < convs.length; ++g){
    myChart.data.datasets[0].data.push(convs[g]);
  }
  console.log(convs)
  //Обновляем
  myChart.update();
 }
 //Ставим загрузку диаграммы на событие загрузки страницы
 window.addEventListener("load", Diagram1); 
 window.addEventListener("load", Diagram2); 
 window.addEventListener("load", Diagram3); 