async function fetchData(url){
  try {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("failed with reposne" +response.status);

    }
    return await(response.json())
    
  } catch (error) {
    console.log(error)
    
  }


}
fetchData("https://jsonplaceholder.typicode.com/posts")
.then(data => console.log(data)) 