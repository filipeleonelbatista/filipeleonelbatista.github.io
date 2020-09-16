---
layout: post
title:  "Utilizando git hub actions para atualizar o readme do perfil"
tags:
  - aprendizado
hero: https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1476&q=80
overlay: green
published: true
---

## Utilizando git hub actions para atualizar o readme do perfil

Estava pensando em como atualizar dinamicamente o meu perfil do Github para mostrar a listagem de posts que faço aqui na minha página. 
<!–-break-–>
Foi então que o `Youtube` me recomendou um [vídeo](https://www.youtube.com/watch?v=ECuqb5Tv9qI) que dava as dicas. Como é inglês e nem todos tem um inglês de ouvido bom, 
vou fazer a explicação apenas da listagem das postagens, os demais itens ficam fácil de entender depois.

### Como fazer para a listagem de postagens aparecer no meu `readme.md`

O primeiro passo que fiz foi criar o meu readme bem estiloso, se é que você entende 😅, enfim. O código que utilizei está abaixo. Você pode salvar as imagens que ficam no 
meu repositório e utilizar ou pode mencionar as suas no src do image.

[Link do repositório](https://github.com/filipeleonelbatista/filipeleonelbatista)

{% highlight markdown %}
~~~
<img width="auto" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/5qi38njir9vsm46ync2qjvrrs.svg">

# Olá, sou o Filipe Batista. 👋

<p align="left">
  <a href="http://filipeleonelbatista.github.io/">
    <img alt="Meu site" width="22px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/worldwide.svg" />
  </a>&ensp;
  <a href="https://www.linkedin.com/in/filipelbatista/">
    <img alt="LinkedIn" width="22px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/052-linkedin.svg" />
  </a>&ensp;
  <a href="mailto:filipe.x2016@gmail.com">
    <img alt="Email" width="22px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/044-instagram.svg" />
  </a>&ensp;
  <a href="https://instagram.com/filipegaucho22">
    <img alt="Instagram" width="22px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/gmail.svg" />
  </a>
</p>

Amo muito minha família.<br/> 
Tenho uma grande realização no desenvolvimento especialmente quando consigo tirar idéias do papel e tornar em realidade. <br/> 
Sou desenvolvedor PowerBuilder 11.5, PHP, Python for web, um pouquinho de Oracle SQL e SQLite e em busca do fullstack com React 💻
<br/> <br/> 
🏥 &nbsp; Trabalho na empresa [**Salux - Informatização em saúde**](https://www.salux.com.br/)
<br/> 💜 &nbsp; Buscando colaborar com projetos em Front-end e Back-end usando React
<br/> 😊 &nbsp; Posso te ajudar com PHP e Python
<br/> 💻 &nbsp; Minha stack: ReactJS, Node.js, React Native & Typescript
<br/> 💬 &nbsp; Sobre mim: Curto tecnologias, games como COD MW WZ(atualmente) e Minecraft, seriados no Netflix e videos no Youtube.

<h3 align="center" >Minha Stack</h3>
<p align="center">
  <img alt="JavaScript" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/javascript.svg" />
  <img alt="React" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/reactjs.svg" />
  <img alt="TypeScript" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/typescript.svg" />
  <img alt="Node.js" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/node.svg" />
</p>

<h3 align="center" >Minhas linguagens e ferramentas</h3>
<p align="center">
  <img alt="HTML5" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/html5.svg" />
  &ensp;<img alt="CSS3" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/css3.svg" />
  &ensp;<img alt="Bootstrap" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/bootstrap.svg" />
  &ensp;<img alt="JavaScript" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/javascript.svg" />
  &ensp;<img alt="React" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/reactjs.svg" />
  &ensp;<img alt="TypeScript" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/typescript.svg" />
  &ensp;<img alt="Node.js" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/node.svg" />
  &ensp;<img alt="PHP" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/php.svg" />
  &ensp;<img alt="Python" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/python.svg" />
  &ensp;<img alt="Flask" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/flask.svg" />
  &ensp;<img alt="C" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/c.svg" />
  &ensp;<img alt="C#" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/c-sharp.svg" />
  &ensp;<img alt="SQL" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/oracle.svg" />
  &ensp;<img alt="MySQL" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/mysql.svg" />
  &ensp;<img alt="PowerBuilder11.5" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/pb-logo.svg" />
</p>
<p align="center">
  <img alt="VsCode" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/visual-studio-code.png" />
  &emsp;<img alt="VisualStudio" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/vs.png" />
  &ensp;<img alt="PowerBuilder11.5" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/pb-logo.svg" />
  &ensp;<img alt="SQL Developer" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/sql-developer.png" />
  &ensp;<img alt="Insomnia" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/insomnia.png" />
  &ensp;<img alt="Figma" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/figma.png" />
  &emsp;<img alt="GitHub" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/032-github.svg" />
  &emsp;<img alt="Terminal" width="26px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/terminal.png" />
</p>

<br>

### 🚨 Ultimas postagens

### 📝 Metas para 2021

- [x] Meta 1
- [ ] Meta 2


<h3 align="center" >Vamos nos conectar 😉</h3>
<p align="center">
  <a href="http://filipeleonelbatista.github.io/">
    <img alt="Meu site" width="22px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/worldwide.svg" />
  </a>&ensp;
  <a href="https://www.linkedin.com/in/filipelbatista/">
    <img alt="LinkedIn" width="22px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/052-linkedin.svg" />
  </a>&ensp;
  <a href="mailto:filipe.x2016@gmail.com">
    <img alt="Email" width="22px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/044-instagram.svg" />
  </a>&ensp;
  <a href="https://instagram.com/filipegaucho22">
    <img alt="Instagram" width="22px" src="https://github.com/filipeleonelbatista/filipeleonelbatista/blob/master/assets/gmail.svg" />
  </a>
</p>
~~~
{% endhighlight %}

Na sequência, precisamos criar uma pasta no repositório com o seguinte caminho `.github/workflows/blog-post-workflow.yml` e coloca a seguinte informação nele

{% highlight yml %}
~~~
name: Latest blog post workflow
on:
  schedule: # Run workflow automatically
    - cron: '0 * * * *' # Runs every hour, on the hour
  workflow_dispatch: # Run workflow manually (without waiting for the cron to be called), through the Github Actions Workflow page directly
jobs:
  update-readme-with-blog:
    name: Update this repo's README with latest blog posts
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: gautamkrishnar/blog-post-workflow@master
        with:
          feed_list: "https://filipeleonelbatista.github.io/feed.xml"
~~~
{% endhighlight %}

Você pode mudar o nome do workflow e o principal, onde diz `feed_list` colocar o link da sua lista de `feed RSS`. O resto manter igual o que está ali. 
Os links dos repositórios vão estar no final do artigo.

Após vamos voltar no nosso `README.MD` e incluir os marcadores `<!-- BLOG-POST-LIST:START -->` e `<!-- BLOG-POST-LIST:END -->` onde nosso workflow vai inserir os dados.

{% highlight markdown %}
~~~
...

### 🚨 Ultimas postagens
<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->

...
~~~
{% endhighlight %}

Feito isso agora vamos rodar nossa `action` indo na `home` do `repositório` e ver todas as `actions` que temos ali.

![Tela do workflow](https://github.com/filipeleonelbatista/filipeleonelbatista.github.io/blob/master/uploads/posts/workflow-action.JPG)

Basta clicar no botão `Run Workflow` que ele irá colocar na fila e iniciar a captura de informações do `feed RSS`.

Se tiver mais duvidas assista o vídeo. apesar de ser inglês não interfere muito na parte do entendimento.

Enfim. era isso por enquanto! Não esquece de conectar no [`Linkedin`](https://www.linkedin.com/in/filipelbatista) para acompanhar os aprendizados e trocar uma idéia.
Até Mais

## Links de referência

 - [VIDEO - Next Level GitHub Profile README](https://www.youtube.com/watch?v=ECuqb5Tv9qI)

 - [BLOG POST Workflow Repo](https://github.com/gautamkrishnar/blog-post-workflow)
