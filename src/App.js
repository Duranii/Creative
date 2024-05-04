import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="parent">
        <div class="main">
            <nav class="navbar-container">
                <ul>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <div class="hamburger"><svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H30" stroke="#21243D" stroke-width="1.6"/>
                        <path d="M0 10H30" stroke="#21243D" stroke-width="1.6"/>
                        <path d="M0 19H30" stroke="#21243D" stroke-width="1.6"/>
                        </svg>
                        </div>
                </ul>
            </nav>
            <div class="hero-container">
                <div class="grid">
                <div class="span">
                    <span>Hi, I am John <br/>Creative Technologist</span>
                    <p class="unique">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br class="khatam"/> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br class="khatam1"/> consequat sunt nostrud amet.</p>
                    <button class="resume">Download Resume</button>
                </div>
                <div class="image">
                    <img src="./assets/Ellipse 1.png" alt=""/>    
                </div>
            </div>
        </div>
        </div>

        <div class="parent1">
            <div class="main1">
                <div class="top">
                    <p class="post">Recent posts</p>
                    <p class="all">View all</p>
                </div>
                <div class="for">
                    <div class="box1">
                        <div class="center">
                        <p class="make">Making a design system from <br/> scratch</p>
                        <p class="date">12 Feb 2020   |   Design, Pattern</p>
                        <p class="para">Amet minim mollit non deserunt ullamco est sit <br class="chor"/> aliqua dolor do amet sint. Velit officia consequat <br class="nokia"/> duis enim velit mollit. Exercitation veniam <br class="vivo"/> consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                    <div class="box2">
                        <div class="center">
                        <p class="make">Creating pixel perfect icons in <br/> Figma</p>
                        <p class="date">12 Feb 2020   |   Figma, Icon Design</p>
                        <p class="para">Amet minim mollit non deserunt ullamco est sit <br class="chor"/> aliqua dolor do amet sint. Velit officia consequat <br class="nokia"/> duis enim velit mollit. Exercitation veniam <br class="vivo"/> consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="parent2">
            <div class="main2">
                <p class="work">Featured works</p>

                <div class="last">
                    <img src="./assets/Rectangle 30.png" alt=""/>
                    <div class="whole">
                    <p class="dash">Designing Dashboards</p>
                    <div class="full">
                    <button class="board">2020</button>
                    <p class="change">Dashboard</p>
                    </div>
                    <p class="graph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br class="ufone"/> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <br class="telenor"/> nostrud amet.</p>
                    </div>
                </div>
                <hr class="line"></hr>

                <div class="bottle">
                <div class="last">
                    <img src="./assets/Rectangle 32.png" alt=""/>
                    <div class="whole">
                    <p class="dash">Vibrant Portraits of 2020</p>
                    <div class="full">
                    <button class="board">2018</button>
                    <p class="change">Illustration</p>
                    </div>
                    <p class="graph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit <br class="ufone"/> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt <br class="telenor"/> nostrud amet.</p>
                    </div>
                </div>
                <hr class="line"></hr>

                <div class="last">
                    <div class="tang"><img src="./assets/Rectangle 34.png" alt=""/></div>
                    <div class="whole">
                    <p class="dash">36 Days of Malayalam type</p>
                    <div class="full">
                    <button class="board">2018</button>
                    <p class="change">Typography</p>
                    </div>
                    <p class="graph1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br class="jazz"/> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br class="warid"/> consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <hr class="line"></hr>
                </div>

                <div class="icon">
                    <div class="gap">
                    <div><img src="./assets/fb.png" alt=""/></div>
                    <div><img src="./assets/insta.png" alt=""/></div>
                    <div><img src="./assets/Group.png" alt=""/></div>
                    <div><img src="./assets/Linkedin.png" alt=""/></div></div> <br/> <p class="right">Copyright &copy2020 All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
