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
| **Program Removes Spaces from User Input**| User Input: "pants pants" | Output: "pantspants" |
| **Program Removes Punctuation from User Input**| Input: "p#an^t@s  /p(ant%s" | Output: "pantspants" |
| **Program Assigns Characters Numeric Values** | Input: "pants" | Output: "3 1 1 1 1" |
| **Program Sums Character Values**| Input: "3 1 1 1 1" | Page Displays: 7 |
