$(function() {
	$("#btn_textcolor").spectrum({
		flat: false,
		allowEmpty:false,
		showInput: true,
		showAlpha: true,
		clickoutFiresChange: true,
		cancelText: "Annuler",
		chooseText: "Valider",
		showInitial: true,
		preferredFormat:"hex",
		change: function(color) {
		document.getElementById("btn_textcolor").value = color.toHex8String();
		document.getElementById("label_textcolor").innerHTML = '#' + color.toHex8String();
		}
	});
    
    $("#btn_shadowcolor").spectrum({
		flat: false,
		allowEmpty:false,
		showInput: true,
		showAlpha: true,
		clickoutFiresChange: true,
		cancelText: "Annuler",
		chooseText: "Valider",
		showInitial: true,
		preferredFormat:"hex",
		change: function(color) {
		document.getElementById("btn_shadowcolor").value = color.toHex8String();
		document.getElementById("label_shadowcolor").innerHTML = '#' + color.toHex8String();
		}
	});
    
    $("#gradient_startcolor").spectrum({
		flat: false,
		allowEmpty:false,
		showInput: true,
		showAlpha: true,
		clickoutFiresChange: true,
		cancelText: "Annuler",
		chooseText: "Valider",
		showInitial: true,
		preferredFormat:"hex",
		change: function(color) {
		document.getElementById("gradient_startcolor").value = color.toHex8String();
		document.getElementById("label_gradient_startcolor").innerHTML = '#' + color.toHex8String();
		}
	});
    
    $("#gradient_centercolor").spectrum({
		flat: false,
		allowEmpty:false,
		showInput: true,
		showAlpha: true,
		clickoutFiresChange: true,
		cancelText: "Annuler",
		chooseText: "Valider",
		showInitial: true,
		preferredFormat:"hex",
		change: function(color) {
		document.getElementById("gradient_centercolor").value = color.toHex8String();
		document.getElementById("label_gradient_centercolor").innerHTML = '#' + color.toHex8String();
		}
	});
    
    $("#gradient_endcolor").spectrum({
		flat: false,
		allowEmpty:false,
		showInput: true,
		showAlpha: true,
		clickoutFiresChange: true,
		cancelText: "Annuler",
		chooseText: "Valider",
		showInitial: true,
		preferredFormat:"hex",
		change: function(color) {
		document.getElementById("gradient_endcolor").value = color.toHex8String();
		document.getElementById("label_gradient_endcolor").innerHTML = '#' + color.toHex8String();
		}
	});
    
    $("#solid_color").spectrum({
		flat: false,
		allowEmpty:false,
		showInput: true,
		showAlpha: true,
		clickoutFiresChange: true,
		cancelText: "Annuler",
		chooseText: "Valider",
		showInitial: true,
		preferredFormat:"hex",
		change: function(color) {
		document.getElementById("solid_color").value = color.toHex8String();
		document.getElementById("label_solid_color").innerHTML = '#' + color.toHex8String();
		}
	});
    
    $("#stroke_color").spectrum({
		flat: false,
		allowEmpty:false,
		showInput: true,
		showAlpha: true,
		clickoutFiresChange: true,
		cancelText: "Annuler",
		chooseText: "Valider",
		showInitial: true,
		preferredFormat:"hex",
		change: function(color) {
		document.getElementById("stroke_color").value = color.toHex8String();
		document.getElementById("label_stroke_color").innerHTML = '#' + color.toHex8String();
		}
	});
});
