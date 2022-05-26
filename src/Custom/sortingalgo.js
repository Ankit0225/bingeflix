import Heap from 'heap-js'

export function getHeap(array) {
    
    const value = []
    let count = 0
    const maxHeap = new Heap(Heap.maxComparator)
    
    for (let i = 0; i<array.length-1; i++) {
    
        value.push([i,i+1])
        count += 1
        maxHeap.push(array[i])
    }

    maxHeap.push(array[array.length-1])
    value.push([array.length-1, array.length-1])
    count += 1
    
    for (let i = array.length - 1; i >= 0; i--){
    
        array[i] = maxHeap.pop();
        value.push([i,i])
        value.push([i,i])
        value.push([i, array[i]])
    
    }
    return [value, count]
}
