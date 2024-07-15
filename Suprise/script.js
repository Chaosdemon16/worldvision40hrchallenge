let logo = document.getElementById("logo")

logo.width = document.body.clientWidth * 0.2


let logos = [
    "Logos/dvdlogo-red.svg",
    "Logos/dvdlogo-orange.svg",
    "Logos/dvdlogo-yellow.svg",
    "Logos/dvdlogo-cyan.svg",
    "Logos/dvdlogo-blue.svg",
    "Logos/dvdlogo-purple.svg",
    "Logos/dvdlogo-pink.svg",
]
let logoCoords = {
    x: Math.floor(Math.random() * (document.body.clientWidth - logo.width)),
    y: Math.floor(Math.random() * (document.body.clientHeight - logo.height))
}
logo.style.left = logoCoords.x + "px"
logo.style.top = logoCoords.y + "px"
let velX = 1
let velY = 1
let colour = 0
let onWall = false
function move(){
    logo.width = document.body.clientWidth * 0.2
    logo.style.left = logoCoords.x + "px"
    logo.style.top = logoCoords.y + "px"
    logo.src = logos[colour]

    
    if(logoCoords.x <= 0 ){
        velX = 1
        onWall = true
    }
    if(logoCoords.y <= 0){
        velY = 1
        onWall = true
    }
    if(logoCoords.x >= Math.floor(document.body.clientWidth - logo.width)){
        velX = -1
        onWall = true
    }
    if(logoCoords.y >= Math.floor(document.body.clientHeight - logo.height)){
        velY = -1
        onWall = true
    }
    if(onWall && colour < logos.length - 1){
        colour += 1
    }else if(onWall && colour >= logos.length - 1){
        colour = 0
    }
    onWall = false
    

    logoCoords.x += velX
    logoCoords.y += velY

    if((logoCoords.x == 0 && logoCoords.y == 0) || (logoCoords.x == document.body.clientWidth - logo.width && logoCoords.y == 0) || (logoCoords.x == document.body.clientWidth - logo.width && logoCoords.y == document.body.clientHeight - logo.height) || (logoCoords.x == 0 && logoCoords.y == document.body.clientHeight - logo.height)){
        corner()
    }

    requestAnimationFrame(move)
}

function corner(){
    alert('It hit the corner!!!!!! I hope you were watching!')
}

function hitCorner(corner){
    if(corner == 1){
        logoCoords.x = 2
        logoCoords.y = 2
        velX = -1
        velY = -1
    }else if(corner == 2){
        logoCoords.x = document.body.clientWidth - logo.width - 2
        logoCoords.y = 2
        velX = 1
        velY = -1
    }else if(corner == 3){
        logoCoords.x = document.body.clientWidth - logo.width - 2
        logoCoords.y = document.body.clientHeight - logo.height - 2
        velX = 1
        velY = 1
    }else if(corner == 4){
        logoCoords.x = 2
        logoCoords.y = document.body.clientHeight - logo.height - 2
        velX = -1
        velY = 1
    }
}

move()