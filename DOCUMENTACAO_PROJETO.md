# VitaCare - explicacao do projeto

## Ideia

O VitaCare e uma landing page de uma clinica medica ficticia. A ideia foi criar um site simples para apresentar a clinica, mostrar especialidades e permitir que o paciente solicite um agendamento.

## Motivo do tema

Escolhemos uma clinica porque e um tema util, realista e facil de entender. Ele permite demonstrar conteudo institucional, servicos, responsividade e formulario.

## Tecnologias

- HTML: estrutura da pagina.
- CSS: visual, layout e responsividade.
- JavaScript: menu mobile e validacao do formulario.

Nao existe backend. O formulario apenas simula o envio.

## Como foi feito

O projeto foi separado em tres arquivos principais:

- `index.html`: conteudo e secoes da pagina.
- `style.css`: cores, espacamentos, cards, layout e versao mobile.
- `script.js`: abertura do menu no celular e mensagens do formulario.

A pasta `assets` contem imagens de referencia das telas.

## Partes do site

- Cabecalho com logo e menu.
- Home com chamada principal.
- Indicadores da clinica.
- Lista de especialidades.
- Secao sobre a clinica.
- Formulario de agendamento.
- Rodape.

## Funcionalidades

- Navegacao por links internos.
- Rolagem suave.
- Menu responsivo em telas pequenas.
- Formulario com campos obrigatorios.
- Mensagem de erro quando falta informacao.
- Mensagem de sucesso quando o formulario e preenchido.

## Responsividade

O CSS usa `@media (max-width: 800px)` para adaptar o site ao celular. Nessa versao, o menu vira botao, os cards ficam em uma coluna e o formulario tambem fica em uma coluna.

## Por que usar essas tecnologias

HTML, CSS e JavaScript foram usados porque sao a base da web e bastam para uma pagina institucional simples. Frameworks, banco de dados e servidor nao eram necessarios para o objetivo do trabalho.

## Limitacoes

O projeto nao salva agendamentos reais. Para virar um sistema completo, precisaria de backend, banco de dados, controle de horarios e envio de confirmacao por e-mail ou WhatsApp.

## Resumo para falar ao professor

O VitaCare e uma pagina responsiva para uma clinica medica ficticia. Fizemos o projeto para apresentar a clinica, suas especialidades e permitir uma solicitacao de agendamento.

Usamos HTML para estruturar, CSS para criar o visual responsivo e JavaScript para controlar o menu mobile e validar o formulario. O formulario nao envia dados reais; ele simula o envio no navegador.

## Perguntas provaveis

### Qual foi a ideia principal?

Criar um site de clinica que apresente servicos e facilite o pedido de agendamento.

### O formulario envia dados reais?

Nao. Ele apenas simula o envio. Para enviar de verdade, precisaria de backend.

### O site funciona no celular?

Sim. Ele tem layout responsivo para telas menores.

### Onde entra o JavaScript?

No menu mobile e na validacao do formulario.

### O que poderia melhorar?

Backend, banco de dados, horarios reais, painel administrativo e confirmacao por e-mail ou WhatsApp.
