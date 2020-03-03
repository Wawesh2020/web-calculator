function calculate(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var oper = document.getElementById('operators').value;

    if(oper === '+'){
        document.getElementById('answer').value = num1 + num2

        
    }

    if(oper === '-'){
        document.getElementById('answer').value = num1 - num2
        

        
    }

    if(oper === '*'){
        document.getElementById('answer').value = num1 * num2

        
    }

    if(oper === '/'){
        document.getElementById('answer').value = num1 / num2

        
    }




    

}