var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* Mensagem Hamalai e Uaummm */
bname=navigator.appName;
bversion=parseInt(navigator.appVersion)

if ((bname=="Netscape" && bversion>=4) || (bname=="Microsoft Internet Explorer" && bversion>=4)){
	if (bname=="Netscape"){
		brows = true
		del = 120
	}
	else{
		brows = false
		del = 320
}

var msg=0;
var z=0;
var timer1;
var message= new Array();
var color= new Array();
var values= new Array('+2')

function start(){
	if ((bname=="Netscape" && bversion>=4) || (bname=="Microsoft Internet Explorer" && bversion>=4)){
		if(z<values.length){
			var Imagem = parseInt((Math.random() * 2) + 1);			
			
			if (Imagem == 1) {
				Imagem = "hamalai.gif";
			}
			else {
				Imagem = "uaumm.gif";			
			}
			
			if (brows){
				document.layers['msgHamalai'].document.writeln('<P Class="main" Align="Center"><img src="images/hamalai.gif"></P>')
				document.layers['msgHamalai'].document.close();
			}
			else{					
				FraseDamiao.innerHTML = EscolheFraseDamiao();	
				msgHamalai.style.top = parseInt(Math.random() * 400);
				msgHamalai.style.left = parseInt(Math.random() * 600);
				msgHamalai.innerHTML = '<Pre><P Class="main" Align="Center"><img src="images/' + Imagem + '"></P></Pre>';				
			}
			z++;
			timer1=window.setTimeout('start()',del)
		}
		else
			chg();
	}
}

function stop(){
	if ((bname=="Netscape" && bversion>=4) || (bname=="Microsoft Internet Explorer" && bversion>=4))
		window.clearTimeout(timer1);
		window.clearTimeout(timer2);
	}

	function chg(){
		if (brows){
			document.layers['msgHamalai'].document.writeln('')
			document.layers['msgHamalai'].document.close();
		}
		else
			msgHamalai.innerHTML='';
	
		if(msg<message.length-1){
			msg++;
		}
		else
			msg=0;
		z=0;
		timer2=window.setTimeout('start()',60000)
	}
}

/* Contador randômico */
function counter() {
	var Contador = parseInt((Math.random() * 49) + 1);
	window.Contador.innerHTML = "<img src=images/cont" + Contador + ".jpg>";	
	
	Contador = parseInt((Math.random() * 7) + 1);	
	imgDamiao.innerHTML = '<img src="images/damiaomenu' + Contador + '.jpg" width="150" height="185">';
}

/* Sorteia uma frase para ser exibida */
function EscolheFraseDamiao(){
	var Frase = new Array();
		
	Frase[0]  = '"I like womem to beat me"';
	Frase[1]  = '"Damião Experiênça in the Praneta Lamma"';
	Frase[2]  = '"É o que Deus quiser! Tárátátátáááaá!"';
	Frase[3]  = '"The woman who makes abortion does not have pitty of her own body" ';
	Frase[4]  = '"The women of the torrent are generated from you"';
	Frase[5]  = '"Uáummmm! Uáummmm! Uáummmm! Uáummmm!"';
	Frase[6]  = '"Hamalai! Damião Experiênça!"';
	Frase[7]  = '"Cuban Sugar cane! Caiana sugar cane"';
	Frase[8]  = '"I am son of Russian with Cuban. But I am not American son"';
	Frase[9]  = '"Planet Hen!"';
	Frase[10] = '"Planet Hair!"';	
	Frase[11] = '"Oh, Mother, I`m here in the solitude making this song to my little mother of the heart."'; 
	Frase[12] = '"I live in the slum quarter with two windows in my watercolor."';
	Frase[13] = '"Laku laku Deku deku Diku diku Duku duku."';
	Frase[14] = '"druuuuuuuuuuugggggsssssssss..."';
	Frase[15] = '"Beggar Planet"';
	Frase[16] = '"hamalai"';
	Frase[17] = '"Sucking green sugar cane in the Lamma Planet"';
	Frase[18] = '"Smelling garlic in the Lamma Planet"';
	Frase[19] = '"Love is illusion, i got married with secondhand woman, the error was mine, to marry perforated woman who another one fucked"';
	Frase[20] = '"Without love without affection I want you without himen"';
	Frase[21] = '"What a pretty thing, more beautiful thing, to marry a young maiden"';
	Frase[22] = '"Sinafram helou"';
	Frase[23] = '"Therefore, this is why i like the lock, it does not fake on false opening"';
	Frase[24] = '"Beings of the Lamma Planet are all strong, don`t fear, don`t fear, don`t fear the big ones"';
	Frase[25] = '"My father beat me in such a way, my mother also spank me, beating me with handle liana, I was forced to go away to the world"';
	Frase[26] = '"I am Damião Experiença, a man who is worth nothing, I am a revolutionary of the entire world"';
	Frase[27] = '"The world was well done, everybody has defect, nobody is right, the world well was made"';
	Frase[28] = '"If she does not want to have babies, shouldn`t take in the little place that makes little babies. She must take in the year, the entire year, the year of 1969"';
	Frase[29] = '"Uaummmmmmmmm uaum"';
	Frase[30] = '"Mommy does not want me to be a man, no, mother does not want me to be a man no, because man uses horn in the head"';
	Frase[31] = '"Women say don´t play with this big animal because he only eats beans and doesn´t eat shrimp"';
	Frase[32] = '"The cuíca moaned when the blood gushed out in the tracks of the mount"';
	Frase[33] = '"The prostitute womem are equal the other women. They are made of other women, that is what God wants, is what God wants."';
	Frase[34] = '"I go to Havana to find a young Cuban woman"';
	Frase[35] = '"Havana my vana vana Havana"';
	Frase[36] = '"I go to Havana to find a young Cuban woman, to cut sugar cane, to plant banana, to marry a Cuban young woman"';
	Frase[37] = '"If she does not want to have a son, avoid men"'; 
	Frase[38] = '"The animals of the black face are killing with shotguuuun, they are the fiercest animal of the planetttttt"';
	Frase[39] = '"I am fish but I have scale, Damião in the Lamma Planet, I am not fish but I have spine, Damião in the Planet Spine"';
	Frase[40] = '"Who took off the stamp, that reads the letter."';
	Frase[41] = '"The animals of the black face are beating with sledge hammer"';
	Frase[42] = '"Damião what is the woman ? woman is a good thing that people eat to the core, woman is a good thing that people eat with spoon, it is like bad smell in the foot, only serves to make caress"';
	Frase[43] = '"Woman lower your voice , so nobody listen, I´m rastafari of the hinterland, this dude, Damião, he is a PIMP"';
	Frase[44] = '"There comes the animals of the black face wanting to beat me, wanting to arrest me, wanting to takes care of my life"';
	Frase[45] = '"Return Getúlio Vargas to find Fildel Castro, democratic man of its loved native, delatrada Brazil"';
	Frase[46] = '"The place of the workers is in jail"';
	Frase[47] = '"I want to eat beans not to go 6 feet under"';
	Frase[48] = '"Men are turning to women, women are turning to men, but I`m still a man"';
	Frase[49] = '"Since she pays, she can do whatever she wants with me"';
	Frase[50] = '"Grandma the world has no way, because it is divided in two great powers: The Sovietic Union and the United States of America. No country should cry nor to lament, because the land is of the Russian and the American "';
	Frase[51] = '"Free from the Americans, exempts from the Americans"';
	Frase[52] = '"The most developed mind, the smartest brain is in a powerful country, is Russia, is the Soviet Union, Moscow, the world will be theirs and nothing will be left to the americans."';
	Frase[53] = '"The world is of the intelligent and Earth is of the smart ones, saves yourself if you can "';
	Frase[54] = '"This is the prettiest tango that I ever made in the reality of life"';
	Frase[55] = '"I do not walk with woman for free, a woman have to pay to be with me"';
	Frase[56] = '"I have never worked, I have anger of who works"';
	Frase[57] = '"Where I was born my leather is radical"';
	Frase[58] = '"The Americans are monkeys and armadillo I am I am I am a monkey dictator"';
	Frase[59] = '"Heaven is in the earth for those with defined financial situation"';
	Frase[60] = '"Let´s Suckkkkkkkkkkkkk"';
	Frase[61] = '"a daum daum de adaum daum de adaum daum de"';
	Frase[62] = '"I want a woman to support me"';
	Frase[63] = '"The proud humanity is in the world equal to the animals"';
	Frase[64] = '"I was born to be supported by pretty women"';
	Frase[65] = '"I do not understand this critical of the universal music each one with its poetry trying to take the power"';
	Frase[66] = '"1308 registered recorded rose Oliria Experienca"';
	Frase[67] = '"Message from the people of the infinite to the universe of Rose 1999"';
	Frase[68] = '"Caiana Sugar cane, Cuban sugar cane"';
	Frase[69] = '"I like to be spanked by women, I am masochistic, woman give me a big punch in my face and break my mouth"';
	Frase[70] = '"Woman is vanity of the humanity"';
	Frase[71] = '"Damião Experiença you are so handsome, with this big hair and with this big beard. This beard is useful to tickle my little place"';
	Frase[72] = '"They are looking at me. What an ugly animal"';
	Frase[73] = '"Which the man which the woman, who does not make a one thousand nine hundred and ninety nine"';
	Frase[74] = '"Any woman without exception that already had more than one man does not get accustomed with a man only, no !!!"';
	Frase[75] = '"Because you were burglarized in the dawn by the scoundrel. No use, now you abandon me for the same scoundrel "';
	Frase[76] = '"Travelling to Havana, Cuba"';
	Frase[77] = '"The guitar pick broke"';
	Frase[78] = '"I don`t know what I have in my tongue that they all fall in love"';
	Frase[79] = '"Religion is fanatism. It is legend. It is a way of life "';
	Frase[80] = '"Ai Damião, you are not singing well, cause I`m with pain in the lung, because my mother beat me to death "';
	Frase[81] = '"The animals of the black face is finishing with Brazil"';
	Frase[82] = '"I´m old now, and I cannot make what I used to make before, now I can only bite"';
	Frase[83] = '"I am a rastafarian, It is free to be rastafari, there in the hinterland"';
	Frase[84] = '"As the 1945 war existed. Mr. Adolph Hitra"';
	Frase[85] = '"I go to the beach of Havana to plant banana, to dance the tango of Havana"';
	Frase[86] = '"This Damião, he is a pimp. Woman speak low, so I don´t punch you, woman speak low, so I don´t give you a cachação"';
	Frase[87] = '"I`m hungry, I want to eat"';
	Frase[88] = '"Woman come here, come to bite me, come to eat me, come to beat me"';
	Frase[89] = '"I was always supported by the pretty women of this world of my God"';
	Frase[90] = '"Woman give a big punch in my face."';
	Frase[91] = '"I am masochistic"';
	Frase[92] = '"Let´s check the string compadre"';
	Frase[93] = '"Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock"'
	Frase[94] = '"Let`s give a break, the chest couldn`t hold on"';
	Frase[95] = '"My country free, democratic, reminds Fildel Castro"';
	Frase[96] = '"Ouuuu Ou ieeeeee"'
	Frase[97] = '"A gun shooting blood and pain"';
	Frase[98] = '"Makes the thought enters in the alignment of the marriage"';
	Frase[99] = '"I`m an untied animal."';
	Frase[100]= '"The experyença çeases. (Thus with ç exactly!!!)"';
	Frase[101]= '"I like lesbian women because they are more intelligent than the other women"';
	Frase[102]= '"This is the forro of caruaru, it only has armadillo scratching the curucucu"';
	Frase[103]= '"Armadillo placed the head in the hole making curucucu"';
	Frase[104]= '"It´s happening like I said, already happened"';
	Frase[105]= '"You were the first to play, had a certainty in the end of all of this, a card went to blow, I was the king of spades, you were the queen of hearts, and your heart was a pearl for me, a treasure."';
	Frase[106]= '"Damião Experyença IS Planet Lamma"';
	Frase[107]= '"Damião Experyença is the only musician participating in this record, myself Daminhão Experyença."';
	Frase[108]= '"Hitra is alive in the Planet Lamma"';
	Frase[109]= '"Only the beggars save"';
	Frase[110]= '"Nafulembraummmm foudemaaaaconteceeeee"';
	Frase[111]= '"My girl is from Siberia, I got marry in Siberia"';
	Frase[112]= '"Im not a fish but I live here, because the fish lives in the sea and the woman lives in the water therefore I say that I am fish and she is my mermaid"';
	Frase[113]= '"I am a fish but I live in the land because I don`t like the sea"';
	Frase[114]= '"Rock gooooodddd"';
	Frase[115]= '"Oh Maria I want you in my kitchen, to make food for me, to give a bath to my dog, let me ride you like a pony"';
	Frase[116]= '"I`m calling, I´m calling, come and see, the kind of sound that will be done !!!"';
	Frase[117]= '"Saylor, saylor, saylor, who taught you to swim ? Was it the ship or the swing of the wave ?"'; 
	Frase[118]= '"Marinheiro João Candido, was a great sailor of the Brazilian navy, he was against the chibata"';
	Frase[119]= '"Took a ship and left the bay then said - either you free us from the whip or I bomb you all."';
	Frase[120]= '"I`m thief, robbing naked woman in a moon night"';
	Frase[121]= '"Who loves does not kill not even a cockroach"';
	Frase[122]= '"I only rob naked woman in the dawn, all wet"';
	Frase[122]= '"Só roubo mulher pelada na madrugada, toda molhada"';
	Frase[123]= '"She is so pretty that I will put my candy in her mouth and she will suck it all"';
	Frase[124]= '"She gave affection to another man, Do you like when she betrays you ? This is part of the system, the society, equal rights"';
	Frase[125]= '"If there weren`t morons in the world, government would take all the women to it"';
	Frase[126]= '"When you married her she was not virgin no, broda"';

	return Frase[parseInt(Math.random() * 126)];
}

// Não exibe mensagens de erro.	
function handleError() {
	return true;
}

window.onerror = handleError;

}
/*
     FILE ARCHIVED ON 10:42:00 Feb 10, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:10:40 Apr 12, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 882.726
  exclusion.robots: 0.261
  CDXLines.iter: 23.2 (3)
  exclusion.robots.policy: 0.245
  PetaboxLoader3.datanode: 192.358 (4)
  captures_list: 1065.204
  LoadShardBlock: 154.563 (3)
  esindex: 0.029
  PetaboxLoader3.resolve: 34.27
  load_resource: 112.268
*/