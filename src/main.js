import React from "react";
import './main.css';



let musicArray=[
{
    'MusicId':'1',
    'musicName':'Let me down Slowly',
    'musciGenre':'POP',
    'musicSinger':'TEST',
    'musicImg':'/Images/image1.jpg'
},
{
    'MusicId':'2',
    'musicName':'Sample trrack',
    'musciGenre':'ROCK',
    'musicSinger':'TEST1',
    'musicImg':'/Images/image2.jpg'

},
{   
    'MusicId':'3',
    'musicName':'Track 2',
    'musciGenre':'Metal',
    'musicSinger':'TEST2',
    'musicImg':'/Images/image3.jpeg'

}
]



const MainContent=()=>{
    return(
        <div>
            Main Component
                <table class="table">
                    <thead>
                        <tr>
                            <th>Music Id</th>
                            <th>Music Name</th>
                            <th>Music Genre</th>
                            <th>Music Singer</th>
                            <th>Music Image</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <td>
                            {musicArray.map((m)=><tr>{m.MusicId}</tr>)}
                        </td><td>
                            {musicArray.map((m)=><tr>{m.musicName}</tr>)}
                        </td><td>
                            {musicArray.map((m)=><tr>{m.musciGenre}</tr>)}
                        </td><td>
                            {musicArray.map((m)=><tr>{m.musicSinger}</tr>)}
                        </td><td>
                            {musicArray.map((m)=><tr><img src={m.musicImg} alt="Not Found"></img></tr>)}
                        </td>

                        
                    </tbody>
                </table>
        </div>
    );
}
export default MainContent;