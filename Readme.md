For running Frontend:-

step-1: cd frontend
step-2: npm i/npm i --legacy-peer-deps
step-3: npm start

Notes:- 

1.Try to use latest technlogies and with proper syntax...eg. img must have alt tag
2.API call should be like production level...
    I. dispatch function from components to action
    II. then call function from action to api function and dispatch data to universal state 
     management reudx/reduxTolkit
    III. Any api call should not be inside any component box there are already too much 
     code in every components and our codebase is very large so it will be difficult to debug anything or track functionality.
     IV. Console and Terminal should be free totaly so try to remove non-usable filed which create log in console and warning in terminal.

N.B.: Overall, code like production level will ease our work.