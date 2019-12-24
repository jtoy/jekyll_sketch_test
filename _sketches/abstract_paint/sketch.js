//Jason Toy http://jtoy.net
function setup(){
  y=0
  paints=[]
  colors = [color(255,138,0),color(136,193,0),color(255,0,60),color(250,190,40),color(0,193,118)]
}
function draw(){
  createCanvas(displayWidth,displayHeight)
  translate(width/2-w(.2),h(.4))
  fill(255,0,60)
  noStroke()
  rect(0,0,w(.08),h(.30)+y,60)
  rect(w(.15),0,w(.07),w(.35)+y,50)
  rect(w(.32),0,w(.05),w(.25)+y,20)
  fill(250,190,40)
  ellipse(0,0,w(.30),w(.30))
  fill(255,138,0)
  ellipse(w(.23),h(-.10),w(.40),w(.40))
  fill(0,193,118)

  ellipse(w(.17),h(.10),w(0.25),w(.25))

  fill(250,190,40)
  ellipse(-w(.1),h(.2),w(.10),w(.10))
  fill(136,193,0)
  ellipse(w(.50),h(.15),w(.10),w(.10))
  ellipse(w(.47),0,w(.05),w(.05))
  fill(136,193,0)
  for(i=0;i<paints.length;i+=5){
    fill(paints[i+2])
    ellipse(paints[i],paints[i+1],paints[i+4],paints[i+4])
    rect(paints[i],paints[i+1],paints[i+4]/3,h(.01)+paints[i+3],50)
    paints[i+3] = paints[i+3]+1
  }
  y+=1
}
function w(v=1){
  return width * v
}
function h(v=1){
  return height * v    
}
function mouseClicked(){
  paints.push(mouseX-(width/2-w(.2)))
  paints.push(mouseY-h(.4))
  paints.push(colors[Math.floor(Math.random()*colors.length)])
  paints.push(0)
  paints.push(random(20,w(0.25)))
}

