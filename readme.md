# Discord D6 Bot

A simple discord dice bot. 

https://discord.com/api/oauth2/authorize?client_id=841789518276460564&permissions=34880&scope=bot

## Discord Commands 

* `/d6help`

There are two supported formats to roll e.g. 8× 6-sided dice:

* `/8d6` 
* `/d6 8`

The numbers are variable (max dices at once: `512`). These are all valid commands (German lads can type `w` instead of `d`):

* `/2d4`
* `/8w6`
* `/d100`
* `/w100`

The bot response will look like this:

> `/8d6 ⇒ 1 2 4 4 4 4 5 6 – sum 30`

## Features

* All dices are sumed up
* Dices are sorted numerical
* Highest dices are highlighted

## Coriolis Features

This bot was primarily created for the role-playing game [Coriolis](https://www.coriolis-rpg.com/).

* If you roll one or more sixes, the bot reacts with 🎉
* If you roll no sixes or ones, the bot reacts with 💩
* If you roll at least three sixes, the bot posts a celebration gif

## Contribute

If you find a bug or have ideas for improvement, please open an Issue or create a Pull Request.