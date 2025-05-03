
// const canvas = document.getElementById("gridCanvas");
// const ctx = canvas.getContext("2d");
// // const coordinates = document.getElementById("coordinates");
// const timerProgress = document.querySelector(".timer-progress");
// const statusDiv = document.querySelector(".status");
// const wrapper1 = document.querySelector('.one');
// const wrapper2 = document.querySelector('.two');
// const wifi_parent = document.querySelector(".wifi_parent");
// const battery_number = document.querySelector(".battery_number p");
// const battery_level = document.querySelector("#indicator");
// const motor_left = document.querySelector(".control_m .leftt");
// const motor_right = document.querySelector(".control_m .rightt");
// const bar_items = document.querySelectorAll(".bar");
// const vacuum_left = document.querySelector(".control_v .leftt");
// const vacuum_right = document.querySelector(".control_v .rightt");
// const temperature_height = document.querySelector("#temperature");
// const tank_button = document.querySelector(".tank_button")
// const tank_label = document.querySelector("#tank")
// const tank_height = document.querySelector("#X")
// const  automated = document.querySelector('#automatedMode')
// const  special = document.querySelector('#specialMode')
// const  manual = document.querySelector('#manualMode')
// const  ultrasonic = document.querySelector('#ultrasonicMode')




// // console.log(temperature_height.dataset.value = "10c");



// const barCount = 50;
// const percent1 = 50 * 90/100;
// const percent2 = 50 * 60/100;
// const percent3 = 50 * 30/100;

// canvas.width = 750;
// canvas.height = 750;

// let gridWidth = 10;
// let gridHeight = 10;
// let cellWidth = canvas.width / gridWidth;
// let cellHeight = canvas.height / gridHeight;

// let pathNodes = [];
// let lastNode = null;
// let isDrawing = false;
// let timerHandle = null;
// let lastValidPath = [];

// let mot_value = 0;
// let vac_value = 0;
// let mot_int
// let vac_int

// let current_mode = 'none'




// function speed_reset_online(){
//     wrapper1.innerHTML = ``;
//     wrapper2.innerHTML = ``;
//     motor_right.disabled = false
//     motor_left.disabled = false
//     vacuum_right.disabled = false
//     vacuum_left.disabled = false

//     wrapper2.style.setProperty('--animation','barCreationAnimation 100ms ease forwards')
//     wrapper2.style.setProperty('--opay','0')
//     speedd(50,50)
  
// }


// function speed_reset_offline(){
//   wrapper1.innerHTML = ``;
//   wrapper2.innerHTML = ``;
//   wrapper2.style.setProperty('--animation','barCreationAnimation 100ms ease forwards')
//   wrapper2.style.setProperty('--opay','0')
//   wrapper1.style.setProperty('--animation','barCreationAnimation 100ms ease forwards')
//   wrapper1.style.setProperty('--opay','0')
//   motor_right.disabled = true
//   motor_left.disabled = true
//   vacuum_right.disabled = true
//   vacuum_left.disabled = true
//   speedd(0,0)


// }








// if (navigator.onLine) {
//     wifi_parent.classList.add('glowing');
//     battery_func(50)
//     radar(0)
//     speed_reset_online()
//     temp_monitor(27)

    




//   }
//   else {
//     wifi_parent.classList.remove('glowing');
//     battery_func(0)
//     radar(40)
//     speed_reset_offline()
//     temp_monitor(0)

    







  
//   }
  
//   document.addEventListener("visibilitychange", () => {
//     rotation = 0;
//     if (document.visibilityState === "visible") {
//       if (navigator.onLine) {
//         wifi_parent.classList.add('glowing');
//         battery_func(50)
//         radar(0)
//         speed_reset_online()
//         temp_monitor(27)






        
  
//       }
//       else {
//         wifi_parent.classList.remove('glowing');
//         battery_func(0)
//         radar(40)
//         speed_reset_offline()
//         temp_monitor(0)






//       }
//     } 
  
//   });
  
//   window.addEventListener("offline",()=>{
//     wifi_parent.classList.remove('glowing');
//     battery_func(0)
//     radar(40)
//     speed_reset_offline()
//     temp_monitor(0)


    
    



//   })
  
//   window.addEventListener("online",()=>{
//     wifi_parent.classList.add('glowing');
//     battery_func(50)
//     radar(0)
//     speed_reset_online()
//     temp_monitor(27)


    





    
  
//   })
// //   battery_func(100)

  














// //battery function

// function battery_func(number) {
// battery_number.innerText = ''
// battery_number.innerText = `${Math.round(number)}%`
// battery_level.style.width = `${Math.round(number)*0.895}%`


// //battery_color

// if (Math.round(number)< 33){
//     battery_level.style.boxShadow = `#d30000 0px 1px 16px 0px inset, rgba(228, 229, 229, 0.678) 0px -3px 3px 0px inset`

// }
// else if(Math.round(number)< 67){
//     battery_level.style.boxShadow = `#d3c100 0px 1px 16px 0px inset, rgba(228, 229, 229, 0.678) 0px -3px 3px 0px inset`

// }
// else{
//     battery_level.style.boxShadow = `#004dd3 0px 1px 16px 0px inset, rgba(228, 229, 229, 0.678) 0px -3px 3px 0px inset`


// }
   
// }



// // radar

// function radar(new_radar_value) {
//     max_radar = 40;
//     min_radar = 10;
//     let corrected = Math.round(20 - (new_radar_value/2))
  
//     for (let barr = 0; barr < (bar_items.length); barr++) {
//       // console.log(bar_items.length);
      
//       // console.log(barr);
//         console.log('ggg');
        


//       if((barr)<20){

//         console.log(corrected + " + " + (barr+1));
      
      
//         if (barr+1 <= corrected ) {
//           bar_items[barr].classList.add('active')
//           bar_items[(bar_items.length-1)-barr].classList.add('active')
  
//           console.log("+");
          
//         }
    
//         else{
//           bar_items[barr].classList.remove('active')
//           bar_items[(bar_items.length-1)-barr].classList.remove('active')
  
//           console.log("-");
    
//         }
//       }
      

      
//     }
      
//     };
  





// // speed section
//     function update_vac_meter() {
//         wrapper2.style.setProperty('--animation','none')
//         wrapper2.style.setProperty('--opay','1')

//         wrapper2.innerHTML = ``;

//         for (let index = 0; index < barCount; index++) {
//             console.log(index);
//             console.log((50 * vac_value/100));
            
            
//             const className = index < (50 * vac_value/100) ? 'selected1' : '';
//             wrapper2.innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
//         }

//         wrapper2.innerHTML += `<p class="selected percent-text text1 Mot">${vac_value}%</p>`

        
//     }


//     function update_mot_meter() {
//       wrapper1.style.setProperty('--animation','none')
//       wrapper1.style.setProperty('--opay','1')

//       wrapper1.innerHTML = ``;

//       for (let index = 0; index < barCount; index++) {
//           // console.log(index);
//           // console.log((50 * mot_value/100));
          
          
//           const className = index < (50 * mot_value/100) ? 'selected1' : '';
//           wrapper1.innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
//       }

//       wrapper1.innerHTML += `<p class="selected percent-text text1 Mot">${mot_value}%</p>`

      
//   }

// function speedd(mot_num,vac_num) {
//     vac_value = vac_num
//     mot_value = mot_num
//     console.log(vac_value);
    

//     for (let index = 0; index < barCount; index++) {
//         const className = index < (50 * mot_value/100) ? 'selected1' : '';
//         wrapper1.innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
//     }
//     wrapper1.innerHTML += `<p class="selected percent-text text1 Mot">${mot_value}%</p>`
    
    
    
//     for (let index = 0; index < barCount; index++) {
//         const className = index < ( 50 * vac_value/100) ? 'selected1' : '';
//         wrapper2.innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
//     }
    
//     wrapper2.innerHTML += `<p class="selected percent-text text1 vac">${vac_value}%</p>`
    
// }



// vacuum_left.addEventListener("mousedown", () => { 
        
//   const startTime = Date.now();
//   let speed

//   vac_int = setInterval(() => {
//           const duration = Date.now() - startTime;
//           console.log(duration);
//           console.log(vac_value);
          
          

//           if (duration < 1000) {
//               speed = 100
              
//           }
//           else if (duration < 2000) {
//               speed = 80
              
//           }

//           else if (duration < 3000) {
//               speed = 60
              
//           }
  
//           vac_value = vac_value + 1

//           if (vac_value>100) {
//               vac_value=100      
//           }

//           update_vac_meter()

    
  
// }
// ,speed)   

// vacuum_left.addEventListener("mouseup",() => {
//   clearInterval(vac_int) 
  
// },
// )

// }





// );
// vacuum_right.addEventListener("mousedown", () => {
//   const startTime = Date.now();
//   let speed

//   vac_int = setInterval(() => {

//       const duration = Date.now() - startTime;

//       if (duration < 1000) {
//           speed = 100
          
//       }
//       else if (duration < 2000) {
//           speed = 80
          
//       }

//       else if (duration < 3000) {
//           speed = 60
          
//       }   


//           vac_value = vac_value - 1

//       if (vac_value<0) {
//           vac_value=0      
//       }



//           update_vac_meter()
            

// } ,100)  


// vacuum_right.addEventListener(
//   "mouseup",
//   () => {
//     clearInterval(vac_int) 
//   },
// )
  
// }



// );
// motor_left.addEventListener("mousedown", () => { 
//         let speed
//   const startTime = Date.now();

//   mot_int = setInterval(() => {
//           const duration = Date.now() - startTime;
//           console.log(duration);
          
          
          

//           if (duration < 1000) {
//               speed = 100
              
//           }
//           else if (duration < 2000) {
//               speed = 80
              
//           }

//           else if (duration < 3000) {
//               speed = 60
              
//           }
  
//           mot_value = mot_value + 1

//           if (mot_value>100) {
//               mot_value=100      
//           }

//           update_mot_meter()

    
  
// }
// ,speed)   

// motor_left.addEventListener("mouseup",() => {
//   clearInterval(mot_int) 
  
// },
// )

// }





// );
// motor_right.addEventListener("mousedown", () => {
//   let speed
//   const startTime = Date.now();

//   mot_int = setInterval(() => {

//       const duration = Date.now() - startTime;

//       if (duration < 1000) {
//           speed = 100
          
//       }
//       else if (duration < 2000) {
//           speed = 80
          
//       }

//       else if (duration < 3000) {
//           speed = 60
          
//       }   


//           mot_value = mot_value - 1

//       if (mot_value<0) {
//           mot_value=0      
//       }



//           update_mot_meter()
            

// } ,100)  


// motor_right.addEventListener(
//   "mouseup",
//   () => {
//     clearInterval(mot_int) 
//   },
// )
  
// }



// );




// //monitor section

// //temp
// function temp_monitor(temp_val) {
//   let min_temp = 17;
//   let max_temp = 30;

//   corrected_temp = 100*((temp_val-min_temp)/(max_temp-min_temp))

//   if (corrected_temp > 100) {
//     temperature_height.style.height = `100%`
//   }
//   else if (corrected_temp<0) {
//     temperature_height.style.height = `0%` 
//   }
//   else{
//     temperature_height.style.height = `${Math.round(corrected_temp)}%`
//   }


//   temperature_height.dataset.value = `${Math.round(temp_val)}°C`

// }

// //tank

// function tank_monitor(tank_val) {
//   let max_tank = 17;
//   corrected_tank = -100*((tank_val-max_tank)/(max_tank))

  


//   tank_label.dataset.value = `${Math.round(corrected)}°C`
//   tank_height.style.height = `${Math.round(corrected)}%`

// }

// function tank_reciever(){
//   let tank_pass
//   //get value of tank pass
//   if (tank_pass === false) {
//     //set tank value to true 
//     tank_monitor(tank_val)
    
//   }
// }

// function tank_transmiter() {
//   let tank_pass
//   console.log('hii');
  
//   //get value of tank pass
//   if (tank_pass === false) {
//     //set tank value to true 
//     console.log(tank_pass );
//   }
// }

// tank_button.addEventListener('click', ()=>{
//   tank_transmiter()
// })





// automated.addEventListener('click', ()=>{
//   if (navigator.onLine) {
//     manual.classList.remove('active')
//     special.classList.remove('active')
//     ultrasonic.classList.remove('active')
//     automated.classList.toggle('active')

//     if (automated.classList.contains('active')) {
//       current_mode = 'automated'  
//     }

//     else{
//       current_mode = 'none'
//     }
//   }
//   else {
//     current_mode = 'none'  
//   }

// })


// manual.addEventListener('click', ()=>{
//   if (navigator.onLine) {
//     automated.classList.remove('active')
//     special.classList.remove('active')
//     ultrasonic.classList.remove('active')
//     manual.classList.toggle('active')


//     if (manual.classList.contains('active')) {
//       current_mode = 'manual'  
//     }

//     else{
//       current_mode = 'none'
//     }
//   }
//   else {
//     current_mode = 'none'  
//   }
    
  
  
// } )

// special.addEventListener('click', ()=>{
//   if (navigator.onLine) {
//     automated.classList.remove('active')
//     manual.classList.remove('active')
//     ultrasonic.classList.remove('active')
//     special.classList.toggle('active')


//     if (special.classList.contains('active')) {
//       current_mode = 'special'  
//     }

//     else{
//       current_mode = 'none'
//     }

//   }
//   else {
    
//   }
  
  

  
// } )

// ultrasonic.addEventListener('click', ()=>{
//   if (navigator.onLine) {
//     automated.classList.remove('active')
//     manual.classList.remove('active')
//     special.classList.remove('active')
//     ultrasonic.classList.toggle('active')

//     if (ultrasonic.classList.contains('active')) {
//       current_mode = 'ultrasonic'  
//     }

//     else{
//       current_mode = 'none'
//     }

//   }
//   else {
    
//   }

  
// } )





















// function updateGrid() {
//   const newWidth = parseInt(document.getElementById("gridWidth").value);
//   const newHeight = parseInt(document.getElementById("gridHeight").value);

//   if (newWidth > 0 && newHeight > 0) {
//     gridWidth = newWidth;
//     gridHeight = newHeight;
//     cellWidth = canvas.width / gridWidth;
//     cellHeight = canvas.height / gridHeight;
//     clearPathAndTimer();
//   }
// }

// function startClearTimer() {
//   if (timerHandle !== null) {
//     window.clearTimeout(timerHandle);
//     timerHandle = null;
//   }

//   if (pathNodes.length >= 2) {
//     lastValidPath = [...pathNodes];
//     getPathCoordinates();
//   }

//   timerProgress.style.transition = "none";
//   timerProgress.style.transform = "scaleX(1)";

//   requestAnimationFrame(() => {
//     timerProgress.style.transition = "transform 1.5s linear";
//     timerProgress.style.transform = "scaleX(0)";
//   });

//   timerHandle = window.setTimeout(() => {
//     clearPathAndTimer();
//   }, 1500);
// }

// function drawGrid() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   ctx.strokeStyle = "#4a90e2";
//   ctx.lineWidth = 1;

//   for (let x = 0; x <= canvas.width; x += cellWidth) {
//     ctx.beginPath();
//     ctx.moveTo(x, 0);
//     ctx.lineTo(x, canvas.height);
//     ctx.stroke();
//   }

//   for (let y = 0; y <= canvas.height; y += cellHeight) {
//     ctx.beginPath();
//     ctx.moveTo(0, y);
//     ctx.lineTo(canvas.width, y);
//     ctx.stroke();
//   }

//   if (pathNodes.length > 1) {
//     ctx.beginPath();
//     ctx.strokeStyle = "rgba(74, 144, 226, 0.5)";
//     ctx.lineWidth = 3;
//     ctx.moveTo(
//       pathNodes[0].gridX * cellWidth + cellWidth / 2,
//       pathNodes[0].gridY * cellHeight + cellHeight / 2
//     );

//     for (let i = 1; i < pathNodes.length; i++) {
//       ctx.lineTo(
//         pathNodes[i].gridX * cellWidth + cellWidth / 2,
//         pathNodes[i].gridY * cellHeight + cellHeight / 2
//       );
//     }
//     ctx.stroke();
//   }

//   pathNodes.forEach((node, index) => {
//     ctx.beginPath();
//     ctx.fillStyle =
//       index === 0
//         ? "#00ff00"
//         : index === pathNodes.length - 1
//         ? "#ff0000"
//         : "#4a90e2";
//     ctx.arc(
//       node.gridX * cellWidth + cellWidth / 2,
//       node.gridY * cellHeight + cellHeight / 2,
//       Math.min(cellWidth, cellHeight) * 0.3,
//       0,
//       Math.PI * 2
//     );
//     ctx.fill();
//   });
// }

// function clearPathAndTimer() {
//   if (timerHandle !== null) {
//     window.clearTimeout(timerHandle);
//     timerHandle = null;
//   }
//   pathNodes = [];
//   lastNode = null;
//   drawGrid();
//   timerProgress.style.transition = "none";
//   timerProgress.style.transform = "scaleX(1)";
//   statusDiv.textContent = "";
// }

// function getGridPosition(x, y) {
//   const rect = canvas.getBoundingClientRect();
//   const scaleX = canvas.width / rect.width;
//   const scaleY = canvas.height / rect.height;
//   const canvasX = (x - rect.left) * scaleX;
//   const canvasY = (y - rect.top) * scaleY;
//   return {
//     gridX: Math.floor(canvasX / cellWidth),
//     gridY: Math.floor(canvasY / cellHeight),
//   };
// }

// function isInPath(gridX, gridY) {
//   return pathNodes.some(
//     (node) => node.gridX === gridX && node.gridY === gridY
//   );
// }

// function isValidMove(current, next) {
//   if (!current) return true;
//   const dx = Math.abs(current.gridX - next.gridX);
//   const dy = Math.abs(current.gridY - next.gridY);
//   return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
// }

// function handleStart(e) {
//   e.preventDefault();
//   isDrawing = true;
//   clearPathAndTimer();

//   const pos = getGridPosition(
//     e.touches ? e.touches[0].clientX : e.clientX,
//     e.touches ? e.touches[0].clientY : e.clientY
//   );

//   if (
//     pos.gridX >= 0 &&
//     pos.gridX < gridWidth &&
//     pos.gridY >= 0 &&
//     pos.gridY < gridHeight
//   ) {
//     pathNodes = [pos];
//     lastNode = pos;
//     drawGrid();
//     // statusDiv.textContent = "Drawing path...";
//   }
// }

// function handleMove(e) {
//   if (!isDrawing) return;
//   e.preventDefault();

//   const pos = getGridPosition(
//     e.touches ? e.touches[0].clientX : e.clientX,
//     e.touches ? e.touches[0].clientY : e.clientY
//   );

//   if (
//     pos.gridX >= 0 &&
//     pos.gridX < gridWidth &&
//     pos.gridY >= 0 &&
//     pos.gridY < gridHeight
//   ) {
//     if (!isInPath(pos.gridX, pos.gridY) && isValidMove(lastNode, pos)) {
//       pathNodes.push(pos);
//       lastNode = pos;
//       drawGrid();
//     }
//   }
// }

// function handleEnd() {
//   if (isDrawing) {
//     isDrawing = false;
//     if (pathNodes.length >= 2) {
//     //   statusDiv.textContent = "Path will clear in 1.5 seconds...";
//       startClearTimer();
//     } else {
//     //   statusDiv.textContent = "Path too short - draw at least 2 points";
//       clearPathAndTimer();
//     }
//   }
// }

// function getPathCoordinates() {
//   const nodes = pathNodes.length >= 2 ? pathNodes : lastValidPath;

//   if (nodes.length < 2) {
//     coordinates.textContent = "Draw a path with at least two points!";
//     return;
//   }

//   let pathDetails = ["Path Instructions:"];
//   let currentDirection = null;
//   let currentCount = 0;
//   let compressedMoves = [];

//   // Calculate moves and compress consecutive moves in the same direction
//   for (let i = 1; i < nodes.length; i++) {
//     const prev = nodes[i - 1];
//     const curr = nodes[i];
//     const dx = curr.gridX - prev.gridX;
//     const dy = curr.gridY - prev.gridY;

//     let direction;
//     if (dx === 1) direction = "RIGHT";
//     if (dx === -1) direction = "LEFT";
//     if (dy === 1) direction = "DOWN";
//     if (dy === -1) direction = "UP";

//     if (direction === currentDirection) {
//       currentCount++;
//     } else {
//       if (currentDirection) {
//         compressedMoves.push(
//           `${currentDirection}: ${currentCount} ${
//             currentCount === 1 ? "unit" : "units"
//           }`
//         );
//       }
//       currentDirection = direction;
//       currentCount = 1;
//     }
//   }
//   // Add the last move
//   if (currentDirection) {
//     compressedMoves.push(
//       `${currentDirection}: ${currentCount} ${
//         currentCount === 1 ? "unit" : "units"
//       }`
//     );
//   }

//   pathDetails.push(compressedMoves.join(", "));

//   // Calculate total distance
//   const totalDistance = nodes.length - 1;
//   pathDetails.push(`\nTotal Distance: ${totalDistance} units`);

//   // Add grid coordinates
// //   pathDetails.push("\nGrid Coordinates:");
// //   nodes.forEach((node, index) => {
// //     pathDetails.push(
// //       `Point ${index + 1}: (${node.gridX}, ${node.gridY})`
// //     );
// //   });

// //   coordinates.textContent = pathDetails.join("\n");
// }

// canvas.addEventListener("mousedown", handleStart);
// canvas.addEventListener("mousemove", handleMove);
// canvas.addEventListener("mouseup", handleEnd);
// canvas.addEventListener("mouseleave", handleEnd);

// canvas.addEventListener("touchstart", handleStart);
// canvas.addEventListener("touchmove", handleMove);
// canvas.addEventListener("touchend", handleEnd);
// canvas.addEventListener("touchcancel", handleEnd);

// drawGrid();


























































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




























const container = document.getElementById('radarContainer');
        const canvas = document.getElementById('radarCanvas');
        const ctx = canvas.getContext('2d');
        const angleDisplay = document.getElementById('angleDisplay');
        const distanceDisplay = document.getElementById('distanceDisplay');
        const obstacleAlert = document.getElementById('obstacleAlert');
        const statusDisplay = document.getElementById('statusDisplay');
        const scanButton = document.getElementById('scanButton');
        const clearButton = document.getElementById('clearButton');
        
        // Set initial canvas size
        canvas.width = container.clientWidth ;
        canvas.height = container.clientHeight-4 

        // Handle responsive canvas sizing
        function resizeCanvas() {
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight-4;
            
            // Set canvas dimensions to match container
            canvas.width = containerWidth ; // Account for padding
            canvas.height = containerHeight-4; // Leave space for controls
            
            // Update dimensions used for drawing
            updateDimensions();
            
            // Redraw radar
            if (!scanning) {
                drawRadarBackground();
                if (scanComplete) {
                    drawShadowedAreas();
                    drawPoints();
                }
            }
        }

        // Initialize and handle resize
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('load', resizeCanvas);

        // Radar variables
        let centerX, centerY, maxRadius;
        function updateDimensions() {
            centerX = canvas.width / 2;
            centerY = canvas.height;
            maxRadius = Math.min(canvas.width / 2, canvas.height - 19);
        }
        updateDimensions();

        const maxDistance = 400;
        let currentAngle = 0;
        let currentDistance = 0;
        let points = [];
        let obstacleMap = {};
        let scanning = false;
        let scanComplete = false;

        // Simulate obstacles for demo purposes
        const obstacles = [
            { angle: 30, distance: 150, width: 15 },
            { angle: 90, distance: 100, width: 20 },
            { angle: 150, distance: 200, width: 10 }
        ];

        function isNearObstacle(angle) {
            for (const obstacle of obstacles) {
                if (Math.abs(angle - obstacle.angle) < obstacle.width / 2) {
                    return { isObstacle: true, distance: obstacle.distance };
                }
            }
            return { isObstacle: false };
        }

        function getDistanceForAngle(angle) {
            const result = isNearObstacle(angle);
            if (result.isObstacle) {
                // Add some noise to make it more realistic
                const noise = Math.random() * 5 - 2.5;
                return result.distance + noise;
            }
            return maxDistance + (Math.random() * 20 - 10); // No obstacle detected
        }

        const createRadarGradient = () => {
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#0d2242');
            gradient.addColorStop(1, '#0a192f');
            return gradient;
        };

        function drawRadarBackground() {
            updateDimensions();
            
            ctx.fillStyle = createRadarGradient();
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = 'rgba(64, 169, 255, 0.2)';
            ctx.lineWidth = 1;
            
            // Draw range circles
            const rangeCircles = canvas.width > 300 ? 4 : 2; 
            for (let i = 1; i <= rangeCircles; i++) {
                const r = (maxRadius / rangeCircles) * i;
                ctx.beginPath();
                ctx.arc(centerX, centerY, r, Math.PI, 0);
                ctx.stroke();
                
                // Only draw distance labels if enough space
                if (canvas.width > 200) {
                    ctx.fillStyle = 'rgba(64, 169, 255, 0.5)';
                    ctx.font = canvas.width > 400 ? '10px Arial' : '7px Arial';
                    const distance = Math.round((r / maxRadius) * maxDistance);
                    ctx.fillText(`${distance}cm`, centerX - 20, centerY - r);
                }
            }

            // Draw angle lines
            ctx.strokeStyle = 'rgba(64, 169, 255, 0.1)';
            const angleDelta = canvas.width > 300 ? 15 : 30;
            for (let angle = 0; angle <= 180; angle += angleDelta) {
                const radian = (angle * Math.PI) / 180;
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(
                    centerX + Math.cos(radian) * maxRadius,
                    centerY - Math.sin(radian) * maxRadius
                );
                ctx.stroke();
            }

            // Draw angle labels if enough space
            if (canvas.width > 200) {
                ctx.fillStyle = 'rgba(64, 169, 255, 0.5)';
                ctx.font = canvas.width > 400 ? '12px Arial' : '8px Arial';
                for (let angle = 0; angle <= 180; angle += 45) {
                    const radian = (angle * Math.PI) / 180;
                    const x = centerX + Math.cos(radian) * (maxRadius + (canvas.width > 400 ? 20 : 10));
                    const y = centerY - Math.sin(radian) * (maxRadius + (canvas.width > 400 ? 20 : 10));
                    ctx.fillText(angle + '°', x - 5, y);
                }
            }
        }

        function drawRadarLine() {
            const radian = (currentAngle * Math.PI) / 180;
            
            const gradient = ctx.createLinearGradient(centerX, centerY,
                centerX + Math.cos(radian) * maxRadius,
                centerY - Math.sin(radian) * maxRadius);
            gradient.addColorStop(0, 'rgba(64, 169, 255, 0.8)');
            gradient.addColorStop(1, 'rgba(64, 169, 255, 0)');
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(
                centerX + Math.cos(radian) * maxRadius,
                centerY - Math.sin(radian) * maxRadius
            );
            ctx.stroke();

            if (currentDistance < maxDistance) {
                const distance = (currentDistance / maxDistance) * maxRadius;
                const pointX = centerX + Math.cos(radian) * distance;
                const pointY = centerY - Math.sin(radian) * distance;
                
                const isObstacleResult = isNearObstacle(currentAngle);
                const isObstacleDetected = isObstacleResult.isObstacle;
                
                points.push({
                    x: pointX,
                    y: pointY,
                    angle: currentAngle,
                    distance: currentDistance,
                    age: 0,
                    isObstacle: isObstacleDetected
                });

                // Store obstacle in map to later color everything behind it
                if (isObstacleDetected) {
                    obstacleMap[currentAngle] = true;
                    
                    // Mark angles behind the obstacle as affected
                    for (let behindAngle = currentAngle + 1; behindAngle <= 180; behindAngle++) {
                        if (Math.abs(behindAngle - currentAngle) <= 90) {
                            obstacleMap[behindAngle] = true;
                        }
                    }
                    
                    obstacleAlert.style.display = 'block';
                    setTimeout(() => {
                        obstacleAlert.style.display = 'none';
                    }, 1000);
                }

                const radius = Math.max(2, canvas.width / 150);
                const glow = ctx.createRadialGradient(pointX, pointY, 0, pointX, pointY, radius * 2);
                
                if (isObstacleDetected || obstacleMap[currentAngle]) {
                    glow.addColorStop(0, 'rgba(255, 64, 64, 1)');
                    glow.addColorStop(1, 'rgba(255, 64, 64, 0)');
                } else {
                    glow.addColorStop(0, 'rgba(64, 169, 255, 1)');
                    glow.addColorStop(1, 'rgba(64, 169, 255, 0)');
                }
                
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(pointX, pointY, radius * 2, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = isObstacleDetected || obstacleMap[currentAngle] ? '#ff4040' : '#40a9ff';
                ctx.beginPath();
                ctx.arc(pointX, pointY, radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function drawShadowedAreas() {
            // Draw shadowed areas behind obstacles
            ctx.fillStyle = 'rgba(255, 64, 64, 0.1)';
            
            for (let angle = 0; angle <= 180; angle++) {
                if (obstacleMap[angle]) {
                    const radian = (angle * Math.PI) / 180;
                    
                    ctx.beginPath();
                    ctx.moveTo(centerX, centerY);
                    ctx.lineTo(
                        centerX + Math.cos(radian) * maxRadius,
                        centerY - Math.sin(radian) * maxRadius
                    );
                    ctx.lineTo(
                        centerX + Math.cos((angle + 1) * Math.PI / 180) * maxRadius,
                        centerY - Math.sin((angle + 1) * Math.PI / 180) * maxRadius
                    );
                    ctx.closePath();
                    ctx.fill();
                }
            }
        }

        function drawPoints() {
            const pointRadius = Math.max(2, canvas.width / 150);
            
            points.forEach(point => {
                const alpha = scanComplete ? 0.8 : 1 - point.age / 50;
                let color;
                
                if (point.isObstacle || obstacleMap[point.angle]) {
                    color = 'rgba(255, 64, 64,';
                } else {
                    color = 'rgba(64, 169, 255,';
                }
                
                const glow = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, pointRadius * 2);
                glow.addColorStop(0, `${color}${alpha})`);
                glow.addColorStop(1, `${color}0)`);
                
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(point.x, point.y, pointRadius * 2, 0, Math.PI * 2);
                ctx.fill();
                
                if (!scanComplete) {
                    point.age++;
                }
            });
        }

        function updateDisplay() {
            angleDisplay.textContent = currentAngle.toFixed(0);
            distanceDisplay.textContent = currentDistance.toFixed(0);
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawRadarBackground();
            
            // Only draw shadowed areas if we have data
            if (Object.keys(obstacleMap).length > 0) {
                drawShadowedAreas();
            }
            
            // Only draw points if we have data
            if (points.length > 0) {
                drawPoints();
            }
            
            if (scanning) {
                drawRadarLine();
                currentAngle += 1;
                
                if (currentAngle > 180) {
                    scanning = false;
                    scanComplete = true;
                    scanButton.textContent = "SCAN";
                    statusDisplay.textContent = "Scan complete";
                    currentAngle = 0;
                }
                
                currentDistance = getDistanceForAngle(currentAngle);
            } else if (!scanComplete) {
                drawRadarLine();
            }
            
            updateDisplay();
            requestAnimationFrame(animate);
        }

        scanButton.addEventListener('click', function() {
            if (scanning) {
                scanning = false;
                scanButton.textContent = "SCAN";
                statusDisplay.textContent = "Paused";
            } else {
                if (scanComplete) {
                    // Reset if completed
                    points = [];
                    obstacleMap = {};
                    scanComplete = false;
                    currentAngle = 0;
                }
                scanning = true;
                scanButton.textContent = "STOP";
                statusDisplay.textContent = "Scanning...";
            }
        });

        clearButton.addEventListener('click', function() {
            points = [];
            obstacleMap = {};
            currentAngle = 0;
            scanComplete = false;
            scanning = false;
            scanButton.textContent = "SCAN";
            statusDisplay.textContent = "Ready";
        });

        // Make sure we have dimensions before starting
        updateDimensions();
        
        // Initial rendering
        drawRadarBackground();
        statusDisplay.textContent = "Ready";
        
        // Start animation loop
        animate();
