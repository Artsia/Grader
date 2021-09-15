
 function gradeHandler()
 {

     let number = parseInt(document.getElementById("userNumber").value);

     if(number >= 90 && number <=100)
     {
         //return A+
         document.getElementById("userGrade").value = "A+";
     }
     else if(number >= 80 && number <=89)
     {
         //return A
         document.getElementById("userGrade").value ="A";
     }
     else if(number >= 75 && number <=79)
     {
         //return B+
         document.getElementById("userGrade").value ="B";
     }
     else if(number >= 70 && number <=74)
     {
         //return B
         document.getElementById("userGrade").value ="B";
     }
     else if(number >= 65 && number <=69)
     {
         //return C+
         document.getElementById("userGrade").value ="C+";
         
     }
     else if(number >= 60 && number <=64)
     {
         //return C
         document.getElementById("userGrade").value ="C";
         
     }
     else if(number >= 55 && number <=59)
     {
         document.getElementById("userGrade").value ="D+";
     }
     else if(number > 50 && number <=54)
     {
         //return D
         document.getElementById("userGrade").value ="D";
     }
     else if(number > 40 && number <=49)
     {
         document.getElementById("userGrade").value ="E";
     }
     else
     {
         document.getElementById("userGrade").value ="F";
     }
 }















