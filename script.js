console.log("List of Inbuilt Date Methods in Javascript");

const date= new Date();  //Creates the date object with the keyword new to see todays date 
console.log(date.toDateString()); //Mon Aug 07 2023

//toDateString==>Returns only the date potion without time and any elements of the object

const d= new Date();
console.log(d.toDateString());  //  Fri Aug 11 2023

//getDate==>Returns only the date i.e 1 to 31 date of the month

const day= new Date();
console.log(day.getDate());  //11

//getFullYear()==>Returns only the Year i.e 2023 of the date only

const fullyear = new Date();
console.log(fullyear.getFullYear()); //2023

//getMonth()==>Returns only the month of the year i.e 0 to 11 from jan as 0 to dec as 11

const month = new Date();
console.log(month.getMonth());  //7

//getDay==>Returns days of the week  i.e 0 to 6 as sunday as =0,mon=1.,,,, and saturday ==6

const days= new Date();
console.log(days.getDay()); //5 == friday

//getHours==>Returns the current hour which we are in as 24hrs timing i.e 1 to 24 hrs 

const hours = new Date();
console.log(hours.getHours()); //18== 6 clk in evening

//getMinutes==>Returns the minutes only i.e 0 to 59 mins of the hour

const minute = new Date();
console.log(minute.getMinutes()); //17 minutes 

//getSeconds==>Returns only the seconds in the minutes i.e 0 to 59

const second= new Date();
console.log(second.getSeconds()); // 4 seconds

//getMilliseconds==>Returns the milliseconds (1 milli sec =1000 sec) so will return 0 to 999 milliseconds

const millisec= new Date();
console.log(millisec.getMilliseconds()); //82 millisec

//getTime==>  Returns no of miilisec from 1st jan till today

const time = new Date();
console.log(time.getTime()); //1691758386561





