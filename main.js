Canvas=document.getElementById('mycanvas')
ctx=Canvas.getcontext

car1_width=120;
car1_height=70;
car1_image="https://postimg.cc/9rqYz9HM";
car1_x=10;
car1_y=10;
window.addEventListener("keydown",mykeydown);
    function mykeydown(e){
        keyPressed=e.keyCode;
        console.log(keyPressed);
        if(keyPressed=='38')
        {
        up();
        console.log("up");
        }
        if(keyPressed=='40')
        {
        down();
        console.log("down");
        }
        if(keyPressed=='37')
        {
        left();
        console.log("left");
        }
        if(keyPressed=='39')
        {
        right();
        console.log("right");
        }
    }
    function up(){
        if(car1_y>=0)
        {
            car1_y=car1_y-10;
            console.log("when up arrow is pressed, x= "+ car1_x + "y=" + car1_y);
            car1();
            
        }
        }
        function down(){
            if(car1_y<=500)
            {
                car1_y=car1_y+10;
                console.log("when down arrow is pressed, x= "+ car1_x + "y=" + car1_y);
                car1();
                
            }
        }
        function left(){
            if(car1_x>=0)
            {
                car1_x=car1_x-10;
                console.log("when left arrow is pressed, x= "+ car1_x + "y=" + car1_y);
                car1();
                
            }
        }
        function right(){
            if(car1_x<=700)
            {
                car1_x=car1_x+10;
                console.log("when right arrow is pressed, x= "+ car1_x + "y=" + car1_y);
                car();
               
            }
        }
        