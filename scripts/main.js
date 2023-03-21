


//document.querySelector("html").addEventListener("click", function () {
//    alert("Йоу йоу йоу бро");
// });


/*
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name");
    if(!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }


}


if (!localStorage.getItem("name"))
{
    setUserName();
} 
else
{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}




myButton.onclick = () => {
    setUserName();
};


(function() {     alert("OOOH"); })();
*/


let myvar = document.getElementsByClassName('cool-class'); // взять ссылку на элемент с указанным ID

myvar;
myvar[0];


//console.log(`Переменная равна: ${myvar[0].innerHTML}`);

//alert("tratata");



function list (data)
{
    const values = Object.values(data);
    const values2 = Object.values(values[2]);
    let i = 0;
    console.log(`Здесь то-то: ${values2[1]}`); i++;

    const charge_cell = document.getElementById('charge-state-cell');
    if(values2[0] === "Idle")
    {
        charge_cell.textContent = `${values2[4]}% (Не заряжается)`;
    }
    if(values2[0] === "Charging")
    {
        charge_cell.textContent = `ЗАРЯЖАЕТСЯ. ${values2[4]}%`;
    }


    const moving_cell = document.getElementById('moving-state-cell');
    moving_cell.textContent = values2[1];
 

    const tasks_cell = document.getElementById('tasks-state-cell');
    tasks_cell.textContent = values2[2];

    //while ( i < values.length )
    //{
    //    console.log(values[i]); i++;
   // }
}



/*

  */



// КНОПКА ДЛЯ GET-ЗАПРОСА И ПОСЛЕДУЮЩИМ РАЗБОРОМ JSON
const button_make_request = document.getElementById('btn-make-request');
button_make_request.onclick = () => {
    let url = 'http://localhost:9050/api/robot/status?device_id=1674035136083&robot_id=d41243bf5a98';

    fetch(url)
    .then(res => res.json())
    .then(data => list(data))
    .catch(err => console.log(err));
}



let myvar2 = document.getElementById('control-panel');
console.log(`Какой то текст: значение - ${myvar2}`);




// КНОПКИ ДЛЯ POST-ЗАПРОСОВ (ПОДАЧА КОМАНД)

const button_go_point_start = document.getElementById('go_point_start');
button_go_point_start.addEventListener('click', async _ => {
    try {     
      const response = await fetch('http://localhost:9050/api/robot/call', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
        body: JSON.stringify( {
         deviceId:'1674035136083',
         robotId: 'd41243bf5a98',
         destination: {"name": "0", "type": "dining_outlet"}
         
        })
      });
      
    } catch(err) {
      console.error(`Error: ${err}`);
    }

    console.log("Попал в функцию отправки POST-запросаааа");

  });




const button_go_point1 = document.getElementById('go_point_1');
button_go_point1.addEventListener('click', async _ => {
    try {     
      const response = await fetch('http://localhost:9050/api/robot/call', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify( {
         deviceId:'1674035136083',
         robotId: 'd41243bf5a98',
         destination: {"name": "1", "type": "table"}
         
        })
      });
      
    } catch(err) {
      console.error(`Error: ${err}`);
    }

       console.log("Попал в функцию отправки POST-запроззззз");
  });


/*

const button_go_cancel = document.getElementById('go_cancel');
button_go_cancel.addEventListener('click', async _ => {


    

    try {     
      const response = await fetch('http://localhost:9050/api/robot/cancel/call', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify( {
         deviceId:'1674035136083',
         robotId: 'd41243bf5a98',
         destination: {"name": "1", "type": "table"}
         
        })
      });
      
    } catch(err) {
      console.error(`Error: ${err}`);
    }
  });

*/








(function()
{
  let sum, net = '25', tax = 5.233;

  sum = net + tax;
  console.log('sum: '+ sum + ' ' + typeof sum);
  sum = parseFloat(net) + tax;
  console.log('sum: '+ sum + ' ' + typeof sum);
  console.log('tax:' + tax + ' ' + typeof tax);
  tax = tax.toString();
  console.log('tax:' + tax + ' ' + typeof tax);
  net = '$' + net;
  console.log('net: ' + net + ' ' + parseInt(net));
  console.log('net Not a number ? ' + isNaN(net));
  console.log(2**64);

})()


let day = 32;
 

( function() {

  let packetFromRobot = 
  {
    manufacturer: 'Unitree',
    modelRobot: 'Go1',
    payloadPacket: 0x80,
    
    processed: false,
    processThisPacket: function ()
    {
      console.log("Эмуляция процесса обработки полезных данных пакета\n");
      this.processed = true;  
    },

    isPacketProcessed: function ()
    {
      if (this.processed === true)
      {
        console.log("Этот пакет обработан. В принципе, он больше не нужен");
      }
      else
      {
        console.log("На данный момент пакет обработан НЕ БЫЛ!")
      }
    },

    anotherFunc: function ()
    {
      return packetFromRobot.processed;
    }

  }


  console.log(packetFromRobot['manufacturer']);
  console.log(packetFromRobot['manufacture']);
  console.log(packetFromRobot.modelRobot);
  packetFromRobot.isPacketProcessed();
  packetFromRobot.processThisPacket();
  packetFromRobot.isPacketProcessed();
  console.log('то что щас ' + packetFromRobot.anotherFunc());




  let myStr = "    Это оочень пиздатая и интересная страта ата с ценной ока информацией       ";

  let naidennoe = myStr.trim(myStr);
  

  console.log('Работаем: ' + naidennoe.repeat(2));


  


  console.log(history);
  history.go(-2);



  const box = document.getElementById('box');
  const btn = document.getElementById('btn');

  box.addEventListener('mouseover',function(ev){ reactTo(ev,'Red')});
  box.addEventListener('mouseout',function(ev){ reactTo(ev,'Purple')});
  box.addEventListener('mousedown',function(ev){ reactTo(ev,'Green')});
  box.addEventListener('mouseup',function(ev){ reactTo(ev,'Blue')});
  btn.addEventListener('click',function(ev){ reactTo(ev,'Orange')});


  const form = document.getElementById('myform');
  form.addEventListener('submit', function(event) {reactTo2(form,event)});
  form.spisok[0].checked=true;

  const list = document.getElementById('list');
  list.addEventListener('change', function() { reactTo3(list,event)});
  addEventListener('load', function(){reactTo3(list,event)});


  let obj = { 
    category: 'Fashion',
    models: [{ name: 'Alice', age: 21, city:'New York'}, {name:'Kelly', age:23, city:'Las Veags'}, {name:'igor', city: 'floreni'}]

  }

  console.log(obj);

  let json_obj = JSON.stringify(obj);
  console.log(json_obj);
  let new_obj = JSON.parse(json_obj);
  console.log(new_obj);

  console.log(new_obj['category']);
  console.log(new_obj.models[2].name)

  const promise2 = new Promise(function(resolve, reject)
  {
   
    let random = Math.round(Math.random()*10);
    if(random % 2 === 0)
    {
      setTimeout(function(){resolve(random)},1000)
    }
    else
    {
      setTimeout(function(){reject(random)}, 1000)
    }
  }
  );


  
  promise2
  .then(function(res) { alert(res); return res})
  .then(function(res) { console.log(res + 'Is Even')} )
  .catch(function(res2) { console.log(res2 + 'Is Odd')} )
  
  /*
  promise
  .then(console.log(promise))
  .then(function(res) {console.log(res+' Is Even ' + promise.result); })
  .catch(function(err) {console.log(err+' Is Odd')})
  */


  //console.log(fetch('https://lk.waviot.ru/api.general/info/').result)
  //.then(pr => pr.json())
  //.then(pr => console.log(pr))
  //.then(data => console.log(data))
  

  fetch('http://10.18.86.9/data.json')
  .then(response=>response.json())
  .then(cells => zapolnenie(cells))
  .catch(err => console.log(err))


})()

function zapolnenie(cells)
{
  const values = Object.values(cells);
  let i = 0;

  while(i < values.length)
  {
    document.getElementById('n' + i).innerText = values[i].toFixed(2);
    i++;
  }

  total();
}


function total()
{
  let i = 0;
  let sum = 0;
  let rownum = 1;
  let colnum = 0;

  for(i=0; i<15;i++)
  {
    sum += parseFloat(document.getElementById('n'+i).innerText)

    if((i+1)%5 === 0)
    {
      document.getElementById('rt'+rownum).innerText = sum.toFixed(2);
      rownum++;
      sum = 0;
    }
  }

  while(colnum !== 5)
  {
    for(i=0; i<15; i++)
    {
      if(i%5 === 0)
      {
        sum += parseFloat(document.getElementById('n'+(i+colnum)).innerText)
      }
    }
    colnum++;
    document.getElementById('ct'+colnum).innerText=sum.toFixed(2);
    sum = 0;
  }


  for(i = 0; i< 15; i++)
  {
    sum += parseFloat(document.getElementById('n'+i).innerText);
  }
  document.getElementById('gt').innerText = sum.toFixed(2);
}

function ProcessingPromise(promise)
{
  let newobj = promise.json();
  console.log("Выглядит объект так: " + newobj)
  console.log(newobj)

  
  return 0;
}


function ProcessingJSON(data)
{
  let obj = data;
  console.log(obj[3].author.node_id)
  console.log("Тип " + typeof obj)
  console.log("Внутри " + obj);
}



window.onkeydown = (eve) => { alert("вы нажали " + eve.keyCode) };


function reactTo3(list, event)
{
  console.log("XXX: " + list.options.length);
  const info = document.getElementById('anotherinfo');
  let index=list.options.selectedIndex;
  let city = list.options[index].value;
  info.innerHTML = event.type + '<br>Selected:';
  info.innerHTML += city + '<br>Index: ' + index;

}


function reactTo2(form, event)
{
  let i, ok, summary = '';
  console.log("Длина списка: " + form.spisok.length + ". Еще инфа: " + form.elements['spisok'].value)
  for(i=0; i< form.spisok.length; i++)
  {
    if(form.spisok[i].checked)
    {
      summary += form.spisok[i].value + ' | '
    }
  }
  ok = confirm('Submit These Choices?\n' + summary); 
  if (!ok) {event.preventDefault()};
}

function reactTo(event, color)
{
  document.getElementById('box').style.background = color;
  document.getElementById('info').innerText = event.type;
}


function myFunc()
  {
    alert("пидор");
    setCookie('User', 'Igor Parandiuk,12345', 7)
    setCookie('User2', 'Jalkaya Psina iz psarni,,,12345', 7)

    console.log(document.cookie)

    const list = document.getElementById('list');
    let i, value = getCookie('User0')
    if(value.indexOf(','))
    {
      value = value.split(',')
    }
    
    for(i = 0; i < value.length; i++)
    {
      list.innerHTML += '<li>' + value[i];
    }

  }