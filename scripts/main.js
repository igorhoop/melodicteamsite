


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


  //packetFromRobot.manufacturer = "Deep Robotics";

  //packetFromRobot.dopSvoistvo = "123";

  //for(svoistvo in packetFromRobot)
  //{
  //  console.log("Очередная итерацию переборки: " + svoistvo + ' imeet \nznachenie ')
 // }

})()

function myFunc()
  {
    alert("пидор");
  }