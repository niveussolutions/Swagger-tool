
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

function pathTemplate({path,mehod}){
  return`  ${path}:
      ${mehod}:`
}

module.exports={template,pathTemplate}
