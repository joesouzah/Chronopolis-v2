# Chronopolis — auditoria de integridade visual v0.43

**Data:** 24/11/2026  
**Repositório:** `joesouzah/Chronopolis-v2`, branch `main`  
**Escopo:** mídias locais publicadas pelo Chronopolis e referências existentes nas páginas Markdown/HTML usadas pelo site.

## Resultado principal

A árvore completa da branch `main` foi consultada diretamente pelo GitHub. Ela contém **1.319 entradas**, sendo **1.239 arquivos** e **80 diretórios**. Entre os arquivos, há **1.137 mídias visuais locais** sob o projeto (`svg`, `png`, `jpg/jpeg`, `gif`, `webp` ou `avif`).

Foram examinadas **56 páginas Markdown publicadas** em `_artigos/`, `acervo/`, `estado-do-acervo.md` e `fontes-historicas.md`. Somando as referências locais distintas dentro de cada página, há **1.194 usos de mídia**. Esse número é maior que 1.137 porque uma mesma imagem pode aparecer em mais de uma página.

**Resultado:** nenhuma referência local examinada aponta para um arquivo inexistente.

## Cobertura por conjunto

| Conjunto local | Arquivos na árvore | Referenciados | Ausentes | Sem uso publicado |
| --- | ---: | ---: | ---: | ---: |
| Roteiro visual — `assets/media/historico/estrategia/` | 522 | 522 | 0 | 0 |
| Artworks e imagens — `assets/media/historico/artworks-e-imagens/` | 157 | 157 | 0 | 0 |
| Sprites — `assets/sprites/chrono-trigger/` | 214 | 214 | 0 | 0 |
| Techs — `assets/media/historico/techs/` | 116 | 116 | 0 | 0 |
| Imagens históricas gerais — `assets/media/historico/images/` | 56 | 56 | 0 | 0 |
| Tabs — `assets/media/historico/tabs/` | 56 | 56 | 0 | 0 |
| Wallpapers recuperados do Drive | 7 | 7 | 0 | 0 |
| Side quests | 5 | 5 | 0 | 0 |
| Metaverso — cópias recuperadas | 3 | 3 | 0 | 0 |
| Favicon | 1 | 1 | 0 | 0 |
| **Total** | **1.137** | **1.137** | **0** | **0** |

### Observação sobre Spekkio

Uma conferência intermediária encontrou seis sprites de Spekkio fora das páginas de bestiário, chefes e Charm. Antes de classificá-los como órfãos, a matéria `chrono-trigger-missoes-opcionais-segredos.md` foi relida. Os seis arquivos são utilizados nela, um para cada forma/faixa de nível. Portanto, **não são mídias órfãs**.

## Estratégia visual

As cinco partes do roteiro visual foram comparadas integralmente com a árvore do repositório:

- Parte 1: 129 de 129;
- Parte 2: 122 de 122;
- Parte 3: 135 de 135;
- Parte 4: 132 de 132;
- Parte 5: 4 de 4.

A pasta da estratégia contém exatamente **522 arquivos**, e as cinco páginas referenciam exatamente **522 arquivos distintos** dessa pasta. Não há arquivo ausente nem mídia preservada sem referência nesse conjunto.

## Auditoria reproduzível

Foi adicionado o utilitário `scripts/auditar-midias.cjs`, escrito somente com módulos nativos do Node.js. Ele:

1. percorre os arquivos do repositório;
2. identifica mídias visuais em `assets/`;
3. lê as fontes publicadas do site;
4. extrai caminhos locais de imagens;
5. informa referências ausentes e mídias preservadas sem referência;
6. retorna código de erro somente quando existe uma referência para arquivo ausente.

O script não baixa arquivos, não modifica o acervo e não depende de pacotes externos. Ele **não foi configurado para execução automática**; isso evita criar uma automação/schedule sem autorização específica.

## O que esta auditoria não prova

- Não foi feita comparação visual ou por hash entre cada arquivo local e sua fonte histórica.
- Não foi medida qualidade, resolução ou corrupção interna de todos os 1.137 arquivos.
- Links e imagens hospedados em serviços externos não foram testados nesta etapa.
- A existência do arquivo no GitHub não garante que o navegador público tenha renderizado a página corretamente.
- A auditoria externa anterior continua registrando dependências do Imgbox e outros provedores; esta v0.43 trata da **integridade dos arquivos locais**.

## Conclusão

A camada de mídia hospedada pelo próprio Chronopolis está estruturalmente íntegra no estado auditado: **1.137 de 1.137 arquivos visuais locais estão referenciados por fontes publicadas, e nenhuma das referências locais examinadas aponta para arquivo ausente**.

Próximo passo técnico recomendado: teste de renderização pública e verificação HTTP controlada das dependências externas, sem remover referências históricas apenas por uma falha temporária.
