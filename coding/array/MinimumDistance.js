var distanceBetweenBusStops = function (distance, start, destination) {
  if (start > destination) [start, destination] = [destination, start]; // Ensure start < destination

  let clockwiseDist = 0,
    totalDist = 0;

  for (let i = 0; i < distance.length; i++) {
    if (i >= start && i < destination) {
      clockwiseDist += distance[i];
    }
    totalDist += distance[i];
  }

  return Math.min(clockwiseDist, totalDist - clockwiseDist);
};
const distance = [7, 6, 3, 0, 3];
(start = 0), (destination = 4);
const res = distanceBetweenBusStops(distance, start, destination);
console.log(res);
