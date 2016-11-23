# Motivation

Handwritten scripts are abound in my daily life. I scibble a lot to 
record ideas, but it's hard to keep track of them. How about turn
those into running code? Better yet, automatically classify those files
for later indexing? Or just use it as a simple calculator? In this project, 
I plan to use computer vision techniques to build this handy tool. It could
be a start up idea, who knows? Exciting stuff.

# Pipeline

    picture input     character recognition    tokenization + spell check      parsing           evaluation
    
    --------------    ['1', '1', ' ', '2',
    |11 22 + 33 *| =>  '2', ' ', '+', ' ',  => ['11', '22', '+', '33', '*'] => (* (+ 1 22) 3) => 69
    --------------     '3', '3', ' ', '.']

## picture input

My current plan is to make this a web app. I will access camera to take photos

## character recognition

I will support recognizing standard ASCII characters using convnet

## tokenization + spell check

Group characters into tokens and spell check each token

## parsing

Secmantic parsing using context free grammar

## evaluation

Evaluate the parse tree