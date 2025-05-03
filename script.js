
const canvas = document.getElementById("gridCanvas");
const ctx = canvas.getContext("2d");
// const coordinates = document.getElementById("coordinates");
const timerProgress = document.querySelector(".timer-progress");
const statusDiv = document.querySelector(".status");
const wrapper1 = document.querySelector('.one');
const wrapper2 = document.querySelector('.two');
const wifi_parent = document.querySelector(".wifi_parent");
const battery_number = document.querySelector(".battery_number p");
const battery_level = document.querySelector("#indicator");
const motor_left = document.querySelector(".control_m .leftt");
const motor_right = document.querySelector(".control_m .rightt");
const bar_items = document.querySelectorAll(".bar");
const vacuum_left = document.querySelector(".control_v .leftt");
const vacuum_right = document.querySelector(".control_v .rightt");
const temperature_height = document.querySelector("#temperature");
const tank_button = document.querySelector(".tank_button")
const tank_label = document.querySelector("#tank")
const tank_height = document.querySelector("#X")
const  automated = document.querySelector('#automatedMode')
const  special = document.querySelector('#specialMode')
const  manual = document.querySelector('#manualMode')
const  ultrasonic = document.querySelector('#ultrasonicMode')




// console.log(temperature_height.dataset.value = "10c");



const barCount = 50;
const percent1 = 50 * 90/100;
const percent2 = 50 * 60/100;
const percent3 = 50 * 30/100;

canvas.width = 750;
canvas.height = 750;

let gridWidth = 10;
let gridHeight = 10;
let cellWidth = canvas.width / gridWidth;
let cellHeight = canvas.height / gridHeight;

let pathNodes = [];
let lastNode = null;
let isDrawing = false;
let timerHandle = null;
let lastValidPath = [];

let mot_value = 0;
let vac_value = 0;
let mot_int
let vac_int

let current_mode = 'none'




function speed_reset_online(){
    wrapper1.innerHTML = ``;
    wrapper2.innerHTML = ``;
    motor_right.disabled = false
    motor_left.disabled = false
    vacuum_right.disabled = false
    vacuum_left.disabled = false

    wrapper2.style.setProperty('--animation','barCreationAnimation 100ms ease forwards')
    wrapper2.style.setProperty('--opay','0')
    speedd(50,50)
  
}


function speed_reset_offline(){
  wrapper1.innerHTML = ``;
  wrapper2.innerHTML = ``;
  wrapper2.style.setProperty('--animation','barCreationAnimation 100ms ease forwards')
  wrapper2.style.setProperty('--opay','0')
  wrapper1.style.setProperty('--animation','barCreationAnimation 100ms ease forwards')
  wrapper1.style.setProperty('--opay','0')
  motor_right.disabled = true
  motor_left.disabled = true
  vacuum_right.disabled = true
  vacuum_left.disabled = true
  speedd(0,0)


}








if (navigator.onLine) {
    wifi_parent.classList.add('glowing');
    battery_func(50)
    radar(0)
    speed_reset_online()
    temp_monitor(27)

    




  }
  else {
    wifi_parent.classList.remove('glowing');
    battery_func(0)
    radar(40)
    speed_reset_offline()
    temp_monitor(0)

    







  
  }
  
  document.addEventListener("visibilitychange", () => {
    rotation = 0;
    if (document.visibilityState === "visible") {
      if (navigator.onLine) {
        wifi_parent.classList.add('glowing');
        battery_func(50)
        radar(0)
        speed_reset_online()
        temp_monitor(27)






        
  
      }
      else {
        wifi_parent.classList.remove('glowing');
        battery_func(0)
        radar(40)
        speed_reset_offline()
        temp_monitor(0)






      }
    } 
  
  });
  
  window.addEventListener("offline",()=>{
    wifi_parent.classList.remove('glowing');
    battery_func(0)
    radar(40)
    speed_reset_offline()
    temp_monitor(0)


    
    



  })
  
  window.addEventListener("online",()=>{
    wifi_parent.classList.add('glowing');
    battery_func(50)
    radar(0)
    speed_reset_online()
    temp_monitor(27)


    





    
  
  })
//   battery_func(100)

  














//battery function

function battery_func(number) {
battery_number.innerText = ''
battery_number.innerText = `${Math.round(number)}%`
battery_level.style.width = `${Math.round(number)*0.895}%`


//battery_color

if (Math.round(number)< 33){
    battery_level.style.boxShadow = `#d30000 0px 1px 16px 0px inset, rgba(228, 229, 229, 0.678) 0px -3px 3px 0px inset`

}
else if(Math.round(number)< 67){
    battery_level.style.boxShadow = `#d3c100 0px 1px 16px 0px inset, rgba(228, 229, 229, 0.678) 0px -3px 3px 0px inset`

}
else{
    battery_level.style.boxShadow = `#004dd3 0px 1px 16px 0px inset, rgba(228, 229, 229, 0.678) 0px -3px 3px 0px inset`


}
   
}



// radar

function radar(new_radar_value) {
    max_radar = 40;
    min_radar = 10;
    let corrected = Math.round(20 - (new_radar_value/2))
  
    for (let barr = 0; barr < (bar_items.length); barr++) {
      // console.log(bar_items.length);
      
      // console.log(barr);
        console.log('ggg');
        


      if((barr)<20){

        console.log(corrected + " + " + (barr+1));
      
      
        if (barr+1 <= corrected ) {
          bar_items[barr].classList.add('active')
          bar_items[(bar_items.length-1)-barr].classList.add('active')
  
          console.log("+");
          
        }
    
        else{
          bar_items[barr].classList.remove('active')
          bar_items[(bar_items.length-1)-barr].classList.remove('active')
  
          console.log("-");
    
        }
      }
      

      
    }
      
    };
  





// speed section
    function update_vac_meter() {
        wrapper2.style.setProperty('--animation','none')
        wrapper2.style.setProperty('--opay','1')

        wrapper2.innerHTML = ``;

        for (let index = 0; index < barCount; index++) {
            console.log(index);
            console.log((50 * vac_value/100));
            
            
            const className = index < (50 * vac_value/100) ? 'selected1' : '';
            wrapper2.innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
        }

        wrapper2.innerHTML += `<p class="selected percent-text text1 Mot">${vac_value}%</p>`

        
    }


    function update_mot_meter() {
      wrapper1.style.setProperty('--animation','none')
      wrapper1.style.setProperty('--opay','1')

      wrapper1.innerHTML = ``;

      for (let index = 0; index < barCount; index++) {
          // console.log(index);
          // console.log((50 * mot_value/100));
          
          
          const className = index < (50 * mot_value/100) ? 'selected1' : '';
          wrapper1.innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
      }

      wrapper1.innerHTML += `<p class="selected percent-text text1 Mot">${mot_value}%</p>`

      
  }

function speedd(mot_num,vac_num) {
    vac_value = vac_num
    mot_value = mot_num
    console.log(vac_value);
    

    for (let index = 0; index < barCount; index++) {
        const className = index < (50 * mot_value/100) ? 'selected1' : '';
        wrapper1.innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
    }
    wrapper1.innerHTML += `<p class="selected percent-text text1 Mot">${mot_value}%</p>`
    
    
    
    for (let index = 0; index < barCount; index++) {
        const className = index < ( 50 * vac_value/100) ? 'selected1' : '';
        wrapper2.innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
    }
    
    wrapper2.innerHTML += `<p class="selected percent-text text1 vac">${vac_value}%</p>`
    
}



vacuum_left.addEventListener("mousedown", () => { 
        
  const startTime = Date.now();
  let speed

  vac_int = setInterval(() => {
          const duration = Date.now() - startTime;
          console.log(duration);
          console.log(vac_value);
          
          

          if (duration < 1000) {
              speed = 100
              
          }
          else if (duration < 2000) {
              speed = 80
              
          }

          else if (duration < 3000) {
              speed = 60
              
          }
  
          vac_value = vac_value + 1

          if (vac_value>100) {
              vac_value=100      
          }

          update_vac_meter()

    
  
}
,speed)   

vacuum_left.addEventListener("mouseup",() => {
  clearInterval(vac_int) 
  
},
)

}





);
vacuum_right.addEventListener("mousedown", () => {
  const startTime = Date.now();
  let speed

  vac_int = setInterval(() => {

      const duration = Date.now() - startTime;

      if (duration < 1000) {
          speed = 100
          
      }
      else if (duration < 2000) {
          speed = 80
          
      }

      else if (duration < 3000) {
          speed = 60
          
      }   


          vac_value = vac_value - 1

      if (vac_value<0) {
          vac_value=0      
      }



          update_vac_meter()
            

} ,100)  


vacuum_right.addEventListener(
  "mouseup",
  () => {
    clearInterval(vac_int) 
  },
)
  
}



);
motor_left.addEventListener("mousedown", () => { 
        let speed
  const startTime = Date.now();

  mot_int = setInterval(() => {
          const duration = Date.now() - startTime;
          console.log(duration);
          
          
          

          if (duration < 1000) {
              speed = 100
              
          }
          else if (duration < 2000) {
              speed = 80
              
          }

          else if (duration < 3000) {
              speed = 60
              
          }
  
          mot_value = mot_value + 1

          if (mot_value>100) {
              mot_value=100      
          }

          update_mot_meter()

    
  
}
,speed)   

motor_left.addEventListener("mouseup",() => {
  clearInterval(mot_int) 
  
},
)

}





);
motor_right.addEventListener("mousedown", () => {
  let speed
  const startTime = Date.now();

  mot_int = setInterval(() => {

      const duration = Date.now() - startTime;

      if (duration < 1000) {
          speed = 100
          
      }
      else if (duration < 2000) {
          speed = 80
          
      }

      else if (duration < 3000) {
          speed = 60
          
      }   


          mot_value = mot_value - 1

      if (mot_value<0) {
          mot_value=0      
      }



          update_mot_meter()
            

} ,100)  


motor_right.addEventListener(
  "mouseup",
  () => {
    clearInterval(mot_int) 
  },
)
  
}



);




//monitor section

//temp
function temp_monitor(temp_val) {
  let min_temp = 17;
  let max_temp = 30;

  corrected_temp = 100*((temp_val-min_temp)/(max_temp-min_temp))

  if (corrected_temp > 100) {
    temperature_height.style.height = `100%`
  }
  else if (corrected_temp<0) {
    temperature_height.style.height = `0%` 
  }
  else{
    temperature_height.style.height = `${Math.round(corrected_temp)}%`
  }


  temperature_height.dataset.value = `${Math.round(temp_val)}°C`

}

//tank

function tank_monitor(tank_val) {
  let max_tank = 17;
  corrected_tank = -100*((tank_val-max_tank)/(max_tank))

  


  tank_label.dataset.value = `${Math.round(corrected)}°C`
  tank_height.style.height = `${Math.round(corrected)}%`

}

function tank_reciever(){
  let tank_pass
  //get value of tank pass
  if (tank_pass === false) {
    //set tank value to true 
    tank_monitor(tank_val)
    
  }
}

function tank_transmiter() {
  let tank_pass
  console.log('hii');
  
  //get value of tank pass
  if (tank_pass === false) {
    //set tank value to true 
    console.log(tank_pass );
  }
}

tank_button.addEventListener('click', ()=>{
  tank_transmiter()
})





automated.addEventListener('click', ()=>{
  if (navigator.onLine) {
    manual.classList.remove('active')
    special.classList.remove('active')
    ultrasonic.classList.remove('active')
    automated.classList.toggle('active')

    if (automated.classList.contains('active')) {
      current_mode = 'automated'  
    }

    else{
      current_mode = 'none'
    }
  }
  else {
    current_mode = 'none'  
  }

})


manual.addEventListener('click', ()=>{
  if (navigator.onLine) {
    automated.classList.remove('active')
    special.classList.remove('active')
    ultrasonic.classList.remove('active')
    manual.classList.toggle('active')


    if (manual.classList.contains('active')) {
      current_mode = 'manual'  
    }

    else{
      current_mode = 'none'
    }
  }
  else {
    current_mode = 'none'  
  }
    
  
  
} )

special.addEventListener('click', ()=>{
  if (navigator.onLine) {
    automated.classList.remove('active')
    manual.classList.remove('active')
    ultrasonic.classList.remove('active')
    special.classList.toggle('active')


    if (special.classList.contains('active')) {
      current_mode = 'special'  
    }

    else{
      current_mode = 'none'
    }

  }
  else {
    
  }
  
  

  
} )

ultrasonic.addEventListener('click', ()=>{
  if (navigator.onLine) {
    automated.classList.remove('active')
    manual.classList.remove('active')
    special.classList.remove('active')
    ultrasonic.classList.toggle('active')

    if (ultrasonic.classList.contains('active')) {
      current_mode = 'ultrasonic'  
    }

    else{
      current_mode = 'none'
    }

  }
  else {
    
  }

  
} )





















function updateGrid() {
  const newWidth = parseInt(document.getElementById("gridWidth").value);
  const newHeight = parseInt(document.getElementById("gridHeight").value);

  if (newWidth > 0 && newHeight > 0) {
    gridWidth = newWidth;
    gridHeight = newHeight;
    cellWidth = canvas.width / gridWidth;
    cellHeight = canvas.height / gridHeight;
    clearPathAndTimer();
  }
}

function startClearTimer() {
  if (timerHandle !== null) {
    window.clearTimeout(timerHandle);
    timerHandle = null;
  }

  if (pathNodes.length >= 2) {
    lastValidPath = [...pathNodes];
    getPathCoordinates();
  }

  timerProgress.style.transition = "none";
  timerProgress.style.transform = "scaleX(1)";

  requestAnimationFrame(() => {
    timerProgress.style.transition = "transform 1.5s linear";
    timerProgress.style.transform = "scaleX(0)";
  });

  timerHandle = window.setTimeout(() => {
    clearPathAndTimer();
  }, 1500);
}

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#4a90e2";
  ctx.lineWidth = 1;

  for (let x = 0; x <= canvas.width; x += cellWidth) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  for (let y = 0; y <= canvas.height; y += cellHeight) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  if (pathNodes.length > 1) {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(74, 144, 226, 0.5)";
    ctx.lineWidth = 3;
    ctx.moveTo(
      pathNodes[0].gridX * cellWidth + cellWidth / 2,
      pathNodes[0].gridY * cellHeight + cellHeight / 2
    );

    for (let i = 1; i < pathNodes.length; i++) {
      ctx.lineTo(
        pathNodes[i].gridX * cellWidth + cellWidth / 2,
        pathNodes[i].gridY * cellHeight + cellHeight / 2
      );
    }
    ctx.stroke();
  }

  pathNodes.forEach((node, index) => {
    ctx.beginPath();
    ctx.fillStyle =
      index === 0
        ? "#00ff00"
        : index === pathNodes.length - 1
        ? "#ff0000"
        : "#4a90e2";
    ctx.arc(
      node.gridX * cellWidth + cellWidth / 2,
      node.gridY * cellHeight + cellHeight / 2,
      Math.min(cellWidth, cellHeight) * 0.3,
      0,
      Math.PI * 2
    );
    ctx.fill();
  });
}

function clearPathAndTimer() {
  if (timerHandle !== null) {
    window.clearTimeout(timerHandle);
    timerHandle = null;
  }
  pathNodes = [];
  lastNode = null;
  drawGrid();
  timerProgress.style.transition = "none";
  timerProgress.style.transform = "scaleX(1)";
  statusDiv.textContent = "";
}

function getGridPosition(x, y) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const canvasX = (x - rect.left) * scaleX;
  const canvasY = (y - rect.top) * scaleY;
  return {
    gridX: Math.floor(canvasX / cellWidth),
    gridY: Math.floor(canvasY / cellHeight),
  };
}

function isInPath(gridX, gridY) {
  return pathNodes.some(
    (node) => node.gridX === gridX && node.gridY === gridY
  );
}

function isValidMove(current, next) {
  if (!current) return true;
  const dx = Math.abs(current.gridX - next.gridX);
  const dy = Math.abs(current.gridY - next.gridY);
  return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
}

function handleStart(e) {
  e.preventDefault();
  isDrawing = true;
  clearPathAndTimer();

  const pos = getGridPosition(
    e.touches ? e.touches[0].clientX : e.clientX,
    e.touches ? e.touches[0].clientY : e.clientY
  );

  if (
    pos.gridX >= 0 &&
    pos.gridX < gridWidth &&
    pos.gridY >= 0 &&
    pos.gridY < gridHeight
  ) {
    pathNodes = [pos];
    lastNode = pos;
    drawGrid();
    // statusDiv.textContent = "Drawing path...";
  }
}

function handleMove(e) {
  if (!isDrawing) return;
  e.preventDefault();

  const pos = getGridPosition(
    e.touches ? e.touches[0].clientX : e.clientX,
    e.touches ? e.touches[0].clientY : e.clientY
  );

  if (
    pos.gridX >= 0 &&
    pos.gridX < gridWidth &&
    pos.gridY >= 0 &&
    pos.gridY < gridHeight
  ) {
    if (!isInPath(pos.gridX, pos.gridY) && isValidMove(lastNode, pos)) {
      pathNodes.push(pos);
      lastNode = pos;
      drawGrid();
    }
  }
}

function handleEnd() {
  if (isDrawing) {
    isDrawing = false;
    if (pathNodes.length >= 2) {
    //   statusDiv.textContent = "Path will clear in 1.5 seconds...";
      startClearTimer();
    } else {
    //   statusDiv.textContent = "Path too short - draw at least 2 points";
      clearPathAndTimer();
    }
  }
}

function getPathCoordinates() {
  const nodes = pathNodes.length >= 2 ? pathNodes : lastValidPath;

  if (nodes.length < 2) {
    coordinates.textContent = "Draw a path with at least two points!";
    return;
  }

  let pathDetails = ["Path Instructions:"];
  let currentDirection = null;
  let currentCount = 0;
  let compressedMoves = [];

  // Calculate moves and compress consecutive moves in the same direction
  for (let i = 1; i < nodes.length; i++) {
    const prev = nodes[i - 1];
    const curr = nodes[i];
    const dx = curr.gridX - prev.gridX;
    const dy = curr.gridY - prev.gridY;

    let direction;
    if (dx === 1) direction = "RIGHT";
    if (dx === -1) direction = "LEFT";
    if (dy === 1) direction = "DOWN";
    if (dy === -1) direction = "UP";

    if (direction === currentDirection) {
      currentCount++;
    } else {
      if (currentDirection) {
        compressedMoves.push(
          `${currentDirection}: ${currentCount} ${
            currentCount === 1 ? "unit" : "units"
          }`
        );
      }
      currentDirection = direction;
      currentCount = 1;
    }
  }
  // Add the last move
  if (currentDirection) {
    compressedMoves.push(
      `${currentDirection}: ${currentCount} ${
        currentCount === 1 ? "unit" : "units"
      }`
    );
  }

  pathDetails.push(compressedMoves.join(", "));

  // Calculate total distance
  const totalDistance = nodes.length - 1;
  pathDetails.push(`\nTotal Distance: ${totalDistance} units`);

  // Add grid coordinates
//   pathDetails.push("\nGrid Coordinates:");
//   nodes.forEach((node, index) => {
//     pathDetails.push(
//       `Point ${index + 1}: (${node.gridX}, ${node.gridY})`
//     );
//   });

//   coordinates.textContent = pathDetails.join("\n");
}

canvas.addEventListener("mousedown", handleStart);
canvas.addEventListener("mousemove", handleMove);
canvas.addEventListener("mouseup", handleEnd);
canvas.addEventListener("mouseleave", handleEnd);

canvas.addEventListener("touchstart", handleStart);
canvas.addEventListener("touchmove", handleMove);
canvas.addEventListener("touchend", handleEnd);
canvas.addEventListener("touchcancel", handleEnd);

drawGrid();


























































// // Import Firebase SDK
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set, onValue, update } from "firebase/database";

// // Firebase Configuration
// const firebaseConfig = {
//     // Add your Firebase config here
// };
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// // DOM Elements
// const wifiIndicator = document.querySelector('.wifi-indicator');
// const batteryIndicator = document.querySelector('.battery-indicator');
// const gridCanvas = document.getElementById('pathGrid');
// const ctx = gridCanvas.getContext('2d');
// const automatedModeBtn = document.getElementById('automatedMode');
// const specialModeBtn = document.getElementById('specialMode');
// const manualModeBtn = document.getElementById('manualMode');
// const ultrasonicModeBtn = document.getElementById('ultrasonicMode');
// const motorSpeedInput = document.getElementById('motorSpeed');
// const vacuumSpeedInput = document.getElementById('vacuumSpeed');
// const temperatureDisplay = document.getElementById('temperature');
// const tankStatusDisplay = document.getElementById('tankStatus');
// const controlButtons = document.querySelectorAll('.control-buttons button');
// const gridSection = document.querySelector('.grid-section');

// // Grid Variables
// let drawing = false;
// let pathCoordinates = [];
// let gridSize = 20; // Number of squares in the grid
// let squareSize = 25; // Size of each square in pixels

// // Modes
// let isConnected = false;
// let isManualMode = false;
// let isSpecialMode = false;

// // WiFi Status Listener
// function checkWiFiStatus() {
//     onValue(ref(db, "wifi_status"), (snapshot) => {
//         isConnected = snapshot.val();
//         wifiIndicator.textContent = isConnected ? "Online" : "Offline";
//         wifiIndicator.style.backgroundColor = isConnected ? "green" : "red";
//     });
// }

// // Battery Level Listener
// function monitorBatteryLevel() {
//     onValue(ref(db, "battery_level"), (snapshot) => {
//         const batteryLevel = snapshot.val();
//         batteryIndicator.textContent = `Battery: ${batteryLevel}%`;
//     });
// }

// // Temperature and Tank Status Listener
// function monitorSensors() {
//     onValue(ref(db, "sensors/temperature"), (snapshot) => {
//         temperatureDisplay.textContent = `${snapshot.val()} °C`;
//     });

//     onValue(ref(db, "sensors/tank_status"), (snapshot) => {
//         tankStatusDisplay.textContent = snapshot.val() === "full" ? "Full" : "Empty";
//     });
// }

// // Draw Grid
// function drawGrid() {
//     gridCanvas.width = gridSize * squareSize;
//     gridCanvas.height = gridSize * squareSize;
//     ctx.clearRect(0, 0, gridCanvas.width, gridCanvas.height);

//     for (let i = 0; i <= gridSize; i++) {
//         // Draw horizontal lines
//         ctx.beginPath();
//         ctx.moveTo(0, i * squareSize);
//         ctx.lineTo(gridCanvas.width, i * squareSize);
//         ctx.strokeStyle = "#777";
//         ctx.stroke();

//         // Draw vertical lines
//         ctx.beginPath();
//         ctx.moveTo(i * squareSize, 0);
//         ctx.lineTo(i * squareSize, gridCanvas.height);
//         ctx.strokeStyle = "#777";
//         ctx.stroke();
//     }
// }

// // Handle Path Drawing
// gridCanvas.addEventListener('mousedown', (e) => {
//     if (!isSpecialMode || !isConnected) return;
//     drawing = true;
//     pathCoordinates = [];
// });

// gridCanvas.addEventListener('mousemove', (e) => {
//     if (!drawing) return;
//     const x = Math.floor(e.offsetX / squareSize);
//     const y = Math.floor(e.offsetY / squareSize);
//     const coord = { x, y };

//     // Avoid duplicate points
//     if (!pathCoordinates.some((p) => p.x === x && p.y === y)) {
//         pathCoordinates.push(coord);
//         ctx.fillStyle = "#00ff00";
//         ctx.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
//     }
// });

// gridCanvas.addEventListener('mouseup', () => {
//     if (!isSpecialMode || !isConnected) return;
//     drawing = false;

//     // Send path data to Firebase
//     set(ref(db, "robot/path"), pathCoordinates)
//         .then(() => console.log("Path sent to Firebase"))
//         .catch((error) => console.error("Error sending path: ", error));
// });

// // Mode Buttons
// automatedModeBtn.addEventListener('click', () => {
//     if (!isConnected) return animateIndicator();
//     set(ref(db, "robot/mode"), "automated");
//     toggleModes("automated");
// });

// manualModeBtn.addEventListener('click', () => {
//     if (!isConnected) return animateIndicator();
//     set(ref(db, "robot/mode"), "manual");
//     toggleModes("manual");
// });

// specialModeBtn.addEventListener('click', () => {
//     if (!isConnected) return animateIndicator();
//     set(ref(db, "robot/mode"), "special");
//     toggleModes("special");
//     gridSection.classList.toggle('hidden');
// });

// ultrasonicModeBtn.addEventListener('click', () => {
//     if (!isConnected || !isManualMode) return animateIndicator();
//     set(ref(db, "robot/mode"), "ultrasonic");
//     console.log("Ultrasonic mode activated");
// });

// // Speed Controls
// motorSpeedInput.addEventListener('input', () => {
//     if (!isConnected) return animateIndicator();
//     set(ref(db, "robot/motor_speed"), motorSpeedInput.value);
// });

// vacuumSpeedInput.addEventListener('input', () => {
//     if (!isConnected) return animateIndicator();
//     set(ref(db, "robot/vacuum_speed"), vacuumSpeedInput.value);
// });

// // Directional Controls
// controlButtons.forEach((button) => {
//     button.addEventListener('mousedown', () => {
//         if (!isConnected || !isManualMode) return animateIndicator();
//         const direction = button.id;
//         set(ref(db, "robot/direction"), direction);
//     });
// });

// // Animate Indicator When Offline
// function animateIndicator() {
//     wifiIndicator.classList.add("shake");
//     setTimeout(() => wifiIndicator.classList.remove("shake"), 500);
// }

// // Toggle Modes
// function toggleModes(mode) {
//     isManualMode = mode === "manual";
//     isSpecialMode = mode === "special";
//     ultrasonicModeBtn.disabled = !isManualMode;
// }

// // Initialize
// function init() {
//     drawGrid();
//     checkWiFiStatus();
//     monitorBatteryLevel();
//     monitorSensors();
// }

// init();