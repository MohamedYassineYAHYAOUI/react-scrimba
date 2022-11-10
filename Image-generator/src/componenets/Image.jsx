import React from 'react'
import { useState } from 'react';
import data from '../ImageData'

function Image() {
    
    const [image, setImage] = useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    });

    const [allImages, setAllImages] = useState(data.data.memes)

    function generateImage(){
        setImage(image => 
            ({   ...image, 
                randomImage : allImages[Math.floor(Math.random() * allImages.length)].url
            }));
    }

    return(
        <div>
            <div className="formContent">
                <div className="ImageForm">
                    <input className="ImageForm--TextInput" type="text" id="imageUpperText" placeholder='Upper Text' />
                    <input className="ImageForm--TextInput" type="text" id="imageLowerText" placeholder='Lower Text'/>
                    
                {/* <input className="ImageForm--submitButton" type="submit" value="Get a new meme image"/> */}
                    <button className='ImageForm--button' onClick={generateImage}>Get a new meme image 🖼</button>
                </div>
                
                {image.randomImage && <img className='formContent--generatedImage' src={image.randomImage} alt="image generated"/>} 

            </div>
        </div>
      );
}
export default Image;