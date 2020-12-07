function sortFilesInProject() {
  var projectId = "1Mz0WzwJc-t1MGVoAnYisHEEhnQ5jaLT45d5AwERGFasfdsVdfGB_Jx0_MP";
  
  var content = makeRequest_(projectId, 'content');
  var files = content.files;

  var fileNames = [];
  var filesIndexedByNames = {};
  for (var i in files) {
    fileNames.push(files[i].name);
    filesIndexedByNames[files[i].name] = files[i];
  }
  fileNames.sort();

  var sortedFiles = [];
  for (var i = 0; i < fileNames.length; i++) {
    sortedFiles.push(filesIndexedByNames[fileNames[i]]);
  }
  
  makeRequest_(projectId, 'content', 'put', JSON.stringify({files:sortedFiles}));
}

/**
 * Make calls to the Apps Script API
 * Required scopes:
 * - https://www.googleapis.com/auth/script.external_request
 * - https://www.googleapis.com/auth/script.deployments
 * - https://www.googleapis.com/auth/script.projects
 *
 * @param  {string} projectId - The script project's Drive ID.
 * @param  {string} resourcePath - The resource path.
 * @param  {string} [method] - the HTTP method for the request.
 * @param  {string} [payload] - the payload (e.g. POST body) for the request.
 *
 * @return {object} The response from the Apps Script API.
 */
function makeRequest_(projectId, resourcePath, method, payload) {
  var baseUrl = "https://script.googleapis.com/v1/projects/";
  if (!projectId) var url = baseUrl;
  else var url = baseUrl + projectId + "/" + resourcePath;
  var options = {
    headers: {
      Authorization: "Bearer " + ScriptApp.getOAuthToken()
    }
  };
  if (method == 'post' || method == 'put') {
    options.method = method;
    options.payload = payload;
    options.headers['Content-Type'] = 'application/json';
  }
  return JSON.parse(UrlFetchApp.fetch(url, options));
}