import "./contact.css"
import email from "../../img/email.png"
import whatsapp from "../../img/whatsapp.png"
import telephone from "../../img/telephone.png"
import linkedln from "../../img/linkedin.png"
import github from "../../img/github.png"
import { useRef } from "react"

const Contact = () => {
    const formRef  = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
      <div className="co">
          <div className="co-bg"></div>
          <div className="co-wrapper">
              <div className="co-left">
                <h1 className="co-title">
                    Get In Touch
                </h1>
                <div className="co-info">
                    <div className="co-info-item">
                        <img src={email} alt="" className="c-icon" />
                        manal.irfan26@gmail.com
                    </div>
                    <div className="co-info-item">
                        <img src={telephone} alt="" className="c-icon" />
                        +971588369806
                    </div>
                    <div className="co-info-item">
                        <img src={whatsapp} alt="" className="c-icon" />
                        +966546197300
                    </div>
                    <div className="co-info-item">
                        <img src={linkedln} alt="" className="c-icon" />
                        <a href="https://www.linkedin.com/in/manal-irfan-khalil/">https://www.linkedin.com/in/manal-irfan-khalil/</a>
                    </div>
                    <div className="co-info-item">
                        <img src={github} alt="" className="c-icon" />
                        <a href="https://github.com/ManalIrfan">https://github.com/ManalIrfan</a>
                    </div>
                </div>
              </div>
              <div className="co-right">
                  <div className="co-desc">
                      Available for freelancing and looking for a full time committment from June 2021 onwards!
                  </div>
                  <form ref= {formRef} onSubmit={handleSubmit}>
                      <input type="text" placeholder="Name" name="user-name"></input>
                      <input type="text" placeholder="Subject" name="user-subject"></input>
                      <input type="text" placeholder="Email" name="user-email"></input>
                      <textarea name="message" placeholder="Message" id="" cols="30" rows="10"></textarea>
                      <button>Submit</button>
                  </form>
              </div>
          </div>
      </div>
    )
}

export default Contact
