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
			
			if (false){
				document.layers['msgHamalai'].document.writeln('<P Class="main" Align="Center"><img src="images/hamalai.gif"></P>')
				document.layers['msgHamalai'].document.close();
			}
			else{					
				//FraseDamiao.innerHTML = EscolheFraseDamiao();
				document.getElementById("FraseDamiao").innerHTML = EscolheFraseDamiao();
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
		if (false){
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

/* Contador rand�mico */
function counter() {
	var Contador = parseInt((Math.random() * 49) + 1);
	//window.Contador.innerHTML = "<img src=images/cont" + Contador + ".jpg>";
	document.getElementById("Contador").innerHTML = "<img src=images/cont" + Contador + ".jpg>";
	
	Contador = parseInt((Math.random() * 7) + 1);	
	//imgDamiao.innerHTML = '<img src="images/damiaomenu' + Contador + '.jpg" width="150" height="185">';
	document.getElementById("imgDamiao").innerHTML = '<img src="images/damiaomenu' + Contador + '.jpg" width="150" height="185">';
}

/* Sorteia uma frase para ser exibida */
function EscolheFraseDamiao(){
	var Frase = new Array();
		
	Frase[0]  = '"Eu gosto � de apanhar de mulheeeeeeer!"';
	Frase[1]  = '"Dami�o Experi�n�a no Praneta Lamma!"';
	Frase[2]  = '"� o que Deus quiser! T�r�t�t�t���a�!"';
	Frase[3]  = '"A mulher que faz aborto n�o tem pena do seu pr�prio corpo!"';
	Frase[4]  = '"As mulheres das enxurrada s�o ser humano gerado de voc�s"';
	Frase[5]  = '"U�ummmm! U�ummmm! U�ummmm! U�ummmm!"';
	Frase[6]  = '"Hamalai! Dami�o Experi�n�a!"';
	Frase[7]  = '"Cana cubana! Cana caiana!"';
	Frase[8]  = '"Sou filho de russo com cubano. Mas n�o sou filho de americano!"';
	Frase[9]  = '"Planeta Galinha!"';
	Frase[10] = '"Planeta Cabelo!"';	
	Frase[11] = '"�, Mam�e, t� aqui na solid�o fazendo essa can��o pra minha mam�ezinha do cora��o."';
	Frase[12] = '"Eu moro na favela com duas janela na minha aquarela."';
	Frase[13] = '"Laku laku Deku deku Diku diku Duku duku."';
	Frase[14] = '"As droooooogas..."';
	Frase[15] = '"mam�e serafina e papai amorzinho seu filho dami�o ferreira da cruz fez 13 lps com o pr�prio dinheiro porque sou filho de cubano com russo e n�o de americano"';
	Frase[16] = '"hamalai"';
	Frase[17] = '"Chupando cana verde no Planeta Lamma"';
	Frase[18] = '"Cheirando alho no Planeta Lamma"';
	Frase[19] = '"Amor � ilus�o, casei com mulher de segunda m�o, o erro foi meu, casar com mulher furada que outro comeu"';
	Frase[20] = '"Sem amor sem carinho quero voc� sem cabacinho"';
	Frase[21] = '"Que coisa mais linda que coisa mais bela casar com uma mo�a donzela"';
	Frase[22] = '"Ilaiouee ilaietema comaiepemo culaiemeta palatamecomitumelio le ma"';
	Frase[23] = '"Por isso � que gosto � da fechadura n�o tem fingimento de abertura"';
	Frase[24] = '"Seres do Planeta Lamma sao todos ra�udo, n�o t�m medo n�o t�m medo n�o t�m medo de gra�do"';
	Frase[25] = '"O meu pai me batia tanto, minha m�e me surrava tambem, me batendo com cip� de caboclo, fui for�ado me jogar pelo mundo"';
	Frase[26] = '"Sou Dami�o Experien�a, um homem que nao vale nada, sou um revolucion�rio do mundo inteiro"';
	Frase[27] = '"O mundo foi bem feito, todo mundo tem defeito, ninguem � direito, o mundo foi bem feito"';
	Frase[28] = '"Se ela n�o quer ter filho n�o deve transar no lugarzinho que faz filhinho. Ela deve tomar no ano o ano inteiro, no ano de mil novecentos e sessenta e nove"';
	Frase[29] = '"Uaummmmmmmmm uaum"';
	Frase[30] = '"Mamae n�o quer que eu seja homem n�o, mam�e n�o quer que eu seja homem n�o, porque homem usa chifre na cabe�a"';
	Frase[31] = '"As mulheres fala nao brinca com esse bich�o porque ele s� come feij�o e nao come camar�o"';
	Frase[32] = '"A cu�ca gemeu quando o sangue jorrou nos trilhos do morro"';
	Frase[33] = '"AS mulheres protistutas s�o igual as outras mulheres. Elas sao ser humano feito de outras mulheres, � o que Deus quiser, � o que Deus quiser."';
	Frase[34] = '"Vou pra Havana encontrar uma mo�a cubana"';
	Frase[35] = '"Havana minha Havana vana vana"';
	Frase[36] = '"Vou pra Havana encontrar uma mo�a cubana, cortar cana, plantar banana, casar com uma mo�a cubana"';
	Frase[37] = '"Se ela nao quer ter um filho evite os homem"';
	Frase[38] = '"Os bicho da cara preta est�o matando de escopetaaa, eles sao os bichos mais feroz do pranetaaaa"';
	Frase[39] = '"Nao sou peixe mas tenho escama, Dami�o no Planeta Lamma, n�o sou peixe mas tenho espinha, Dami�o no Planeta Espinha"';
	Frase[40] = '"Quem tirou o selo, que leia a carta."';
	Frase[41] = '"Os bicho da cara preta t�o batendo de marreta"';
	Frase[42] = '"Dami�o o que � a mulher, mulher � uma coisa boa que a gente come ate o caro�o, mulher � uma coisa boa que a gente come de colher, s�o que nem chul� que d� no p� , serve s� pra faze cafun�"';
	Frase[43] = '"Mulher fala baixo pra ningu�m escutar, sou � rastafari L� DO SERT�O, esse tal de Dami�o, ele � cafet�o..."';
	Frase[44] = '"A� vem os bicho da cara preta querendo me bate, querendo me prende querendo toma conta de mim"';
	Frase[45] = '"Volta Get�lio Vargas pra encontrar com Fildel Castro, homem democr�tico da sua p�tria amada terra idolatrada Brasil"';
	Frase[46] = '"Lugar de trabalhador � na pris�o"';
	Frase[47] = '"Eu quero comer feij�o pra nao ir pra debaixo de ch�o"';
	Frase[48] = '"Os homem t�o virando mulher, as mulher t�o virando homem mas eu ainda sou homem"';
	Frase[49] = '"Desde que ela me pague ela pode fazer o que quiser comigo"';
	Frase[50] = '"Vov� o mundo nao tem jeito, porque est� dividido em duas grandes pot�ncias: A Uni�o Sovietica e os Estados Unidos da Am�rica. Nao adianta nenhum pa�s chorar nem se lastimar, porque a terra � do russo e do americano"';
	Frase[51] = '"Livre dos americanos, livre dos americanos"';
	Frase[52] = '"A mente mais desenvolvida, o c�rebro mais esperto esta num pa�s poderoso � a R�ssia, � a Uni�o Sovi�tica, Moscou, o mundo ser� deles nao vai ter nada pra ningu�m nem pros americanos."';
	Frase[53] = '"O mundo � dos inteligente a terra � dos espertos salve-se quem se puder"';
	Frase[54] = '"Esse � o tango mais lindo que eu ja fiz na realidade da vida"';
	Frase[55] = '"Eu n�o ando com mulher de gra�a, mulher tem que pagar para ficar comigo"';
	Frase[56] = '"Nunca trabalhei, tenho raiva de quem trabalha"';
	Frase[57] = '"Onde eu nasci meu couro � radical"';
	Frase[58] = '"OS americanos sao macacos e tatu eu sou sou sou macaco ditador"';
	Frase[59] = '"O ceu � na terra para aqueles que tem a situa��o financeira definida"';
	Frase[60] = '"Vamo Mam���"';
	Frase[61] = '"a daum daum de adaum daum de adaum daum de"';
	Frase[62] = '"Eu quero � arruma uma mulher para me sustentar"';
	Frase[63] = '"A humanidade orgulhosa est� no mundo igual aos animais"';
	Frase[64] = '"Eu nasci para ser sustentado por mulher bonita"';
	Frase[65] = '"N�o entendo esta cr�tica da musica universal cada um com sua poesia tentando tomar o poder"';
	Frase[66] = '"1308 registrou gravou rose Oliria Experienca"';	
	Frase[67] = '"Mensagem do povo do infinito ao universo de Rose 1999"';	
	Frase[68] = '"Cana caiana, cana cubana"';	
	Frase[69] = '"Eu gosto de apanha de mulher, eu sou masoquista, mulher me d� uma bolacha na minha cara quebre a minha boca"';	
	Frase[70] = '"Mulher � vaidade da humanidade"';
	Frase[71] = '"Dami�o Experien�a voc� � muito bonit�o, com esse cabel�o e esse barb�o. Essa barba serve pra fazer cosquinha no meu lugarzinho"';
	Frase[72] = '"Elas ficam me olhando. Que bicho fei�o"';
	Frase[73] = '"Qual o homem qual a mulher, que n�o faz um mil novecentos e noventa e nove"';
	Frase[74] = '"Qualquer mulher sem exce��o que j� teve mai de um homem n�o se acostuma com um homem s� n�o"';
	Frase[75] = '"Porque voc� foi arrombada na madrugada pelo canalha. N�o adiantou nada, agora voc� me abandona pelo mesmo canalha"';
	Frase[76] = '"Viajando pra Havana, Cuba"';
	Frase[77] = '"A palheta quebrou"';
	Frase[78] = '"Eu n�o sei o que eu tenho na minha l�ngua que elas fica tudo gamada"';
	Frase[79] = '"Religi�o � fanatismo. � lenda. � um meio de vida"';
	Frase[80] = '"Ai Dami�o, voc� num t� falando bem. Eu to com dor no pulm�o, porque minha m�e me batia tanto"';
	Frase[81] = '"Os bicho da cara preta t� acabando com o nosso Brasil"';
	Frase[82] = '"Eu to velho e j� n�o posso fazer mais aquilo que eu fazia antes, agora s� posso morder"';
	Frase[83] = '"Sou rastarafi. � ser livre ser rastafari, l� do sert�o"';
	Frase[84] = '"Como existiu a guerra de 1945. Senhor Adolfo Hitra"';
	Frase[85] = '"Eu vou para a praia de Havana plantar banana, dan�ar o tango de Havana"';
	Frase[86] = '"Esse tal de Dami�o, ele � cafet�o. Mulher fala baixo, pra eu n�o lhe dar um cacha��o, mulher fala baixo, pra eu n�o lhe dar um bofet�o"';
	Frase[87] = '"Esse tal de Dami�o, � gigol�. Mulher fala baixo, pra ningu�m escutar"';
	Frase[88] = '"Mulher venha c�, venha me morder, venha me comer, venha me bater"';
	Frase[89] = '"Sempre fui sustentado pelas mulheres lindas desse mundo de meu Deus"';
	Frase[90] = '"Mulher me d� uma bolacha na minha cara."';
	Frase[91] = '"Eu sou � masoquista"';
	Frase[92] = '"Vam� v� essa corda ai cumpadi"';
	Frase[93] = '"Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock"';
	Frase[94] = '"Ah, v�o d� um tempo ai, o peito n�o aguentou"';
	Frase[95] = '"Pais livre, democr�tico, lembra o Fildel Castro"';
	Frase[96] = '"Ouuuu Ou ieeeeee"';
	Frase[97] = '"Matraca a metralhar com sangue e a dor"';
	Frase[98] = '"Faz o pensamento entra no alinhamento do casamento"';
	Frase[99] = '"Sou bicho solto."';
	Frase[100]= '"A experyen�a �essa. ( Assim com � mesmo !!!)"';
	Frase[101]= '"Eu gosto de mulher � l�sbica, porque elas s�o mais inteligentes que as outras mulheres"';
	Frase[102]= '"Este � o f�rro de caruaru, s� tem tatu co�ando o curucucu"';
	Frase[103]= '"Tatu colocou a cabe�a no buraco fazendo curucucu"';
	Frase[104]= '"T� acontecendo como eu ja dizia, j� aconteceu"';
	Frase[105]= '"Tu foste primeira a jogar, tinha uma certeza no fim de tudo isto, uma carta ia soprar eu era o rei de espada tu � dama de ouro, seu cora��o � uma p�rola para mim vale um tesouro."';
	Frase[106]= '"Dami�o Experyen�a � planeta lamma"';
	Frase[107]= '"Dami�o Experyen�a  �nico musico participante deste disco, o pr�prio Daminh�o Experyen�a."';
	Frase[108]= '"Hitra est� vivo no Planeta Lamma"';
	Frase[109]= '"S� os mendigo salva o planeta"';
	Frase[110]= '"Nafulembraummmm foudemaaaaconteceeeee"';
	Frase[111]= '"A minha garota � da Sib�ria, eu casei com ele � na Sib�ria"';
	Frase[112]= '"Eu n�o sou peixe mas vivo aqui, porque o peixe vive no mar e a mulher vive na �gua por isso digo que eu sou peixe e ela � minha sereia"';
	Frase[113]= '"Eu sou peixe mas estou aqui na terra porque eu n�o gosto do mar"';
	Frase[114]= '"Rock booooommmmmmm"';
	Frase[115]= '"O Maria quero voc� pr� minha cozinha, faze comida pra mim, dar banho pro meus cachorro, me leva de cavalinho"';
	Frase[116]= '"Alo Maria quero voc� para me dar porrada, pra me dar pernada"';
	Frase[117]= '"Marinheiro marinheiro marinheiro, quem te ensinou a remar ? Foi a onda do navio l� em alto mar"';
	Frase[118]= '"Marinheiro Jo�o Candido, foi um grande marinheiro da marinha brasileira, foi contra a chibata"';
	Frase[119]= '"Pegou um navio e saiu baia afora, e falou ou liberta a chibata ou eu meto fogo."';
	Frase[120]= '"Sou ladr�o, s� roubo mulher nua na noite de lua"';
	Frase[121]= '"Quem ama n�o mata nem uma barata"';
	Frase[122]= '"S� roubo mulher pelada na madrugada, toda molhada"';
	Frase[123]= '"Ela � t�o bonitinha que vou botar a maria mole na boca dele e ela mama todinha"';
	Frase[124]= '"Ele deu carinho pra outro homem, voce gosta de ser tra�do por ela ? Isto faz parte do sistema, da sociedade, os direitos s�o iguais"';
	Frase[125]= '"Por isso que eu digo, muler pague seu INPS"';
	Frase[126]= '"Quando ele casou com ela era n�o era mais mo�a n�o"';

	return Frase[parseInt(Math.random() * 126)];
}

// N�o exibe mensagens de erro.	
function handleError() {
	return true;
}

window.onerror = handleError;


}
/*
     FILE ARCHIVED ON 06:45:48 Jun 12, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:20:45 Apr 12, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2758.376
  LoadShardBlock: 1809.41 (3)
  RedisCDXSource: 929.237
  load_resource: 806.36 (2)
  exclusion.robots.policy: 0.186
  PetaboxLoader3.resolve: 267.011 (2)
  CDXLines.iter: 16.862 (3)
  esindex: 0.012
  exclusion.robots: 0.201
  PetaboxLoader3.datanode: 749.169 (5)
*/