		/* pour le chargement*/

		const Link = document.querySelectorAll('nav ul li a');
		const btn_check=document.getElementById('check');
		const loader=document.querySelector('.loader');

		window.addEventListener('load',() =>{
			loader.classList.add('fondu-out');
			});
        Link.forEach((link) => {
            link.addEventListener('click', (e) =>
            btn_check.checked = false);
        })
	/*
	<script src="https://smtpjs.com/v3/smtp.js"></script>
	<script>
		function sendEmail(){
			Email.send({
				//e5072b6f-1470-4a8f-b6aa-f5097103edb4
		    Host : "smtp.gmail.com",
		    Username : "manirakizablaise3@gmail.com",
		    Password : "ordinateur",
		    To : 'manirakizablaise3@gmail.com',
		    From : document.getElementById("email").value,
		    Subject : "This is the subject",
		    Body : "je suis:"document.getElementById("nom_prenom").value
		    +"<br>adresse e-mail :"document.getElementById("email").value
		    +"<br>Message :"document.getElementById("message").value
		}).then(
		  message => alert("message recu")
		);
			}
*/
	//envoi d'email avec emailjs --> 

		function succes(name){
			swal({
			  title: "hey,"+name.value+"",
			  text: "Message recu avec success",
			  icon: "success",
			  button: "Ok",
			});
		}
		function denied(){
			swal({
			  title: "Oups...",
			  text: "Erreur de Services",
			  icon: "error",
			  button: "Ok",
			  color:"red"
			});
		}
		function input_require(){
			swal({
			  title: "Oups...",
			  text: "Renseigne tous les champs",
			  icon: "error",
			  confirmButtonColor:"red",
			});
		}
		function sendMail(nom,email,message)
		{
			emailjs.send("service_jznakrk","template_updypd6",{
				from_name: email,
				to_name: nom,
				message: message,
				});

		}
		function Valide(){
			let nom_prenom=document.querySelector(".name")
			let mail=document.querySelector(".mail")
			let message=document.querySelector(".message")
			let bouton=document.querySelector(".btn_envoye");
			let form=

			bouton.addEventListener("click",(e)=>{
				e.preventDefault()

				if(nom_prenom.value == "" || mail.value=="" || message.value=="")
				{
					input_require();
				}
				else{
					sendMail(nom_prenom.value,mail.value,message.value);
					succes(nom_prenom);
					document.querySelector(".contact").reset();
				}
			});
		}
		Valide();