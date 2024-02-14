function selectAllChkbox(){
    if($("#checkboxAllUser").prop('checked') == true){
        $('.chkall').attr('checked', true);
    }else{
        $('.chkall').attr('checked', false);
    }
}
function selectAllChkboxes(){
    if($("#checkAll").prop('checked') == true){
        $('.selctOption_roll').attr('checked', true);
    }else{
        $('.selctOption_roll').attr('checked', false);
    }
}
function selectAllChkboxesPer(){
    if($("#chkAllPer").prop('checked') == true){
        $('.selctOption_per').attr('checked', true);
    }else{
        $('.selctOption_per').attr('checked', false);
    }
}
function selectAllChkboxesUser(){
    if($("#chkAllUser").prop('checked') == true){
        $('.selctOption_user').attr('checked', true);
    }else{
        $('.selctOption_user').attr('checked', false);
    }
}
function selectAllChkboxesClint(){
    if($("#checkAllClint").prop('checked') == true){
        $('.selctOption_clint').attr('checked', true);
    }else{
        $('.selctOption_clint').attr('checked', false);
    }
}


const divContainer = document.querySelector('#view_security');
let isClicked = true;

let viewsOrHide = function(){
    if(isClicked){
        divContainer.style.display = 'block';
        isClicked = false;
    }else{
        divContainer.style.display = 'none';
        isClicked = true;
    }
   
}
