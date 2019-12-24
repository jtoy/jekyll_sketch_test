//by Jason Toy http://jtoy.net
function setup(){
  createCanvas(displayWidth,displayHeight)
  t=0
  noStroke()
}
function draw(){
  translate(width/2,height/2)
  background(0,5)
  cc=0
  for(x=1;x<width/2;x+=10){
    for(y=1;y<height/2;y+=10){
      rotate(radians(cc))
      xx = noise(t)*x
      yy = noise(t+1)*y
      r = 3+(noise(t+3)*10)
      fill(xx,yy,xx+yy)          
      ellipse(xx,yy,r,r)
    }
    cc+=1
  }
  t+=0.01
}

