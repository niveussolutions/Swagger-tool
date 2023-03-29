//Template of swagger documentation top side.
function swaggerTopTemplate({title,url}):string{
return `openapi: 3.0.0
info:
  title: ${title}
  description: please add your description
  version: 1.0.0

servers:
  - url: ${url}

paths:`;
    }
//Template of swagger documentation path.
    function swaggerPathTemplate({path,method,name}):string{
  return`  ${path}:
    ${method}:
      summary: ${name}`
    }
// Example response template
     function exampleResponse(){
      return`\n        "200":
          description: it is an example response
          content:
            JSON/application:
              schema:
                type: object
              example:
                {}`
     }
export {swaggerTopTemplate,swaggerPathTemplate,exampleResponse}
    