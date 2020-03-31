function net_pay(basic_pay, benefits, insurance){

    //  var basic_pay = document.getElementById("gross_salary").value; //"Please enter basic/gross pay: "
    console.log( basic_pay)
    //  var benefits = document.getElementById("benefits").value; //"Please enter housing allowance: "
    //  var insurance = document.getElementById("insurance").value;  //"Amount of insurance premiums paid by the company:"
  
      var gross_pay = parseInt(basic_pay) + parseInt(benefits);
      console.log( gross_pay)
  
      // Calculate Payee
      function payee(basic_pay){
          // defined fixed tax for each level
          var tax_for_level_1 = 12298 * 0.10
          var tax_for_level_2 = 11587 * 0.15
          var tax_for_level_3 = 11587 * 0.20
          var tax_for_level_4 = 11587 * 0.25
          //  define amount to deduct after each level
          var deduct_for_level_1 = 12298
          var deduct_for_level_2 = 12298 + 11587
          var deduct_for_level_3 = 12298 + 11587 + 11587
          var deduct_for_level_4 = 12298 + 11587 + 11587 + 11587
          //  calculate tax for level 1 Up to 12,298
          if (basic_pay <= 12298){
              return tax1=basic_pay* 0.1
          }// Calculate tax for level evel 2 (12,299 - 23,885)
          else if (basic_pay >= 12299 && basic_pay<= 23886){
              return bal= basic_pay - deduct_for_level_1
          }//calculate tax for level 3 (23,886 - 35,472)
          else if(basic_pay >= 28335 && basic_pay <=35472){
              bal2 = basic_pay - deduct_for_level_2
              return tax3 = tax_for_level_1 + tax_for_level_2 + (bal2 * 0.20)
          }//calculate tax for level 4 (35,473 - 47,059)
          else if(basic_pay >= 35473 && basic_pay <= 47059){
              bal3 = basic_pay - deduct_for_level_3
              return tax4 = tax_for_level_1 + tax_for_level_2 + tax_for_level_3 + (bal3 * 0.25)
          }//calculate tax for level 5 (Above 47,059)
          else{
              bal4=basic_pay - deduct_for_level_4
              return tax5= tax_for_level_1 + tax_for_level_2 + tax_for_level_3 + tax_for_level_4 + (bal4 * 0.3)
          }
      }
  
  
      //Calculate amount to be deducted for NHI
      function nhif_deductions(basic_pay){
          if (basic_pay <= 5999){
              return 150
          }else if(basic_pay >= 6000 && basic_pay <= 7999){
              return 300
          }else if(basic_pay >=8000 && basic_pay <=11999){
              return 400
          }else if(basic_pay >=12000 && basic_pay <=14999){
              return 500
          }else if (basic_pay >= 15000 && basic_pay <= 19999){
              return 600
          }else if(basic_pay >= 20000 && basic_pay <= 24999){
              return 750
          }else if(basic_pay >= 25000 && basic_pay <= 29999){
              return 850
          }else if(basic_pay >= 30000 && basic_pay <= 34999){
              return 900
          }else if(basic_pay >= 35000 && basic_pay <= 39999){
              return 950
          }else if(basic_pay >= 40000 && basic_pay <= 44999){
              return 1000
          }else if(basic_pay >= 45000 && basic_pay <= 49999){
              return 1100
          }else if(basic_pay >= 50000 && basic_pay <= 59999){
              return 1200
          }else if(basic_pay >= 60000 && basic_pay <= 69999){
              return 1300
          }else if(basic_pay >= 70000 && basic_pay <= 79999){
              return 1400
          }else if(basic_pay >= 80000 && basic_pay <= 89999){
              return 1500
          }else if(basic_pay >= 90000 && basic_pay <= 99999){
              return 1600
          }else if(basic_pay >= 100000){
              return 1700
          }else{
              return "please enter a correct value"
          }
      }
  
      /* # calculate amount to be deducted for NSSF
      # I did not get a predefined formulae on how to calculate NSSF rate.
      # I just used 360 because that is what I got from most people. */
      var nssf = 360;
      // tax relief
      var tax_relief = 1408;
      // Let's calculate the total deductions
      var total_deductions = payee(basic_pay) - tax_relief + nhif_deductions(basic_pay) + nssf + (.15 * insurance)
  
      // Net taxable income= Gross taxable income - Deductions
      var peanuts = gross_pay - total_deductions;
  
      //show the results on the results.html page
      document.getElementById("yournet").innerHTML="You take home peanust are: " + peanuts.toFixed() + " Kshs";
      document.getElementById("payee").innerHTML="PAYE deducted by Govt: " + payee(basic_pay).toFixed() + " Kshs";
      document.getElementById("NHIF").innerHTML="NHIF contribution: " + nhif_deductions(basic_pay).toFixed() + " Kshs";
      document.getElementById("NSSF").innerHTML="NSSF contribution: " + nssf.toFixed() + " Kshs";
  
  }
  