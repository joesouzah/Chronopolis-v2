# Chronopolis v2

Reconstrução do **Chronopolis**, um arquivo independente de fã dedicado a Chrono Trigger, com foco em leitura, pesquisa e preservação do conteúdo histórico.

Este repositório é novo e separado do [projeto original (2022)](https://github.com/joesouzah/Chronopolis). O original não foi alterado.

## Objetivos
- Preservar as páginas e os textos históricos do site original.
- Melhorar a experiência de leitura, navegação, pesquisa e uso no celular.
- Permitir novas publicações sem editar HTML manualmente.
- Preparar publicação gratuita via GitHub Pages e edição via Pages CMS.

**Estado (22/11/2026)**: reconstrução v0.4 em publicação, com revisão editorial completa das 20 matérias. As 25 páginas históricas continuam em `legado/`; 20 matérias foram convertidas para páginas estáticas individuais em `acervo/`. A busca textual também abrange esses 20 documentos. Imagens, vídeos e downloads antigos ainda dependem de terceiros; veja [Estado do acervo](https://joesouzah.github.io/Chronopolis-v2/estado-do-acervo/).

## Publicação no GitHub Pages

**GitHub Pages está ativo**, com o último build v0.2 confirmado como bem-sucedido em 22/11/2026. A compilação usa Jekyll.

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
