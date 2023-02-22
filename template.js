
function template({title,url}){
return `openapi: 3.0.0
info:
  title: ${title}
  description: please add your description
  version: 1.0.0

servers:
  - url: ${url}

paths:`;
}

function pathTemplate({path,method,name}){
  return`  ${path}:
    ${method}:
      summary: ${name}`
}

module.exports={template,pathTemplate}
