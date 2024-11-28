grid =[]

def generateGrid():
    for x in range(0,9,1):
        for y in range(0,9,1):
            grid.append([x,y])


def plotGrid():
    for x in range(0,9,1):
        for y in range(0,9,1):
            grid[x][y]= " . "
    

def printGrid(grid):
    for x in grid:
        for y in grid:
            print(grid[x][y])

generateGrid()
plotGrid()
printGrid(grid)
# print (grid)