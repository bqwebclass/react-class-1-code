
// const fun1 = () => {
//     console.log("This is a callback func1");
// }
// const fun2 = () => {
//     console.log("This is a callback func2");
// }

// const func2 = (abc) => {
//     abc()
//     // console.log(abc);

// }

// func2(fun1, fun2)

// .find

const nums = [1, 2, 4, 5]
const users = [
    { name: 'osama', dob: "03/05/2000", },  // 0
    { name: 'Bilal', dob: "03/05/2002" },  // 1
    { name: 'Fahad', dob: "03/05/1989", }, // 2
    { name: 'Bilal', dob: "03/05/2004" },
    { name: 'talha', dob: "03/05/2005" },
];

// const { name } = users.find((user) => user.name == "Bilal" && user.age > 35)

// object destructuring
// const { name, age, ...remaining } = { name: 'Alqama', age: '400', phone: '',  };

// console.log(name);

// const allBilalUser = users.filter((user) => user.name.toLowerCase() == 'bilal')

// console.log(allBilalUser);

// what is diff bet .map & .filter 

// // ... (rest & spread (destructue) operator)
// const allBilalUser = users.map((user) => {
//     // console.log(user);
//     let age = Math.floor(Math.random() * 50);
//     return { ...user, age: age }
// })

// console.log(allBilalUser);


// const obj = {
//     name: "Osama",
//     age: 29,
//     phone: "+92733773",

// }

// const obj2 = { 
//     name: "Osama",
//     age: 29,
//     phone: "+92733773",
// }

// obj.name = "Fahad"
// console.log(obj2);

const products = [
    { title: "Marker Box", price: 10, },
    { title: "Marker", price: 30, },
    { title: "Book1", price: 300, },
    { title: "Mobile Cover", price: 460, },
    { title: "Keyboard", price: 730, },
    { title: "Fan", price: 39000, },
    { title: "Fan Box", price: 39000, },
]
const filteredProByBox = products.filter(prod => prod.title.includes("Box"))

console.log(
    products.map((prod) => {
        if(prod.price > 400){
            return { ...prod, dc: 0 }
        }
        return { ...prod, dc: 100 }
    })

)
// filter  prod where title include "Box" 
// find  prod where title = "Fan" 
// add one more property "deliveryFee: 0 or 100  (0 if price > 400) " using .map 

// ashcusahg fdfdfdr
// sachsahc
