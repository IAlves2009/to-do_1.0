let nomes = ['Isaac Alves']
let btn_cadastrar = document.getElementById('btn_cadastrar');

btn_cadastrar.addEventListener('click',(e)=>{
    e.preventDefault();
    let nome = document.getElementById('nomes')
     
    if(nome.value == ""){
        let msg = document.getElementById('mensagens');
        msg.classList.remove('d-none');
        setTimeout(() => {
            msg.classList.add('d-none')
        },3000);
    }
    nomes.push(nome.value)
    atualizar_lista();
    nome.value = ';'
})

function atualizar_lista(){
    let lista = document.getElementById('lista');
    lista.innerHTML=""
    nomes.forEach(nm => {
    lista.innerHTML += `
    <tr>
    <td>${nm}</td>
    <td>
    <button class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
    <button class="btn btn-danger"><i class="bi bi-trash3"></i></i
    </td>
    </tr>`
    })
}