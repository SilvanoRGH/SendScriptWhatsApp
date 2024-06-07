async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

Proibidão do Bolsonaro

Ele veio quente e hoje tá fervendo
Ele veio quente e hoje tá fervendo
Quer desafiar? Não tô entendendo
Pra votar Bolsonaro, minha mão já tá tremendo

Dou pra CUT pão com mortadela
E pras feministas, ração na tigela
As mina de direita são as top, mais bela
Enquanto as de esquerda tem mais pelo que cadela

Bolsonaro salta de paraquedas
Bolsonaro, capitão da reserva
E o Bolsonaro casou com a Cinderela
Enquanto o Jean Wyllys só tava vendo novela

Maria do Rosário não sabe lavar panela
Jandira Feghali nunca morou na favela
Luciana Genro apoia os sem-terra
Mas não dá o endereço pra invadirem a casa dela

Essa juventude só se degenera
Pega o Paulo Freire e manda pra estratosfera
Um Brasil pra frente é o que o povo espera
Vamo distribuir livro do Olavo pra galera

Ciro Gomes, baita zé ruela
Lula preso dentro de uma cela
Paga de comuna e mente à vera
Mas vai pra Nova Iorque quando pode, a Manuela

Bolsonaro salta de paraquedas
Bolsonaro, capitão da reserva
E o Bolsonaro casou com a Cinderela
Enquanto o Jean Wyllys só tava vendo novela


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
