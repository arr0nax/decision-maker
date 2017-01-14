#Clayton Collins
#'The Epidecider'
###this app provides either a random or serious suggestion as to which epicodus class the user should take

##Random Decisions
####for random decisions, a set of random numbers is generated, then the user's inputs are compared to those numbers.
####the choose function is responsible for comparing the random numbers to the user inputs. all random numbers and user inputs are saved in respective arrays, then choose compares them and returns the value to choice tracker. after every choice has been assessed, the  'choicetracker' variable is adjusted accordingly. after all the choices have been made, choicetracker is the index of the final choice.
####As far as I can tell, it works pretty well as a random generator - admittedly you can bias it by always choosing high or low numbers, but even then there is variability due to the random number generator occasionally acting not so random.

##Real Decisions
####The genuine decision tool is much simpler. Each question has preferred languages associated with each answer. After completing the document, an array is assembled that contains the languages most associated with the user input - this is returned as a string. By handling the choice as an array, the user can get a suggestion for more than one language which I think corresponds more faithfully to the difficulty in choosing a language. The questions aren't the best, and adding more detailed ones would definitely improve the whole quizzes accuracy.

###Copyright Clayton Collins 2017
