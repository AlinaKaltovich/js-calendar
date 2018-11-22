document.addEventListener('DOMContentLoaded', calendar());


function calendar(){
    var arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var mainDate = new Date();
 
    function calendarTime() {
        var mainDate = new Date(); 
        var time = document.querySelector ('.time');
        time.innerText = mainDate.toLocaleTimeString();
        setTimeout (calendarTime, 1000);
    }

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
                    numberWrap.style.color = "grey";
                }

                numberWrap.innerText = changeDate.getDate();
                changeDate.setDate(changeDate.getDate() + 1);
                weekday.appendChild(numberWrap);
            } 
            monthWrap.appendChild(weekday);  

            monthWrap.addEventListener('click', function(evt){
                var numberWrapClick = document.querySelectorAll ('.number');
                var numberClick = document.querySelector ('.today');
                for(let i=0; i<numberWrapClick.length; i++){
                    console.log(numberWrapClick.length);
                    if(evt.target ===  numberWrapClick[i]){
                        var arrDayClick = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                        // numberClick.innerText = numberWrapClick[i].textContent;
                    } else if (evt.target ===  document.querySelector ('.now')){
                        numberClick.innerText = 'Today';
                    }
                }
            }) 
        }  
    }

    var calendarWrap = document.querySelector('.calendar');
    calendarWrap.addEventListener('click', function(evt){
        if (evt.target ===  document.querySelector ('.arrow-prev')){
            mainDate.setMonth(mainDate.getMonth() - 1);
            monthNow.innerText = arrMonth[mainDate.getMonth()] + ' ' + mainDate.getFullYear();
            createDays();
        }
        if (evt.target ===  document.querySelector ('.arrow-next')){
            mainDate.setMonth(mainDate.getMonth() + 1);
            monthNow.innerText = arrMonth[mainDate.getMonth()] + ' ' + mainDate.getFullYear();
            createDays();
        }
    })

calendarTime();
createDays();
}



function tabShow(){

    var wrap = document.querySelector ('.wrap');
    var item = document.querySelectorAll ('.item-title');
    var subitem = document.querySelectorAll ('.subitem');

    wrap.addEventListener ('click', function(evt){  
        for (let i=0; i<item.length; i++){
            subitem [i].classList.add('hidden');
            subitem [i].classList.remove('active');

            if(evt.target === item[i]){
                subitem [i].classList.add('active');
                subitem [i].classList.remove('hidden');
                item[i].style.fontWeight = 'bold';
            }
        }
    })
}

document.addEventListener('DOMContentLoaded', tabShow());


