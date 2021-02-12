// search song method

const searchSong = () =>{
    const searchText = document.getElementById("input-field").value;
    
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    // API fetch
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}