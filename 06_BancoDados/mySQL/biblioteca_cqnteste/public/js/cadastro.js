$(document).ready(function () {
    var validation = new Array(6)

    function habilitarBtn() {

        for(i=0; i < validation.length; i++) {
            $("#submit").removeAttr("disabled");
            if (validation[i] != true) {
                $("#submit").attr("disabled", "disabled");
            }
        }
        
    }

    $("#nome").blur(function () {
        if ($(this).val() != "") {
            validation[0] = true
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
        } else {
            validation[0] = false
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        }
        habilitarBtn()
    })

    $("#isbn").blur(function () {
        if ($(this).val() != "") {
            validation[1] = true
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
        } else {
            validation[1] = false
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        }
        habilitarBtn()
    })

    $("#faixaEtaria").blur(function () {
        validation[2] = true
        $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
        habilitarBtn()
    })

    $("#autor").keypress(function (e) {

        var tecla = new Number();

        if (window.event) {
            tecla = e.keyCode;
        }
        else if (e.which) {
            tecla = e.which;
        }
        else {
            return true;
        }
        if ((tecla >= "48") && (tecla <= "57")) {
            return false;
        }

    })

    $("#autor").blur(function () {
        if ($(this).val() != "") {
            validation[3] = true
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
        } else {
            validation[3] = false
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        }
        habilitarBtn()
    })

    $("#ano").blur(function () {
        if ($(this).val() != "") {
            validation[4] = true
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
        } else {
            validation[4] = false
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        }
        habilitarBtn()
    })

    $("#local").blur(function () {
        if ($(this).val() != "") {
            validation[5] = true
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
        } else {
            validation[5] = false
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        }
        habilitarBtn()
    })

    // Busca na planilha
/*         $("#search").keyup(function (){ 
            search_table($("#search").val()); 
        }); //Chama a função search_table, usando o valor do input#search como parametro.

        function search_table(value){ 
            $("#tabelaLivrosAdmin tbody tr").each( function (){
                var aux = "false";
                $(this).each(function (){
                    if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0){
                        aux = "true";
                    }
                })
                if (aux == "true"){
                    $(this).show();
                } else{
                    $(this).hide();
                }
            })
        }    */
        
})