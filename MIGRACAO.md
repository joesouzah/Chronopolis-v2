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

## Evolução v0.3 (22/11/2026)

- As 20 matérias principais do catálogo foram convertidas em arquivos Markdown na pasta `acervo/`.
- Cada uma possui URL estática e permanente em `/Chronopolis-v2/acervo/<id>/`, com título, resumo, categoria, procedência e data de migração — esta data **não é** a data de publicação original.
- A cópia fiel dos 25 HTML originais permanece na pasta `legado/`; não foi substituída pelas transcrições.
- Os links do catálogo passam a apontar para páginas estáticas, indexáveis, sem JavaScript obrigatório para leitura.
- **Não foi feita revisão editorial linha a linha das transcrições automáticas.** O original continua como fonte de conferência.
- Imagens, vídeos, Mega e demais downloads não foram espelhados localmente; a disponibilidade e os direitos de cada arquivo devem ser verificados antes de arquivá-los.

## Revisão editorial v0.4 (22/11/2026)

As 20 transcrições em `acervo/` passaram por revisão de linguagem e organização. Os arquivos de 2022 em `legado/` não sofreram alterações. Os textos novos trazem a marca `editorial_reviewed_on` e indicam explicitamente quando há pontos históricos ainda não verificados. O catálogo e os dois índices de pesquisa foram sincronizados.


## Fonte externa em avaliação — RPG aQui! (22/11/2026)

**URL recebida:** [Chrono Trigger — Beta](http://rpga8.free.fr/especial/ct/beta.htm)

**Motivo da investigação:** material histórico de `Chrono Trigger` considerado valioso e possivelmente vulnerável à indisponibilidade. Essa preocupação é um alerta de preservação, **não uma confirmação de que o site esteja prestes a cair**.

**Verificações tentadas em 22/11/2026:**
- Acesso direto ao documento, incluindo tentativa com HTTPS: indisponível ou bloqueado nos mecanismos de consulta usados. O HTML e as imagens **não foram recuperados**.
- Consulta à Wayback Machine: não foi possível confirmar uma captura da URL exata, pois a consulta ao arquivo também foi bloqueada.
- Buscas públicas encontraram referências ao domínio `rpga8.free.fr` como parte de um antigo portal de RPG e uma página de outra seção atribuída a `RPG aQui!` em um registro de 2013. Isso **não confirma autoria nem licença** do conteúdo específico de `beta.htm`.

**Estado:** `PENDENTE DE ACESSO`. Não transcrever, reproduzir nem publicar imagens/HTML enquanto a fonte e suas condições de reutilização não forem verificadas. Manter a URL como pista de pesquisa.

**Próxima ação técnica:** quando o endereço puder ser lido, inventariar título, data, autores, seções, links internos, imagens e eventuais licenças; conferir presença de capturas históricas antes de decidir como integrar resumos próprios ou materiais autorizados ao Chronopolis.

**Consulta de cópias históricas:** [Wayback Machine — URL exata](https://web.archive.org/web/*/http://rpga8.free.fr/especial/ct/beta.htm) (atalho para pesquisa, **não comprova existência de snapshot**).

**Atualização baseada em arquivo recebido (22/11/2026):** foi analisado o HTML salvo da página `traducoes.htm` (não `beta.htm`). O documento contém créditos de © RPG aQui! 2004, 31 links a outras seções de Chrono Trigger, 5 referências a ZIPs, e caminhos para CSS/imagens locais ausentes do envio. O HTML original recebido foi mantido fora deste repositório público. O inventário da fonte, com SHA-256 e links, está em [FONTES-RPGAQUI.md](FONTES-RPGAQUI.md). A página Beta continua sem acesso confirmado.
