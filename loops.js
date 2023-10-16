// const arr=[1,2,3,4,5]

// for (const i of arr) {
//     //console.log(i)
// }
// const geert="helo World";
// for (const ge of geert) {
//     //console.log(geert)
    
// }
// const map=new Map();
// map.set('pak','pakista')
// map.set('ge','germany')
// map.set('ge','germany')
//console.log(map)

// const myobject={
//     gam1:'dfgdfjk',
//     g2:'sdjfjds'
// }
// for (const [value] of myobject) {
//     console.log( value)
// }
//...................................obj2........................

// const myobject={
//     cpp:'C++',
//     js:'javascript',
//     rb:'Ruby',
//     swift:'Apple'
// }

// for (const key in myobject) {
//    //console.log(`${key},for  ${myobject[key]}`)
// }
// const programing=  ["java","c++","scrpt","py"]

// for (const key in programing) {

//     console.log(programing[key])

// }
///...................................ObjectParr three...................................


// const myCoding=["js","py","java","cccp"]
// myCoding.forEach((item)=>{
// console.log(item)
// })

// const Coding=["js","py","java","cccp"]

// // function printme(item){
// //     console.log(item)
// // }
// // Coding.forEach(printme)
// Coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

// const myCo =[
//     {
//         l:"java",
//         lFN:"kdsks",
        
//     },
//     {
//         l:"jav",
//         lFN:"kdsk",
        
//     },
//     {
//         l:"ja",
//         lFN:"kds",
        
//     },
//     {
//         l:"j",
//         lFN:"kd",
        
//     },{
//         l:"",
//         lFN:"k",
        
//     }
// ]
// myCo.forEach((item)=>{
// console.log(item.l,item.lFN)
// })

//.......................................Filter...........................................



// const Coding=["js","py","java","cccp"]

// const values=Coding.forEach((item)=>{
//     //console.log(item)
//     return item
// })
// console.log(values)

//..............................filter........................

// const nums=[1,2,3,4,5,6,7,8]
// const newnum=nums.filter((num)=>{
//     return num>4
// })
// console.log(newnum)
// const nums=[1,2,3,4,5,6,7,8]
// const newns=[];
// nums.forEach((num)=>{
//     if(num>4){
//         newns.push(num)
//     }
// })
// console.log(newns)

// const book=[
//     {
//         title:'khan',genrc:'fiction',publish:'1222'
//     },
//     {
//         title:'khan',genrc:'history',publish:'1999'
//     },
//     {
//         title:'newtown',genrc:'non-fiction',publish:'1999'
//     }, {
//         title:'jams',genrc:'chistery',publish:'1999'
//     }
// ]
// let userbook=book.filter((bk)=> bk.title ===`khan`)
// userbook=book.filter((bk)=>{
//     return bk.publish==1999
// })
// console.log(userbook)


// const nums=[1,2,3,4,5,6,7,8]

// const totl=nums.reduce((acc,currval)=>acc+currval ,0)
// console.log(totl)

// const shopingCart=[
//     {
//         itemName:"js",
//         price:1111
//     },
//     {
//         itemName:"py",
//         price:1111
//     },
//     {
//         itemName:"java",
//         price:1111
//     },
// ]
// const pricepay=shopingCart.reduce((acc,item)=> acc+item.price,0)
// console.log(pricepay)

//kdfkdfkdjfkdjsf