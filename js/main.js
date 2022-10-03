function consultaCep() {
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url =  "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax ({
        url: url,
        type: "GET",
        success: function(response){
            // Lista as informações em no console ao retirar as // abaixo
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#ddd").html(response.ddd);   
            $("#ibge").html(response.ibge);  
            $("#siafi").html(response.siafi);  
            $("#titulo-cep").html("CEP : " + response.cep); 
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}

$(function() {
    $(".cep").hide();
    $(".barra-progresso").hide();
})