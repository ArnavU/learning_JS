const createTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo),
    }

    let res = await fetch("https://jsonplaceholder.typicode.com/posts", options)
    let data = await res.json();
    return data;
}

const getTodo = async(id) => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    let data = await res.json();
    return data;
}

async function myFunc(){
    let todo = {
        title: 'Arnav',
        body: 'Umarkar',
        userId: 1100,
    }
    let data = await createTodo(todo);
    console.log(data);
    console.log(await getTodo(5));
}

myFunc();