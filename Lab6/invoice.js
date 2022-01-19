function invoice() {
    var arr = ['PRODUCT', 'QUANTITY', 'PRICE', 'TOTAL'];
    let price = [20, 30, 40, 50];
    let product = ['Barbie Doll', 'Calculator', 'Mobile Phone', 'LG DVD'];
    let barbieQty = document.getElementById("Barbie Doll").value;
    let CalQty = document.getElementById("Calculator").value;
    let MPhoneQty = document.getElementById("Mobile Phone").value;
    let LGQty = document.getElementById("LG DVD").value;
    let quantity = [barbieQty, CalQty, MPhoneQty, LGQty];

    /*verification of empty input field */
    const inputFields = document.querySelectorAll("input");
    const validInputs = Array.from(inputFields).filter(input => input.value !== "");
    if (validInputs.length == 0) {
        alert("no item selected");
    } else {
        for (var item = 0; item < product.length; item++) {
            if (document.getElementById(quantity[item]) != false && (quantity[item] * price[item]) !== 0) {
                arr.push(product[item]
                    , quantity[item]
                    , price[item]
                    , (quantity[item] * price[item]));
            }
            else {
                continue;
            }
        }
        /* Function to generate dynamic table */
        generateTable(arr);
    }
}

//function to generate dynamic table
function generateTable(arr) {
    var result = "<table border=1 style=\"margin-left:auto;margin-right:auto;\">";
    result += "<tr>";
    for (var j = 0; j < arr.length; j++) {
        result += "<td>" + arr[j] + "</td>";
        if ((j + 1) % 4 == 0) {
            result += "</tr><tr>";
        }
    }
    result += "</tr>";
    result += "</table>";

    // window with result
    var myWindow = window.open("", "", "width=400,height=300,top=400,left=600");
    myWindow.document.write("<p style=\"text-align: center\"><b>INVOICE</b></p>");
    myWindow.document.write(result);
}