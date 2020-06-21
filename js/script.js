document.getElementById("action").addEventListener("click", function(){
    //add your code between this comment
	document.getElementById("holder").innerHTML = "";
    var s = "Pleasr select a task:\n";
        s+= "1). Convert Fahrenheit to Celsius\n";
        s+= "2). Convert Pounds to Kilos\n";
        s+= "3). Convert Miles to Kilometers\n\n";
        s+= "4). Exit\n\n"
        s+= "Enter 1,2,3 or 4";
    var userInput = prompt(s, "");
    if(isNaN(userInput)) {
        var m = "<h2>Error!</h2>";
            m +="Ooops! It looks like something went wrong! Please try again";
            document.getElementById("holder").innerHTML =m;
    } else {
        var s ="";
        switch(userInput) {
            case "1":
                
              var f = prompt("Please enter a value in Fahrenheit. Input 'Z' to stop inputting values",0);
              var fValues = [];
              var cValues = [];
              while(f != 'Z'){ //a
                  
                 if(isNaN(f)){
                  //if input is not a number    
                  var tmp = "Error - you acn only input numbers or the letter 'Z'!\n"
                      tmp += "Please enter a value in Fahrenheit. Input 'Z' to stop inputting values."
                  f = prompt(tmp,0);
              }else {
                //if input is  a number  
                f = parseInt(f);
                fValues.push(f);
                c = parseFloat(5/9 * (f-32));
                cValues.push(c);
                f = prompt("Please enter a value in Fahrenheit. Input 'Z' to stop inputting values",0);
              }
          }
          var s = "<h2>Fahrenheit to Celsius Conversion</h2>";
          for(var i = 0; i <fValues.length; i++) {
              s += fValues[i]+ "F equals" + cValues[i] + "C<br/>";
          }
          s +="Click \"Click Here to Begin\" to perform another calcuation!";
          document.getElementById("holder").innerHTML = s;
            break;
            case "2":
               
              var p = prompt("Please enter a value in Pounds. Input 'Z' to stop inputting values",0);
              var pValues = [];
              var kValues = [];
              while(p != 'Z'){ //a
                  
                 if(isNaN(p)){
                  //if input is not a number    
                  var tmp = "Error - you acn only input numbers or the letter 'Z'!\n"
                      tmp += "Please enter a value in Pounds. Input 'Z' to stop inputting values."
                  p = prompt(tmp,0);
              }else {
                //if input is  a number  
                p = parseInt(p);
                pValues.push(p);
                k = parseFloat(p / 2.2046);
                kValues.push(k);
                p = prompt("Please enter a value in Pounds. Input 'Z' to stop inputting values",0);
              }
          }
          var s = "<h2>Pounds to Kilo Conversion</h2>";
          for(var i = 0; i <pValues.length; i++) {
              s += pValues[i]+ "Pounds equals" + kValues[i] + "C<br/>";
          }
          s +="Click \"Click Here to Begin\" to perform another calcuation!";
          document.getElementById("holder").innerHTML = s;    
            break;
            case "3":
                var mph = prompt("Please enter a value in MPH. Input 'Z' to stop inputting values",0);
              var mphValues = [];
              var kphValues = [];
              while(mph != 'Z'){
                  
                 if(isNaN(mph)){  
                  var tmp = "Error - you acn only input numbers or the letter 'Z'!\n"
                      tmp += "Please enter a value in MPH. Input 'Z' to stop inputting values",0;
                  mph = prompt(tmp,0);
              }else {
                mphValues.push(parseInt(mph));
                kphValues.push(parseFloat(mph * 1.609344))
                mph = prompt("Please enter a value in MPH. Input 'Z' to stop inputting values",0);
              }
          }
          var s = "<h2>MPH to KPH Conversion</h2>";
          for(var i = 0; i <mphValues.length; i++) {
              s += mphValues[i]+ "MPH equals" + kphValues[i] + "KPH<br/>";
          }
          s +="Click \"Click Here to Begin\" to perform another calcuation!"
          document.getElementById("holder").innerHTML = s;
        break;
        case "4":
        break;
        defult:
        s = "<h2>Error!</h2>";
        s += "Ooops! It looks likes something went wrong! Please try again!";
        break;
        }
        document.getElementById("holder").innerHTML = s;
    }
    //and this comment
});