const app = async () => {
    const obj = await fetch('https://jsonplaceholder.typicode.com/posts ');
    const result = await obj.json();
    console.log(result[0])
}

app();