const grid = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ]
  
  const grid =  [[null, null, null], [null, "B", null], [null, null, null]];
const showPositionCoordinates = () => {
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
        console.log(`at: [${i},${j}], value: ${grid[i][j]}`)
        }
    }
  }
  showPositionCoordinates()
  
  const currentPosition = (divId) => {
    //Given a div id, function returns coordinates of that div
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
        const location = ` [${i},${j}]`
        if(grid[i][j] === divId) return location 
        }
    }
  }
  console.log('Current Position:', currentPosition(8)) //returns [2,1]
  
  const getCoordinates = (destination) => {
    //Given a destination, the function returns the coordinates of that location
    for(let i = 0; i < grid.length; i++){
      
      for(let j = 0; j < grid[i].length; j++){
        const location = ` [${i}][${j}]`
        if(grid[i][j] === destination) return location 
        }
    }
  } 
  console.log('Coordinates of 6:' ,getCoordinates(6))//returns [1][2]

  // const navigateTo = (i) => {
//   setPosition(i)

// }
// navigateTo(1)
// console.log(navigateTo(1,2))

// const test = navigateTo(getCoordinates(6))