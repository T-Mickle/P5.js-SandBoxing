
let test2 = [], test
    
let r = 0
function setup() {
    createCanvas(400, 500)
    angleMode(DEGREES)


    test = new Eyeball(width / 4, 100, 100, 20, [50, 100, 255])
    
    for (let i = 0  ; i < 3 ; i ++) {
        test2.push (new Eyeball ( i*110 + 100, 100, 100, 20, [50, 100, 255]) )
        test2.push (new Eyeball ( i*110  + 100, 200, 100, 20, [50, 100, 255]) )
        test2.push (new Eyeball ( i*110  + 100, 300, 100, 20, [50, 100, 255]) )
        test2.push (new Eyeball ( i*110  + 100, 400, 100, 20, [50, 100, 255]) )
    }
   
  
 
}

//curve(x1, y1, x2, y2, x3, y3, x4, y4)
function draw() {

    background(0)
    push();
    // let test = new Eyeball(width / 4, 100, 100, 20, [50, 100, 255])
    // // console.log(test)
   
   
//  test.draw()   
    // test.followMouse();
    // test.drawBackOfEye()
    // test.drawWhiteOfEyes()
    // test.drawIris();
    // test.linesDivindingIris();
    // test.drawPupil();
    // test.drawUpperLid();
    // test.drawLowerLid();
    // test.drawEyeLashes();
   
    // translate(p5.Vector.fromAngle(millis() / 1000, 4 ))
    test2.forEach ( (x) => {
        
        
        
        
        push ()
        
        
       
        x.draw()
        
        
        
        pop()
    })
  
    // test.blink()
//   if ( second() % Math.floor (random(10,25) ) == 0 && blinking == 'nothing') {
//       test.upperLid.hold = false
//       test2.upperLid.hold = false
//   }


r ++
   

pop()
   
    // console.log(test)
    
    // test2.followMouse();
    // test2.drawBackOfEye()
    // test2.drawWhiteOfEyes()
    // test2.drawIris();
    // test2.linesDivindingIris();
    // test2.drawPupil();
    // test2.drawUpperLid();
    // test2.drawLowerLid();
    // test2.drawEyeLashes();
    // test2.blink()

    // translate(width / 2, height / 2)


    // // Backround eye 
    // fill(255, 111, 105)
    // ellipse(0, 0, 70, 20)

    // // white part of eyec
    // fill(255)
    // ellipse(0, 0, 60, 40)

    // // iris 
    // fill('blue')
    // ellipse(0, 0, 26)

    // // lines dividing iris
    // strokeWeight(.5)
    // for (let i = 0; i < 28; i++) {
    //     let dy = (26 / 2) * sin(i * 13)
    //     let dx = (26 / 2) * cos(i * 13)
    //     line(0, 0, dx, dy)
    // }

    // strokeWeight(1)
    // //black part of eye
    // fill(25)
    // // ellipse (map (mouseX, 0,width, -5,5),map (mouseY, 0,height, -5,5), 10)

    // ellipse(0, 0, 10)

    // fill(255, 173, 96)


    // // Upper Lid
    // beginShape()
    // //beginning and ending points
    // curveVertex(-40, 0)
    // curveVertex(-40, -0, )

    // //points traveled inbetween to create curve
    // curveVertex(-25, -20, )
    // curveVertex(0, -30)
    // curveVertex(30, -20, )


    // curveVertex(40, 0)

    // //controlss blink
    // curveVertex(0, -10)

    // //beginning and ending points
    // curveVertex(-40, 0)
    // curveVertex(-40, 0)

    // endShape()

    // /// Lower Lid
    // beginShape()
    // curveVertex(-40, 0)
    // curveVertex(-40, 0)

    // curveVertex(-25, 20, )


    // curveVertex(0, 30)
    // curveVertex(30, 20)


    // curveVertex(40, 0)
    // //controls blink
    // curveVertex(0, 10)

    // curveVertex(-40, 0)

    // curveVertex(-40, 0)

    // endShape()



    // var steps = 20;
    // for (var i = 0; i <= steps; i++) {
    //     var t = i / steps;

    //     var x = curvePoint(40, 0, -37, -40, t);
    //     var y = curvePoint(0, -10, 0, 0, t);


    //     push()
    //     translate(x, y)


    //     bezier(0, 0, 3, -2, 0, -4, 0, -1.5)
    //     pop()

    //     push()
    //     x = curvePoint(30, 40, 0, -40, t);
    //     y = curvePoint(-20, 0, -10, 0, t);
    //     translate(x, y)

    //     bezier(0, 0, 3, -2, 0, -4, 0, -1.5)
    //     pop()

    //     push()
    //     x = curvePoint(40, 0, -40, -40, t);
    //     y = curvePoint(-0, 10, -0, 0, t);
    //     translate(x, y)

    //     bezier(0, 0, -2, 0, 1, 1, 0, 2)
    //     pop()

    //     push()
    //     x = curvePoint(30, 40, 0, -40, t);
    //     y = curvePoint(20, 0, 10, 0, t);
    //     translate(x, y)


    //     bezier(0, 0, -2, 0, 1, 1, 0, 2)
    //     pop()


    // }


}

class Eyeball {
    constructor(x, y, w, h, eyeColor) {
        this.x = x,
            this.y = y,
            this.w = w,
            this.h = h,
            this.rW = this.w / 2;
        this.whiteOfEye = {
            x: x,
            y: y,
            w: w * (60 / 77),
            h: h *2
        }
        this.iris = {
            x: x,
            y: y,
            w: w * (13 / 35),
            color: eyeColor
        }
        this.pupil = {
            x: this.iris.x,
            y: this.iris.y,
            w: this.w * (1 / 7)
        }
        this.upperLid = {
            startX: this.x - this.rW,
            startY: this.y,
            secondX: this.x + ((this.rW) * (-25 / 35)),
            secondY: this.y - this.h,
            thirdX: this.x,
            thirdY: this.y + ((this.h) * (-30 / 20)),
            fourthX: this.x + (this.rW * (30 / 35)),
            fourthY: this.y - this.h,
            fifthX: this.x + this.rW,
            fifthY: this.y,
            blinkX: this.x,
            blinkY: this.y + (this.h * (-15 / 20)) ,
            hold: false

        }

        this.lowerLid = {
            startX: this.x - this.rW,
            startY: this.y,
            secondX: this.x + ((this.rW) * (-25 / 35)),
            secondY: this.y + this.h,
            thirdX: this.x,
            thirdY: this.y - ((this.h) * (-30 / 20)),
            fourthX: this.x + (this.rW * (30 / 35)),
            fourthY: this.y + this.h,
            fifthX: this.x + this.rW,
            fifthY: this.y,
            blinkX: this.x,
            blinkY: this.y - (this.h * (-10 / 20)) 

        }
        this.rate =  1,
        this.xoff = random (1),
        this.yoff = 0.02,
        this.xincrement = .02
    }
    drawBackOfEye() {
        fill(255, 111, 105)
        ellipse(this.x, this.y, this.w, this.h)
    }
    drawWhiteOfEyes() {
        fill(255)
        ellipse(this.whiteOfEye.x, this.whiteOfEye.y, this.whiteOfEye.w, this.whiteOfEye.h)
    }

    drawIris() {
        fill(this.iris.color[0], this.iris.color[1], this.iris.color[2])
        ellipse(this.iris.x, this.iris.y, this.iris.w)
    }

    drawPupil() {
        fill(25)
        ellipse(this.pupil.x, this.pupil.y, this.pupil.w)
    }

    linesDivindingIris() {
        push();
        stroke(0)
        strokeWeight(.5)

        for (let i = 0; i < 28; i++) {
            let dy = (this.iris.w / 2) * sin(i * 13)
            let dx = (this.iris.w / 2) * cos(i * 13)
 
            line(this.iris.x, this.iris.y, dx + this.iris.x, dy + this.iris.y)
        }
        pop()
    }

    drawUpperLid() {
        beginShape()
        push()
        fill(255, 173, 96)
        curveVertex(this.upperLid.startX, this.upperLid.startY)
        curveVertex(this.upperLid.startX, this.upperLid.startY)

        curveVertex(this.upperLid.secondX, this.upperLid.secondY)

        curveVertex(this.upperLid.thirdX, this.upperLid.thirdY)

        curveVertex(this.upperLid.fourthX, this.upperLid.fourthY)

        curveVertex(this.upperLid.fifthX, this.upperLid.fifthY)
        curveVertex(this.upperLid.fifthX, this.upperLid.fifthY)

        curveVertex(this.upperLid.blinkX, this.upperLid.blinkY)

        curveVertex(this.upperLid.startX, this.upperLid.startY)
        curveVertex(this.upperLid.startX, this.upperLid.startY)
        endShape()
        pop()

    }

    drawLowerLid() {

        beginShape()
        push()
        fill(255, 173, 96)

        curveVertex(this.lowerLid.startX, this.lowerLid.startY)
        curveVertex(this.lowerLid.startX, this.lowerLid.startY)

        curveVertex(this.lowerLid.secondX, this.lowerLid.secondY)

        curveVertex(this.lowerLid.thirdX, this.lowerLid.thirdY)

        curveVertex(this.lowerLid.fourthX, this.lowerLid.fourthY)

        curveVertex(this.lowerLid.fifthX, this.lowerLid.fifthY)
        curveVertex(this.lowerLid.fifthX, this.lowerLid.fifthY)

        curveVertex(this.lowerLid.blinkX, this.lowerLid.blinkY)

        curveVertex(this.lowerLid.startX, this.lowerLid.startY)
        curveVertex(this.lowerLid.startX, this.lowerLid.startY)
        endShape()
        pop()

    }

    drawEyeLashes(lashDensity=20) {
        var steps = lashDensity;
        var porportion = this.h/10
        
        for (var i = 0; i <= steps; i++) {
            var t = i / steps;

            var x = curvePoint(this.upperLid.fifthX, this.upperLid.blinkX, this.upperLid.startX, this.upperLid.startX, t);
            var y = curvePoint(this.upperLid.fifthY, this.upperLid.blinkY, this.upperLid.startY, this.upperLid.startY, t);

            noFill();
            push()
            translate(x, y)

            
            bezier(0, 0, porportion, -porportion, 0, -porportion*1.5, 0, -porportion*.9)
            pop()

            push()
            x = curvePoint(this.upperLid.fourthX, this.upperLid.fifthX, this.upperLid.blinkX, this.upperLid.startX, t);
            y = curvePoint(this.upperLid.fifthY, this.upperLid.fifthY, this.upperLid.blinkY, this.upperLid.startY, t);
            translate(x, y)

            bezier(0, 0, porportion, -porportion, 0, -porportion*1.5, 0, -porportion*.9)
            pop()

            push()
            x = curvePoint(this.lowerLid.fifthX, this.lowerLid.blinkX, this.lowerLid.startX, this.lowerLid.startX, t);
            y = curvePoint(this.lowerLid.fifthY, this.lowerLid.blinkY, this.lowerLid.startY, this.lowerLid.startY, t);
            translate(x, y)

            bezier(0, 0, porportion, porportion, 0, porportion*1.5, 0, porportion*.9)
            pop()

            push()
            x = curvePoint(this.lowerLid.fourthX, this.lowerLid.fifthX, this.lowerLid.blinkX, this.lowerLid.startX, t);
            y = curvePoint(this.lowerLid.fifthY, this.lowerLid.fifthY, this.lowerLid.blinkY, this.lowerLid.startY, t);
            translate(x, y)


            bezier(0, 0, porportion, porportion, 0, porportion*1.5, 0, porportion*.9)
            pop()


        }

        
    }

    followMouse() {
        

        var n = noise(this.xoff);
        var nY = noise(this.yoff)




        // Maps iris to x y positions with leeway 
        this.iris.x =  map(n, 0,1, this.x-(this.w/7),this.x+(this.w/4) );
        this.iris.y = map(nY, 0,1, this.y-(this.h/2),this.y+(this.h/2) );

        // Map pupil x, y to iris x y with leeway 
        this.pupil.x = map(this.iris.x, 0,this.iris.x, this.iris.x-(this.iris.x/29) ,this.iris.x + (this.iris.x/1600));

        this.pupil.y = map(nY, 0,1, this.iris.y-1,this.iris.y +1 );

        this.xoff += this.xincrement;
        this.yoff += this.xincrement;


        // ** this resizes the Pupil to stop clipping outside the eye lids **


        // 1. if the the lower part of the iris circle is greater than the position of the white of the eye's lower position 
        //2. and if  the bottom position of the iris * .99 is greater than the lower portion of the eye 
        if (this.iris.y + this.iris.w/2 > this.whiteOfEye.y+this.whiteOfEye.h/2 
             && (this.iris.w*.99)/2 + this.iris.y >  this.whiteOfEye.y+this.whiteOfEye.h/2 ) {
            this.iris.w *= .99
           
         } 
        // 1 . if the iris width is less than the starting width
        //2 and if the lower portion of the iris is less than the lower portion of the white of the eye
        // 3. and the y of the iris is greater than the y primary y
         else if ( 
             this.iris.w < this.w * (13 / 35) && this.iris.y + this.iris.w/2 < this.whiteOfEye.y + this.whiteOfEye.h/2 
         && this.iris.y > this.y) {
            this.iris.w/= .99
            
        }
        
        if (this.iris.y - this.iris.w/2 < this.whiteOfEye.y- this.whiteOfEye.h/2
              && this.iris.y < this.y*1.1 ) {
            this.iris.w *= .99
        } 

        
        else if ( this.iris.w < this.w * (13 / 35) && this.iris.y - this.iris.w/2 > this.y - this.h 
        && this.iris.y < this.y) {
            this.iris.w/= .99
        }

        
    }

    blink() {
        // if (mouseIsPressed && this.upperLid.blinkY < this.lowerLid.blinkY ) {
        //     this.upperLid.blinkY++
        //    if ( this.lowerLid.blinkY > this.y) {
        //        this.lowerLid.blinkY-=this.lowerLid.blinkY *.005
        //    }
        // } else if ( this.upperLid.blinkY > this.y - (this.h* (10 / 20)) ){
        //     this.upperLid.blinkY--
        //     if ( this.lowerLid.blinkY < this.y - (this.h * (-10 / 20)) 
        //     ) {
        //         this.lowerLid.blinkY+=this.lowerLid.blinkY *.005
        //     }
        // }
    
        if ( second() % Math.floor (random(200) ) == 0 ) {
            this.upperLid.hold = false
            
        }
        if (this.upperLid.hold == true) {
            return 
        }
        
        this.upperLid.blinkY +=this.rate *.8
        this.lowerLid.blinkY -=this.rate *.1
        
        if ( this.upperLid.blinkY > this.lowerLid.blinkY ) {
            
            this.rate = -this.rate
            
        //    if ( this.lowerLid.blinkY > this.y) {
        //        this.lowerLid.blinkY-=rate
        //    }
         } 
         else if ( this.upperLid.blinkY < this.y + (this.h * (-15 / 20)) ) {
            
             this.rate = 2
             this.upperLid.hold = true
         }
         
        
        // else {
        //     // console.log('test')
        //     // rate = -1 
        // }
        // else if ( this.upperLid.blinkY > this.y - (this.h* (10 / 20)) ){
        //     this.upperLid.blinkY--
        //     if ( this.lowerLid.blinkY < this.y - (this.h * (-10 / 20)) 
        //     ) {
        //         this.lowerLid.blinkY+=this.lowerLid.blinkY *.005
        //     }
        // }
        
    }

    draw() {

        
        this.followMouse();
        this.drawBackOfEye()
        this.drawWhiteOfEyes()
        this.drawIris();
        this.linesDivindingIris();
        this.drawPupil();
        this.drawUpperLid();
        this.drawLowerLid();
        this.drawEyeLashes();
    
      
        this.blink()
    }

}