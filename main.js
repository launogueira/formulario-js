// 1° PASSO - CAPTURAR O FORMULÁRIO NO HTML 

const formulario = document.getElementById
    ("formulario")

formulario.addEventListener("submit", function (event) {

    event.preventDefault()
    //CAPTURAR OS VALORES DIGITADOS PELO USUÁRIO

    const nome = document.getElementById("nome").value
    const lanche = document.getElementById("lanche").value
    const telefone = document.getElementById("telefone").value
    const unidade = document.getElementById("unidade").value
    const mensagem = document.getElementById("mensagem").value

    if (telefone.trim() === "") {
        alert("Digite seu nome")
        return
    }

    const textoWhatsapp =
        `
    Olá! Gostaria de pedir um lanche
    Nome:${nome}
    Lanche:${lanche}
    Telefone:${telefone}
    Unidade:${unidade}
    Observcações:${mensagem} 
    `
    // CONDIFICAR A MENSAGEM PARA SER UTILIZADA NA URL
    const mensagemCodificada = encodeURIComponent(textoWhatsapp)

    //NUMERO DO WHATSAPP
    const numeroWhatsapp = "5511915337070"

    //MONTA O LINK WHATSAPP 
    const link = "https://wa.me/" + numeroWhatsapp + "?text=" + mensagemCodificada

    window.location.href = link






})