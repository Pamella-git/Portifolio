let caminhoCurriculo = "./Curriculo-PAMELA.pdf"

let botaoBaixarCurriculo = document.querySelector("#curriculo")
console.log(botaoBaixarCurriculo)

botaoBaixarCurriculo.addEventListener("click", function (){
    let tagA = document.createElement("a")
    console.log(tagA)

    tagA.href = caminhoCurriculo
    tagA.download = "Curriculo-PAMELA.pdf"
    tagA.click()
})