# Chronopolis v2

Reconstrução do **Chronopolis**, um arquivo independente de fã dedicado a Chrono Trigger, com foco em leitura, pesquisa e preservação do conteúdo histórico.

Este repositório é novo e separado do [projeto original (2022)](https://github.com/joesouzah/Chronopolis). O original não foi alterado.

## Objetivos
- Preservar as páginas e os textos históricos do site original.
- Melhorar a experiência de leitura, navegação, pesquisa e uso no celular.
- Permitir novas publicações sem editar HTML manualmente.
- Preparar publicação gratuita via GitHub Pages e edição via Pages CMS.

**Estado (22/11/2026)**: integração editorial de fontes históricas (v0.9). São 20 matérias do acervo original revisadas, **onze matérias próprias novas** baseadas em pesquisa de fontes do RPG aQui!, incluindo bestiário e chefes, e **uma matéria histórica ampliada** sobre a versão beta. As 25 páginas históricas continuam em `legado/`; 20 matérias foram convertidas para páginas estáticas individuais em `acervo/`. A busca textual também abrange esses 20 documentos. Imagens, vídeos e downloads antigos ainda dependem de terceiros; veja [Estado do acervo](https://joesouzah.github.io/Chronopolis-v2/estado-do-acervo/).

## Publicação no GitHub Pages

**GitHub Pages está ativo** e usa Jekyll. O estado de cada publicação pode ser consultado no [GitHub Actions](https://github.com/joesouzah/Chronopolis-v2/actions).

**Site:** https://joesouzah.github.io/Chronopolis-v2/

**Acompanhamento das implantações:** https://github.com/joesouzah/Chronopolis-v2/actions

## Publicações futuras

O editor proposto é o [Pages CMS](https://app.pagescms.org/). A configuração fica em `.pages.yml`. A autorização do aplicativo pelo proprietário precisa ser confirmada separadamente. Cada nova publicação fica em `_artigos/` e é compilada pelo Jekyll.

**[Guia para publicar sem mexer em HTML](COMO_PUBLICAR.md)**

## Estrutura

- `index.html`: página inicial e catálogo.
- `assets/`: estilo, scripts e índice local de pesquisa textual.
- `legado/`: cópias HTML das páginas originais, sem reescrever o material.
- `acervo/`: transcrições Markdown das 20 matérias principais, com endereço próprio e origem identificada.
- `_artigos/`: novas matérias criadas pelo editor.
- `_layouts/`, `artigos.json` e `_config.yml`: estrutura de publicação Jekyll.
- `.pages.yml`: configuração do Pages CMS.

## Direitos e fontes

Projeto independente, não oficial. *Chrono Trigger* e seus personagens pertencem a seus respectivos titulares. Textos históricos foram preservados do repositório original; links para arquivos externos não significam que tenham sido validados nem autorizam sua redistribuição.

## Revisão editorial

As **20 matérias históricas** foram revisadas em 22/11/2026, mantendo a linguagem de fã, as informações centrais, as URLs e as referências de mídia. Os originais em `legado/` não foram alterados. Veja o [relatório editorial](REVISAO-EDITORIAL.md) para escopo, correções e ressalvas.

## Fontes históricas e publicações novas

- [Registro público de fontes e pesquisas](https://joesouzah.github.io/Chronopolis-v2/fontes-historicas/)
- [Dream Team: quem criou Chrono Trigger?](https://joesouzah.github.io/Chronopolis-v2/artigos/dream-team-chronopolis/)
- [As traduções de fãs de Chrono Trigger na internet antiga](https://joesouzah.github.io/Chronopolis-v2/artigos/historia-traducoes-de-chrono-trigger/)
- [A versão beta jogável](https://joesouzah.github.io/Chronopolis-v2/acervo/beta/) — matéria existente ampliada com dados do RPG aQui!

As pesquisas novas estão em `_artigos/` e seguem o fluxo normal do Jekyll e Pages CMS. O espelho privado do RPG aQui! (2004) **não foi republicado**. O objetivo é estudar e citar fontes, produzindo textos próprios. [Inventário técnico](FONTES-RPGAQUI.md).

### Pesquisa integrada do RPG aQui! — rodada seguinte

- [Final Fantasy Chronicles no PlayStation](https://joesouzah.github.io/Chronopolis-v2/artigos/chrono-trigger-playstation-final-fantasy-chronicles/)
- [Artworks de Chrono Trigger: sete coleções preservadas](https://joesouzah.github.io/Chronopolis-v2/artigos/artworks-chrono-trigger-sete-colecoes/)

As novas matérias são textos do Chronopolis baseados em fontes do espelho privado. O conteúdo original, as imagens, manuais e pacotes do RPG aQui! não foram adicionados ao site público.

### Memória do Satellaview e da série Chrono

- [Satellaview: os especiais de Chrono Trigger](https://joesouzah.github.io/Chronopolis-v2/artigos/satellaview-especiais-chrono-trigger/)
- [Radical Dreamers: a aventura entre Chrono Trigger e Chrono Cross](https://joesouzah.github.io/Chronopolis-v2/artigos/radical-dreamers-origem-e-retorno/)

As pesquisas têm redação própria, fonte datada de 2004 claramente identificada e checagens complementares. Nenhuma ROM, imagem ou cópia integral do RPG aQui! foi republicada.

### Cartografia, equipamento e estratégias (v0.8)

- [Seis mapas, várias eras](https://joesouzah.github.io/Chronopolis-v2/artigos/mapas-eras-chrono-trigger/) — documento de cartografia histórica e limite das miniaturas recuperadas;
- [Equipamentos: quatro categorias](https://joesouzah.github.io/Chronopolis-v2/artigos/equipamentos-guia-historico-chrono-trigger/) — 161 linhas de dados catalogadas, com exemplos e ressalvas de verificação;
- [Roteiro de exploração](https://joesouzah.github.io/Chronopolis-v2/artigos/roteiro-de-exploracao-chrono-trigger/) — orientação escrita do zero, respeitando a proibição explícita de republicação da estratégia do RPG aQui!.

O espelho segue privado. Apenas sínteses e orientações próprias foram adicionadas ao site público.

### Bestiário e chefes (v0.9)

- [Bestiário de Chrono Trigger: 126 fichas no acervo de 2004](https://joesouzah.github.io/Chronopolis-v2/artigos/bestiario-chrono-trigger-acervo-2004/) — 61 fichas A–I e 65 J–Y, com explicação de HP, TP, EXP, G, Item, Charm e Localização;
- [Chefes: 40 encontros documentados](https://joesouzah.github.io/Chronopolis-v2/artigos/chefes-chrono-trigger-guia-historico/) — índice B01–B40 e cinco partes, com exemplos de confrontos de múltiplos alvos.

São textos próprios com exemplos selecionados. As tabelas integrais, descrições estratégicas e imagens originais do RPG aQui! não foram copiadas para o repositório público. A exatidão de números antigos por edição ainda precisa de auditoria específica.
