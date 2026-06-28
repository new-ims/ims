const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.MOCK_SERVER_PORT || 3001);
const DATA_PATH = path.join(__dirname, 'data.json');
const EXTERNAL_LOGIN_DATA_PATH = path.join(__dirname, 'external-login-data.json');

function readData() {
  const file = fs.readFileSync(DATA_PATH, 'utf8');
  const parsed = JSON.parse(file);
  return Array.isArray(parsed) ? parsed : [];
}

function readExternalLoginData() {
  const file = fs.readFileSync(EXTERNAL_LOGIN_DATA_PATH, 'utf8');
  const parsed = JSON.parse(file);
  return Array.isArray(parsed) ? parsed : [];
}

function getRandomDelayMs() {
  const min = 500;
  const max = 3000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(body));
}

function parseRequestBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';

    req.on('data', chunk => {
      raw += chunk;
    });

    req.on('end', () => {
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(error);
      }
    });

    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/processServiceFacade/getProcess') {
    try {
      const body = await parseRequestBody(req);
      const processKey = body?.processKey;
      const processes = readData();
      const baseProcess = processes.find(item => String(item?.processKey) === String(processKey)) || null;

      const responseBody = {
        resultCode: 0,
        resultDesc: 'Sucess',
        messages: [],
        failed: false,
        baseProcess,
        processMessage: [],
        invalidTabString: []
      };

      setTimeout(() => {
        sendJson(res, 200, responseBody);
      }, getRandomDelayMs());
      return;
    } catch (error) {
      sendJson(res, 400, {
        resultCode: 1,
        resultDesc: 'Invalid request payload',
        messages: [
          {
            level: 2,
            message: 'Request body is not valid JSON',
            refId: null,
            messageId: null
          }
        ],
        failed: true,
        baseProcess: null,
        processMessage: [],
        invalidTabString: []
      });
      return;
    }
  }

  if (req.method === 'POST' && req.url === '/externalLoginController/externalLogin') {
    try {
      const body = await parseRequestBody(req);
      const sessionManagerId = body?.sessionManagerId;
      const users = readExternalLoginData();
      const matchedUser = users.find(item => String(item?.sessionManagerData?.sessionId) === String(sessionManagerId)) || null;

      const responseBody = matchedUser || {
        resultCode: 1,
        resultDesc: 'User not found',
        messages: [],
        failed: true,
        userId: '',
        userDisplayName: '',
        userRoleTitle: '',
        authToken: '',
        userRoles: {},
        userProfile: null,
        processKey: '',
        processType: '',
        processTypeCode: 0,
        loanType: '',
        insuredId: 0,
        companyCode: 0,
        userSerialNumber: 0,
        sessionManagerData: {},
        userAttributes: [],
        wasUserSessionDeleted: false,
        wasActivatePerfomed: false
      };

      setTimeout(() => {
        sendJson(res, matchedUser ? 200 : 404, responseBody);
      }, getRandomDelayMs());
      return;
    } catch (error) {
      sendJson(res, 400, {
        resultCode: 1,
        resultDesc: 'Invalid request payload',
        messages: [
          {
            level: 2,
            message: 'Request body is not valid JSON',
            refId: null,
            messageId: null
          }
        ],
        failed: true,
        userId: '',
        userDisplayName: '',
        userRoleTitle: '',
        authToken: '',
        userRoles: {},
        userProfile: null,
        processKey: '',
        processType: '',
        processTypeCode: 0,
        loanType: '',
        insuredId: 0,
        companyCode: 0,
        userSerialNumber: 0,
        sessionManagerData: {},
        userAttributes: [],
        wasUserSessionDeleted: false,
        wasActivatePerfomed: false
      });
      return;
    }
  }

  sendJson(res, 404, {
    resultCode: 404,
    resultDesc: 'Not Found',
    messages: [],
    failed: true,
    baseProcess: null,
    processMessage: [],
    invalidTabString: []
  });
});

server.listen(PORT, () => {
  console.log(`Mock server is listening on http://localhost:${PORT}`);
});
