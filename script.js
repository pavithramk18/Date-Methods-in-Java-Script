console.log("List of Inbuilt Date Methods in Javascript");


//Get Methods of Date Object in Java Script
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


//********************************************************************************// 


//Set Methods of date in Java Script

//setDate==>sets the date i.e we can set the date from 1 to 31 days of the month
const setdate= new Date();
setdate.setDate(21);
console.log(setdate);  //Mon Aug 21 2023 16:20:35 GMT+0530 (India Standard Time)

//setFullYear==>we can set the (year,month,date) in this format

const setfullyear = new Date();
setfullyear.setFullYear(2023,7,18);
console.log(setfullyear);  //  Fri Aug 18 2023 16:25:23 GMT+0530 (India Standard Time)

//setHours==>we can set 0 to 23 hrs in the hours format

const sethour= new Date();
sethour.setHours(22);
console.log(sethour);   //Sat Aug 12 2023 //22//:31:13 GMT+0530 (India Standard Time)

//setMinutes==>we can set the minutes from 0 to 59 in the time 

const setminutes = new Date();
setminutes.setMinutes(54);
console.log(setminutes);  //Sat Aug 12 2023 16://54//:59 GMT+0530 (India Standard Time)


//setSeconds==>we can set the seconds from 0 to 59 in the date 

const setseconds = new Date();
setseconds.setSeconds(34);
console.log(setseconds);  //Sat Aug 12 2023 16:32://34// GMT+0530 (India Standard Time)


//setMilliseconds==>we can set the milliseconds from 0 to 999

const setmilliseconds = new Date();
setmilliseconds.setMilliseconds(789);
console.log(setmilliseconds); //

//setMonth==>we can set the month from 0 as Jan till 11 as december

const setmonth = new Date();
setmonth.setMonth(4);
console.log(setmonth);  //Fri //May// 12 2023 16:35:51 GMT+0530 (India Standard Time)