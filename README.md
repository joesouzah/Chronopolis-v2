# Chronopolis v2

Reconstrução do **Chronopolis**, um arquivo independente de fã dedicado a Chrono Trigger, com foco em leitura, pesquisa e preservação do conteúdo histórico.

Este repositório é novo e separado do [projeto original (2022)](https://github.com/joesouzah/Chronopolis). O original não foi alterado.

## Objetivos
- Preservar as páginas e os textos históricos do site original.
- Melhorar a experiência de leitura, navegação, pesquisa e uso no celular.
- Permitir novas publicações sem editar HTML manualmente.
- Preparar publicação gratuita via GitHub Pages e edição via Pages CMS.

**Estado**: primeira reconstrução em andamento. Algumas imagens e downloads das páginas antigas continuam hospedados externamente e ainda precisam ser auditados.

## Publicação no GitHub Pages

Após a inclusão dos arquivos, vá em **Settings > Pages**, escolha **Deploy from a branch**, branch **main** e pasta **/(root)**, e salve. A compilação usa o Jekyll do GitHub Pages.

Endereço previsto, após a ativação: https://joesouzah.github.io/Chronopolis-v2/

## Publicações futuras

O editor proposto é o [Pages CMS](https://app.pagescms.org/). A configuração fica em `.pages.yml`. É necessário autorizar o Pages CMS a acessar este repositório; essa autorização é feita pelo proprietário. Cada publicação fica em `_artigos/` e é compilada pelo Jekyll.

## Estrutura

- `index.html`: página inicial e catálogo.
- `assets/`: estilo e scripts.
- `legado/`: cópias das páginas originais, com links e imagens de terceiros preservados.
- `_artigos/`: novas matérias criadas pelo editor.
- `_layouts/`, `artigos.json` e `_config.yml`: estrutura de publicação Jekyll.
- `.pages.yml`: configuração do Pages CMS.

## Direitos e fontes

Projeto independente, não oficial. *Chrono Trigger* e seus personagens pertencem a seus respectivos titulares. Textos históricos foram preservados do repositório original; links para arquivos externos não significam que tenham sido validados nem autorizam sua redistribuição.
