# Get Process
---
method: POST
url: /processServiceFacade/getProcess 
body: GetProcessApiRequest
responseBody: GetProcessApiResponse
---
we need to get a responce as a GetProcessApiResponse type as the follow:
resultCode: 0 
resultDesc: 'Sucess"
messages and ProcessMessage and invalidTabString as empty array
failed: false
baseProcess: Go to data.json and get the object that it's processKey is the same as the request ProcessKey. 

 #externalLogin

 method: POST
url: externalLoginController/externalLogin
body: LoginInput 
responseBody: LoginOutput 
---
authenticates an external user via session manager ID and returns user profile, auth token, roles, menu, and session data needed to initialize the app

#documentsStep enter step

method: POST
url: claimsFacade/enterClaimDocumentIntegrityStep
body: { process: IClaimProcess }
responseBody: ProcessServiceOutput
---
validates the document integrity step entry conditions and returns an updated process with refreshed document package state, process messages, and invalid tabs list.

#documentsStep complete step

method: POST
url: claimsFacade/endDocumentIntegrityStep
body: { process: IClaimProcess }
responseBody: ProcessServiceOutput
---
validates and completes the document integrity step, returns the updated process with any validation messages, and determines if the process should proceed to the next step or wait for documents.
