document.addEventListener('keydown', function(event){
    if(event.ctrlKey && event.key === 'q'){
        window.location.href = '#sobre'
    }

    if(event.ctrlKey && event.key === 'i'){
        window.open('https://canaltech.com.br/empresa/atari/')
    }

    if(event.ctrlKey && event.key === 'b'){
        document.getElementById('message-input').focus()
    } else if (event.key === 'Enter') {
        
        alert('Mensagem enviada!');
    }
    
})