
function contact() {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_u1rzqb9',
            'template_dg8ppp9',
            event.target,
            'YY4k315Gu1IZht--b'
        ).then(() =>{
            console.log('this worked')
        })
}