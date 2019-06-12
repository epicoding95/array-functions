# Scrabble Score Checker

#### A program that allows users to input a word and determine its raw Scrabble score, assuming no special tiles. 6/1/17

#### By **Marilyn Carlin and David Wilson**

## Description

A website created with C# and HTML where a user can submit a word and determine its raw Scrabble score.


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels."** | Example Input: 3| Example Output: 3 |
| **The program adds "ay" to single-letter words beginning with a vowel.** | Example Input: "i" | Example Output: iay |
| **if the word starts with a consonant, remove the consonant, put it at the end, add "ay"**| User Input: "spray" | Output: "ayspray" |
| **if the first consonant includes "qu" move the "u" along with the "q".**| Input: "squeal" | Output: "uealsqay" |
| **words beginning with "y" treat "y" as a consonant** | Input: "yours" | Output: "oursyay" |

