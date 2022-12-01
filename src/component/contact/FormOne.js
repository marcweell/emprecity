import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
            Mensaje Enviado Correctamente.
        </Alert>
    )
}

const FormOne = () => {

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
            <label>Nombre</label>
            <input type="text" className="form-control" name="contact-name" placeholder="Marco Sotos" required />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="contact-email" placeholder="emprecity@gmail.com" required />
        </div>
        <div className="form-group mb--40">
            <label>Teléfono</label>
            <input type="tel" className="form-control" name="contact-phone" placeholder="658913495" required />
        </div>
        <div className="form-group">
            <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Solicitar presupuesto Gratuito</button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
        </div>

    </form>
    )
}

export default FormOne;