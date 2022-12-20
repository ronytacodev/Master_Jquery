$(document).ready(function () {
    $('#leerEmpleados').click(function (e) { 
        e.preventDefault();
        $('#listaEmpleados').html('');
        $.getJSON('http://localhost/ajax_jquery/jquery_ajax/empleados.php',{"accion":"leer"},
            function (data) {
                // console.log(data);
                $.each(data, function (index, item) { 
                     $('#listaEmpleados').html($('#listaEmpleados').html()+`
                     <li><i class="fa fa-pencil-square-o" aria-hidden="true" 
                     data-id='${item.id}'
                     data-nombre='${item.nombre}'
                     data-puesto='${item.puesto}'
                     data-edad='${item.edad}'
                     ></i> ${item.nombre} -- ${item.puesto} -- ${item.edad}</li>
                     `);
                });
            }
        );
    });


    $('#crearEmpleados').click(function (e) { 
        e.preventDefault();
        let nombre = $('#nombre').val();
        let puesto = $('#puesto').val();
        let edad = $('#edad').val();
        $.post('http://localhost/ajax_jquery/jquery_ajax/empleados.php', {"accion":"insertar", "nombre":nombre, "puesto":puesto,"edad":edad},
            function (data) {
                if(data==="1"){
                    $('#nombre').val('');
                    $('#puesto').val('');
                    $('#edad').val('');
                    $('#lista-tab').click();
                    $('#leerEmpleados').click();
                }
            });
    });

    $(document).on('click','.fa-pencil-square-o', function(){
        console.log($(this).data('id'));
        $('#crearEmpleados').addClass('d-none');
        $('#editarEmpleados').removeClass('d-none');
        $('#datos-tab').html('Editar');
        $('#datos-tab').click();
        $('#nombre').val($(this).data('nombre'));
        $('#puesto').val($(this).data('puesto'));
        $('#edad').val($(this).data('edad'));
        $('#id').val($(this).data('id'));
    });

    $('#editarEmpleados').click(function (e) { 
        e.preventDefault();
        let nombre = $('#nombre').val();
        let puesto = $('#puesto').val();
        let edad = $('#edad').val();
        let id = $('#id').val();
        $.post('http://localhost/ajax_jquery/jquery_ajax/empleados.php',
        {"accion":editar, "nombre":nombre, "puesto":puesto, "edad":edad},
        function(data){
            if(data=="1"){

            }
        })

        $('#lista-tab').click();
        $('#leerEmpleados').click();
        $('#crearEmpleados').removeClass('d-none');
        $('#editarEmpleados').addClass('d-none');
    });


    // me quede en el min 15:58 del video 14
});