const form = document.getElementById('form');

form.addEventListener('submit',admission);




async function admission(event){
    event.preventDefault();

    const username = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;

    const result = await fetch('/api/admission',{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            username,
            number,
            email,
            msg
        })
    }).then((res)=>res.json())
    if(result.status == 'ok'){
        alert('Sucess');
        form.reset();
    }else{
        alert(result.error);
        form.reset();
    }
}