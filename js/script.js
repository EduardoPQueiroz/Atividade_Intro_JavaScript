/*function nome da função(){

}*/
function login(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    console.log(email);
    console.log(pass);
    if(email == "horacio@horacio.com" && pass == "has1234"){
    alert("Login realizado com sucesso");
    }
    else{
        alert("Não foi possível realizar o login");
    }
}

function somar(){
    var n1 = parseInt(prompt("digite o primeiro número: "))
    var n2 = parseInt(prompt("digite o segundo número: "))
   // console.log(typeof(n1))
    //console.log(typeof(n2))
    
    var resultado = n1 + n2 
    console.log(resultado)
    alert(resultado);

}

function subtrair(){
    var n1 = parseInt(prompt("digite o primeiro número: "))
    var n2 = parseInt(prompt("digite o primeiro número: "))
    var resultado = n1 - n2
    console.log(resultado)
    alert(resultado);
}

function multiplicar(){
    var n1 = parseInt(prompt("digite o primeiro número: "))
    var n2 = parseInt(prompt("digite o primeiro número: "))
    var resultado = n1 * n2
    console.log(resultado)
    alert(resultado);
}

function dividir(){
    var n1 = parseInt(prompt("digite o primeiro número: "))
    var n2 = parseInt(prompt("digite o primeiro número: "))
    var resultado = n1 / n2
    console.log(resultado)
    alert(resultado);
}

function quadrado(){
    var n1 = parseInt(prompt("digite o número a ser elevado ao quadrado: "))
    var resultado = n1 * n1
    console.log(resultado)
    alert(resultado);
}
function Raiz(){
    var n1 = parseInt(prompt("digite o número que deseja saber a raiz quadrada: "))
    var resultado = (Math.sqrt(n1))
    console.log(resultado)
    alert(resultado);
}

function Potência(){
    var n1 = parseInt(prompt("digite o número a ser elevado: "))
    var n2 = parseInt(prompt("digite o expoente: "))
    var resultado = n1 ** n2
    console.log(resultado)
    alert(resultado);
}

function addname(){
    const addname = document.getElementById("addname").value
    console.log(addname)
    document.getElementById("showname").innerHTML = addname
}

function addlist(){
    let addlist = document.getElementById("addlist").value
    let li = document.createElement("li") 
    li.innerHTML=addlist
    // document.getElementById("produto").innerHTML = product
    document.getElementById("showlist").appendChild(li)
    console.log(product)
}

function addproduct(){
    const product = {
       name: document.getElementById("addprodname").value,
       marca: document.getElementById("addprodmark").value,
       preco: document.getElementById("addprodprice").value,
    }
    const prod_item = document.createElement("li")
    const prod_nome = document.createElement("h3")
    const prod_marca = document.createElement("h4")
    const prod_preco = document.createElement("p")
    prod_nome.innerHTML = product.name;
    prod_marca.innerHTML = product.marca;
    prod_preco.innerHTML = product.preco;
    prod_item.appendChild(prod_nome);
    prod_item.appendChild(prod_marca);
    prod_item.appendChild(prod_preco);
    document.getElementById("showproduct").appendChild(prod_item)
}
