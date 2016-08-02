$( document ).ready(function() {

  var Torta = function (tipo_torta, tiempo_torta = 0) {
    this.tipo_torta = tipo_torta;
    this.tiempo_torta = tiempo_torta;
   };

  // var torta1 = new Torta('Milanesa');
  // var torta2 = new Torta('Queso', '8');
  // var torta3 = new Torta('Jamon', '3');

  // console.log(torta1);

  // torta1.tiempo_torta = 10;
  // console.log(torta1);
  // console.log(torta2);
  // console.log(torta3);
  // console.log(torta1.tipo_torta);

  // Torta.prototype.dimeTipo = function() {
  //   console.log("Hello, I'm " + this.tipo_torta);
  // };




  $(".create-oven").click(function(event) {
    event.preventDefault();
    $(".oven").css("visibility", "visible");
  });



  $("#cook").submit(function(event){
    event.preventDefault();
    var time_val = $("#time_id").val()
    var tipo_val = $("#tipo_id").val()
    console.log(tipo_val)
    console.log(time_val)
    // time_val += 1;

    var quemado = "QUEMADO"
    var listo = "LISTO"
    var crudo = "CRUDO"
    var casi_listo = "CASI-LISTO"

    // Creamos el objeto torta


      
    if (tipo_val === "Milanesa") {
      var torta = new Torta("Milanesa",10)
    }
    else if (tipo_val === "Queso") {
      var torta = new Torta("Queso",8)
    }
    else if (tipo_val === "Jamon") {
      var torta = new Torta("Jamon",3)
    }
    else {
      var torta = new Torta("error",1)
    }

    var val_listo = time_val - torta.tiempo_torta
    console.log(val_listo)
    // console.log(torta)

    

    var n = parseInt(time_val) + 1;
    // var n = time_val;

    setTimeout(countDown,1000);
    function countDown(){
      n--;
      if(n > 0){
        setTimeout(countDown,1000);
      }

      if ( n < val_listo && n != val_listo  )  {
        $("#timer").removeClass("LISTO CASI-LISTO CRUDO")
        $("#timer").addClass("QUEMADO")
        $("#status").text(quemado)
      }

      else if ( n == val_listo )  {
        $("#timer").removeClass("QUEMADO CASI-LISTO CRUDO")
        $("#timer").addClass("LISTO")
        $("#status").text(listo)
      }

      else if ( n > val_listo &&  n < time_val ) {
        $("#timer").removeClass("QUEMADO LISTO CRUDO")
        $("#timer").addClass("CASI-LISTO")
        $("#status").text(casi_listo)
      }

      else if ( n == time_val ) {
        $("#timer").removeClass("QUEMADO CASI-LISTO LISTO")
        $("#timer").addClass("CRUDO")
        $("#status").text(crudo)
      }

      else {
        console.log("");
      }

      // console.log(n);
      
      $("#countdown").text(n)

      var final_status = $("#status").text();
      console.log(final_status)

      if ( n == 0 ) {
        $("#history").css("visibility", "visible");
        $("#history").append("<li> Tu torta es de: " + tipo_val + " y tiene un status de: " + final_status + "</li>")
      };

    };

    


  });

    

});

// Class Torta

// Class TortaBatch

// Class Oven
