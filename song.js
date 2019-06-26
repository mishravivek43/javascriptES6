/*
****Starting of Song.js
name,genre,music,lyrics,album => String
artists,singers =>Array
isClassical=>Boolean
*/
//Inialising Function as a constructor

function songConstructor(name,artists,genre,music,lyrics,isClassical,album,singers){
        this.name = name;
        this.artists = artists;
        this.genre = genre;
        this.music = music;
        this.lyrics = lyrics;
        this.isClassical = isClassical;
        this.album = album;
        this.singers = singers;
        
        //Function with Conditional Statement
        this.showType = function(){
                if(this.isClassical){
                        console.log('this is classical music');
                }else{
                         console.log('this is modern music');
                }
        }
        
        //Function with for lopp showing all artist
        this.sayArtistsNames = function() {
                for(var i = 0;i<this.artists.length;i++){
                        console.log('Artist '+parseInt(i+1)+': '+this.artists[i]);
                }

        }
        //Function with for loop showing all singers
        this.saySingersNames = function() {
                for(var i = 0;i<this.singers.length;i++){
                        console.log('Singer '+parseInt(i)+': '+this.singers[i]);
                }

        }
}
//Initialsing arrays
var singers = ['A R Rahman', 'Sukhwinder Singh', 'Tanvi', 'Mahalakshmi Iyer', 'Vijay Prakash'];
var artists = ['Anil Kapoor', 'Irrfan Khan', 'Dev Patel', 'Freida Pinto'];

//Initialising Object
var songOne = new songConstructor('Jai Ho',artists,'Bolywood','A R Rahman','Gulzaar',false,'Slumdog Millionaire');

//Calling Object Functions
songOne.showType();
songOne.sayArtistsNames();

//Integer
var lengthOfArtists = songOne.artists.length;
console.log('Total no of artists: '+lengthOfArtists);
