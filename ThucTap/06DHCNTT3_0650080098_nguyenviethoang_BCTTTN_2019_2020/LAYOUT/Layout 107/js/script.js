// $(function addClassActive(number){
//     console.log("helloo")
//         console.log("good")

//         $('.nav-item').addClass('active');

//     })
function addClassActive(number){
    console.log(number)
    switch(number){
        case 1:  
        $('.nav-item').removeClass('active');
        $('.nav-item1').addClass('active'); break;
        case 2:    
        $('.nav-item').removeClass('active');
         $('.nav-item2').addClass('active'); break;
        case 3:    
        $('.nav-item').removeClass('active');
         $('.nav-item3').addClass('active'); break;
        case 4:    
        $('.nav-item').removeClass('active');
        $('.nav-item4').addClass('active'); break;
        case 5:  
        $('.nav-item').removeClass('active');
        $('.nav-item5').addClass('active'); break;
    }

}