# Sample Form Submission API

This is a simple app to test form submissions or CRUD operations.

Nothing is really saved to any permanent data store.

Send your form data or api calls to the following API endpoints:
|Request Type|Endpoint|Description
|---|---|---|
|`GET`|`https://hur-form-api.herokuapp.com/api/` | Get all records
|`GET`| `https://hur-form-api.herokuapp.com/api/<id>` | Get a single record where `<id>` is an integer.  
|||```Example:  /api/123```
|`POST`| `https://hur-form-api.herokuapp.com/api/` | Add new record
|`PUT`| `https://hur-form-api.herokuapp.com/api/<id>` | Updata data where `<id>` is an integer
|`DELETE`| `https://hur-form-api.herokuapp.com/api/` | Delete all records
|`DELETE`| `https://hur-form-api.herokuapp.com/api/<id>` | Delete a single record where `<id>` is an integer

© 2021 Christian Hur. MIT License.
