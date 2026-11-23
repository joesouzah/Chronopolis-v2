---
title: "Códigos de Chrono Trigger: Game Genie e Pro Action Replay"
date: 2026-11-22
category: "Arquivo"
summary: "Entenda os códigos do Super Nintendo, como ativá-los no ZSNES e quais cuidados tomar com seus saves."
image: ""
source_site: "RPG aQui!"
source_url: "http://rpga8.free.fr/especial/ct/game-shark.htm"
source_consulted_on: 2026-11-22
---

## O que são os códigos de trapaça?

Os códigos de **Game Genie** e **Pro Action Replay** permitem modificar certos comportamentos ou valores de um jogo. Em *Chrono Trigger*, eles podem alterar atributos, liberar técnicas e modificar slots do inventário.

Apesar de algumas listas receberem o nome genérico **Game Shark**, a relação de códigos com prefixo `7E` apresentada aqui segue o estilo de **Pro Action Replay**, que escreve valores na memória do jogo. Isso importa porque os formatos não são intercambiáveis em todos os dispositivos.

Usar códigos é uma escolha de cada jogador. Eles podem servir para testes e curiosidades, mas também mudam a dificuldade e podem interferir no andamento de uma campanha.

## Três categorias de modificações

| Categoria | O que altera |
| --- | --- |
| **Atributos** | HP, MP, nível, força, velocidade, defesa e outras estatísticas de personagens |
| **Inventário** | Valores de slots de item e quantidade guardada |
| **Técnicas** | Indicadores de habilidades aprendidas de cada integrante |

O conjunto de referência possui blocos separados para **Crono, Marle, Lucca, Robo, Frog, Ayla e Magus**, além de códigos de inventário e Techs.

## Alguns exemplos de Pro Action Replay

Os três exemplos abaixo se referem à **versão norte-americana de Chrono Trigger para Super Nintendo**, não às versões de DS, computador, celular ou outros relançamentos.

| Código | Função descrita |
| --- | --- |
| `7E261263` | Crono no nível 99 |
| `7E260963` | MP máximo de Crono em 99 |
| `7E2837FF` | Liberar as técnicas individuais de Crono |

Esses códigos constam em catálogos de referência, mas **não foram executados ou testados pelo Chronopolis**. A compatibilidade depende da versão do jogo e de como o emulador interpreta o formato.

**Atenção:** não confunda `7E260963` (MP máximo) com `7E261263` (nível). Para HP máximo, algumas listas usam **mais de uma linha de código**, pois o valor ocupa mais de um byte.

## Como adicionar códigos no ZSNES

O ZSNES possui um menu próprio de cheats, que reconhece Game Genie e Pro Action Replay.

1. Inicie o jogo no emulador.
2. Acesse **Cheat → Add Code**.
3. Insira o código no campo apropriado e forneça uma descrição clara, como “Crono — nível 99”.
4. Adicione a entrada e volte ao jogo.
5. Use o menu de cheats para **ativar, desativar ou remover** os códigos conforme necessário.

A interface também possui controles para salvar ou carregar listas de cheats. Esses comandos pertencem ao **emulador**, não ao menu interno de *Chrono Trigger*.

O procedimento acima se aplica ao **ZSNES**. Em outros emuladores, o nome do menu e a maneira de inserir os códigos podem ser diferentes.

## Como funcionam os códigos de itens?

Códigos de inventário podem incluir um campo representado por `??`. Esses dois sinais **não devem ser digitados literalmente como se fossem um valor de item**: o espaço precisa ser substituído pelo identificador correspondente.

O sistema também pode usar um código distinto para determinar a **quantidade** do objeto. Inserir endereços repetidos ou identificadores incorretos pode produzir resultados inesperados.

Por esse motivo, esta página explica o funcionamento, mas **não publica a tabela completa de identificadores e modificadores de inventário sem testes adicionais**.

## Como usar sem colocar seu progresso em risco

- **Faça uma cópia do save antes dos testes.** De preferência, use uma campanha separada.
- **Ative um código de cada vez.** Assim fica mais fácil descobrir qual alteração causou um problema.
- **Confira os efeitos no menu do jogo.** Não presuma que toda mudança de valor aparecerá corretamente.
- **Desative o código quando terminar.** Alguns modificadores permanecem ativos e continuam escrevendo valores na memória.
- **Evite usar códigos durante eventos importantes.** Alterações extremas podem causar comportamentos inesperados e um salvamento modificado pode manter seus efeitos.

O uso de cheats não é necessário para concluir *Chrono Trigger*. Para avançar sem modificar a memória do jogo, consulte [Dicas para começar]({{ '/artigos/chrono-trigger-dicas-para-comecar/' | relative_url }}) e [Levels e experiência]({{ '/artigos/chrono-trigger-levels-experiencia/' | relative_url }}).

*Este é um registro histórico e explicativo de códigos do SNES. Não é uma garantia de compatibilidade nem um pacote pronto para aplicar.*
