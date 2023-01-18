    const weatherForm = document.querySelector('form')
    const search = document.querySelector('input')
    const messageOne = document.querySelector('#message-1')
    const messageTwo = document.querySelector('#message-2')
    messageOne.textContent='Hello !!!!'
    weatherForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        messageOne.textContent="loading....."
        messageTwo.textContent=''
        const location = search.value
        let query = location
    const apikey = '6c39c90bbd17790bb1ca9dad1195b31c'
    let url ='https://api.openweathermap.org/data/2.5/weather?q='+ query + 
    '&appid='+apikey+'&units=metric'
    fetch(url).then((resp)=>{
        resp.json().then((data)=>{
            if(data.weather==null){
                messageOne.textContent="Enter Valid Location !!!!!!!!"
            }
            else{
                messageOne.textContent=data.main.temp
                messageTwo.textContent=data.weather[0].description
            }        })
    })
        
    })
    const locatio = search.value
    