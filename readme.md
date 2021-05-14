# Discord D6 Bot

A simple discord dice bot. 

Install link: https://discord.com/api/oauth2/authorize?client_id=841789518276460564&permissions=34880&scope=bot

## Discord Commands 

* `/d6help`

There are two supported formats to roll e.g. 8× 6-sided dice:

* `/8d6` 
* `/d6 8`

The numbers are variable. These are all valid commands:

* `/2d4`
* `/d20 5`
* `/d100`

The bot response will look like this:

> `/8d6 ⇒ 1 2 4 4 4 4 5 6`

## Coriolis Features

This bot was primarily created for the role-playing game [Coriolis](https://www.coriolis-rpg.com/).

* If you roll one or more sixes, the bot reacts with 🎉
* If you roll no sixes or ones, the bot reacts with 💩
* If you roll at least three sixes, the bot posts a celebration gif

## General Features

* Dices are sorted numerical
* Highest dices are highlighted
* German support (`w` instead of `d`, e.g. `/8w6`)
* Optional `sum` parameter to sum up all dices (this may be handy for some cases or other games), e.g. `/8d6 sum`

## Contribute

If you find a bug or have ideas for improvement, please open an issue or create a pull request.

## Changelog

* `1.0.1` optional sum parameter