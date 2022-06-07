import './handles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Handles() {
    function openEmail()
    {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sumukhaganesh@gmail.com', '_blank');
    }
    function openLinkedin() {

        window.open('https://www.linkedin.com/in/sumukha-mk-b77224146/', '_blank');

    }
    return (
        <div className="handles">
            <div className="buttons">
              
                <button className="email_button" onClick={openEmail}>
                    <span className="buttone"><i class="fa-solid fa-envelope"></i> Email</span>
            </button>
                <button className="linkedin_button" onClick={openLinkedin}>
                    
                    <i class="fa-brands fa-linkedin"></i> <span className="buttonli">Linked in</span></button>
                </div>
        </div>

    )
}
export default Handles;