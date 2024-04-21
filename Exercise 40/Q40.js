//Exercise 40
//Defining a function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling function thrice and saving function values in variables
var album1 = make_album("Tina", "flowers");
var album2 = make_album("Zara", "Illuminate", 12);
var album3 = make_album("Hadiqa", "colors");
console.log(album1);
console.log(album2);
console.log(album3);
