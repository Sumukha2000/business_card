import './info.css'
import pp from "../../images/sumukha_passport_pic.png"


function Info() {
    return (
        <div className="info">
          <div className="img-card">
            <img className="pp" src={pp} alt="imgnotfound" />
            </div>
            <div className="quickintro">
              
                <h2 className="name">
Sumukha MK</h2>
                <h3 className="designation">  Software Development Intern </h3>
                <h4 className="website">
                    <a href="https://sumukhaportfolio.netlify.app/" target="_blank" className="linkk"> portfolio website </a> </h4>
                <h6 className="address"> Carl Zeiss India Pvt Ltd,Bengaluru </h6>
            </div>
         </div>

    )
}
export default Info;