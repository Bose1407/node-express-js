function display(){
    const input = document.getElementById('inputfield');
    const inputvalue = input.value;
    const h4 = document.getElementById('h4content');
    const para = document.createElement('p');
    para.textContent=inputvalue;
    input.value="";
    h4.append(para);
}