# Guía de estilos para GIT

> **Nota:** Esta guía asume que tiene los conocimientos básicos de GIT

## Contenido
1. [Introducción](#introducción)
2. [GitFlow](#gitflow)
3. [Manteniendo Commits Limpios](#manteniendo-commits-limpios)
4. [Nombramiento de branch](#nombramiento-de-branch)
5. [Resources](#resources)

## Introducción

Esta es una guía para definir	buenas prácticas para el control de versiones con GIT, si conoces alguna que no este definida en esta guía manda un **PR (Pull Request)** para contribuir. 

Los branches *master* y *develop* están protegidos y solo se pueden fusionar mediante **PR**. El branch *master* esta reservado para **producción** y *develop* para **staging**.

## GitFlow

GitFlow es un modelo de branching para GIT, el cual nos permite el desarrollo en paralelo y obtener ordenado nuestro repositorio.

Nuestros repositorios principales son master para producción y develop para staging. Todo se desprenderá de develop creando un nuevo branch con los prefijos **feature**, **fix**.

**Feature:** Nuevas características

**Fix:** Reparar bugs de un feature ya en develop


Como trabajar GitFlow:

### Feature

```
develop  - - -
              |
              |
              |
              - - > feature/my-feature - - -
                                            |
                                            |
                                            |
develop  <- - - - - - - - - - - - - - - - - -
                    (Pull Request)
```

1. Actualiza el branch develop ``$ git pull origin develop``
2. Desprende un nuevo branch de develop ``$ git checkout -b feature/my-feature``
3. Al finalizar el feature guarda los cambios ``$ git add .``
4. Crea el commit ``$ git commit -m “Added new feature”``
5. Sube el branch al repositorio remoto ``$ git push origin feature/my-feature``
6. Crea un pull request hacia develop

### Fix

```
develop  - - -
              |
              |
              |
              - - > fix/my-fix - - -
                                    |
                                    |
                                    |
develop  <- - - - - - - - - - - - - -
                (Pull Request)
```

1. Actualiza el branch develop ``$ git pull origin develop``
2. Desprende un nuevo branch de develop ``$ git checkout -b fix/my-fix``
3. Al finalizar el feature guarda los cambios ``$ git add .``
4. Crea el commit ``$ git commit -m “Added new fix``
5. Sube el branch al repositorio remoto ``$ git push origin fix/my-fix``
6. Crea un pull request hacia develop

## Manteniendo Commits Limpios

Para mantener los commits de un branch, siempre es mejor master un historial de commits limpio siempre que sea posible.

Un historial de commits limpio es cuando cada commit es solido, representando un feature o fix. No tiene que ser una gran cantidad de trabajo, solo un buen pedazo que, conceptualmente, es independiente.

Un commit no limpio a menudo está plagado de confirmaciones como “fide a bug in my previous commit” o “Oops, forgot this file” o “rewrite that class again for 3rd time”.

Idealmente, debemos de esforzarnos por crear commits que casi se puedan leer como una historia de como estos se unieron al feature.

Ejemplo de un historial de commits limpio sería:

```
  * Added the models and forms for potatoes.
  * Added the API for interacting with potatoes, along with unit test.
  * Added the comment dialog for reviewing potatoes.
```

Ejemplo de un mal historial de commits sería:

```
* Added the modern and forms for potatoes.
* Decided the id_spud field wasn’t necessary and remove it.
* Forgot form.js
* Added the API for interacting with potatoes, along with unit test.
* On of the tests failed, fixed it.
* Added the comment dialog for reviewing potatoes.
* Fixed a typo.
* Another typo.
```

## Nombramiento de branch

Parte de mantener las cosas mantenibles es asegurarse de que los nombre de los branches sean claros y organizados.

```
# bien

* fix-attachment-captions
* ui-rewrite
* search-api 
* feature/search-api
* file-attachments/ui-rewrite
 
# mal

* my-work
* enhancements
* bugfix
```

## Manteniendo Limpio el Historial de GIT

## Resources
- [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html)
- [A Clean Git History](https://spin.atomicobject.com/2017/04/23/maintain-clean-git-history)
- [Keeping Commit Clean](https://www.notion.so/Keeping-Commit-Histories-Clean-0f717c4e802c4a0ebd852cf9337ce5d2)
- [Git Rebase](http://cambrico.net/git-control-de-versiones/rebase-en-git)