$(document).ready(function(){
	$('#throw').hide();
	$('#run').hide();
	$('#playertype').change(function(){
		var playerSelected = document.getElementById("playertype");
		var playertypeX = playerSelected.options[playerSelected.selectedIndex].text;
		// alert(playertype) //was a test to see if selected player is being grabbed
			if (playertypeX == "Quarterback"){
			// alert(playertype) //was a test to see if selected player is being grabbed
				$('#throw').show()
			}
		// alert(txtthrow)
			if (playertypeX == "Runningback"){
				$('#run').show()
			}
	});
	try {
	$('#submit').on('click', function(){
		var name = $('#txtname').val();
		var playerSelected = document.getElementById("playertype");
		var playertype = playerSelected.options[playerSelected.selectedIndex].text;
		var txtthrow = $('#txtthrow').val();
		var txtrun = $('#txtrun').val();
		// alert(name)
		// alert(txtthrow)
		// alert(txtrun)

		$.ajax({
		url: '/main/playerlog',
		type: 'POST',
		data: {name1: name, playertype1: playertype, txtthrow1: txtthrow, txtrun1: txtrun},
		}).done(function(data){
			console.log(data);
		}); //not sure when i need a done
	});
	} catch (err){
		alert("An expected error has occured.  We will fix it shortly.")
	}
});
