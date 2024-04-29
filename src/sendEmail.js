import emailjs from '@emailjs/browser';

export const sendEmail = (templateParams) => {
  emailjs.send('service_71voj9k', 'template_dvsz1jy', templateParams, 'GzhQ549cMulfieyTi')
   
}