import decoration1 from './Media/decoration1.png';
import rumiigif from './Media/rumii-gif.gif';
import essentials1 from './Media/essentials1.png';
import essentials2 from './Media/essentials2.png';
import comma from './Media/comma.png';
import reviews from './Media/reviews.png';
import './App.css';
import BgComponent from './Components/StyleSection.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Header-text">
          rumii bags
        </p>
        <div className="Center-text">
          <li>
            <a
              className="Page-name"
              style={{textAlign: 'center'}}
              href="#bag-styles"
              rel="noopener noreferrer"
            >
              The Essential Bag
            </a>
          </li>
          <li>
            <a
              className="Page-name"
              href="https://reactjs.org"
              rel="noopener noreferrer"
            >
              Our Story
            </a>
          </li>
        </div>
      </header>
      <main>
        <div className="Container">
          <h1 className="Title1">Essential bag is essential in name, form, & function <span>for nurses</span>.</h1>
          <img 
            src={decoration1}
            style={{paddingTop: "1%", paddingRight: "5%"}}>
          </img>
          <div className="Rumii-bag"></div>
          <div className='Ellipses'></div>
        </div>

        <div className="Container">
          <div className="Row">
            <div className="bn4n-col1">
              <h1 className="Title2">Designed by nurses, <span>for nurses</span></h1>
            </div>
            <div className="bn4n-col2">
              <p className="Description">
                The Rumii Essential Bag seamlessly integrates <span>utility</span>, <span>comfort</span>, and <span>style</span>. It is the ultimate companion for nurses seeking practicality and fashion-forward functionality.
              </p>
            </div>
          </div>
        </div>

        <div className="Container">
          <div className="Row">
              <img
                className="col-imgs"
                src={rumiigif}>
              </img>
          </div>
        </div>

        <div className="Container">
          <div className="Row">
            <div className="essentials-col1">
              <h2 className="Sub-title">All of the essentials for the <span>essential worker</span></h2>
              <p 
                className="Description"
                style={{textAlign: "left"}}>
                Maintain your stride uninterrupted as you tend to patients,
                equipped with all your essential tools securely stored at your waist. This bag effortlessly
                accommodates everything you require for the task at hand.
              </p>
              <p 
                className="Description"
                style={{textAlign: "left"}}>
                Read more
              </p>
            </div>
            <div className="essentials-col2">
              <img
                className="essentials-img"
                src={essentials1}>
              </img>
            </div>
          </div>
          <div className="Row">
            <div className="essentials-col1">
              <img
                className="essentials-img"
                src={essentials2}>
              </img>
            </div>
            <div className="essentials-col2">
              <h2 className="Sub-title">All of the essentials for the <span>essential worker</span></h2>
              <p 
                className="Description"
                style={{textAlign: "left"}}>
                Maintain your stride uninterrupted as you tend to patients,
                equipped with all your essential tools securely stored at your waist. This bag effortlessly
                accommodates everything you require for the task at hand.
              </p>
              <p 
                className="Description"
                style={{textAlign: "left"}}>
                Read more
              </p>
            </div>
          </div>
        </div>

        <div className="Container">
          <h1 id='bag-styles' className="Title3">Express <span>your</span> style</h1>
          
          <BgComponent bagName="Night Shift" bgColor="bg1" productId='1'>
            Fits all occasions, goes with any outfit for any season
          </BgComponent>

          <BgComponent bagName="The Frontliner" bgColor="bg2" productId='3'>
            Sophisticated yet minimal, for a more tasteful style look
          </BgComponent>

          <BgComponent bagName="Full Moon" bgColor="bg3" productId='5'>
            Pair with all your scrubs and your everyday outfits too
          </BgComponent>

          <BgComponent bagName="Boost Blue" bgColor="bg4" productId='7'>
            Pair with all your scrubs and your everyday outfits too
          </BgComponent>

          {/* 
          <div className="Product-row">
            <div className="prod-col1">
              Fits all occasion, goes with any outfit for any season
            </div>
            <div className="prod-col2">
              <div className='bg1'>
                <h2>Night Shift</h2>
              </div>
            </div>
            <div className="prod-col3">
              <div className='bg1-img'></div>
              <img
                className="arrow"
                src={arrow}>
              </img>
            </div>
          </div>
          */}

          {/* <div className="Product-row">
            <div className="prod-col1">
              Sophisticated and minimal, for more tasteful style look
            </div>
            <div className="prod-col2">
              <div className='bg2'>
                <h2>The Frontliner</h2>
              </div>
            </div>
            <div className="prod-col3">
              <img
                className="arrow"
                src={arrow}>
              </img>
            </div>
          </div>
          */}

          {/* <div className="Product-row">
            <div className="prod-col1">
              Pair with all your scrubs and your outside hospital outfits too
            </div>
            <div className="prod-col2">
              <div className='bg3'>
                <h2>Full Moon</h2>
              </div>
            </div>
            <div className="prod-col3">
              <img
                className="arrow"
                src={arrow}>
              </img>
            </div>
          </div>
          */}

          {/* <div className="Product-row">
            <div className="prod-col1">
              The iconic Rumii color, sure to draw all the attention
            </div>
            <div className="prod-col2">
              <div className='bg4'>
                <h2>Boost Blue</h2>
              </div>
            </div>
            <div className="prod-col3">
              <img
                className="arrow"
                src={arrow}>
              </img>
            </div>
          </div>
          */}
          
        </div>

        <div className='reviews-cont'>
          <div className="Title4">Nurses <span>love</span> us</div>
          <div className='quote-box'>
            <img 
              className='comma1'
              src={comma}>
            </img>
            <p className='Description'>
              I absolutely LOVE my Rumii!
              I love having so many pockets for all of my supplies
              (alcohol pads, tapes, flushes, pen light, shears, pens,
              highlighter, Curos caps, stethoscope, drawing needles,
              band-aids, and so much more). I love how I have multiple
              ways to wear it depending on my mood and I’ve received so
              many compliments. It’s also very nice to be able to wipe
              it down after ever shift.
            </p>
            <img 
              className='comma2'
              src={comma}>
            </img>
          </div>
          <img 
            className='reviews-img'
            src={reviews}>
          </img>
        </div>
      </main>
    </div>
  );
}

export default App;
