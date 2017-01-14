#Clayton Collins
#'The Epidecider'
###This app provides either a random or serious suggestion as to which epicodus class the user should take.

##Random Decisions
####For random decisions, a set of random numbers is generated, then the user's inputs are compared to those numbers.
####The choose function is responsible for comparing the random numbers to the user inputs. All random numbers and user inputs are saved in respective arrays, then choose compares them and returns the value to choice tracker. after each choice is assessed, the  'choicetracker' variable is adjusted accordingly. After all the choices have been made, choicetracker is the index of the final choice.
####As far as I can tell, it works pretty well as a random generator - admittedly you can bias it by always choosing high or low numbers, but even then there is variability due to the random number generator occasionally acting not so random.

##Real Decisions
####The genuine decision tool is much simpler. Each question has preferred languages associated with each answer. After completing the document, an array is assembled that contains the user's choices. By tallying which language had the most positive response, the preferred language is determined. The decision is handled as an array so the user can get a suggestion for more than one language which I think corresponds more faithfully to the difficulty in choosing just one. The questions aren't the best, and adding more detailed ones would definitely improve the whole quizzes accuracy.

###Copyright Clayton Collins 2017
