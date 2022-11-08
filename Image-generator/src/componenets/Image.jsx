import React from 'react'

function Image() {
    return (
        <div className="formContent">
            <div className="ImageForm">
                <input className="ImageForm--TextInput" type="text" id="imageUpperText" placeholder='Upper Text' />
                <input className="ImageForm--TextInput" type="text" id="imageLowerText" placeholder='Lower Text'/>
                
            {/* <input className="ImageForm--submitButton" type="submit" value="Get a new meme image"/> */}
                <button className='ImageForm--button'>Get a new meme image 🖼</button>
            </div>
        </div>

      );
}
export default Image;