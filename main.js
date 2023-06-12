function calculateCircleArea(radius) {
  const area = Math.PI * radius * radius;
 
  return Math.floor(area);
  
}

let circles = [10, 30, 50];

let areas = circles.map(calculateCircleArea);

document.write(areas);

