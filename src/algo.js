var array = []
var mean = []
//var hrstart = process.hrtime()


function meanTime(){
  for (var i=1;i<=10; i++) {
    //console.time(arraySize())
    arraySize()
    //console.timeEnd(arraySize())
    hrend = process.hrtime(hrstart)
    mean.push(hrend[1])
    //console.log(hrend[1]/1000000)
    console.log(mean)
  } var total = 0
  mean.shift()
  mean.shift()
  console.log(mean)
  for (var i = 0; i < mean.length; i++){
    total += mean[i]
  } var avg = total / mean.length
  var mavg = avg /1000000
  console.log(mavg.toFixed(6))
}

function arraySize(){
  hrstart = process.hrtime()
  array = [1]
  for (var i = 0; i < 1000000; i++){
      array.push(1)
  }
  //console.log(array)
}

meanTime()
