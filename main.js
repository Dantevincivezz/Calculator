
const eq = /=/;


function cmath(e){
    
    if(e === 'accept'){
        countResult();
    }
    else if(e === 'delete'){
        restart();
    }

    else{$('#headder').append(e);}
    

};

function countResult(){

    let tryit = $('#headder').text(); 
    
    if(tryit[0]>=0 || tryit[0]<=9){
    if (eq.test(tryit)){
        sorryAlert();
        $('#headder').text('');
    }
    else{

    let result = eval($('#headder').text());
    $('#headder').text(result);
    updateResults(result)
    }
    

}

else{sorryAlert(); restart();}

};

function restart(){
    $('#headder').text('');
};
function sorryAlert(){
    alert('Sorry! Can\'t do that.');
}
function updateResults(result){
    $('#results').append(' ' + result)

}

function resultReset(){
    $('#results').text('Result history:  ')
}