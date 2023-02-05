import React from 'react';


// import memeData from '../memeData.js';
export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    image: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMeme, setAllMeme] = React.useState([]);
  React.useEffect(() => {
    async function getting(){
      const response=await fetch('https://api.imgflip.com/get_memes')
      const data=await response.json()
      setAllMeme(data)
    }
    getting()
  
  },[])

  function getMeme() {
    const memesArray = allMeme.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const randomImage = memesArray[randomNumber].url;

setMeme(prevMeme => {
  return {...prevMeme , image:randomImage}
})
  }

  function handleChange(e) {
  
    setMeme((prevMeme) => ({
      ...prevMeme,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <>
      <div className="meme-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="text"
              placeholder="Top Text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Bottom Text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={getMeme}>
            Get new meme image
          </button>
        </form>

        <div className="meme">
          <img src={meme.image} />
          <h3 className="text topText">{meme.topText}</h3>
          <h3 className="text bottomText">{meme.bottomText}</h3>
        </div>
      </div>
    </>
  );
}
