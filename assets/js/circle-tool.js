var init_radius = "cm";
var init_diameter = "cm";
var init_circumference = "cm";
var init_area = "cm2";
$("#reset_btn").click(function() {
  init_radius = "cm";
  init_diameter = "cm";
  init_circumference = "cm";
  init_area = "cm2";
  $("#radius_input").val('');
  $("#diameter_input").val('');
  $("#circumference_input").val('');
  $("#area_input").val('');
  $("#radius_unit").html(init_radius);
  $("#radius_unit").data(init_radius);
  $("#diameter_unit").html(init_diameter);
  $("#diameter_unit").data(init_diameter);
  $("#circumference_unit").html(init_circumference);
  $("#circumference_unit").data(init_circumference);
  $("#area_unit").html('cm²');
  $("#area_unit").data('cm²');
});
$(".dropdown-menu li a").click(function() {
  $(this).parents(".input-group").find('.btn').html($(this).data('value'));
  $(this).parents(".input-group").find('.btn').val($(this).data('value'));
});
$(".dropdown-menu li a").click(function() {
  var id = $(this).parents(".input-group").find('.btn').attr('id');
  if(id == "radius_unit") {
	var newUnit = $(this).data('value');
	var inputTxt = $("#radius_input");
	if(!isNaN(inputTxt.val()) && inputTxt.val().trim() != "") {
	  if(newUnit != init_radius) {
		var val = inputTxt.val();
		var AA = math.unit(val, init_radius);
		var BB = AA.to(newUnit).toNumber();
		inputTxt.val(BB);
		init_radius = newUnit;
	  }
	} else {
	  init_radius = newUnit;
	}
  } else if(id == "diameter_unit") {
	var newUnit = $(this).data('value');
	var inputTxt = $("#diameter_input");
	if(!isNaN(inputTxt.val()) && inputTxt.val().trim() != "") {
	  if(newUnit != init_diameter) {
		var val = inputTxt.val();
		var AA = math.unit(val, init_diameter);
		var BB = AA.to(newUnit).toNumber();
		inputTxt.val(BB);
		init_diameter = newUnit;
	  }
	} else {
	  init_diameter = newUnit;
	}
  } else if(id == "circumference_unit") {
	var newUnit = $(this).data('value');
	var inputTxt = $("#circumference_input");
	if(!isNaN(inputTxt.val()) && inputTxt.val().trim() != "") {
	  if(newUnit != init_circumference) {
		var val = inputTxt.val();
		var AA = math.unit(val, init_circumference);
		var BB = AA.to(newUnit).toNumber();
		inputTxt.val(BB);
		init_circumference = newUnit;
	  }
	} else {
	  init_circumference = newUnit;
	}
  } else if(id == "area_unit") {
	var newUnit = $(this).data('value');
	if(newUnit == "mm²") newUnit = "mm2";
	else if(newUnit == "cm²") newUnit = "cm2";
	else if(newUnit == "dm²") newUnit = "dm2";
	else if(newUnit == "m²") newUnit = "m2";
	else if(newUnit == "km²") newUnit = "km2";
	else if(newUnit == "in²") newUnit = "sqin";
	else if(newUnit == "ft²") newUnit = "sqft";
	else if(newUnit == "yd²") newUnit = "sqyd";
	else if(newUnit == "mi²") newUnit = "sqmi";
	var inputTxt = $("#area_input");
	if(!isNaN(inputTxt.val()) && inputTxt.val().trim() != "") {
	  if(newUnit != init_area) {
		var val = inputTxt.val();
		var AA = math.unit(val, init_area);
		var BB = AA.to(newUnit).toNumber();
		inputTxt.val(BB);
		init_area = newUnit;
	  }
	} else {
	  init_area = newUnit;
	}
  }
});
$(".numbersOnly").on("keypress keyup blur", function(event) {
  //this.value = this.value.replace(/[^0-9\.]/g,'');
  $(this).val($(this).val().replace(/[^0-9\.]/g, ''));
  if((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
	event.preventDefault();
  }
});
$("#radius_input").on("keypress keyup blur", function(event) {
  var radius = $(this).val();
  if(radius == "") {
	$("#area_input").val("");
	$("#circumference_input").val("");
	$("#diameter_input").val("");
	return;
  }
  var cmRadius = math.unit(radius, init_radius).to("m").toNumber();
  var area = math.pi * cmRadius * cmRadius;
  var resultArea = math.unit(area, "m2").to(init_area).toNumber();
  $("#area_input").val(math.format(resultArea, 7));
  var circumference = math.pi * cmRadius * 2;
  var resultCircumference = math.unit(circumference, "m").to(init_circumference).toNumber();
  $("#circumference_input").val(math.format(resultCircumference, 7));
  var diameter = 2 * cmRadius;
  var resultDiameter = math.unit(diameter, "m").to(init_diameter).toNumber();
  $("#diameter_input").val(math.format(resultDiameter, 7));
});
$("#diameter_input").on("keypress keyup blur", function(event) {
  var diameter = $(this).val();
  if(diameter == "") {
	$("#area_input").val("");
	$("#circumference_input").val("");
	$("#radius_input").val("");
	return;
  }
  var radius = diameter / 2;
  var cmRadius = math.unit(radius, init_radius).to("m").toNumber();
  var area = math.pi * cmRadius * cmRadius;
  var resultArea = math.unit(area, "m2").to(init_area).toNumber();
  $("#area_input").val(math.format(resultArea, 7));
  var circumference = math.pi * cmRadius * 2;
  var resultCircumference = math.unit(circumference, "m").to(init_circumference).toNumber();
  $("#circumference_input").val(math.format(resultCircumference, 7));
  var resultRadius = math.unit(cmRadius, "m").to(init_radius).toNumber();
  $("#radius_input").val(math.format(resultRadius, 7));
});
$("#circumference_input").on("keypress keyup blur", function(event) {
  var circumference = $(this).val();
  if(circumference == "") {
	$("#area_input").val("");
	$("#radius_input").val("");
	$("#diameter_input").val("");
	return;
  }
  var radius = circumference / (2 * math.pi);
  var cmRadius = math.unit(radius, init_radius).to("m").toNumber();
  var area = math.pi * cmRadius * cmRadius;
  var resultArea = math.unit(area, "m2").to(init_area).toNumber();
  $("#area_input").val(math.format(resultArea, 7));
  var diameter = 2 * cmRadius;
  var resultDiameter = math.unit(diameter, "m").to(init_diameter).toNumber();
  $("#diameter_input").val(math.format(resultDiameter, 7));
  var resultRadius = math.unit(cmRadius, "m").to(init_radius).toNumber();
  $("#radius_input").val(math.format(resultRadius, 7));
});
$("#area_input").on("keypress keyup blur", function(event) {
  var area = $(this).val();
  if(area == "") {
	$("#radius_input").val("");
	$("#circumference_input").val("");
	$("#diameter_input").val("");
	return;
  }
  var radius = math.sqrt(area / math.pi);
  var cmRadius = math.unit(radius, init_radius).to("m").toNumber();
  var circumference = math.pi * cmRadius * 2;
  var resultCircumference = math.unit(circumference, "m").to(init_circumference).toNumber();
  $("#circumference_input").val(math.format(resultCircumference, 7));
  var diameter = 2 * cmRadius;
  var resultDiameter = math.unit(diameter, "m").to(init_diameter).toNumber();
  $("#diameter_input").val(math.format(resultDiameter, 7));
  var resultRadius = math.unit(cmRadius, "m").to(init_radius).toNumber();
  $("#radius_input").val(math.format(resultRadius, 7));
});