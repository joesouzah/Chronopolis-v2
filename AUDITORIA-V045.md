# Chronopolis — recuperação cautelosa de imagens v0.45

**Data:** 24/11/2026  
**Escopo:** cruzamento das dependências externas do Imgbox com backups pessoais disponíveis no Google Drive, preservando somente correspondências sustentadas por contexto e sem substituir links históricos quando a identidade individual não puder ser comprovada.

## Descoberta principal

A busca no Google Drive encontrou uma pasta chamada **Postagem Chrono Beta** com exatamente **três arquivos PNG**:

| Arquivo no backup | Tipo | Tamanho |
| --- | --- | ---: |
| `2021-01-26 (4).png` | PNG | 359.871 bytes |
| `2021-01-25 (8).png` | PNG | 380.935 bytes |
| `2021-01-26 (12).png` | PNG | 279.755 bytes |

Os três arquivos são capturas de gameplay de uma versão preliminar de *Chrono Trigger*. O HTML histórico `beta.html`, preservado em cópias de 2022, 2023 e no backup antigo, contém exatamente **três PNGs externos consecutivos** no bloco visual da matéria:

- `q6vI0dkf_t.png`
- `fI2VdgT1_t.png`
- `003LnPNZ_t.png`

As três cópias de `beta.html` consultadas apresentam a mesma sequência de URLs.

## Nível de confiança

Há evidência forte de que os três PNGs do Drive pertencem ao material usado para a postagem Beta:

1. estão agrupados numa pasta com nome específico da publicação;
2. são exatamente três PNGs;
3. o artigo histórico possui exatamente três PNGs no bloco correspondente;
4. o conteúdo visual é compatível com as diferenças de gameplay descritas na matéria;
5. os três HTML históricos consultados repetem o mesmo conjunto externo.

**Limite importante:** o host `thumbs2.imgbox.com` não pôde ser acessado pelas ferramentas de pesquisa para comparar os bytes ou o conteúdo visual de cada miniatura externa. Portanto, não existe evidência suficiente para afirmar qual arquivo local corresponde individualmente à imagem 1, 2 ou 3.

## Ação adotada

As três imagens foram preservadas em:

- `assets/media/drive-beta/2021-01-26-04.png`
- `assets/media/drive-beta/2021-01-25-08.png`
- `assets/media/drive-beta/2021-01-26-12.png`

A página `acervo/beta.md` ganhou uma seção **Capturas locais recuperadas**, apresentando o conjunto com explicação explícita da incerteza.

Os três links Imgbox históricos **não foram removidos nem remapeados**. Isso mantém a possibilidade de comparação futura caso o servidor volte a ficar acessível ou outra cópia original apareça.

## Consequência nos números do acervo

A v0.43 havia confirmado **1.137 mídias visuais locais**. A inclusão dessas três cópias eleva o total para **1.140 arquivos visuais locais**.

Os três novos arquivos estão todos referenciados por `acervo/beta.md`; portanto, nenhum deles ficou órfão.

A contagem de dependências externas **não diminui nesta versão**, porque os três URLs antigos continuam preservados. Permanecem **90 URLs distintas do Imgbox** no conjunto histórico pendente. A v0.45 melhora a preservação do conteúdo, mas não declara três URLs resolvidas sem provar a correspondência 1→1.

## Outros backups encontrados

A busca também confirmou a existência de conjuntos antigos úteis para futuras etapas, entre eles:

- `Chronopolis Versão 2022`;
- `Chronopolis - Versão 2023 - Em construção`;
- `Projeto_site_Chrono_Trigger_OLD`;
- duas pastas `Imagens_ArtWorks_Chrono_Trigger`;
- `Chrono Trigger Wallpapers`;
- coleções de scans de revistas japonesas e materiais de desenvolvimento.

Esses conjuntos não foram publicados automaticamente. Arquivos com tema semelhante não são considerados substitutos de uma URL histórica sem evidência de correspondência.

## Preservação

- Nenhum arquivo em `legado/` foi alterado.
- Nenhuma URL histórica foi apagada.
- Nenhum arquivo do Google Drive foi movido, renomeado, compartilhado ou excluído.
- Nenhuma imagem apenas “parecida” foi usada para substituir uma referência externa.
- A incerteza de mapeamento foi mantida visível no artigo.

## Próxima etapa recomendada

Aplicar o mesmo método a **Revistas**, **Artes do PlayStation** e **coleção histórica de artes**: procurar conjuntos de backup com associação documental à página, comparar quantidade, formato, conteúdo e contexto e somente substituir um URL externo quando a relação individual for suficientemente demonstrada.
