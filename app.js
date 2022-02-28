const searchBtn =()=>{
    const searchbox = document.getElementById('search-box').value;

     const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchbox}
     `
     fetch(url)
     .then(res=> res.json())
     .then(data => console.log(data))
}