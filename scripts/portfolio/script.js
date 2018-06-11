/******************/
/** BOTON CORREO **/
/******************/
function ChangeToOpen(x){

	x.className = "far fa-envelope-open";
}

function ChangeToClosed(x){

	x.className = "far fa-envelope";
}


/*************/
/** BOTONES **/
/*************/

function ButtonClick(x, filterType){
	
	var current = document.getElementsByClassName("pressed");

	//Quitamos la clase pressed del boton actualmente pulsado, si hay
	if(current.length != 0){

		//Check para no actualizar fondo si clickamos el actual
		if(x.className != current[0].className){
		
			ManagerBG(filterType);
		}

	  	current[0].className = current[0].className.replace(" pressed", "");
	}else{

		ManagerBG(filterType);
	}

	ResetToHidden();
	Show(filterType);

	x.className += " pressed"; 
}


//RESETEO DE TODAS LAS IMAGENES A HIDDEN
function ResetToHidden(){

	var listImageShown = document.getElementsByClassName("show");

	if(listImageShown.length != 0){

		var i = 0;
		while(i != listImageShown.length){

			listImageShown[i].className = listImageShown[i].className.replace(" show", "");
		}
	}
}

//MOSTRAMOS LAS IMAGENES FILTRADAS
function Show(x){


	var filterList = document.getElementsByClassName(x);
	var fullList = document.getElementsByClassName("gImage");

	if (x == "all") {

		for(var i=0; i<fullList.length; i++){

			fullList[i].className += (" show");
		}

	}else{

		for(var i=0; i<filterList.length; i++){

			filterList[i].className += (" show");
		}
	}
}

/**********************************/
/** CAMBIO DE FONDO SEGUN FILTRO **/
/**********************************/
function ManagerBG(x){

	var bg = document.getElementById("bgImage");

	bg.style.opacity = 0;

	if(x == "model"){

		setTimeout(function(){

		    bg.src = "http://www.guoguiyan.com/data/out/21/69039765-black-abstract-wallpapers.jpg";
		    bg.style.opacity = 1;

		}, 400);

	}else if (x == "shading") {

		setTimeout(function(){

		    bg.src = "https://orig00.deviantart.net/34fd/f/2015/341/f/a/abstract_4k_wallpaper_by_kanttii-d9jco4y.jpg";
		    bg.style.opacity = 1;

		}, 400);

	}else if (x == "anima") {

		setTimeout(function(){

		    bg.src = "https://i2.wp.com/www.deteched.com/wp-content/uploads/2016/11/abstract_pyramids-2560x1440.jpg";
		    bg.style.opacity = 1;
		    
		}, 400);

	}else{

		setTimeout(function(){

		    bg.src = "https://www.3d-wallpapers.info/wp-content/uploads/cool-abstract-wallpaper.jpg";
			bg.style.opacity = 1;
		    
		}, 400);
	}
}

/***********/
/** MODAL **/
/***********/

function Modal(x){

	var newSrc = x.src;
	var imgModal = document.getElementById("imagenModal");

	imgModal.src = newSrc;

	document.getElementById("modalDiv").style.display = 'block';
}

function ModalClose(){

	document.getElementById("modalDiv").style.display = 'none';
}

/*************************************/
/*** REALIZADO POR ALEJANDRO CALLE ***/
/*************************************/