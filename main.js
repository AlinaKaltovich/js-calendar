document.addEventListener('DOMContentLoaded', calendar());


function calendar(){
    var arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var arrDayClick = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var mainDate = new Date();
   
    calendarTime();

    var dateNow = document.querySelector ('.date');
    var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        };
    dateNow.innerText = mainDate.toLocaleString ('en', options);

    var monthNow = document.querySelector ('.nav-month');
    monthNow.innerText = arrMonth[mainDate.getMonth()] + ' ' + mainDate.getFullYear();

    var monthWrap = document.querySelector ('.month');
    createDays();

    var calendarWrap = document.querySelector('.calendar');

    calendarWrap.addEventListener('click', function(evt){
        var numberWrapClick = document.querySelectorAll ('.number');
        var numberClick = document.querySelector ('.today');

        if (evt.target === document.querySelector ('.arrow-prev')){
            mainDate.setMonth(mainDate.getMonth() - 1);
            monthNow.innerText = arrMonth[mainDate.getMonth()] + ' ' + mainDate.getFullYear();
            createDays();
        } else if (evt.target === document.querySelector ('.arrow-next')){
            mainDate.setMonth(mainDate.getMonth() + 1);
            monthNow.innerText = arrMonth[mainDate.getMonth()] + ' ' + mainDate.getFullYear();
            createDays();
        }            
        for(let i=0; i<numberWrapClick.length; i++){
            if(evt.target ===  numberWrapClick[i]){
                numberClick.innerText = arrDayClick[i%7] + ' ' + numberWrapClick[i].innerText;
            } else if (evt.target ===  document.querySelector ('.now')){
                numberClick.innerText = 'Today';
            }
        }
    }) 
    
    function calendarTime() {
        var mainDate = new Date(); 
        var time = document.querySelector ('.time');
        time.innerText = mainDate.toLocaleTimeString();
        setTimeout (calendarTime, 1000);
    }
    
    function createDays() {
        var changeDate = new Date(mainDate.getFullYear(), mainDate.getMonth(),mainDate.getDate());
        changeDate.setDate(1);
        var firstDayWeek = changeDate.getDay();
        changeDate.setDate(1 - firstDayWeek);
        var nowDate = new Date();

        while (monthWrap.firstChild){      
            monthWrap.removeChild(monthWrap.firstChild);
        }
    
        for (let i=0; i<6; i++){
            weekday = document.createElement('div');
            weekday.classList.add ('weekday');
        
            for(let i=0; i<7; i++){
                var numberWrap = document.createElement('div');
                numberWrap.classList.add('number');

                if (changeDate.getDate() === nowDate.getDate() && changeDate.getMonth() === nowDate.getMonth()){
                    numberWrap.classList.add ('now'); 
                } 
                if (changeDate.getMonth() !== mainDate.getMonth()){
                    numberWrap.classList.add ('other-month');
                }
                numberWrap.innerText = changeDate.getDate();
                changeDate.setDate(changeDate.getDate() + 1);
                weekday.appendChild(numberWrap);
            } 
            monthWrap.appendChild(weekday);
        }  
    }
}

document.addEventListener('DOMContentLoaded', tabShow());
function tabShow(){

    var wrap = document.querySelector ('.wrap');
    var item = document.querySelectorAll ('.item-title');
    var subitem = document.querySelectorAll ('.subitem');

    wrap.addEventListener ('click', function(evt){  
        for (let i=0; i<item.length; i++){
            subitem[i].classList.add('hidden');
            subitem[i].classList.remove('active');

            if(evt.target === item[i]){
                subitem[i].classList.add('active');
                subitem[i].classList.remove('hidden');
                item[i].classList.add('seen');
            }
        }
    })
}