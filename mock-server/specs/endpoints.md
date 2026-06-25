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
 
