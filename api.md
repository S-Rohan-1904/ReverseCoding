<div align="center">
<h1>🔐 Decrypt-API </h1>

An API for the coding club's Decrypt challenge

</div>

---

## Routes

Henceforth the term `{{url}}` will refer to the URL on which the API is hosted.

---
(1) **`GET`** `{{url}}/api/problem1`

**Expected Request Body**: Plain JSON ; Must have an accessible `input` field:

```JSON
{
    "input": "<String>"
}
```

**Successful response**: Accompanied by a 200 (OK) status code:

```JSON
{
    "output": "<String>"
}
```

## Possible error responses

There are two kinds of errors possible

 - **status code**: 400 (Bad Request)
Two possible causes:
   - Not a valid input (*code*: 0)
   - The request is not in the expected form as sent by the Frontend (*code*: 1)

- **status code**: 500 (Internal server error)
only possible causes:
   - Some unexpected error (*code*: 0)

**Error**
```JSON
{
    "reason": "...",
    "code": "<Integer>"
}
```

**NOTE**: 
  - use the `reason` for displaying, only when the case is of (status code: 400, code: 0) otherwise just debugging
