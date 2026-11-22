# Chronopolis v2

Reconstrução do **Chronopolis**, um arquivo independente de fã dedicado a Chrono Trigger, com foco em leitura, pesquisa e preservação do conteúdo histórico.

Este repositório é novo e separado do [projeto original (2022)](https://github.com/joesouzah/Chronopolis). O original não foi alterado.

## Objetivos
- Preservar as páginas e os textos históricos do site original.
- Melhorar a experiência de leitura, navegação, pesquisa e uso no celular.
- Permitir novas publicações sem editar HTML manualmente.
- Preparar publicação gratuita via GitHub Pages e edição via Pages CMS.

**Estado (22/11/2026)**: reconstrução v0.2 publicada. As 25 páginas históricas estão preservadas em `legado/`; 20 documentos estão disponíveis na busca de texto completo. Imagens, vídeos e downloads do arquivo antigo ainda dependem parcialmente de terceiros e não foram integralmente verificados.

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
- `legado/`: cópias das páginas originais, com links e imagens de terceiros preservados.
- `_artigos/`: novas matérias criadas pelo editor.
- `_layouts/`, `artigos.json` e `_config.yml`: estrutura de publicação Jekyll.
- `.pages.yml`: configuração do Pages CMS.

## Direitos e fontes

Projeto independente, não oficial. *Chrono Trigger* e seus personagens pertencem a seus respectivos titulares. Textos históricos foram preservados do repositório original; links para arquivos externos não significam que tenham sido validados nem autorizam sua redistribuição.
