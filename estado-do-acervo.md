---
layout: artigo
title: "Estado do acervo Chronopolis"
category: "Sobre"
summary: "Transparência sobre o que foi preservado, o que depende de terceiros e as próximas verificações."
permalink: /estado-do-acervo/
---
## O que está preservado no próprio projeto

O Chronopolis foi reconstruído em um repositório separado do projeto original de 2022.

- **25 páginas HTML históricas** estão copiadas na pasta [`legado/`](https://github.com/joesouzah/Chronopolis-v2/tree/main/legado), incluindo índices e a página inicial do projeto antigo.
- **20 matérias principais** foram transcritas para Markdown na pasta [`acervo/`](https://github.com/joesouzah/Chronopolis-v2/tree/main/acervo). Cada uma tem um endereço próprio e um link para a fonte original.
- O [código do site de 2022](https://github.com/joesouzah/Chronopolis) não foi modificado.
- Novas publicações são gerenciadas separadamente, na pasta `_artigos/`, usando Jekyll.

As 20 matérias históricas passaram por revisão editorial, mas alguns dados factuais e links externos ainda exigem verificação individual. O HTML de origem foi mantido separadamente para conferência.

## Fichas técnicas e cobertura dos dados

O acervo contém **11 páginas estruturadas como fichas técnicas**, com tabelas de consulta direta, busca local por linha e explicações secundárias. São fichas de inimigos, chefes, equipamentos, Charm, Tabs, códigos, itens, técnicas, lojas, experiência e mapas.

As **v0.18 e v0.19 recuperaram oito catálogos históricos** a partir da cópia privada preservada. O indicador "completo" refere-se aos registros presentes nas respectivas fontes, não a uma lista oficial exaustiva de todas as versões do jogo.

| Ficha | Cobertura nesta edição | Estado |
| --- | --- | --- |
| [Inimigos]({{ '/artigos/bestiario-chrono-trigger-acervo-2004/' | relative_url }}) | 126 de 126 fichas identificadas | Dados da fonte reunidos |
| [Charm]({{ '/artigos/chrono-trigger-charm-guia/' | relative_url }}) | 93 de 93 registros (92 nomes distintos) | Dados da fonte reunidos |
| [Chefes]({{ '/artigos/chefes-chrono-trigger-guia-historico/' | relative_url }}) | 40 encontros, 42 blocos de ficha | Dados disponíveis reunidos; parte dos campos ausente na fonte |
| [Levels]({{ '/artigos/chrono-trigger-levels-experiencia/' | relative_url }}) | 98 de 98 transições de EXP | Dados da fonte reunidos |
| [Equipamentos]({{ '/artigos/equipamentos-guia-historico-chrono-trigger/' | relative_url }}) | 161 de 161 registros (68 armas, 32 armaduras, 24 elmos e 37 acessórios) | Dados da fonte reunidos; algumas anomalias registradas |
| [Techs]({{ '/artigos/chrono-trigger-techs-guia/' | relative_url }}) | 116 registros (56 Single, 45 Double e 15 Triple) | Dados da fonte reunidos; nomes e componentes duvidosos sinalizados |
| [Tabs]({{ '/artigos/chrono-trigger-tabs-atributos/' | relative_url }}) | 58 de 58 registros (20 Power, 22 Magic, 16 Speed) | Dados da fonte reunidos; recompensas e inconsistências sinalizadas |
| [Lojas]({{ '/artigos/chrono-trigger-shops-lojas-precos/' | relative_url }}) | 133 mercadorias de 18 estabelecimentos em 13 localidades | Dados da fonte reunidos; preços N/D preservados |

**Há inconsistências nos próprios registros antigos.** Uma lista de Charm diverge em algumas recompensas do bestiário; os campos sem dados permanecem marcados como ausentes e não são preenchidos por suposição. Textos e pacotes integrais de terceiros não foram espelhados publicamente. Imagens de referência, capturas e sprites históricos foram recuperados em outras seções do Chronopolis, com documentação de procedência e ressalvas de direitos.

**Ainda há fichas com cobertura parcial**, especialmente os registros completos de consumíveis/objetos-chave e códigos de trapaça. As seis miniaturas de mapas estão restauradas; não devem ser confundidas com mapas em resolução máxima. O acervo visual não implica autorização geral para republicar HTML, comentários integrais, ROMs, pacotes ou outros materiais de terceiros.

## Imagens históricas restauradas no bestiário

As tabelas de [126 inimigos]({{ '/artigos/bestiario-chrono-trigger-acervo-2004/' | relative_url }}) e [40 encontros de chefes]({{ '/artigos/chefes-chrono-trigger-guia-historico/' | relative_url }}) voltaram a apresentar os **sprites que acompanhavam os registros originais**. Os arquivos são servidos diretamente pelo Chronopolis, sem referências ativas ao servidor histórico.

- **214 GIFs** preservados em `assets/sprites/chrono-trigger/`, com aproximadamente **313 KB** de dados; foram mantidos como arquivos independentes, não fundidos em uma imagem única.
- **126 fichas comuns** vinculadas a **123 GIFs distintos**; todas têm imagem correspondente.
- **42 blocos de chefes**, com **48 ocorrências de imagens** de **45 GIFs distintos**, incluindo encontros com mais de um inimigo.
- Imagens adicionais existentes no backup também foram preservadas na pasta, embora nem todas estejam vinculadas às duas tabelas atuais.

As imagens, personagens e demais elementos visuais podem estar sujeitos aos direitos de seus respectivos titulares. A guarda de uma cópia histórica não prova autorização ou licença de redistribuição; os créditos e a situação dos direitos devem ser acompanhados na seção de créditos a definir.

## Restauração visual ampliada — 23/11/2026

O repositório agora contém **1.126 arquivos de imagem locais** relacionados ao espelho histórico: **214 sprites GIF** e **912 arquivos de mídia adicional**. Parte das imagens JPEG/GIF preservadas foi incluída em **SVGs autocontidos**, com os bytes originais embutidos, para permitir a hospedagem local e a ampliação sem depender da origem.

| Seção | Cobertura restabelecida |
| --- | --- |
| [Bestiário]({{ '/artigos/bestiario-chrono-trigger-acervo-2004/' | relative_url }}) e [Chefes]({{ '/artigos/chefes-chrono-trigger-guia-historico/' | relative_url }}) | 214 GIFs arquivados, 126 fichas e 48 ocorrências de sprites de chefes |
| [Charm]({{ '/artigos/chrono-trigger-charm-guia/' | relative_url }}) | 93 registros ilustrados com sprites locais, reutilizando arquivos já preservados |
| [Mapas]({{ '/artigos/mapas-eras-chrono-trigger/' | relative_url }}) e [Personagens]({{ '/artigos/personagens-chrono-trigger-elenco/' | relative_url }}) | 6 prévias de mapas e 7 retratos originais recuperados |
| [Techs]({{ '/artigos/chrono-trigger-techs-guia/' | relative_url }}) | 116 imagens ligadas às 56 técnicas individuais, 45 duplas e 15 triplas |
| [Tabs]({{ '/artigos/chrono-trigger-tabs-atributos/' | relative_url }}) | 56 imagens associadas a 58 entradas; 2 sem imagem na fonte |
| [Galerias]({{ '/artigos/artworks-chrono-trigger-sete-colecoes/' | relative_url }}) | 157 posições visuais nas 7 coleções; páginas integrais do manual não republicadas, apenas prévias |
| [Roteiro visual]({{ '/artigos/roteiro-de-exploracao-chrono-trigger/' | relative_url }}) | 522 capturas recuperadas, separadas em 5 partes navegáveis |
| Outras páginas | 48 mídias locais recuperadas para missões, OVA, Satellaview, criadores, série e skins; 6 sprites de Spekkio reutilizados |

A auditoria do espelho identificou **1.674 arquivos locais JPG/GIF**, dos quais **1.663** são referenciados nas páginas HTML históricas. **Os 11 arquivos locais restantes são principalmente recursos auxiliares de interface**, enquanto **11 imagens de wallpapers eram links externos e não foram recuperadas**. O total de 1.126 arquivos no repositório não deve ser confundido com as 1.674 imagens do espelho: versões em miniatura duplicadas, imagens de navegação e reproduções integrais de materiais impressos não foram todas publicadas.

**Imagens externas do acervo de 2022–2023:** a auditoria histórica identificou **91 usos no texto e 18 capas externas, correspondentes a 93 URLs distintas**. Em 23/11/2026, **três arquivos foram encontrados no Google Drive com os identificadores exatos das referências da matéria sobre metaverso e recuperados localmente**. Restam **88 imagens externas no corpo e 18 capas**, totalizando **106 usos de 90 URLs distintas** sem cópias locais verificadas. A correspondência dos três arquivos recuperados baseou-se no nome de origem (o conteúdo no Drive estava em JPEG, não PNG), não em comparação byte a byte com o Imgbox. Consulte [AUDITORIA-IMAGENS-EXTERNAS.md](https://github.com/joesouzah/Chronopolis-v2/blob/main/AUDITORIA-IMAGENS-EXTERNAS.md) para histórico e incertezas.

O projeto preserva o vínculo e as condições de referência disponíveis, sem afirmar que todos os arquivos têm licença de redistribuição. A revisão de autoria, créditos e permissões permanece em aberto para avaliação editorial.


**Coleção adicional confirmada no Google Drive:** sete wallpapers `CTDC_WP1024x768[a-g]` foram incorporados à [galeria de papéis de parede]({{ '/acervo/papeldeparede/' | relative_url }}) com origem identificada. **Não substituem as 11 miniaturas pendentes** do catálogo histórico externo.

## Auditoria de navegação — 23/11/2026 (v0.32)

Foram verificados os destinos de links internos via `relative_url` nas **54 páginas Markdown** do acervo e das pesquisas, sem encontrar referências para páginas inexistentes no repositório. Isso não representa um teste remoto de cada link externo.

Nas páginas de leitura, uma faixa discreta de **acesso direto** conecta bestiário, chefes, técnicas, equipamentos, mapas e galerias. As páginas longas incluem opção de retorno ao topo, e tabelas ilustradas apresentam uma indicação de rolagem **apenas quando não cabem na largura disponível**. As duas imagens em destaque na página inicial mantêm as URLs antigas, mas mostram um símbolo de reserva quando a hospedagem externa falha.

Os **90 identificadores de imagens externas ainda pendentes** também foram procurados por nome exato no Google Drive. Não apareceu nova correspondência; isso não descarta cópias guardadas com nomes diferentes. [Detalhes técnicos](https://github.com/joesouzah/Chronopolis-v2/blob/main/AUDITORIA-IMAGENS-EXTERNAS.md).

## Auditoria das galerias — 23/11/2026 (v0.37)

Foram verificados **706 elementos de imagem** em **nove páginas** de galerias, estratégia visual e referências de missões opcionais. Foram conferidos os endereços dos arquivos locais em relação à árvore do repositório: **nenhum arquivo referenciado faltava** nas páginas auditadas. As 706 imagens têm atributo de carregamento diferido e atributo `alt` no HTML; isso não constitui inspeção visual completa nem certifica o conteúdo de cada arquivo.

A verificação identificou um problema no tratamento de falhas: se uma imagem estava dentro de um link clicável, o aviso de erro criava outro link no seu interior. A v0.37 corrige esse comportamento, mantendo a miniatura ou galeria clicável para tentar abrir o arquivo original, sem links aninhados. Quando a imagem não está dentro de um link, o aviso continua oferecendo o endereço original.

## Materiais que ainda dependem de terceiros

Inventário técnico feito em **22/11/2026**, sobre as 20 transcrições Markdown:

| Tipo de referência | Ocorrências registradas | Situação |
| --- | ---: | --- |
| Imgbox — referência histórica | **91 no texto + 18 nas capas** | 3 restauradas pelo Drive; ainda 88 no texto e 18 capas (90 URLs diferentes) |
| Links para vídeos no YouTube | **10** | Referências preservadas; disponibilidade individual não conferida |
| Links para arquivos no Mega | **7** | Referências preservadas; integridade, disponibilidade e direitos de redistribuição não verificados |
| Experiência do Mozilla Hubs | **1** | Serviço original encerrado em maio de 2024 |

**Esses números são ocorrências em páginas, não contagens de arquivos únicos. A contagem de URLs distintas do Imgbox é 93.** Não significam que o material esteja acessível ou que exista autorização para redistribuí-lo.

### Um link que ficou histórico

O artigo [Chrono Trigger no metaverso]({{ '/acervo/Meta/' | relative_url }}) descreve uma experiência hospedada no Mozilla Hubs. A Mozilla [encerrou oficialmente o serviço em 31 de maio de 2024](https://support.mozilla.org/pt-BR/kb/encerramento-suporte-mozilla-hubs). O texto original permanece no acervo como registro de uma experiência que existiu.

## Critérios para melhorar a preservação

1. Conferir individualmente os links e registrar a data, o resultado e a fonte da verificação.
2. Recuperar imagens originais **apenas quando houver autorização para hospedar cópias**; quando isso não for possível, conservar os créditos e a referência externa.
3. Nunca substituir silenciosamente um documento antigo por uma versão reescrita.
4. Registrar materiais indisponíveis, conteúdos desatualizados e links externos sem afirmar que foram validados.
5. Melhorar os resumos e a acessibilidade sem alterar o significado do registro histórico.

## Como consultar as versões anteriores

O [repositório original](https://github.com/joesouzah/Chronopolis) permanece disponível, e cada página nova do arquivo oferece a referência ao HTML de origem. A [evolução técnica e a lista de migração](https://github.com/joesouzah/Chronopolis-v2/blob/main/MIGRACAO.md) estão documentadas no repositório atual.

*Projeto de fã independente. Chrono Trigger e materiais de terceiros pertencem aos respectivos titulares de direitos.*
