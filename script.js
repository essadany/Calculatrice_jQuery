function insertion(num){
    $(".affichage").val($(".affichage").val()+num);
}
function equal(){
    $(".affichage").val(eval($(".affichage").val()));
}
function C(){
    $(".affichage").val('');
    
}
function supprimer(){
    valeur= $(".affichage").val();
     $(".affichage").val(valeur.substring(0,valeur.length-1));  
}