# Mock Data
We hold the following sets of data:

## data.json
Holds a collection of processes that can be returned by the getProcess endpoint. Each process is an object of type AmbulatoryHealthClaimProcess or NursingClaimProcess.

The following objects exist:

key | processType 
---- | ---
47603109 | AmbulatoryHealthClaimProcess
47603110 | AmbulatoryHealthClaimProcess
47603111 | AmbulatoryHealthClaimProcess
47603112 | NursingClaimProcess
47603113 | NursingClaimProcess

## external-login-data.json
Holds a collection of external login data that can be returned by the getExternalLoginData endpoint. Each object is of type ExternalLoginData. The data id is a sessionManagerId.


sessionManagerId | processType | process key
---- | --- | ---
sess-47603109 | AmbulatoryHealthClaimProcess | 47603109
sess-47603110 | AmbulatoryHealthClaimProcess | 47603110
sess-47603111 | AmbulatoryHealthClaimProcess | 47603111
sess-47603112 | NursingClaimProcess | 47603112
sess-47603113 | NursingClaimProcess | 47603113
