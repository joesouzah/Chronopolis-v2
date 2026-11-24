# Chronopolis — recuperação de artes e inventário documental v0.46

**Data:** 24/11/2026  
**Escopo:** recuperação cautelosa do conjunto visual ligado a *Final Fantasy Chronicles* e inventário de backups relacionados a revistas e artes históricas.

## Conjunto Chronicles recuperado

A busca no Google Drive identificou uma sequência completa de oito arquivos JPEG:

- `ctart_chronicles01.jpg`
- `ctart_chronicles02.jpg`
- `ctart_chronicles03.jpg`
- `ctart_chronicles04.jpg`
- `ctart_chronicles05.jpg`
- `ctart_chronicles06.jpg`
- `ctart_chronicles07.jpg`
- `ctart_chronicles08.jpg`

Os arquivos estavam distribuídos por subpastas do mesmo acervo de imagens, mas a sequência nominal é contínua. O conteúdo visual e o nome `chronicles` são compatíveis com o material ligado à edição *Final Fantasy Chronicles*.

As oito imagens foram preservadas em `assets/media/drive-ps1/` e exibidas em `acervo/imagensps1.md` como **conjunto recuperado**.

### Limite de correspondência

A página histórica possui quatro miniaturas Imgbox. Como essas quatro miniaturas não puderam ser consultadas diretamente, a v0.46 **não afirma que as oito imagens locais correspondem 1→1 às quatro URLs externas**.

Os quatro links antigos permanecem intactos e o conjunto recuperado aparece em bloco separado.

## Revistas — backup identificado, não republicado

O Drive contém uma estrutura `Revistas` com pastas por edição, incluindo:

- V-Jump 1994-09 a 1995-08;
- Famimaga 1994-08-26, 1994-09-09 e 1994-11-18;
- The Super Famicom 1994-09-09;
- Dengeki oh 1994-11;
- uma pasta `Solto`;
- `Chrono Trigger Ultimania.pdf`.

Um exemplo concreto é `Revista Famimaga 1994-11-18`, com 12 imagens nomeadas explicitamente como páginas de revista relacionadas a Chrono Trigger.

Esses arquivos **não foram republicados nesta versão**. O conjunto serve como fonte documental para identificar futuras correspondências das cinco imagens antigas da página `acervo/revistas.md`, evitando publicar scans integrais sem necessidade.

## SNES Arts — conjunto identificado

Existe uma pasta explícita `Snes Arts` com **24 JPEGs**, nomeados de `ctart_characters08.jpg` a `ctart_characters31.jpg`.

Três amostras foram abertas e confirmadas visualmente como artworks de personagens/inimigos de Chrono Trigger. O vínculo com a coleção de artes é forte, mas a página histórica `acervo/snes.md` contém apenas quatro miniaturas externas sem identificação individual.

Por isso, a v0.46 **não publica ainda o conjunto de 24 arquivos** e não remapeia as quatro URLs antigas. O material fica registrado como candidato seguro para uma etapa posterior de preservação com contexto editorial próprio.

## Consequência nos números do acervo

A v0.45 terminou com **1.140 mídias visuais locais**. A inclusão das oito artes Chronicles eleva o total para **1.148 arquivos visuais locais**.

Os oito arquivos novos estão referenciados por `acervo/imagensps1.md` e nenhum ficou órfão.

A contagem das **90 URLs distintas do Imgbox** permanece inalterada, porque nenhuma URL externa foi removida ou declarada substituída sem prova individual.

## Preservação

- Nenhum arquivo em `legado/` foi alterado.
- Nenhuma URL Imgbox foi removida.
- Nenhum arquivo do Google Drive foi movido, renomeado, compartilhado ou excluído.
- Revistas e o conjunto SNES foram apenas inventariados, não republicados.
- A incerteza de correspondência foi mantida explícita.

## Próxima etapa

A próxima etapa mais segura é criar uma página/galeria própria para o conjunto `Snes Arts`, separada das quatro miniaturas históricas, e continuar a identificação das imagens de revistas por edição e contexto antes de qualquer substituição.
