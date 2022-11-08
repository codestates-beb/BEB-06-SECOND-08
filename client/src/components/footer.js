import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faApple, faSquareGithub, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faSquare } from "@fortawesome/free-solid-svg-icons";
function Footer() {
    return (

        <div className="footer">
            <div className="col-1">
                <h3>LINKS</h3>
                <a href="/">Home</a><p />
                <a href="/Post">Post</a>
                <a href="">Market</a>
                <a href="">Sign Up</a>
            </div>
            <div className="col-2">
                <h3>NEWSLETTER</h3>
                <form >
                    <input className="input_footer" type="email" placeholder="Your E-mail Address"></input><br />
                    <button className="btn_footer" type="submit">SUBSCRIBE NOW</button>
                </form>
            </div>
            <div className="col-3">
                <h3>BE OWNED BY</h3>
                <p>임준섭 <a href='https://github.com/k19880925'><FontAwesomeIcon icon={faSquareGithub} /></a><a className="icon_black"><FontAwesomeIcon icon={faInstagram} /></a><a className="icon_black"><FontAwesomeIcon icon={faLinkedin} /></a><a className="icon_black"><FontAwesomeIcon icon={faYoutube} /></a></p>
                <p>문지훈 <a href='http://https://github.com/jellymen7'><FontAwesomeIcon icon={faSquareGithub} /></a> <a className="icon_black"><FontAwesomeIcon icon={faInstagram} /></a><a className="icon_black"><FontAwesomeIcon icon={faLinkedin} /></a><a className="icon_black"><FontAwesomeIcon icon={faYoutube} /></a></p>
                <p>최진영 <a href='https://github.com/CDDWNE'><FontAwesomeIcon icon={faSquareGithub} /></a><a className="icon_black"><FontAwesomeIcon icon={faInstagram} /></a><a className="icon_black"><FontAwesomeIcon icon={faLinkedin} /></a><a className="icon_black"><FontAwesomeIcon icon={faYoutube} /></a></p>
                <p>이정원 <a href='https://github.com/jungbal'><FontAwesomeIcon icon={faSquareGithub} /></a><a className="icon_black"><FontAwesomeIcon icon={faInstagram} /></a><a className="icon_black"><FontAwesomeIcon icon={faLinkedin} /></a><a className="icon_black"><FontAwesomeIcon icon={faYoutube} /></a></p>
                <p> SteemEight, BEB 06<br />CodeStates</p>
            </div>

        </div >
    )
}
export default Footer;
