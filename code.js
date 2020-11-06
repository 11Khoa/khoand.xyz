// SET KEY
var keykhoa = new Array();
// END SET KEY
var bienkiemtra = 0;
for( i=0 ; i<keykhoa.length ; i++ ){
	if(window.location.href.indexOf(keykhoa[i]) > -1) {
		bienkiemtra = 1;
		break;
	}
}
if(bienkiemtra == 0){
	jQuery('html').remove();
}
//jQuery('.primarykey').remove();
