# Chronopolis — auditoria de referências v0.42

**Data:** 24/11/2026  
**Repositório analisado:** `joesouzah/Chronopolis-v2`, branch `main`  
**Objetivo:** conferir destinos locais, imagens do roteiro visual e mecanismos de recuperação de navegação, distinguindo evidência comprovada de disponibilidade não testada.

## Resultado desta etapa

| Verificação | Resultado | Alcance real |
| --- | --- | --- |
| Destinos internos da homepage e links do layout de artigos | Sem arquivos ausentes nos caminhos examinados | Checagem direta dos fontes correspondentes, incluindo arquivos `_artigos/`, `acervo/` e recursos de interface |
| Arquivos adicionais apontados por páginas de pesquisa e índices | Encontrados | As verificações por arquivo totalizaram **52 caminhos**; isso não é uma varredura de todo o repositório |
| Roteiro visual, cinco partes | **522** imagens referenciadas: 129 + 122 + 135 + 132 + 4 | Os caminhos de `href` e `src` conferem em todas as posições inspecionadas; sem duplicação de `href` entre as posições de uma mesma parte |
| Amostra dos arquivos da estratégia no repositório | **15 de 15 presentes** | Primeiro, intermediário e último arquivo de cada uma das cinco partes; não são todos os 522 arquivos |
| Configuração Jekyll | `baseurl: /Chronopolis-v2`; coleção `artigos` com `/artigos/:name/` | Configuração de fonte confirmada, não prova da implantação em produção |
| Rotas com diferenças de maiúsculas/minúsculas | `/acervo/Meta/` e `/acervo/Sobre/` coincidem com o `permalink` dos arquivos consultados | Não padronizar o caso sem criar redirecionamentos |
| Links externos (Imgbox, URLs históricas e downloads) | **Não verificados em tempo real nesta etapa** | A falha de uma consulta ou a existência de uma referência não é prova de link ativo/inativo |

### Integridade do roteiro visual

As cinco matérias foram inspecionadas pelo HTML armazenado no Markdown, comparando o `href` do link de ampliação com o `src` de cada miniatura.

| Parte | Capturas | Coleções recolhíveis | Amostra encontrada no repositório |
| --- | ---: | ---: | --- |
| 1 | 129 | 9 | `estrategia_002.svg`, `estrategia_067.svg`, `estrategia_133.svg` |
| 2 | 122 | 7 | `estrategia_136.svg`, `estrategia_195.svg`, `estrategia_256.svg` |
| 3 | 135 | 8 | `estrategia_257.svg`, `estrategia_324.svg`, `estrategia_388.svg` |
| 4 | 132 | 8 | `estrategia_390.svg`, `estrategia_456.svg`, `estrategia_524.svg` |
| 5 | 4 | 1 | `estrategia_525.svg`, `estrategia_527.svg`, `estrategia_528.svg` |

**Observação:** os SVGs amostrados foram encontrados no repositório. Os arquivos observados usam imagens codificadas internamente, reduzindo dependência da origem para essas cópias. Não foi feito teste de renderização individual nem comparação byte a byte com o espelho privado.

## Melhoria implementada

Foi criada a página `404.html` na raiz do repositório, com front matter Jekyll e o endereço `/404.html`. Ela reaproveita os estilos do Chronopolis e oferece os caminhos **Início**, **Acervo** e **Galerias**. Os links usam `relative_url` para respeitar `baseurl`. A página não exclui nem altera publicações ou mídias.

A página 404 reduz a chance de o visitante ficar sem orientação ao encontrar uma URL inexistente. **Ela não repara automaticamente URLs quebradas**: um redirecionamento só deve ser criado quando o destino correto for identificado.

## Ressalvas e próximas verificações

1. **Não houve inventário completo da árvore do repositório nesta sessão.** Portanto, não declarar que 100% das 522 imagens ou de todos os links existentes foram testados individualmente.
2. **Não houve checagem HTTP abrangente de provedores externos** ou validação da página publicada em navegador real. Imagens externas podem falhar independentemente do arquivo fonte.
3. Os links do menu principal com hashes como `#historia`, `#galeria` e `#arquivos` são **rotas virtuais tratadas por `assets/app.js`**, não necessariamente elementos com `id` no HTML. Não classificá-los como quebrados apenas por não encontrar um ID correspondente. Sem JavaScript, esses filtros não funcionam como o menu dinâmico.
4. A compilação do GitHub Pages após esta alteração **ainda precisa ser confirmada**. Sem esse teste, não afirmar que a página 404 já está disponível publicamente.
5. Para uma auditoria integral posterior, listar os arquivos da branch, resolver os `permalink` reais do Jekyll, validar os 522 caminhos locais, examinar as demais galerias e somente então testar links externos com limite de requisições e registro de resposta/data.

## Referências no projeto

- [Repositório atual](https://github.com/joesouzah/Chronopolis-v2)
- [Página inicial publicada — sujeito à verificação em navegador](https://joesouzah.github.io/Chronopolis-v2/)
- [Fontes históricas e proveniência](FONTES-RPGAQUI.md)
- [Estado do acervo](estado-do-acervo.md)

**Princípio de preservação:** não remover uma referência histórica somente por ela não responder durante um teste; documentar a falha, sua data e a possibilidade de consultar cópias locais ou arquivadas.
