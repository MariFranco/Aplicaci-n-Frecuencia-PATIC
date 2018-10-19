var Re = document.querySelector('#notaRe');
var Mi = document.querySelector('#notaMi');
var Fa = document.querySelector('#notaFa');
var Sol = document.querySelector('#notaSol');
var La = document.querySelector('#notaLa');
var Si = document.querySelector('#notaSi');
var Do = document.querySelector('#notaDo');
var Re2 = document.querySelector('#notaRe2');


function frecuenciaActual(max){
	var cont = 0;
	var next = false;
	//Escala de re, aun no se como lo voy a organizar
	//Referencia http://www.edu.xunta.gal/centros/iesasmarinas/aulavirtual2/file.php/48/Audacity_crear_pistas_sonoras.pdf
	
	//Re
	do{
		cont++;
		setTimeout(1000, function(){});
	}while( max==305 && cont<3)
	if(cont==3){
		//Mi
		Re.style.color="green";
		cont=0;
		do{
			cont++;
			setTimeout(1000, function(){});
			console.log(cont);
		}while( max==328 && cont<3)
		if(cont==3){
			//Fa#
			Mi.style.color="green";
			cont=0;
			do{
				cont++;
				setTimeout(1000, function(){});
			}while( max==370 && cont<3)
			if(cont==3){
				//Sol
				Fa.style.color="green";
				cont=0;
				do{
					cont++;
					setTimeout(1000, function(){});
				}while( max==392 && cont<3)
				if(cont==3){
					//La
					Sol.style.color="green";
					cont=0;
					do{
						cont++;
						setTimeout(1000, function(){});
					}while( max==445 && cont<3)
					if(cont==3){
						//Si
						La.style.color="green";
						cont=0;
						do{
							cont++;
							setTimeout(1000, function(){});
						}while( max==294 && cont<3)
						if(cont==3){
							//Do
							Si.style.color="green";
							cont=0;
							do{
								cont++;
								setTimeout(1000, function(){});
							}while( max==494 && cont<3)
							if(cont==3){
								//Re
								Do.style.color="green";
								cont=0;
								do{
									cont++;
									setTimeout(1000, function(){});
								}while( max==524 && cont<3)
								if(cont==3){
									//Se acabo el nivel
									Re2.style.color="green";
								}
							}
						}
					}
				}
			}
		}
	}
}

function afinadorViolin(max){
	//Aun no existe esta funcion en el resto del codigo, falta implementar
	//referencia http://hyperphysics.phy-astr.gsu.edu/hbasees/Music/violin.html
	//sol
	if(max<245){
		if(max==196){
			//nota correcta, debería haber un cambio de color o algo que lo indique
		}
		else{
			//nota incorrecta, deberia haber algo que lo indique
		}
	}
	//re
	if(max>246 && max<367){
		if(max==294){
			//nota correcta, debería haber un cambio de color o algo que lo indique
		}
		else{
			//nota incorrecta, deberia haber algo que lo indique
		}
	}
	//la
	if(max>368 && max<549){
		if(max==445){
			//nota correcta, debería haber un cambio de color o algo que lo indique
		}
		else{
			//nota incorrecta, deberia haber algo que lo indique
		}
	}
	//mi
	if(max>550){
		if(max==659){
			//nota correcta, debería haber un cambio de color o algo que lo indique
		}
		else{
			//nota incorrecta, deberia haber algo que lo indique
		}
	}

}

function afinadorCello(max){
	//Aun no existe esta funcion en el resto del codigo, falta implementar
	//referencia http://hyperphysics.phy-astr.gsu.edu/hbasees/Music/cello.html
	//do
	if(max<82){
		if(max==65){
			//nota correcta, debería haber un cambio de color o algo que lo indique
		}
		else{
			//nota incorrecta, deberia haber algo que lo indique
		}
	}
	//sol
	if(max>83 && max<123){
		if(max==98){
			//nota correcta, debería haber un cambio de color o algo que lo indique
		}
		else{
			//nota incorrecta, deberia haber algo que lo indique
		}
	}
	//re
	if(max>124 && max<294){
		if(max==147){
			//nota correcta, debería haber un cambio de color o algo que lo indique
		}
		else{
			//nota incorrecta, deberia haber algo que lo indique
		}
	}
	//la
	if(max>295){
		if(max==445){
			//nota correcta, debería haber un cambio de color o algo que lo indique
		}
		else{
			//nota incorrecta, deberia haber algo que lo indique
		}
	}

}
