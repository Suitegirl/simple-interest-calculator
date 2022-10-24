//the main calculation function
function compute()
{
    //create all variables needed for interest calculation
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //var interest is the final calculation
    var interest = principal * years * rate/100;

    //transform the number of years into x year in the future based on today's date + the number of years entered
    var year = new Date().getFullYear()+parseInt(years);

    //inserts results of calculation in the result span with descriptive text
    document.getElementById("result").innerHTML="If you Deposit <mark>"+ principal+"</mark>,\<br\> at an intereest rate of <mark>"
    +rate+"%</mark>\<br\> you will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
}

//the function for displaying the range element value in the rate_val span
function updateRate()
{
    //stores the rate value in a var
    var rateval = document.getElementById("rate").value;

    //inserts updates in value in the rate_val span
    document.getElementById("rate_val").innerText=rateval;
}

//the function for checking that the value entered in the Amount input is not "" or 0 or a negative number
function checkAmount() {

    //gets the value entered in the Amount input
    var amount = document.getElementById("principal").value;

    //if statement to determine if the value is blank
    if(amount == "")
    {
    alert("Enter a positive number");
    amount.focus();
    return false;
    }
    
    //if statement to determine if the value is less than or equal to 0
    if(amount <= 0)
    {
    alert("Enter a positive number");
    amount.focus();
    return false;
    }
    return true;
}