# Como publicar uma matéria no Chronopolis v2

O Chronopolis utiliza **GitHub Pages + Jekyll + Pages CMS** para permitir que novas postagens sejam escritas no navegador, sem editar HTML.

## Primeira utilização

1. Acesse [Pages CMS](https://app.pagescms.org/) e entre com a conta do GitHub que controla o repositório.
2. Se solicitado, autorize o aplicativo GitHub do Pages CMS a acessar **somente** `joesouzah/Chronopolis-v2` (ou o conjunto de repositórios que escolher).
3. Abra o repositório **Chronopolis-v2**, na branch `main`.
4. O arquivo de configuração `.pages.yml` já está pronto. Não é necessário recriá-lo.

> A autorização do Pages CMS é controlada pelo proprietário do GitHub; a implantação do site no GitHub Pages, por si só, não confirma que o editor está autorizado.

## Adicionar uma matéria

No Pages CMS, escolha **Novas publicações** e crie uma entrada. Preencha:

| Campo | Para que serve |
|---|---|
| Título | Aparece no cartão e na página da matéria |
| Data de publicação | Organiza as novas matérias |
| Categoria | História, Personagens, Galeria, Arquivo ou Curiosidades |
| Resumo para os cartões | Descrição curta nas buscas e na lista |
| Imagem de capa | Opcional; use uma imagem que você possa publicar |
| Conteúdo da matéria | Editor visual com formatação e imagens |

Salve/publice a entrada no editor. A alteração fica em um arquivo Markdown na pasta `_artigos/`; o GitHub Pages gera automaticamente a nova página quando o commit de publicação for processado.

**Endereço do site:** https://joesouzah.github.io/Chronopolis-v2/

**Acompanhar publicação:** [GitHub Actions](https://github.com/joesouzah/Chronopolis-v2/actions).

## Imagens

As novas imagens enviadas pelo Pages CMS ficam na pasta `assets/uploads/` e são referenciadas pelo endereço público do site.

**Importante:** o acervo histórico em `legado/` ainda usa imagens de hospedagens externas (como o Imgbox), e alguns vídeos e downloads têm links de terceiros. Esses materiais estão em fase de auditoria; não presuma que os links continuarão disponíveis nem que todo arquivo pode ser redistribuído.

## Arquivo histórico

As 25 páginas HTML do site original estão preservadas em `legado/`. O catálogo e o leitor mostram as matérias existentes; o Pages CMS, nesta configuração, edita **novas publicações**, não substitui as 25 páginas históricas.

## Problemas comuns

- **O repositório não aparece no CMS:** revise a autorização do aplicativo no GitHub e o acesso ao repositório.
- **A matéria não apareceu no site:** verifique se a alteração chegou à branch `main` e consulte [Actions](https://github.com/joesouzah/Chronopolis-v2/actions) para o resultado da publicação.
- **A imagem não aparece:** confira se o caminho foi gerado dentro de `assets/uploads/` e se há permissão para utilizá-la.
- **Um vídeo antigo não toca:** o leitor fornece um link ao YouTube; a disponibilidade depende do provedor externo.

## Preservação

O repositório [Chronopolis original](https://github.com/joesouzah/Chronopolis) continua intacto. A nova versão pode ser reconstruída a partir dos arquivos do GitHub.
