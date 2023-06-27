//Used to provide functionality while one browser supports but other wont
//Eg arrow function  - all browsers dont support in same way


//Polyfill  - Map
//arr.map((num,i,arr)=>{})
const arr = [1, 2, 3, 4, 5, 6]

Array.prototype.myMap = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) { //this refers to current array
        cb(this[i], i, this)
    }
    return temp
}

arr.myMap((data) => {
    console.log(data * 2)
})

//Polifill  - filter

Array.prototype.myFilter = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i])
        }
    }
    return temp
}

const newFilter = arr.myFilter((data) => {
    return data == 2
})

//reduce - acc,curr,i,arr
// .reduce(()=>,0)
Array.prototype.myReduce = function (cb, initialvalue) {
    var acc = initialvalue
    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i]
    }
    return acc
}

const newReduce = arr.myReduce((a, b) => {
    return a + b
},50)

