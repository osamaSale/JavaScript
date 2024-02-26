const firstEvenAndsecaund = (arr) => {
    let tracker = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
           [arr[tracker], arr[i] ]= [arr[i], arr[tracker]]
            tracker++
        }
    }
    return arr
}

/* console.log(firstEvenAndsecaund([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) */

