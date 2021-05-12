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

/* Contador randômico */
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
		
	Frase[0]  = '"Eu gosto é de apanhar de mulheeeeeeer!"';
	Frase[1]  = '"Damião Experiênça no Praneta Lamma!"';
	Frase[2]  = '"É o que Deus quiser! Tárátátátáááaá!"';
	Frase[3]  = '"A mulher que faz aborto não tem pena do seu próprio corpo!"';
	Frase[4]  = '"As mulheres das enxurrada são ser humano gerado de vocês"';
	Frase[5]  = '"Uáummmm! Uáummmm! Uáummmm! Uáummmm!"';
	Frase[6]  = '"Hamalai! Damião Experiênça!"';
	Frase[7]  = '"Cana cubana! Cana caiana!"';
	Frase[8]  = '"Sou filho de russo com cubano. Mas não sou filho de americano!"';
	Frase[9]  = '"Planeta Galinha!"';
	Frase[10] = '"Planeta Cabelo!"';	
	Frase[11] = '"Ô, Mamãe, tô aqui na solidão fazendo essa canção pra minha mamãezinha do coração."';
	Frase[12] = '"Eu moro na favela com duas janela na minha aquarela."';
	Frase[13] = '"Laku laku Deku deku Diku diku Duku duku."';
	Frase[14] = '"As droooooogas..."';
	Frase[15] = '"mamãe serafina e papai amorzinho seu filho damião ferreira da cruz fez 13 lps com o próprio dinheiro porque sou filho de cubano com russo e não de americano"';
	Frase[16] = '"hamalai"';
	Frase[17] = '"Chupando cana verde no Planeta Lamma"';
	Frase[18] = '"Cheirando alho no Planeta Lamma"';
	Frase[19] = '"Amor é ilusão, casei com mulher de segunda mão, o erro foi meu, casar com mulher furada que outro comeu"';
	Frase[20] = '"Sem amor sem carinho quero você sem cabacinho"';
	Frase[21] = '"Que coisa mais linda que coisa mais bela casar com uma moça donzela"';
	Frase[22] = '"Ilaiouee ilaietema comaiepemo culaiemeta palatamecomitumelio le ma"';
	Frase[23] = '"Por isso é que gosto é da fechadura não tem fingimento de abertura"';
	Frase[24] = '"Seres do Planeta Lamma sao todos raçudo, não têm medo não têm medo não têm medo de graúdo"';
	Frase[25] = '"O meu pai me batia tanto, minha mãe me surrava tambem, me batendo com cipó de caboclo, fui forçado me jogar pelo mundo"';
	Frase[26] = '"Sou Damião Experiença, um homem que nao vale nada, sou um revolucionário do mundo inteiro"';
	Frase[27] = '"O mundo foi bem feito, todo mundo tem defeito, ninguem é direito, o mundo foi bem feito"';
	Frase[28] = '"Se ela não quer ter filho não deve transar no lugarzinho que faz filhinho. Ela deve tomar no ano o ano inteiro, no ano de mil novecentos e sessenta e nove"';
	Frase[29] = '"Uaummmmmmmmm uaum"';
	Frase[30] = '"Mamae não quer que eu seja homem não, mamãe não quer que eu seja homem não, porque homem usa chifre na cabeça"';
	Frase[31] = '"As mulheres fala nao brinca com esse bichão porque ele só come feijão e nao come camarão"';
	Frase[32] = '"A cuíca gemeu quando o sangue jorrou nos trilhos do morro"';
	Frase[33] = '"AS mulheres protistutas são igual as outras mulheres. Elas sao ser humano feito de outras mulheres, é o que Deus quiser, é o que Deus quiser."';
	Frase[34] = '"Vou pra Havana encontrar uma moça cubana"';
	Frase[35] = '"Havana minha Havana vana vana"';
	Frase[36] = '"Vou pra Havana encontrar uma moça cubana, cortar cana, plantar banana, casar com uma moça cubana"';
	Frase[37] = '"Se ela nao quer ter um filho evite os homem"';
	Frase[38] = '"Os bicho da cara preta estão matando de escopetaaa, eles sao os bichos mais feroz do pranetaaaa"';
	Frase[39] = '"Nao sou peixe mas tenho escama, Damião no Planeta Lamma, não sou peixe mas tenho espinha, Damião no Planeta Espinha"';
	Frase[40] = '"Quem tirou o selo, que leia a carta."';
	Frase[41] = '"Os bicho da cara preta tão batendo de marreta"';
	Frase[42] = '"Damião o que é a mulher, mulher é uma coisa boa que a gente come ate o caroço, mulher é uma coisa boa que a gente come de colher, são que nem chulé que dá no pé , serve só pra faze cafuné"';
	Frase[43] = '"Mulher fala baixo pra ninguém escutar, sou é rastafari LÁ DO SERTÃO, esse tal de Damião, ele é cafetão..."';
	Frase[44] = '"Aí vem os bicho da cara preta querendo me bate, querendo me prende querendo toma conta de mim"';
	Frase[45] = '"Volta Getúlio Vargas pra encontrar com Fildel Castro, homem democrático da sua pátria amada terra idolatrada Brasil"';
	Frase[46] = '"Lugar de trabalhador é na prisão"';
	Frase[47] = '"Eu quero comer feijão pra nao ir pra debaixo de chão"';
	Frase[48] = '"Os homem tão virando mulher, as mulher tão virando homem mas eu ainda sou homem"';
	Frase[49] = '"Desde que ela me pague ela pode fazer o que quiser comigo"';
	Frase[50] = '"Vovó o mundo nao tem jeito, porque está dividido em duas grandes potências: A União Sovietica e os Estados Unidos da América. Nao adianta nenhum país chorar nem se lastimar, porque a terra é do russo e do americano"';
	Frase[51] = '"Livre dos americanos, livre dos americanos"';
	Frase[52] = '"A mente mais desenvolvida, o cérebro mais esperto esta num país poderoso é a Rússia, é a União Soviética, Moscou, o mundo será deles nao vai ter nada pra ninguém nem pros americanos."';
	Frase[53] = '"O mundo é dos inteligente a terra é dos espertos salve-se quem se puder"';
	Frase[54] = '"Esse é o tango mais lindo que eu ja fiz na realidade da vida"';
	Frase[55] = '"Eu não ando com mulher de graça, mulher tem que pagar para ficar comigo"';
	Frase[56] = '"Nunca trabalhei, tenho raiva de quem trabalha"';
	Frase[57] = '"Onde eu nasci meu couro é radical"';
	Frase[58] = '"OS americanos sao macacos e tatu eu sou sou sou macaco ditador"';
	Frase[59] = '"O ceu é na terra para aqueles que tem a situação financeira definida"';
	Frase[60] = '"Vamo Mamááá"';
	Frase[61] = '"a daum daum de adaum daum de adaum daum de"';
	Frase[62] = '"Eu quero é arruma uma mulher para me sustentar"';
	Frase[63] = '"A humanidade orgulhosa está no mundo igual aos animais"';
	Frase[64] = '"Eu nasci para ser sustentado por mulher bonita"';
	Frase[65] = '"Não entendo esta crítica da musica universal cada um com sua poesia tentando tomar o poder"';
	Frase[66] = '"1308 registrou gravou rose Oliria Experienca"';	
	Frase[67] = '"Mensagem do povo do infinito ao universo de Rose 1999"';	
	Frase[68] = '"Cana caiana, cana cubana"';	
	Frase[69] = '"Eu gosto de apanha de mulher, eu sou masoquista, mulher me dá uma bolacha na minha cara quebre a minha boca"';	
	Frase[70] = '"Mulher é vaidade da humanidade"';
	Frase[71] = '"Damião Experiença você é muito bonitão, com esse cabelão e esse barbão. Essa barba serve pra fazer cosquinha no meu lugarzinho"';
	Frase[72] = '"Elas ficam me olhando. Que bicho feião"';
	Frase[73] = '"Qual o homem qual a mulher, que não faz um mil novecentos e noventa e nove"';
	Frase[74] = '"Qualquer mulher sem exceção que já teve mai de um homem não se acostuma com um homem só não"';
	Frase[75] = '"Porque você foi arrombada na madrugada pelo canalha. Não adiantou nada, agora você me abandona pelo mesmo canalha"';
	Frase[76] = '"Viajando pra Havana, Cuba"';
	Frase[77] = '"A palheta quebrou"';
	Frase[78] = '"Eu não sei o que eu tenho na minha língua que elas fica tudo gamada"';
	Frase[79] = '"Religião é fanatismo. É lenda. É um meio de vida"';
	Frase[80] = '"Ai Damião, você num tá falando bem. Eu to com dor no pulmão, porque minha mãe me batia tanto"';
	Frase[81] = '"Os bicho da cara preta tá acabando com o nosso Brasil"';
	Frase[82] = '"Eu to velho e já não posso fazer mais aquilo que eu fazia antes, agora só posso morder"';
	Frase[83] = '"Sou rastarafi. É ser livre ser rastafari, lá do sertão"';
	Frase[84] = '"Como existiu a guerra de 1945. Senhor Adolfo Hitra"';
	Frase[85] = '"Eu vou para a praia de Havana plantar banana, dançar o tango de Havana"';
	Frase[86] = '"Esse tal de Damião, ele é cafetão. Mulher fala baixo, pra eu não lhe dar um cachação, mulher fala baixo, pra eu não lhe dar um bofetão"';
	Frase[87] = '"Esse tal de Damião, é gigolô. Mulher fala baixo, pra ninguém escutar"';
	Frase[88] = '"Mulher venha cá, venha me morder, venha me comer, venha me bater"';
	Frase[89] = '"Sempre fui sustentado pelas mulheres lindas desse mundo de meu Deus"';
	Frase[90] = '"Mulher me dá uma bolacha na minha cara."';
	Frase[91] = '"Eu sou é masoquista"';
	Frase[92] = '"Vamô vê essa corda ai cumpadi"';
	Frase[93] = '"Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock Rock"';
	Frase[94] = '"Ah, vão dá um tempo ai, o peito não aguentou"';
	Frase[95] = '"Pais livre, democrático, lembra o Fildel Castro"';
	Frase[96] = '"Ouuuu Ou ieeeeee"';
	Frase[97] = '"Matraca a metralhar com sangue e a dor"';
	Frase[98] = '"Faz o pensamento entra no alinhamento do casamento"';
	Frase[99] = '"Sou bicho solto."';
	Frase[100]= '"A experyença çessa. ( Assim com ç mesmo !!!)"';
	Frase[101]= '"Eu gosto de mulher é lésbica, porque elas são mais inteligentes que as outras mulheres"';
	Frase[102]= '"Este é o fórro de caruaru, só tem tatu coçando o curucucu"';
	Frase[103]= '"Tatu colocou a cabeça no buraco fazendo curucucu"';
	Frase[104]= '"Tá acontecendo como eu ja dizia, já aconteceu"';
	Frase[105]= '"Tu foste primeira a jogar, tinha uma certeza no fim de tudo isto, uma carta ia soprar eu era o rei de espada tu é dama de ouro, seu coração é uma pérola para mim vale um tesouro."';
	Frase[106]= '"Damião Experyença É planeta lamma"';
	Frase[107]= '"Damião Experyença  único musico participante deste disco, o próprio Daminhão Experyença."';
	Frase[108]= '"Hitra está vivo no Planeta Lamma"';
	Frase[109]= '"Só os mendigo salva o planeta"';
	Frase[110]= '"Nafulembraummmm foudemaaaaconteceeeee"';
	Frase[111]= '"A minha garota é da Sibéria, eu casei com ele é na Sibéria"';
	Frase[112]= '"Eu não sou peixe mas vivo aqui, porque o peixe vive no mar e a mulher vive na água por isso digo que eu sou peixe e ela é minha sereia"';
	Frase[113]= '"Eu sou peixe mas estou aqui na terra porque eu não gosto do mar"';
	Frase[114]= '"Rock booooommmmmmm"';
	Frase[115]= '"O Maria quero você prá minha cozinha, faze comida pra mim, dar banho pro meus cachorro, me leva de cavalinho"';
	Frase[116]= '"Alo Maria quero você para me dar porrada, pra me dar pernada"';
	Frase[117]= '"Marinheiro marinheiro marinheiro, quem te ensinou a remar ? Foi a onda do navio lá em alto mar"';
	Frase[118]= '"Marinheiro João Candido, foi um grande marinheiro da marinha brasileira, foi contra a chibata"';
	Frase[119]= '"Pegou um navio e saiu baia afora, e falou ou liberta a chibata ou eu meto fogo."';
	Frase[120]= '"Sou ladrão, só roubo mulher nua na noite de lua"';
	Frase[121]= '"Quem ama não mata nem uma barata"';
	Frase[122]= '"Só roubo mulher pelada na madrugada, toda molhada"';
	Frase[123]= '"Ela é tão bonitinha que vou botar a maria mole na boca dele e ela mama todinha"';
	Frase[124]= '"Ele deu carinho pra outro homem, voce gosta de ser traído por ela ? Isto faz parte do sistema, da sociedade, os direitos são iguais"';
	Frase[125]= '"Por isso que eu digo, muler pague seu INPS"';
	Frase[126]= '"Quando ele casou com ela era não era mais moça não"';

	return Frase[parseInt(Math.random() * 126)];
}

// Não exibe mensagens de erro.	
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