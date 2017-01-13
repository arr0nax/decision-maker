# Clayton Collins
#Decision maker
#this app provides either a random or serious suggestion as to which epicodus class the user should take

##for random decisions, a set of random numbers is generated, then the users inputs are compared to those choices. the 'choicetracker' variable controls the ultimate decisions - every time a user choice is larger than the random number, choice tracker gets bigger, when a user choice is smaller the choice tracker gets smaller etc.
##the choose function is resposible for comparing the random numbers to the user inputs. all random numbers and user inputs are saved in respective arrays, then choose compares them and returns the value to choice tracker. after every choice has been assessed choice tracker corresponds to the index of a choice.
###As far as I can tell, it works pretty well as a random generator - admittedly you can bias it by always choosing high or low numbers, but even then there is variability due to the random number generator occasionally acting not so random.

##The genuine decision tool is much simpler. Each question has preferred languages associated with each answer. After completing the document, an array is assembled that contains the languages most associated with the user input - this is returned as a string. By handling the choice as an array, the user can get a suggestion for more than one language which I think corresponds more faithfully to the difficulty in choosing a language. The questions aren't the best, and adding more detailed ones would definitely improve the whole quizzes accuracy.
