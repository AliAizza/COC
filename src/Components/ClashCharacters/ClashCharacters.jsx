import React, { useState, useEffect } from 'react';
import './ClashCharacters.css'

import goblin_img from '../Assets/goblin.png'
import barbarian_img from '../Assets/barbarian.png'
import archer_img from '../Assets/archer.png'
import giant_img from '../Assets/giant.png'
import wizard_img from '../Assets/wizard.png'
import dragon_img from '../Assets/dragon.png'



function ClashCharacters() {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const [activeSection, setActiveSection] = useState("goblin");

  const handleScroll = () => {
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header ul a');

    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 350;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navlinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector("header ul a[href*='" + id + "']").classList.add("active");
        });
      };


    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <>
      <header>
        <a id='logo' className={`${menuVisible ? "logo logo-open" : "logo"}`}>COC</a>
        <ul id='nav-list' className={`nav-list ${menuVisible ? "menu-open" : ""}`}>
          <li><a href='#goblin' className={activeSection === 'goblin' ? 'btn1 active' : 'btn1'} onClick={toggleMenu} >Goblin</a></li>
          <li><a href='#barbarian' className={activeSection === 'barbarian' ? 'btn2 active' : 'btn2'} onClick={toggleMenu} >Barbarian</a></li>
          <li><a href='#archer' className={activeSection === 'archer' ? 'btn3 active' : 'btn3'} onClick={toggleMenu} >Archer</a></li>
          <li><a href='#giant' className={activeSection === 'giant' ? 'btn4 active' : 'btn4'} onClick={toggleMenu} >Giant</a></li>
          <li><a href='#wizard' className={activeSection === 'wizard' ? 'btn5 active' : 'btn5'} onClick={toggleMenu} >Wizard</a></li>
          <li><a href='#dragon' className={activeSection === 'dragon' ? 'btn6 active' : 'btn6'} onClick={toggleMenu} >Dragon</a></li>
        </ul>
        <div className={`bx ${menuVisible ? "bx-x" : "bx-menu"}`} id='menu-icon' onClick={toggleMenu}></div>
      </header>
      <div className='icons'>
        <a>
          <i className="ri-instagram-line default"></i>
          <i className="ri-instagram-fill hover"></i>
        </a>
        <a>
          <i className="ri-youtube-line default"></i>
          <i className="ri-youtube-fill hover"></i>
        </a>
        <a>
          <i className="ri-twitter-line default"></i>
          <i className="ri-twitter-fill hover"></i>  
        </a>
      </div>
      <section className='sec1' id='goblin'>
        <div className='hero'>
          <h5>#1st Character</h5>
          <h4>Attack Type: Melee</h4>
          <h1>GOBLIN</h1>
          <p>"These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless."</p>
          <a>Learn More</a>
          <a className='play'><i className='ri-play-fill'></i>Play</a>
        </div>
        <div className='image'>
          <img src={goblin_img}/>
        </div>
      </section>
      <section className='sec2' id='barbarian'>
        <div className='hero'>
          <h5>#2nd Character</h5>
          <h4>Attack Type: Melee</h4>
          <h1>BARBARIAN</h1>
          <p>"This fearless warrior relies on his bulging muscles and striking mustache to wreak havoc in enemy villages. Release a horde of Barbarians and enjoy the mayhem!"</p>
          <a className='learn'>Learn More</a>
          <a className='play'><i className='ri-play-fill'></i>Play</a>
        </div>
        <div className='image'>
          <img src={barbarian_img}/>
        </div>
      </section>
      <section className='sec3' id='archer'>
        <div className='hero'>
          <h5>#3rd Character</h5>
          <h4>Attack Type: Ranged</h4>
          <h1>ARCHER</h1>
          <p>"These sharpshooters like to keep their distance on the battlefield and in life. Nothing makes them happier than single-mindedly taking down their target."</p>
          <a className='learn'>Learn More</a>
          <a className='play'><i className='ri-play-fill'></i>Play</a>
        </div>
        <div className='image'>
          <img src={archer_img}/>
        </div>
      </section>
      <section className='sec4' id='giant'>
        <div className='hero'>
          <h5>#4th Character</h5>
          <h4>Attack Type: Melee</h4>
          <h1>GIANT</h1>
          <p>"These big guys may seem calm, but show them a turret or cannon and you'll see their fury unleashed! Slow yet durable, these warriors are best used to soak up hits."</p>
          <a className='learn'>Learn More</a>
          <a className='play'><i className='ri-play-fill'></i>Play</a>
        </div>
        <div className='image'>
          <img src={giant_img}/>
        </div>
      </section>
      <section className='sec5' id='wizard'>
        <div className='hero'>
          <h5>#5th Character</h5>
          <h4>Attack Type: Area Splash</h4>
          <h1>WIZARD</h1>
          <p>"The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!"</p>
          <a className='learn'>Learn More</a>
          <a className='play'><i className='ri-play-fill'></i>Play</a>
        </div>
        <div className='image'>
          <img src={wizard_img}/>
        </div>
      </section>
      <section className='sec6' id='dragon'>
        <div className='hero'>
          <h5>#6th Character</h5>
          <h4>Attack Type: Area Splash</h4>
          <h1>DRAGON</h1>
          <p>"The might of the dragons are known throughout the land. This scaly terror of the skies feels no mercy and nothing will escape the fiery splashes of his breath."</p>
          <a className='learn'>Learn More</a>
          <a className='play'><i className='ri-play-fill'></i>Play</a>
        </div>
        <div className='image'>
          <img src={dragon_img}/>
        </div>
      </section>
    </>
  )
}

export default ClashCharacters