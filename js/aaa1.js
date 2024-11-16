function enviar(){
	var x=document.getElementById('cr').value;
	var y=document.getElementById('con').value;
	if(x=="cristian")
	{
		if(y=="contra")
			{
				alert('correcto');
				location.href="menu.html";
			}
		else
			{alert('contraseña incorrecto');}
	}
}
function ocultarHorarios() {
            var horarios = document.querySelectorAll('.horario');
            horarios.forEach(function(horario) {
                horario.style.display = 'none';
            });
        }

        document.getElementById('btnSistemas').addEventListener('click', function() {
            ocultarHorarios();
            document.getElementById('horarioSistemas').style.display = 'block';
        });

        document.getElementById('btnSecretariado').addEventListener('click', function() {
            ocultarHorarios();
            document.getElementById('horarioSecretariado').style.display = 'block';
        });

        document.getElementById('btnContaduria').addEventListener('click', function() {
            ocultarHorarios();
            document.getElementById('horarioContaduria').style.display = 'block';
        });

        document.getElementById('btnOtraCarrera').addEventListener('click', function() {
            ocultarHorarios();
            document.getElementById('horarioOtraCarrera').style.display = 'block';
        });