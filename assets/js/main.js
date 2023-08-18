const form = document.querySelector('#form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    console.log(peso,altura);
    const imcValor= getImc(peso,altura)
    if(!peso){
        setResultado('peso invalido', false);
        return
    }
    if(!altura){
        setResultado('altura invalido', false);
        return
    }
    if(imcValor>40){
        setResultado(`Imc de ${imcValor} Obesidade grau III é a thais carla mirim`, true)

    }else if(imcValor>35 && imcValor<39.9){
        setResultado(`Imc de ${imcValor} Obesidade grau II`, true)
    }
    else if(imcValor>30 && imcValor<34.9){
        setResultado(`Imc de ${imcValor} Obesidade grau I`, true)
    }
    else if(imcValor>25 && imcValor<29.9){
        setResultado(`Imc de ${imcValor} Sobrepeso`, true)
    }
    else if(imcValor>18.5 && imcValor<24.9){
        setResultado(`Imc de ${imcValor} Normal`, true)
    }
    else if(imcValor < 18.5){
        setResultado(`Imc de ${imcValor} Magreza`, true)
    }
    console('cheguei')
});
function getImc(peso,altura){
    const imc = (peso/(altura**2));
    return imc.toFixed(2);
}
function createClass(p,color){
   if(color===true){
        p.classList.add('p-rel')
} 
    else if(color === false){
        p.classList.add('p2-rel')
}
    return
}

function createP(msg){
    const p = document.createElement('p');
    p.innerHTML = msg;
    return p;
}
function setResultado(msg, isValid){
    const rel = document.querySelector('#rel');
    rel.innerHTML= '';
    const p = createP(msg);
    createClass(p, isValid);
    rel.appendChild(p);
    
}
