function MyGetSettings(one, two)
{

    let idInstance = document.getElementById('IDInstance').value;
    let apiTokenInstance = document.getElementById('APITokenInstance').value;


    console.log("ГОТОВИМСЯ К ОТПРАВКЕ GET ЗАПРОСА НА ПОЛУЧЕНИЕ ИНСТАНСА")

    console.log(`idInstance = ${idInstance}`);
    console.log(`apiTokenInstance = ${apiTokenInstance}`)
    

    

    let url = `https://7103.api.greenapi.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`;
    


    let result = fetch(url)
    .then(res => res.json())
    .then(b => document.getElementById('green_api_response').value = JSON.stringify(b, null, 4));

    
    

    //console.log(`Пришло: ${b}`);

    //document.getElementById('green_api_response').innerText = b;

}



function MyGetStateInstance(one, two)
{


    let idInstance = document.getElementById('IDInstance').value;
    let apiTokenInstance = document.getElementById('APITokenInstance').value;


    console.log("ГОТОВИМСЯ К ОТПРАВКЕ GET ЗАПРОСА НА ПОЛУЧЕНИЕ !!СОСТОЯНИЯ!! ТЕКУЩЕГО ИНСТАНСА")

    console.log(`idInstance = ${idInstance}`);
    console.log(`apiTokenInstance = ${apiTokenInstance}`)
    

    

    let url = `https://7103.api.greenapi.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;
    
    let result = fetch(url)
    .then(res => res.json())
    .then(b => document.getElementById('green_api_response').value = JSON.stringify(b, null, 4));

    console.log(`Пришло: ${result}`);

}


function MySendMessage()
{
    let idInstance = document.getElementById('IDInstance').value;
    let apiTokenInstance = document.getElementById('APITokenInstance').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('MyMessage').value;


    console.log("ГОТОВИМСЯ К ОТПРАВКЕ СООБЩЕНИЯ")
    console.log(`idInstance = ${idInstance}`);
    console.log(`apiTokenInstance = ${apiTokenInstance}`)
    

    
    let url = `https://7103.api.greenapi.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`
    
    let response = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        
        body: JSON.stringify({ chatId: `${phone}@c.us`, message: `${message}` }),
      })
      .then(res => res.json())
    .then(b => document.getElementById('green_api_response').value = JSON.stringify(b, null, 4));

}


function MySendFileByUrl()
{
    let idInstance = document.getElementById('IDInstance').value;
    let apiTokenInstance = document.getElementById('APITokenInstance').value;
    let phone = document.getElementById('phone2').value;
    let fileurl = document.getElementById('FileUrl').value;


    console.log("ГОТОВИМСЯ К ОТПРАВКЕ СООБЩЕНИЯ")
    console.log(`idInstance = ${idInstance}`);
    console.log(`apiTokenInstance = ${apiTokenInstance}`)

    
    let url = `https://7103.api.greenapi.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`
    
    let response = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        
        body: JSON.stringify({ chatId: `${phone}@c.us`, "urlFile": `${fileurl}`, "fileName": "test.jpg", "caption": "вам картинка" }),
      })
      .then(res => res.json())
    .then(b => document.getElementById('green_api_response').value = JSON.stringify(b, null, 4));

}


//https://7103.api.greenapi.com/waInstance7103158862/getSettings/f8d925fff23e49689457f1c6cad7abce7871300feb2a4f368b
//https://7103.api.greenapi.com/waInstance7103158862/getStateInstance/f8d925fff23e49689457f1c6cad7abce7871300feb2a4f368b


//{{apiUrl}}/waInstance{{idInstance}}/sendMessage/{{apiTokenInstance}}