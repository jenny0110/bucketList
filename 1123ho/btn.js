window.onload = function(){

    function get_arguments(arg1,arg2) {
        if (document.getElementById(arg1,arg2).style.backgroundColor =='blue','lighyblue'){
            document.getElementById(arg1,arg2).style.backgroundColor ='red','green';
        }
        else{
            document.getElementById(arg1,arg2).style.backgroundColor ='blue','lightblue';
        }
    }
    // function get_arguments(arg2) {
    //     if (document.getElementById(arg2).style.backgroundColor =='lightblue'){
    //         document.getElementById(arg2).style.backgroundColor ='green';
    //     }
    //     else{
    //         document.getElementById(arg2).style.backgroundColor ='lightblue';
    //     }
    // }

    document.getElementById('x-mas').addEventListener('click',function(){
        get_arguments('bluebox1','bluebox2')
    })
    // document.getElementById('x-mas').addEventListener('click',function(){
    //     get_arguments('bluebox')
    // })

    document.querySelector('.slide-btn1').addEventListener('click', function(){
            document.querySelector('.slide').style.transform = 'translate(-0vw)';
        })
    document.querySelector('.slide-btn2').addEventListener('click', function(){
        document.querySelector('.slide').style.transform = 'translate(-100vw)';
    });
    document.querySelector('.slide-btn3').addEventListener('click', function(){
        document.querySelector('.slide').style.transform = 'translate(-200vw)';
    });
    ;
}
