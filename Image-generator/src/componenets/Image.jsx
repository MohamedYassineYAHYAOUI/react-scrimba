import React from 'react'

function Image() {
    return (
        <form action="" method="post" className="ImageForm">
            <div className="ImageForm--text_input_container">
                <input className="ImageForm--TextInput" type="text" id="imageUpperText" placeholder='Upper Text' />
                <input className="ImageForm--TextInput" type="text" id="imageLowerText" placeholder='Lower Text'/>
            </div>
           <input className="ImageForm--submitButton" type="submit" value="Get a new meme image"/>
        </form>
      );
}

export default Image;