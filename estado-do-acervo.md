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

**Há inconsistências nos próprios registros antigos.** Uma lista de Charm diverge em algumas recompensas do bestiário; os campos sem dados permanecem marcados como ausentes e não são preenchidos por suposição. Textos, imagens e arquivos integrais de terceiros não foram espelhados publicamente.

**Ainda há fichas com cobertura parcial**, especialmente os registros completos de consumíveis/objetos-chave, códigos de trapaça e imagens de mapas. A recuperação de tabelas históricas não implica autorização para republicar HTML, comentários integrais, imagens, ROMs ou arquivos de terceiros.

## Materiais que ainda dependem de terceiros

Inventário técnico feito em **22/11/2026**, sobre as 20 transcrições Markdown:

| Tipo de referência | Ocorrências registradas | Situação |
| --- | ---: | --- |
| Imagens externas, principalmente do Imgbox | **91** | URLs preservadas; arquivos ainda não hospedados localmente |
| Links para vídeos no YouTube | **10** | Referências preservadas; disponibilidade individual não conferida |
| Links para arquivos no Mega | **7** | Referências preservadas; integridade, disponibilidade e direitos de redistribuição não verificados |
| Experiência do Mozilla Hubs | **1** | Serviço original encerrado em maio de 2024 |

**Esses números são ocorrências em páginas, não contagens de arquivos únicos.** Não significam que o material esteja acessível ou que exista autorização para redistribuí-lo.

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
