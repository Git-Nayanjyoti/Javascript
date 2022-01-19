//method to clear the input fields
function Clear(){
    document.getElementById("quantity").value = null;
    document.getElementById("price").value = null;
}

//method to calculate the price 
function calculatePrice(){
    var quant = document.getElementById("quantity").value;
    var price = document.getElementsByName("listItem")[0].value;
    document.getElementById("price").value = quant * price;
}

//method for dynamic product list
function productlist(){
    var ElectronicsPriceList = [2000,3000,1000];
    var GroceryPriceList = [40,90];
    var electronics = ['Television','Laptop','Phone'];
    var grocery = ['Soap','Powder'];
    if(document.forms[0].select.value == "Electronics"){
        createOption(ElectronicsPriceList,"electronics",electronics);
    }else if(document.getElementById("select").value == "Grocery"){
        createOption(GroceryPriceList,"grocery",grocery);
    }
}

//method for creating the select drop down with options
function createOption(value,str,arr){
    var select = "<select name=\"listItem\" id="+str+">";
    for(var i = 0; i < arr.length; i++){
        select += "<option value="+ value[i] + ">" + arr[i] + "</option>";
    }
    select += "</select>";
    document.getElementById("list").innerHTML = select;
}