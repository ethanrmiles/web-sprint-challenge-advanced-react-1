const flatGrid = [null, null, null, null, "B", null, null, null, null]
  const [findCurrentPositionIndex, setFindCurrentPositionIndex] = useState(flatGrid.findIndex(ind => ind === "B")) //Used for displaying current location in array
  const [findCurrentPosition, setFindCurrentPosition] = useState(flatGrid.find(ind => ind === "B")) //Used for the conditional rendering of the Grid
  const [grid, setGrid] = useState(flatGrid)
  
  
useEffect(() => {

}, [findCurrentPosition])


const removeActive = () => {
  debugger
  flatGrid.splice(findCurrentPositionIndex, 1)
  debugger
  setFindCurrentPositionIndex()
  debugger
}

const addActive = (index) => {
  debugger
  flatGrid.splice(index, 1, "B")
  debugger
  setFindCurrentPosition()
  debugger
}

const changePosition = (index) => {
  removeActive()
  
