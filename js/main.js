//Seleccionar todos los items del menú
const menuItems = document.querySelectorAll('.menu-item');

//Recorrer esa lista de nodos
menuItems.forEach(function(item) {
	//Escuchar el click en todos ellos
	item.addEventListener('click', function(e) {
		//En esta variable se asigna el que tiene atualmente la clase
        //Importante: colocarle la clase active al enlace de Inicio en el HTML
		const currentItem = document.querySelector('.active');
        //Se le quita la clase a ese elemento
		currentItem.classList.remove('active');
        //Se le agrega al elemento clickeado
		e.target.classList.add('active');
	});
});

