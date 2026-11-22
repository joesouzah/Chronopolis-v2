# Inventário de migração — 22/11/2026

**Origem**: https://github.com/joesouzah/Chronopolis, branch `main`.

Foram identificados **25 arquivos HTML**, incluindo `index.html`, e um `README.md` (26 arquivos no total). O repositório não mantém cópias locais das imagens; suas páginas apontam majoritariamente para `thumbs2.imgbox.com`. O HTML é composto por folhas de estilo repetidas, tags antigas (`center` e `font`) e links fixos.

## URLs originais por destino

| Categoria | Arquivos |
|---|---|
| Início | `index.html` |
| Índices históricos | `Historia.html`, `Personagens.html`, `galeria.html`, `Arquivosgame.html` |
| História | `historiapag.html`, `conhecendo.html` |
| Personagens | `crono.html`, `marle.html`, `lucca.html`, `frog.html`, `robo.html`, `ayla.html`, `magus.html` |
| Galeria | `cenas.html`, `ova.html`, `imagensps1.html`, `snes.html`, `papeldeparede.html` |
| Arquivo | `beta.html`, `maps.html`, `revistas.html`, `lavosdentro.html` |
| Curiosidades | `Meta.html` |
| Sobre | `Sobre.html` |

## Compatibilidade

Nesta primeira entrega o novo portal lê os HTML antigos ao vivo, preservando as fontes e URLs originais. **Não é uma migração integral offline**. O leitor não executa `iframe` e scripts antigos. Referências a conteúdos em vídeo podem exigir consulta à página original.

Próxima etapa: transformar cada corpo de matéria em Markdown, revisar imagens e links, gerar redirecionamentos para preservar URLs e registrar a procedência de cada item.


## Chronopolis-v2

As 25 páginas HTML originais serão espelhadas na pasta `legado/` neste novo repositório. Imagens e downloads externos continuam dependendo de seus provedores até revisão posterior.
