     
    
//sets the initial range values upon loading the page
function setRate()
     {
     this.document.getElementById("rate").min = 1
    this.document.getElementById("rate").max = 20
    this.document.getElementById("rate").step = 0.25
        document.getElementById("rate").value = 10.25
        var rate_init = document.getElementById("rate").value
        document.getElementById("rate_val").innerText=rate_init
        
        }

//updates the range value seen on the side when you use slider
    function updateRate() 
    {  
        this.rateval = document.getElementById("rate").value
        document.getElementById("rate_val").innerText=rateval
    }
   
//creates an alert if an amount is entered that is not greater than or equal to $0.01
function principalValidate()
   {if (document.getElementById("principal").value <= 0) {alert("Enter a positive number");
    document.getElementById("principal").focus()
    return (false)
    }
    else return(true)
}

//calculates the amount of interest for a given time frame if a valid amount is entered

    function compute()
    {
    if (principalValidate()===true){
    
        var principal = document.getElementById("principal").value;
        var years = document.getElementById("years").value;
        var rate = document.getElementById("rate").value
        var interest = (principal * years * rate) /100
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposit \<mark class=\"mark_compute\"\>$"+principal+"\</mark\>,\<br\>at an interest rate of \<mark class=mark_compute\>"+rate+"%\</mark\>\<br\>You will receive an amount of \<mark class=mark_compute\>$"+interest+"\</mark\>,\<br\>in the year \<mark class=mark_compute\>"+year+"\</mark\>\<br\>"
     
    }
      }  
