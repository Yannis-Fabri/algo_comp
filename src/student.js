var students_array = []
var group_array = []
var group = 4

function createStudent() {
  for (var i = 1; i < 101; i++){
      students_array.push(i)
    }
}

createStudent()
//console.log(students_array)


if (students_array.length % group === 0){
  while (students_array.length > 0){
    group_array.push(students_array.splice(0, group))
  } console.log(group_array)
} else {
  var remainder = students_array.length % group
  var result = 0
  function removeRem(arr, num){
    var popping = arr.slice(-remainder)
    result = popping
    //console.log(result)
  } removeRem(students_array, remainder)
  for (var i = 0; i < remainder; i++){
      students_array.pop()
  }
  //console.log(result)
  while (students_array.length > 0){
    group_array.push(students_array.splice(0, group))
  }
    //console.log(group_array)
  for (var i = 0; i < remainder; i++){
    group_array[i].push(result.shift())
  } console.log(group_array)
}
