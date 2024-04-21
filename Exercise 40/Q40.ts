//Exercise 40
//Defining a function
function make_album(artist_name: string, album_title: string, tracks?: number) {
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };
    if(tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

//calling function thrice and saving function values in variables
let album1 = make_album("Tina", "flowers");

let album2 = make_album("Zara", "Illuminate", 12);

let album3 = make_album("Hadiqa", "colors");

console.log(album1);
console.log(album2);
console.log(album3);