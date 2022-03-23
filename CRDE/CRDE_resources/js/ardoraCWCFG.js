//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=5;
var score=0; scoreMax=5; scoreInc=5; scoreDec=10;
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFFFF"; colorButton="#9148B7"; colorText="#000000"; colorSele="#FFFF00";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Copperplate / Copperplate Gothic Light, sans-serif";
var fActi="Copperplate / Copperplate Gothic Light, sans-serif";
var fDefs="Copperplate / Copperplate Gothic Light, sans-serif";
var fEnun="Century Gothic, sans-serif";
var timeOnMessage=5; messageOk="Buen trabajo, felicidades"; messageTime=""; messageError="Incorrecto, intenta de nuevo"; messageErrorG="Incorrecto, intenta de nuevo"; messageAttempts="Se terminaron los intentos"; isShowMessage=false;
var urlOk="https://www.youtube.com/watch?v=dQw4w9WgXcQ"; urlTime=""; urlError="https://www.youtube.com/watch?v=dQw4w9WgXcQ"; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#00FF40"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q1JERQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Rw==","VQ==","QQ==","RA==","QQ==","TA==","UQ==","VQ==","SQ==","Vg==","SQ==","Ug==","","",""],["QQ==","","","","","RQ==","","","","QQ==","","","","",""],["TA==","","","","","Tw==","","","","Uw==","","","","",""],["QQ==","","","","","Tg==","","","","Qw==","","","","",""],["SQ==","","","","","","","","","Tw==","","","","",""],["Qw==","Tw==","Uw==","VA==","RQ==","Ug==","QQ==","","","Uw==","","","","",""],["Tw==","","","Tw==","","","","Qg==","","","","","","",""],["","","","TA==","","","","RQ==","Qg==","Ug==","Tw==","","","",""],["","","","RQ==","","","","VA==","","","","","","",""],["","","","RA==","","","","SQ==","","","","","","",""],["","","","Tw==","","","","Qw==","RQ==","Tg==","VA==","Ug==","QQ==","TA==",""],["","","","","","","","QQ==","","","","","","",""],["UA==","SQ==","Ug==","SQ==","Tg==","RQ==","Tw==","Uw==","","","","","","",""],["","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","",""]];
var x1=[1,4,8,1,8,8,1,1,6,10];
var y1=[1,6,7,6,8,11,13,1,1,1];
var x2=[1,4,8,7,11,14,8,12,6,10];
var y2=[7,11,13,6,8,11,13,1,4,6];
var imaCW=["CRDE_resources/media/Macizo galaico 3.jpeg","CRDE_resources/media/Montes de Toledo.jpeg","CRDE_resources/media/Cordilleras beticas.jpeg","CRDE_resources/media/Costero catalana 3.jpeg","CRDE_resources/media/Depresion del Ebro.jpeg","CRDE_resources/media/Sistema Central 3.jpeg","CRDE_resources/media/Pirineos.jpeg","CRDE_resources/media/Depresion del Guadalquivir.jpeg","CRDE_resources/media/Montes de Leon.jpeg","CRDE_resources/media/Montes Vascos.jpeg"];
var audioCW=["","","","","","","","","",""];
var defCW=["Macizo ubicado mayoritariamente en Galicia.","Cordillera en la Submeseta Sur de la península ibérica, formada por varias sierras, que separan la cuenca del Tajo de la del Guadiana; lo antes descrito hace referencia a los Montes de:","Nombre colectivo para las cordilleras en el sur de la Península Ibérica y el norte de Marruecos; el nombre es de este conjunto es Cordilleras...","Sistema de sierras paralelo a la costa, que se cierra por el este con la Depresión del Ebro, ¿a que cordillera catalana hace referencia la anterior definición?","Nombre de río cuya depresión esta situada a su alrededor, esta situado al noroeste de la península.","Sistema montañoso que sirve de división entre la cuenca del Duero y del Tajo.","Cordillera que separa la península ibérica del resto de Europa.","Depresión geográfica en el suroeste de la península ibérica.","Conjunto montañoso español localizado en el oeste de las provincias de León, Zamora y Orense.","Conjunto de sierras cuyas cimas más altas son Aizkorri, Gorbea; y las sierras de Aralar y Andía. Lo anterior mencionado hace referencia a los Montes:"];
var colNum=15;
var rowNum=15;
