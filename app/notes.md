#functional requirements

##gameplay
-6 tries to guess 5 letter word
- type letter -displays letter in tile with option to backspace delete
-guesses must be real word

Guess colours
-gray:absent
-yellow: present elesewhere
-green:correct

##design
Tiles: 5 squares x 6 rows
virtual keyboard

##Interactions
-border of tile changes to light grey
-animation to add letter
-Enter submits guess

##making a guess
detects keypresses if letter only
update letters attribute
-update tile markup with each letter

if keypress is backspace
-delete last letter in markup

guesses saved in localstorage