import './home_Carousel.scss';
import img1 from '../../assets/images/Banner.jpg';
import img2 from '../../assets/images/Banner2.jpg';
import img3 from '../../assets/images/Banner3.jpg';
import img4 from '../../assets/images/Banner4.jpg';
import img5 from '../../assets/images/Banner5.jpg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Carousel: React.FC = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById('radio' + counter)?.click();
      setCounter(count => count >= 5 ? 1 : count + 1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [counter]);

  const handleManualClick = (slideNumber: number) => {
    setCounter(slideNumber);
  };

  return (
    <>
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" defaultChecked />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          <input type="radio" name="radio-btn" id="radio5" />
          <div className="slide first">
            <div className="slide-content">
              <img src={img1} alt="" />
              <div className='slide-text'>
                <p>
                  Independent, family-owned Genevan manufacture
                </p>
                <div className="slide-line-div"></div>
                <p className='slide__p'>
                  The power of independence: a total creative freedom
                </p>
                <div className="slide-btn">
                  <Link to="/">discover</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide-content">
              <img src={img2} alt="" />
              <div className='slide-text'>
                <p>
                  the patek philippe seal
                </p>
                <div className="slide-line-div"></div>
                <p className='slide__p'>
                  when the exceptional becomes the rule
                </p>
                <div className="slide-btn">
                  <Link to="/">discover</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide-content">
              <img src={img3} alt="" />
              <div className='slide-text'>
                <p>
                  savoir-faire: the human touch
                </p>
                <div className="slide-line-div"></div>
                <p className='slide__p'>
                  The irreplaceable skill of hand-finishing
                </p>
                <div className="slide-btn">
                  <Link to="/">discover</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide-content">
              <img src={img4} alt="" />
              <div className='slide-text'>
                <p>
                  the patek philippe museum
                </p>
                <div className="slide-line-div"></div>
                <p className='slide__p'>
                  A "temple to watchmaking" in Geneva
                </p>
                <div className="slide-btn">
                  <Link to="/">discover</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide-content">
              <img src={img5} alt="" />
              <div className='slide-text'>
                <p>
                  the history of patek philippe
                </p>
                <div className="slide-line-div"></div>
                <p className='slide__p'>
                  From 1839 to nowadays...
                </p>
                <div className="slide-btn">
                  <Link to="/">discover</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
            <div className="auto-btn5"></div>
          </div>
        </div>
        <div className="nav-manual">
          <label htmlFor="radio1" className="manual" onClick={() => handleManualClick(1)}></label>
          <label htmlFor="radio2" className="manual" onClick={() => handleManualClick(2)}></label>
          <label htmlFor="radio3" className="manual" onClick={() => handleManualClick(3)}></label>
          <label htmlFor="radio4" className="manual" onClick={() => handleManualClick(4)}></label>
          <label htmlFor="radio5" className="manual" onClick={() => handleManualClick(5)}></label>
        </div>
      </div>
    </>
  );
};

export default Carousel;
