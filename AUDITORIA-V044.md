# Chronopolis — dependências externas v0.44

**Data:** 24/11/2026  
**Escopo:** imagens do Imgbox ainda referenciadas pelo Chronopolis, proteção de interface quando a hospedagem externa falha e ferramenta de auditoria sem alterações automáticas.

## Situação atual

A auditoria histórica já havia identificado **90 URLs distintas do Imgbox ainda pendentes** nas 20 páginas do acervo original. Elas correspondem a **106 ocorrências atuais nas páginas `acervo/`** depois da recuperação local de três imagens do artigo Meta. A homepage acrescenta duas ocorrências dessas mesmas URLs e `assets/catalog.js` acrescenta 18 ocorrências, portanto esses arquivos também dependem do mesmo conjunto histórico.

Esses números representam referências no código, não arquivos comprovadamente acessíveis.

## Estado do provedor em 24/11/2026

O domínio principal do Imgbox continua acessível e sua página de ajuda pública permanece disponível. A documentação do serviço recomenda manter cópias de segurança dos arquivos e informa que, para hotlink, devem ser usados os códigos apropriados de imagem completa; outros endereços podem mudar no futuro.

Referências:
- https://imgbox.com/
- https://imgbox.com/help

O Chronopolis herdou URLs antigas em `thumbs2.imgbox.com`. Por isso, mesmo com o serviço principal ativo, essas referências continuam sendo tratadas como **dependências frágeis**.

A ferramenta web usada nesta auditoria não conseguiu abrir diretamente cinco URLs de miniaturas amostradas em `thumbs2.imgbox.com`. Esse bloqueio é uma limitação do ambiente de consulta e **não autoriza classificar as imagens como apagadas ou quebradas**.

## Mudança de interface

Até a v0.43, as duas capas externas em destaque na homepage simplesmente removiam a tag `img` quando o carregamento falhava, deixando apenas a arte de reserva do cartão.

A v0.44 mantém esse fallback visual, mas agora acrescenta um aviso discreto **“Imagem externa indisponível”** no cartão. O mesmo comportamento foi aplicado às capas criadas dinamicamente pelo catálogo.

Isso não bloqueia o acesso ao artigo e não altera o endereço histórico da imagem.

Nos artigos, o tratamento anterior continua válido: imagens externas que falham mostram um aviso e preservam um caminho para tentar abrir a referência original.

## Auditoria reproduzível

Foi adicionado `scripts/auditar-externos.cjs`.

Sem parâmetros, o script:
1. lê `acervo/`, `_artigos/`, `index.html` e `assets/catalog.js`;
2. identifica URLs do host `thumbs2.imgbox.com`;
3. apresenta número de ocorrências, URLs distintas e arquivos-fonte;
4. lista cada URL e suas origens;
5. não realiza nenhuma requisição de rede.

Com `--check`, o script tenta consultar as URLs usando o `fetch` nativo do Node.js, com:
- concorrência limitada a 4 requisições;
- timeout de 10 segundos;
- redirecionamentos permitidos;
- tentativa `HEAD` e fallback para `GET` parcial em respostas que costumam bloquear HEAD;
- categorias separadas para ativo, restrito, ausente, erro de servidor, timeout e erro de rede.

O script **não remove, substitui, baixa nem altera imagens**. Uma resposta 403/429 é tratada como restrição, não como prova de arquivo inexistente. Apenas 404/410 entram na categoria “ausente”, e mesmo assim a decisão editorial de remover uma referência continua manual.

## Arquivos alterados na v0.44

- `scripts/auditar-externos.cjs` — novo auditor de dependências externas;
- `assets/app.js` — fallback de capas externas no catálogo;
- `assets/site.css` — indicador visual discreto para falha de capa;
- `index.html` — fallback das duas capas externas estáticas e cache v0.44;
- `_layouts/artigo.html` — cache CSS v0.44;
- `404.html` — cache CSS v0.44;
- documentação do estado do projeto.

Nenhum arquivo em `legado/`, nenhuma imagem local e nenhuma das páginas históricas em `acervo/` foi reescrita nesta versão.

## Limites

- As 90 URLs individuais não foram declaradas ativas ou quebradas nesta etapa.
- Não foi executado o modo de rede do script dentro do repositório publicado.
- O estado do domínio principal Imgbox não garante a existência de uma miniatura específica.
- Não foi criada automação periódica; qualquer monitoramento futuro precisa de decisão própria.
- A prioridade continua sendo recuperar cópias exatas quando houver evidência suficiente, sem substituir silenciosamente uma imagem histórica por outra parecida.

## Próximo passo

Executar a verificação HTTP em um ambiente que consiga acessar `thumbs2.imgbox.com` e, para qualquer 404/410 confirmado, procurar a cópia exata por identificador, backup, arquivo histórico ou outra fonte verificável antes de trocar o endereço.
