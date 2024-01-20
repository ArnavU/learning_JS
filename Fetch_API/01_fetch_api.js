// fetch('https://jsonplaceholder.typicode.com/todos/1') // returns response object as promise
//     .then(res => console.log(res)) 

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(res => {
//         if(res.ok){  // true when ok is between 200 and 299
//             console.log('SUCCESS');
//         } else {
//             console.log("Not Successful")
//         }
//     })
      

// to post or update data or delete data then we need to use the ooptions section of the fetch method
fetch("https://regres.in/api/users", {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
})
    .then(res => {
        return res.json()
    })
    .then(data=> console.log(data))
      
