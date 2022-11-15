import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import data from '../ImageData'

function Image() {
    
    const [image, setImage] = useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    });

    const [allImages, setAllImages] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => setAllImages(res.data.memes))
    }, [])

    function generateImage(){
        setImage(image => 
            ({   ...image, 
                randomImage : allImages[Math.floor(Math.random() * allImages.length)].url
            }));
    }

    function handleChange(event){
        const {name, value} = event.target
        setImage(imageData => ({
            ...imageData,
            [name] : value
        }))
    }

    return(
        <div>
            <div className="formContent">
                <div className="ImageForm">
                    <input 
                        className="ImageForm--TextInput"
                        type="text" 
                        id="imageUpperText" 
                        placeholder='Upper Text' 
                        name="topText"
                        value={image.topText}
                        onChange={handleChange}
                    />
                    <input 
                        className="ImageForm--TextInput" 
                        type="text" 
                        id="imageLowerText" 
                        placeholder='Lower Text'
                        name="bottomText"
                        value={image.bottomText}
                        onChange={handleChange}
                    />

                    <button className='ImageForm--button' onClick={generateImage}>Get a new meme image 🖼</button>
                </div>
                
                {image.randomImage &&  
                    <div className='Image'>
                        <img className='formContent--generatedImage' src={image.randomImage} alt="image generated"/>
                        <h2 className="image--texte top">{image.topText}</h2>
                        <h2 className="image--texte bottom">{image.bottomText}</h2>
                    </div>} 
            </div>
        </div>
      );
}
export default Image;