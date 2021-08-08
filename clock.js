
const weekDay = document.getElementById("weekDay")
const monthDay = document.getElementById("monthDay")
const month = document.getElementById("month")
const fullYear = document.getElementById("fullyear");
const hour = document.getElementById("hour")
const minutes = document.getElementById("minutes")
const second =document.getElementById("second")
const ampm = document.getElementById("ampm")

let updateDate =()=>{
    const date = new Date();

    

    let weekDays= ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes", "Sabado"]
 
    for (let i = 0; i < weekDays.length; i++) {
        weekDay.textContent=weekDays[date.getDay()]+";"          
    }

    monthDay.textContent = date.getDate() 

    let months= ["Enero","Febrero","Marzo","Abril","Mayo","Junio", "Julio", "Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    console.log(months[0]);
    for (let i = 0; i < months.length; i++) {
         month.textContent=months[date.getMonth()]
     }
    
     fullYear.textContent = date.getFullYear()

     hour.textContent = date.getHours()-12
     if (date.getHours() < 12) {
        ampm.textContent = "A.M"
     } else {
        ampm.textContent = "P.M"
     }
     
     minutes.textContent = date.getMinutes()
     if (date.getMinutes()<10) {
        minutes.textContent = `0${date.getMinutes()}`
     }
     second.textContent = date.getSeconds()
     if (date.getSeconds()<10) {
        second.textContent = `0${date.getSeconds()}   `
     }


   
}
updateDate();

setInterval(() => {
    updateDate();
}, 1000);
