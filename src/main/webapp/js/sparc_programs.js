let id = parseInt(sessionStorage.getItem("currentLearningOutcomeNumber"));
let lessonNumber = parseInt(sessionStorage.getItem("currentLessonNumber"));
getSparcProgram(id);
function getSparcProgram(id) {
    if(lessonNumber == 2)
    {   
	if(id == 0 || id == 3){       
		return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% Template for a SPARC file
%% Author: 
%% Description:
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
sorts
#people = {peter, joaan}.
predicates
mother (#people, #people).
rules
mother (joaan, peter).`     
	}       
	else if(id == 1){       
		return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% Template for a SPARC file
%% Author: 
%% Description:
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
sorts
#people = {peter, john}.
predicates
parent(#people, #people).
rules
parent(john, peter).`
	}
	else if(id == 2){       
		return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% Template for a SPARC file
%% Author: 
%% Description:
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
sorts
#people = {peter, john}.
predicates
dad(#people, #people).
rules
dad(john, peter).` 
	}
	else{       
		return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% Template for a SPARC file
%% Author: 
%% Description:
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
sorts
#people = {sara, bob}.
predicates
father(#people, #people).
rules
father(bob, sara).`
	}
}
else if(lessonNumber == 3)
{
    if(id == 0)
    {
        return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        %% Template for a SPARC file
        %% Author: 
        %% Description:
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        sorts
        #people = {peter, joaan}.
        predicates
        mother (#people, #people).
        rules
        mother (joaan, peter).`;
    }
    else if(id == 1)
    {
        return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        %% Template for a SPARC file
        %% Author: 
        %% Description:
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        sorts
        #people = {peter, John}.
        predicates
        father (#people, #people).
        rules
        father (John, peter).`;
    }
    else if(id == 2)
    {
        return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        %% Template for a SPARC file
        %% Author: 
        %% Description:
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        sorts
        #people = {peter, John}.
        predicates
        father (#people, #people).
        rules
        father (John, peter).`;
    }
    else if(id == 3)
    {
        return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        %% Template for a SPARC file
        %% Author: 
        %% Description:
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        sorts
        #people = {peter, John}.
        predicates
        dad (#people, #people).
        rules
        dad (John, peter).`;
    }
}
else if(lessonNumber == 4)
{
    if(id == 0)
    {
    	return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        %% Template for a SPARC file
        %% Author: 
        %% Description:
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        sorts
        #people = {peter, John}.
        predicates
        parent (#people, #people).
        rules
        parent (John, peter).`;
    }
    else if(id == 1)
    {
    	return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        %% Template for a SPARC file
        %% Author: 
        %% Description:
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        sorts
        #people = {peter, John}.
        predicates
        dad (#people, #people).
        rules
        dad (John, peter).`;
    }
    else if(id == 2)
    {
    	return  `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        %% Template for a SPARC file
        %% Author: 
        %% Description:
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        sorts
        #people = {peter, Jooan}.
        predicates
        mom (#people, #people).
        rules
        mom (Jooan, peter).`;
    }
    else if(id == 3)
    {
    	return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        %% Template for a SPARC file
        %% Author: 
        %% Description:
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        sorts
        #people = {peter, John}.
        predicates
        parent (#people, #people).
        rules
        parent (John, peter).`;
    }
}
else if(lessonNumber == 5)
{
    if(id == 0 || id == 4)
    {
    	return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        %% Template for a SPARC file
        %% Author: 
        %% Description:
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        sorts
        #element = {Helium, He}.
        predicates
        symbolFor (#element, #element).
        rules
        symbolFor (Helium, He).`;
    }
    else if(id == 1)
    {
    	return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        %% Template for a SPARC file
        %% Author: 
        %% Description:
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        sorts
        #element = {Hydrogen, H}.
        predicates
        symbolFor (#element, #element).
        rules
        symbolFor (Hydrogen, H).`;
    }
    else if(id == 2)
    {
    	return  `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        %% Template for a SPARC file
        %% Author: 
        %% Description:
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        sorts
        #element = {Carbon, C}.
        predicates
        symbolFor (#element, #element).
        rules
        symbolFor (Carbon, C).`;
    }
    else if(id == 3)
    {
    	return `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        %% Template for a SPARC file
        %% Author: 
        %% Description:
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        sorts
        #element = {Phosphorus, P}.
        predicates
        symbolFor (#element, #element).
        rules
        symbolFor (Phosphorus, P).`;
    }
}

}
