import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
        Tu Mensaje Ha Sido Enviado Correctamente.
        </Alert>
    )
}

const FormTwo = () => {

    const form = useRef();

    const [ result, showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yj5dgzp', 'template_hfduayo', form.current, 'WLENsTkBytC0yvItS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
          showresult(true);
      };

        setTimeout(() => {
            showresult(false);
        }, 5000);


    return (
        <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
        <div className="form-group">
            <label>Nompre</label>
            <input type="text" className="form-control" name="contact-name" required />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="contact-email" required />
        </div>
        <div className="form-group">
            <label>Teléfono</label>
            <input type="tel" className="form-control" name="contact-phone" required />
        </div>
        <div className="form-group mb--40">
            <label>Cuentanos un poco sobre tu empresa y lo que necesitas</label>
            <textarea className="form-control" name="contact-message" rows="4"></textarea>
            
        </div>
        <div className="form-group">
            <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Enviar</button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
        </div>

    </form>
    )
}

export default FormTwo;