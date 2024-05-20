# Project: MBDS Angular Assignments
## All Availables Methods for the ressource Assignment

## End-point: GET - All Assignments
### Assignment Page Retrieval

This endpoint retrieves the assignment page with the specified page number.

#### Request

- Method: GET
    
- Endpoint: `{{base_url}}/assignment?page=1`
    

#### Response

The response will include a `success` flag indicating the success status, a `message` field for any additional information, a `status_code` for the status of the response, and a `data` object containing the retrieved assignment page details.

An example response body:

``` json
{
    "success": true,
    "message": "",
    "status_code": 0,
    "data": {
        "docs": [
            {
                "_id": "",
                "nom": "",
                "dateDeRendu": "",
                "rendu": true,
                "__v": 0
            }
        ],
        "totalDocs": 0,
        "limit": 0,
        "page": 0,
        "totalPages": 0,
        "pagingCounter": 0,
        "hasPrevPage": true,
        "hasNextPage": true,
        "prevPage": null,
        "nextPage": 0
    }
}

 ```
### Method: GET
>```
>{{base_url}}/assignment?page=1
>```
### Query Params

|Param|value|
|---|---|
|page|1|
|rendu|true|
|nom|Five|
|dateDeRendu|2024-06-23|


### Response: 200
```json
{
    "success": true,
    "message": "Assignments fetched successfully",
    "status_code": 200,
    "data": {
        "docs": [
            {
                "_id": "65e07d1a91fdd69d5d5f1b47",
                "nom": "Skiptube",
                "dateDeRendu": "2023-09-20T21:00:00.000Z",
                "rendu": false,
                "__v": 0
            },
            {
                "_id": "65e07d1a91fdd69d5d5f1b48",
                "nom": "Omba",
                "dateDeRendu": "2023-06-28T21:00:00.000Z",
                "rendu": true,
                "__v": 0
            },
            {
                "_id": "65e07d1a91fdd69d5d5f1b49",
                "nom": "Skinte",
                "dateDeRendu": "2024-01-06T21:00:00.000Z",
                "rendu": false,
                "__v": 0
            },
            {
                "_id": "65e07d1a91fdd69d5d5f1b4a",
                "nom": "Yamia",
                "dateDeRendu": "2023-12-10T21:00:00.000Z",
                "rendu": false,
                "__v": 0
            },
            {
                "_id": "65e07d1a91fdd69d5d5f1b4b",
                "nom": "Janyx",
                "dateDeRendu": "2024-01-03T21:00:00.000Z",
                "rendu": true,
                "__v": 0
            },
            {
                "_id": "65e07d1a91fdd69d5d5f1b4c",
                "nom": "Eare",
                "dateDeRendu": "2023-08-01T21:00:00.000Z",
                "rendu": false,
                "__v": 0
            },
            {
                "_id": "65e07d1b91fdd69d5d5f1b4d",
                "nom": "Oyoloo",
                "dateDeRendu": "2023-05-25T21:00:00.000Z",
                "rendu": true,
                "__v": 0
            },
            {
                "_id": "65e07d1b91fdd69d5d5f1b4e",
                "nom": "Jaxspan",
                "dateDeRendu": "2023-10-10T21:00:00.000Z",
                "rendu": false,
                "__v": 0
            },
            {
                "_id": "65e07d1b91fdd69d5d5f1b4f",
                "nom": "Reallinks",
                "dateDeRendu": "2023-05-17T21:00:00.000Z",
                "rendu": false,
                "__v": 0
            },
            {
                "_id": "65e07d1b91fdd69d5d5f1b50",
                "nom": "Topicstorm",
                "dateDeRendu": "2024-01-27T21:00:00.000Z",
                "rendu": false,
                "__v": 0
            }
        ],
        "totalDocs": 354,
        "limit": 10,
        "page": 1,
        "totalPages": 36,
        "pagingCounter": 1,
        "hasPrevPage": false,
        "hasNextPage": true,
        "prevPage": null,
        "nextPage": 2
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GET - All Assignments Unpaginated
This endpoint makes an HTTP GET request to retrieve a list of assignments without pagination from the specified base URL. The response will be in JSON format and will include a "success" indicator, a "message" field, a "status_code", and an array of "data" containing assignment details. Each assignment object in the "data" array includes information such as assignment ID, status, student details, subject details, submission date, note, and remarks.

Example Response:

``` json
{
    "success":true,
    "message":"",
    "status_code":0,
    "data":[
        {
            "_id":"",
            "rendu":true,
            "nom":"",
            "student_id":"",
            "subject_id":"",
            "dateDeRendu":"",
            "__v":0,
            "note":0,
            "remarque":"",
            "student":{
                "_id":"",
                "name":"",
                "email":"",
                "password":"",
                "role":"",
                "active":0,
                "__v":0,
                "picture":""
            },
            "subject":{
                "_id":"",
                "name":"",
                "professor_id":"",
                "__v":0,
                "picture":"",
                "professor":{
                    "_id":"",
                    "name":"",
                    "email":"",
                    "password":"",
                    "role":"",
                    "active":0,
                    "__v":0,
                    "picture":""
                }
            }
        }
    ]
}

 ```
### Method: GET
>```
>{{base_url}}/assignment/nopagination
>```
### Query Params

|Param|value|
|---|---|
|rendu|true|
|nom|Five|
|dateDeRendu|2024-06-23|


### Response: 200
```json
{
    "success": true,
    "message": "Assignments fetched successfully",
    "status_code": 200,
    "data": [
        {
            "_id": "6647a5b373118d024c8115f0",
            "rendu": true,
            "nom": "TP Pinterest",
            "student_id": "65f6c287077da0fab286988f",
            "subject_id": "66478be4587e7527a9dfa13c",
            "dateDeRendu": "2024-06-07T00:00:00.000Z",
            "__v": 0,
            "note": 15,
            "remarque": "bien",
            "student": {
                "_id": "65f6c287077da0fab286988f",
                "name": "Jammy",
                "email": "jacob@itu-university.mg",
                "password": "$2b$10$utkdB8j9vBEllr2vEIcubOAXzyzd1ptFYspeVmL3nH.xbREZrIWSO",
                "role": "ROLE_USER_STUDENT",
                "active": 1,
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F65f6c287077da0fab286988f.jpeg?alt=media&token=4eba4793-09d7-49a5-9d14-847a98739673"
            },
            "subject": {
                "_id": "66478be4587e7527a9dfa13c",
                "name": "Grails",
                "professor_id": "66124afac717602e31786e6a",
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/subject_pictures%2F66478be4587e7527a9dfa13c.png?alt=media&token=ca7f3b3a-f9e5-4d9c-8cbb-428905f90a21",
                "professor": {
                    "_id": "66124afac717602e31786e6a",
                    "name": "Mme Françoise",
                    "email": "francoise@gmail.com",
                    "password": "$2b$10$joc0c3XIGDThNqVrAgEJKu/tZZVEeDHJEWLgYACu8Wg7K3DBe1Fgu",
                    "role": "ROLE_USER_PROFESSOR",
                    "active": 1,
                    "__v": 0,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F66124afac717602e31786e6a.png?alt=media&token=b17f8e05-4a33-47e3-b92e-e296084f41d9"
                }
            }
        },
        {
            "_id": "6616a12409ac8ed1af1b361d",
            "rendu": true,
            "nom": "Projet angular",
            "student_id": "65f6c287077da0fab286988f",
            "subject_id": "6616479e09ac8ed1af1b35e7",
            "dateDeRendu": "2024-05-01T00:00:00.000Z",
            "__v": 0,
            "note": 19,
            "remarque": "bon travail",
            "student": {
                "_id": "65f6c287077da0fab286988f",
                "name": "Jammy",
                "email": "jacob@itu-university.mg",
                "password": "$2b$10$utkdB8j9vBEllr2vEIcubOAXzyzd1ptFYspeVmL3nH.xbREZrIWSO",
                "role": "ROLE_USER_STUDENT",
                "active": 1,
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F65f6c287077da0fab286988f.jpeg?alt=media&token=4eba4793-09d7-49a5-9d14-847a98739673"
            },
            "subject": {
                "_id": "6616479e09ac8ed1af1b35e7",
                "name": "Angular",
                "professor_id": "6612604c815d8e509d87c2a2",
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/subject_pictures%2F6616479e09ac8ed1af1b35e7.png?alt=media&token=760a6f61-8ff2-4a12-914f-0213aaf9656a",
                "professor": {
                    "_id": "6612604c815d8e509d87c2a2",
                    "name": "Jimmy",
                    "email": "mamail@gmail.com",
                    "password": "$2b$10$9z.ndEbaeludzOXhllf8PuByaY26Fnrm6y13cPzmJ0jqNAvptXWWK",
                    "role": "ROLE_USER_PROFESSOR",
                    "active": 1,
                    "__v": 0,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F6612604c815d8e509d87c2a2.png?alt=media&token=a6e4feac-1a67-4396-b24f-3742f9918628"
                }
            }
        },
        {
            "_id": "6612c48cfdb693366e35ef79",
            "rendu": true,
            "nom": "TP 2 JSF",
            "student_id": "65f6c287077da0fab286988f",
            "subject_id": "6612c2e5fdb693366e35ef58",
            "dateDeRendu": "2024-04-06T00:00:00.000Z",
            "__v": 0,
            "note": 17,
            "remarque": "tres bien",
            "student": {
                "_id": "65f6c287077da0fab286988f",
                "name": "Jammy",
                "email": "jacob@itu-university.mg",
                "password": "$2b$10$utkdB8j9vBEllr2vEIcubOAXzyzd1ptFYspeVmL3nH.xbREZrIWSO",
                "role": "ROLE_USER_STUDENT",
                "active": 1,
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F65f6c287077da0fab286988f.jpeg?alt=media&token=4eba4793-09d7-49a5-9d14-847a98739673"
            },
            "subject": {
                "_id": "6612c2e5fdb693366e35ef58",
                "name": "Jakarta EE",
                "picture": null,
                "professor_id": "6612604c815d8e509d87c2a2",
                "__v": 0,
                "professor": {
                    "_id": "6612604c815d8e509d87c2a2",
                    "name": "Jimmy",
                    "email": "mamail@gmail.com",
                    "password": "$2b$10$9z.ndEbaeludzOXhllf8PuByaY26Fnrm6y13cPzmJ0jqNAvptXWWK",
                    "role": "ROLE_USER_PROFESSOR",
                    "active": 1,
                    "__v": 0,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F6612604c815d8e509d87c2a2.png?alt=media&token=a6e4feac-1a67-4396-b24f-3742f9918628"
                }
            }
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: POST - Add Assignment
### Assignment Submission

This endpoint allows the client to submit an assignment.

#### Request Body

- `nom` (string, required): The name of the assignment.
    
- `dateDeRendu` (string, required): The submission date of the assignment.
    
- `rendu` (boolean, required): Indicates if the assignment has been submitted.
    
- `remarque` (string, required): Any additional remarks for the assignment.
    
- `subject_id` (string, required): The ID of the subject.
    
- `note` (number, required): The grade/points received for the assignment.
    

#### Response

The response is in JSON format and follows the schema below:

``` json
{
    "success": true,
    "message": "",
    "status_code": 0,
    "data": {
        "rendu": true,
        "_id": "",
        "nom": "",
        "student_id": "",
        "subject_id": "",
        "note": 0,
        "remarque": "",
        "dateDeRendu": "",
        "__v": 0
    }
}

 ```

- `success` (boolean): Indicates if the request was successful.
    
- `message` (string): Any additional message related to the request.
    
- `status_code` (number): The status code of the response.
    
- `data` (object): The data object containing assignment details.
    
    - `rendu` (boolean): Indicates if the assignment has been submitted.
        
    - `_id` (string): The ID of the assignment.
        
    - `nom` (string): The name of the assignment.
        
    - `student_id` (string): The ID of the student.
        
    - `subject_id` (string): The ID of the subject.
        
    - `note` (number): The grade/points received for the assignment.
        
    - `remarque` (string): Any additional remarks for the assignment.
        
    - `dateDeRendu` (string): The submission date of the assignment.
        
    - `__v` (number): Version control field.
### Method: POST
>```
>{{base_url}}/assignment
>```
### Body (**raw**)

```json
{
    "nom": "Mon nouveau devoir d'Anglais",
    "dateDeRendu": "2025-03-12",
    "rendu": false,
    "remarque" : "Pas de remarque particulière",
    "subject_id": "661256323ef4b3e6b552546c",
    "note": 19
}
```

### Response: 201
```json
{
    "success": true,
    "message": "Assignment saved successfully",
    "status_code": 201,
    "data": {
        "rendu": false,
        "_id": "664b8ae21bf78fa9e95e382e",
        "nom": "Mon nouveau devoir d'Anglais",
        "student_id": "65f6c287077da0fab286988f",
        "subject_id": "661256323ef4b3e6b552546c",
        "note": 19,
        "remarque": "Pas de remarque particulière",
        "dateDeRendu": "2025-03-12T00:00:00.000Z",
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: PUT - Update Assignment
## Assignment Update

This endpoint allows the client to update the status of a specific assignment.

### Request

- Method: PUT
    
- URL: `{{base_url}}/assignment/:id`
    

#### Request Body

- Type: JSON
    - `rendu`: Boolean - Indicates whether the assignment has been submitted.
        

### Response

The response for this request can be represented as a JSON schema:

``` json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    },
    "message": {
      "type": "string"
    },
    "status_code": {
      "type": "integer"
    },
    "data": {
      "type": "object",
      "properties": {
        "_id": {
          "type": "string"
        },
        "rendu": {
          "type": "boolean"
        },
        "nom": {
          "type": "string"
        },
        "student_id": {
          "type": "string"
        },
        "subject_id": {
          "type": "string"
        },
        "dateDeRendu": {
          "type": "string"
        },
        "__v": {
          "type": "integer"
        }
      }
    }
  }
}

 ```
### Method: PUT
>```
>{{base_url}}/assignment/:id
>```
### Body (**raw**)

```json
{
    "rendu": true
}
```

### Response: 200
```json
{
    "success": true,
    "message": "Assignment updated successfully",
    "status_code": 200,
    "data": {
        "_id": "6612c48cfdb693366e35ef79",
        "rendu": true,
        "nom": "TP 2 JSF",
        "student_id": "65f6c287077da0fab286988f",
        "subject_id": "6612c2e5fdb693366e35ef58",
        "dateDeRendu": "2024-04-06T00:00:00.000Z",
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GET - Assignment By ID
### Assignment Details

This endpoint retrieves assignment details based on the provided ID.

#### Request

- Method: GET
    
- URL: {{base_url}}/assignment/:id
    

#### Response

The response will be in JSON format and will contain the following properties:

``` json
{
  "success": true,
  "message": "",
  "status_code": 0,
  "data": {
    "_id": "",
    "nom": "",
    "dateDeRendu": "",
    "rendu": true,
    "__v": 0
  }
}

 ```

The response data will include details such as assignment ID, name, submission date, and status.
### Method: GET
>```
>{{base_url}}/assignment/:id
>```
### Response: 200
```json
{
    "success": true,
    "message": "Assignment fetched successfully",
    "status_code": 200,
    "data": {
        "_id": "65e07d1a91fdd69d5d5f1b48",
        "nom": "Omba",
        "dateDeRendu": "2023-06-28T21:00:00.000Z",
        "rendu": true,
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: DELETE - Delete Assignment by ID
### Delete Assignment

This endpoint is used to delete a specific assignment by providing the assignment ID in the URL.

#### Request

- Method: DELETE
    
- URL: `{{base_url}}/assignment/:id`
    

#### Response

The response will be a JSON object with the following properties:

- `success` (boolean): Indicates whether the request was successful.
    
- `message` (string): A message regarding the request status.
    
- `status_code` (integer): The status code of the response.
    
- `data` (object): An empty object is returned as the data for a successful deletion.
    

#### Example

``` json
{
    "success": true,
    "message": "",
    "status_code": 0,
    "data": {}
}

 ```
### Method: DELETE
>```
>{{base_url}}/assignment/:id
>```
### Response: 200
```json
{
    "success": true,
    "message": "Assignment deleted successfully",
    "status_code": 200,
    "data": {}
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)



# Project: Authentication

## End-point: GET - Profile

### GET /users/profile

This endpoint retrieves the profile information of the user.

#### Request
No request body is required for this endpoint.

#### Response
The response will be a JSON object with the following schema:

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    },
    "message": {
      "type": "string"
    },
    "status_code": {
      "type": "number"
    },
    "data": {
      "type": "object",
      "properties": {
        "user": {
          "type": "object",
          "properties": {
            "_id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "role": {
              "type": "string"
            },
            "active": {
              "type": "number"
            },
            "__v": {
              "type": "number"
            },
            "picture": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
```

### Method: GET
>```
>{{base_url}}/users/profile
>```
### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "success": true,
    "message": "User Found",
    "status_code": 200,
    "data": {
        "user": {
            "_id": "65f6c287077da0fab286988f",
            "name": "Jammy",
            "email": "jacob@itu-university.mg",
            "password": "$2b$10$utkdB8j9vBEllr2vEIcubOAXzyzd1ptFYspeVmL3nH.xbREZrIWSO",
            "role": "ROLE_USER_STUDENT",
            "active": 1,
            "__v": 0,
            "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F65f6c287077da0fab286988f.jpeg?alt=media&token=4eba4793-09d7-49a5-9d14-847a98739673"
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Register
### Method: POST
>```
>{{base_url}}/users/signup
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|name|Sarisary|text|
|email|sarisary@gmail.com|text|
|password|motdepasse|text|
|file|/C:/Users/ratsi/OneDrive/Images/FKJ.jpg|file|


### Response: 201
```json
{
    "success": true,
    "message": "User has been successfully created",
    "status_code": 201,
    "data": {
        "userDetails": {
            "userId": "664b8c7b1bf78fa9e95e3838",
            "email": "sarisary2@gmail.com",
            "name": "Sarisary",
            "role": "ROLE_USER_STUDENT",
            "active": 1
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login
### Login User

This endpoint allows users to log in by providing their email and password.

#### Request Body

- `email` (string, required): The email of the user.
    
- `password` (string, required): The password of the user.
    

#### Response

The response will be a JSON object with the following properties:

- `success` (boolean): Indicates if the login was successful.
    
- `message` (string): A message related to the login status.
    
- `status_code` (integer): A status code related to the login status.
    
- `data` (object): An object containing user details and a token.
    
    - `userDetails` (object): An object containing user details.
        
        - `userId` (string): The unique identifier of the user.
            
        - `name` (string): The name of the user.
            
        - `email` (string): The email of the user.
            
        - `role` (string): The role of the user.
            
    - `token` (string): The authentication token for the user.
        

#### Example Response

``` json
{
    "success": true,
    "message": "",
    "status_code": 0,
    "data": {
        "userDetails": {
            "userId": "",
            "name": "",
            "email": "",
            "role": ""
        },
        "token": ""
    }
}

 ```

#### JSON Schema

``` json
{
    "type": "object",
    "properties": {
        "success": {
            "type": "boolean"
        },
        "message": {
            "type": "string"
        },
        "status_code": {
            "type": "integer"
        },
        "data": {
            "type": "object",
            "properties": {
                "userDetails": {
                    "type": "object",
                    "properties": {
                        "userId": {
                            "type": "string"
                        },
                        "name": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "role": {
                            "type": "string"
                        }
                    }
                },
                "token": {
                    "type": "string"
                }
            }
        }
    }
}

 ```
### Method: POST
>```
>{{base_url}}/users/login
>```
### Body (**raw**)

```json
{
    "email": "francoise@gmail.com",
    "password":"motdepasse"
}
```

### Response: 200
```json
{
    "success": true,
    "message": "Auth successful",
    "status_code": 200,
    "data": {
        "userDetails": {
            "userId": "66124afac717602e31786e6a",
            "name": "Mme Françoise",
            "email": "francoise@gmail.com",
            "role": "ROLE_USER_PROFESSOR"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjEyNGFmYWM3MTc2MDJlMzE3ODZlNmEiLCJlbWFpbCI6ImZyYW5jb2lzZUBnbWFpbC5jb20iLCJuYW1lIjoiTW1lIEZyYW7Dp29pc2UiLCJyb2xlIjoiUk9MRV9VU0VSX1BST0ZFU1NPUiIsImlhdCI6MTcxNjIyNzM1Nn0.J0lV-kzvEulFt01mMOVScSYnIBzO0M2f6vX5CtMmLQA"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: PUT - Update Profile
### Update User Information

This endpoint allows the client to update user information.

#### Request Body

- `name` (text) - The new name of the user.
    
- `password` (text) - The new password of the user.
    

#### Response

The response is a JSON object with the following schema:

``` json
{
  "success": boolean,
  "message": string,
  "status_code": integer,
  "data": {
    "user": {
      "_id": string,
      "name": string,
      "email": string,
      "password": string,
      "role": string,
      "active": integer,
      "__v": integer,
      "picture": string
    }
  }
}

 ```
### Method: PUT
>```
>{{base_url}}/users/update
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|name|Jammy|text|
|email|mamail@gmail.com|text|
|file|/C:/Users/ratsi/OneDrive/Images/Captures d’écran/Capture d'écran 2024-04-01 132738.png|file|
|password|motdepasse2|text|


### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|


### Response: 200
```json
{
    "success": true,
    "message": "User Profile Updated",
    "status_code": 200,
    "data": {
        "user": {
            "_id": "65f6c287077da0fab286988f",
            "name": "Jammy",
            "email": "jacob@itu-university.mg",
            "password": "$2b$10$ZLI.chIIjctd7YiWfYQgAOwjQMiGN2BFCf17HfBX7EzB6tfJRHD7i",
            "role": "ROLE_USER_STUDENT",
            "active": 1,
            "__v": 0,
            "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F65f6c287077da0fab286988f.jpeg?alt=media&token=4eba4793-09d7-49a5-9d14-847a98739673"
        }
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: - TEST ONLY - Update Profile Picture
### Method: POST
>```
>{{base_url}}/users/uploadProfile
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|file|/C:/Users/ratsi/OneDrive/Images/IMG_0231.jpg|file|


### 🔑 Authentication apikey

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)


# Project: Subjects

## End-point: POST - Add Subject

### Create a New Subject

This endpoint allows you to create a new subject.

#### Request Body
- `name` (text) - The name of the subject.
- `file` (file) - The file related to the subject.

#### Response
The response will be a JSON object with the following properties:

```json
{
  "success": true,
  "message": "",
  "status_code": 0,
  "data": {
    "_id": "",
    "name": "",
    "professor_id": "",
    "__v": 0
  }
}
```

### Method: POST
>```
>{{base_url}}/subject
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|name|BigData|text|
|file|/C:/Users/ratsi/OneDrive/Images/Captures d’écran/Capture d'écran 2024-04-07 165312.png|file|


### Response: 201
```json
{
    "success": true,
    "message": "Subject saved successfully",
    "status_code": 201,
    "data": {
        "_id": "664b905f1bf78fa9e95e384b",
        "name": "BigData",
        "professor_id": "66124afac717602e31786e6a",
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GET - All Subjects
This endpoint makes an HTTP GET request to retrieve information about a subject, with the specified page number. The response is in JSON format and includes a "success" flag, a "message", a "status_code", and a "data" object containing an array of "docs" representing the subject information. Each "docs" object includes "_id", "name", "picture", "professor_id", and "__v" fields, along with a "professor" object containing similar fields. Additionally, the response includes "totalDocs", "limit", "page", "totalPages", "pagingCounter", "hasPrevPage", "hasNextPage", "prevPage", and "nextPage" fields.

``` json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    },
    "message": {
      "type": "string"
    },
    "status_code": {
      "type": "number"
    },
    "data": {
      "type": "object",
      "properties": {
        "docs": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "_id": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "picture": {
                "type": ["null", "string"]
              },
              "professor_id": {
                "type": "string"
              },
              "__v": {
                "type": "number"
              },
              "professor": {
                "type": "object",
                "properties": {
                  "_id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "email": {
                    "type": "string"
                  },
                  "password": {
                    "type": "string"
                  },
                  "role": {
                    "type": "string"
                  },
                  "active": {
                    "type": "number"
                  },
                  "__v": {
                    "type": "number"
                  },
                  "picture": {
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "totalDocs": {
          "type": "number"
        },
        "limit": {
          "type": "number"
        },
        "page": {
          "type": "number"
        },
        "totalPages": {
          "type": "number"
        },
        "pagingCounter": {
          "type": "number"
        },
        "hasPrevPage": {
          "type": "boolean"
        },
        "hasNextPage": {
          "type": "boolean"
        },
        "prevPage": {
          "type": ["null", "number"]
        },
        "nextPage": {
          "type": ["null", "number"]
        }
      }
    }
  }
}

 ```
### Method: GET
>```
>{{base_url}}/subject?page=1
>```
### Query Params

|Param|value|
|---|---|
|page|1|


### Response: 200
```json
{
    "success": true,
    "message": "Subjects fetched successfully",
    "status_code": 200,
    "data": {
        "docs": [
            {
                "_id": "661256323ef4b3e6b552546c",
                "name": "Français Course",
                "picture": null,
                "professor_id": "66124afac717602e31786e6a",
                "__v": 0,
                "professor": {
                    "_id": "66124afac717602e31786e6a",
                    "name": "Mme Françoise",
                    "email": "francoise@gmail.com",
                    "password": "$2b$10$joc0c3XIGDThNqVrAgEJKu/tZZVEeDHJEWLgYACu8Wg7K3DBe1Fgu",
                    "role": "ROLE_USER_PROFESSOR",
                    "active": 1,
                    "__v": 0,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F66124afac717602e31786e6a.png?alt=media&token=b17f8e05-4a33-47e3-b92e-e296084f41d9"
                }
            },
            {
                "_id": "6612c2e5fdb693366e35ef58",
                "name": "Jakarta EE",
                "picture": null,
                "professor_id": "6612604c815d8e509d87c2a2",
                "__v": 0,
                "professor": {
                    "_id": "6612604c815d8e509d87c2a2",
                    "name": "Jimmy",
                    "email": "mamail@gmail.com",
                    "password": "$2b$10$9z.ndEbaeludzOXhllf8PuByaY26Fnrm6y13cPzmJ0jqNAvptXWWK",
                    "role": "ROLE_USER_PROFESSOR",
                    "active": 1,
                    "__v": 0,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F6612604c815d8e509d87c2a2.png?alt=media&token=a6e4feac-1a67-4396-b24f-3742f9918628"
                }
            },
            {
                "_id": "6612fdfcb71c3c4d36697a91",
                "name": "BigData",
                "professor_id": "66124afac717602e31786e6a",
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/subject_pictures%2F6612fdfcb71c3c4d36697a91.png?alt=media&token=a346aac5-a571-4802-be34-0e4b7aff0635",
                "professor": {
                    "_id": "66124afac717602e31786e6a",
                    "name": "Mme Françoise",
                    "email": "francoise@gmail.com",
                    "password": "$2b$10$joc0c3XIGDThNqVrAgEJKu/tZZVEeDHJEWLgYACu8Wg7K3DBe1Fgu",
                    "role": "ROLE_USER_PROFESSOR",
                    "active": 1,
                    "__v": 0,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F66124afac717602e31786e6a.png?alt=media&token=b17f8e05-4a33-47e3-b92e-e296084f41d9"
                }
            },
            {
                "_id": "6616479e09ac8ed1af1b35e7",
                "name": "Angular",
                "professor_id": "6612604c815d8e509d87c2a2",
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/subject_pictures%2F6616479e09ac8ed1af1b35e7.png?alt=media&token=760a6f61-8ff2-4a12-914f-0213aaf9656a",
                "professor": {
                    "_id": "6612604c815d8e509d87c2a2",
                    "name": "Jimmy",
                    "email": "mamail@gmail.com",
                    "password": "$2b$10$9z.ndEbaeludzOXhllf8PuByaY26Fnrm6y13cPzmJ0jqNAvptXWWK",
                    "role": "ROLE_USER_PROFESSOR",
                    "active": 1,
                    "__v": 0,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F6612604c815d8e509d87c2a2.png?alt=media&token=a6e4feac-1a67-4396-b24f-3742f9918628"
                }
            },
            {
                "_id": "66478be4587e7527a9dfa13c",
                "name": "Grails",
                "professor_id": "66124afac717602e31786e6a",
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/subject_pictures%2F66478be4587e7527a9dfa13c.png?alt=media&token=ca7f3b3a-f9e5-4d9c-8cbb-428905f90a21",
                "professor": {
                    "_id": "66124afac717602e31786e6a",
                    "name": "Mme Françoise",
                    "email": "francoise@gmail.com",
                    "password": "$2b$10$joc0c3XIGDThNqVrAgEJKu/tZZVEeDHJEWLgYACu8Wg7K3DBe1Fgu",
                    "role": "ROLE_USER_PROFESSOR",
                    "active": 1,
                    "__v": 0,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F66124afac717602e31786e6a.png?alt=media&token=b17f8e05-4a33-47e3-b92e-e296084f41d9"
                }
            },
            {
                "_id": "6647a8cf73118d024c811633",
                "name": "Logiciels R",
                "professor_id": "6647a89f73118d024c811629",
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/subject_pictures%2F6647a8cf73118d024c811633.png?alt=media&token=cc8eb724-5eaa-429d-a28e-948d6a4e0c3c",
                "professor": {
                    "_id": "6647a89f73118d024c811629",
                    "name": "Rotsy",
                    "email": "rotsy@gmail.com",
                    "password": "$2b$10$6LgAYjIhpJVurgv4XCz2guI8FN/FjpD.yYOZ0PeoqdQHfU9EMzH92",
                    "role": "ROLE_USER_PROFESSOR",
                    "active": 1,
                    "__v": 0,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F6647a89f73118d024c811629.jpeg?alt=media&token=4d47a4bd-5cd3-489b-a8af-7a116fb396dd"
                }
            },
            {
                "_id": "6647ace873118d024c811662",
                "name": "Clustering",
                "professor_id": "6647a89f73118d024c811629",
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/subject_pictures%2F6647ace873118d024c811662.png?alt=media&token=5f32d1fb-e423-4ae9-877e-ea94ac27163c",
                "professor": {
                    "_id": "6647a89f73118d024c811629",
                    "name": "Rotsy",
                    "email": "rotsy@gmail.com",
                    "password": "$2b$10$6LgAYjIhpJVurgv4XCz2guI8FN/FjpD.yYOZ0PeoqdQHfU9EMzH92",
                    "role": "ROLE_USER_PROFESSOR",
                    "active": 1,
                    "__v": 0,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F6647a89f73118d024c811629.jpeg?alt=media&token=4d47a4bd-5cd3-489b-a8af-7a116fb396dd"
                }
            },
            {
                "_id": "664858d973118d024c81169d",
                "name": "Machine learning",
                "professor_id": "66124afac717602e31786e6a",
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/subject_pictures%2F664858d973118d024c81169d.jpeg?alt=media&token=a003cffd-c57f-4375-aac9-a31aeafe1c04",
                "professor": {
                    "_id": "66124afac717602e31786e6a",
                    "name": "Mme Françoise",
                    "email": "francoise@gmail.com",
                    "password": "$2b$10$joc0c3XIGDThNqVrAgEJKu/tZZVEeDHJEWLgYACu8Wg7K3DBe1Fgu",
                    "role": "ROLE_USER_PROFESSOR",
                    "active": 1,
                    "__v": 0,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F66124afac717602e31786e6a.png?alt=media&token=b17f8e05-4a33-47e3-b92e-e296084f41d9"
                }
            }
        ],
        "totalDocs": 8,
        "limit": 10,
        "page": 1,
        "totalPages": 1,
        "pagingCounter": 1,
        "hasPrevPage": false,
        "hasNextPage": false,
        "prevPage": null,
        "nextPage": null
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GET - All Subjects Unpaginated
### GET /subject/nopagination

This endpoint retrieves a list of subjects without pagination.

#### Request

There are no request parameters for this endpoint.

#### Response

The response will be in JSON format and will have the following schema:

``` json
{
    "success": boolean,
    "message": string,
    "status_code": number,
    "data": [
        {
            "_id": string,
            "name": string,
            "picture": string or null,
            "professor_id": string,
            "__v": number,
            "professor": {
                "_id": string,
                "name": string,
                "email": string,
                "password": string,
                "role": string,
                "active": number,
                "__v": number,
                "picture": string
            }
        }
    ]
}

 ```

The `success` field indicates the success status of the response. The `message` field contains any additional information. The `status_code` field represents the status code of the response. The `data` field contains an array of subjects, where each subject has an `_id`, `name`, `picture`, `professor_id`, `__v`, and `professor` object with details about the professor associated with the subject.
### Method: GET
>```
>{{base_url}}/subject/nopagination
>```
### Response: 200
```json
{
    "success": true,
    "message": "Subjects fetched successfully",
    "status_code": 200,
    "data": [
        {
            "_id": "661256323ef4b3e6b552546c",
            "name": "Français Course",
            "picture": null,
            "professor_id": "66124afac717602e31786e6a",
            "__v": 0,
            "professor": {
                "_id": "66124afac717602e31786e6a",
                "name": "Mme Françoise",
                "email": "francoise@gmail.com",
                "password": "$2b$10$joc0c3XIGDThNqVrAgEJKu/tZZVEeDHJEWLgYACu8Wg7K3DBe1Fgu",
                "role": "ROLE_USER_PROFESSOR",
                "active": 1,
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F66124afac717602e31786e6a.png?alt=media&token=b17f8e05-4a33-47e3-b92e-e296084f41d9"
            }
        },
        {
            "_id": "6612c2e5fdb693366e35ef58",
            "name": "Jakarta EE",
            "picture": null,
            "professor_id": "6612604c815d8e509d87c2a2",
            "__v": 0,
            "professor": {
                "_id": "6612604c815d8e509d87c2a2",
                "name": "Jimmy",
                "email": "mamail@gmail.com",
                "password": "$2b$10$9z.ndEbaeludzOXhllf8PuByaY26Fnrm6y13cPzmJ0jqNAvptXWWK",
                "role": "ROLE_USER_PROFESSOR",
                "active": 1,
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F6612604c815d8e509d87c2a2.png?alt=media&token=a6e4feac-1a67-4396-b24f-3742f9918628"
            }
        },
        {
            "_id": "6612fdfcb71c3c4d36697a91",
            "name": "BigData",
            "professor_id": "66124afac717602e31786e6a",
            "__v": 0,
            "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/subject_pictures%2F6612fdfcb71c3c4d36697a91.png?alt=media&token=a346aac5-a571-4802-be34-0e4b7aff0635",
            "professor": {
                "_id": "66124afac717602e31786e6a",
                "name": "Mme Françoise",
                "email": "francoise@gmail.com",
                "password": "$2b$10$joc0c3XIGDThNqVrAgEJKu/tZZVEeDHJEWLgYACu8Wg7K3DBe1Fgu",
                "role": "ROLE_USER_PROFESSOR",
                "active": 1,
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F66124afac717602e31786e6a.png?alt=media&token=b17f8e05-4a33-47e3-b92e-e296084f41d9"
            }
        },
        {
            "_id": "6616479e09ac8ed1af1b35e7",
            "name": "Angular",
            "professor_id": "6612604c815d8e509d87c2a2",
            "__v": 0,
            "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/subject_pictures%2F6616479e09ac8ed1af1b35e7.png?alt=media&token=760a6f61-8ff2-4a12-914f-0213aaf9656a",
            "professor": {
                "_id": "6612604c815d8e509d87c2a2",
                "name": "Jimmy",
                "email": "mamail@gmail.com",
                "password": "$2b$10$9z.ndEbaeludzOXhllf8PuByaY26Fnrm6y13cPzmJ0jqNAvptXWWK",
                "role": "ROLE_USER_PROFESSOR",
                "active": 1,
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F6612604c815d8e509d87c2a2.png?alt=media&token=a6e4feac-1a67-4396-b24f-3742f9918628"
            }
        },
        {
            "_id": "66478be4587e7527a9dfa13c",
            "name": "Grails",
            "professor_id": "66124afac717602e31786e6a",
            "__v": 0,
            "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/subject_pictures%2F66478be4587e7527a9dfa13c.png?alt=media&token=ca7f3b3a-f9e5-4d9c-8cbb-428905f90a21",
            "professor": {
                "_id": "66124afac717602e31786e6a",
                "name": "Mme Françoise",
                "email": "francoise@gmail.com",
                "password": "$2b$10$joc0c3XIGDThNqVrAgEJKu/tZZVEeDHJEWLgYACu8Wg7K3DBe1Fgu",
                "role": "ROLE_USER_PROFESSOR",
                "active": 1,
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F66124afac717602e31786e6a.png?alt=media&token=b17f8e05-4a33-47e3-b92e-e296084f41d9"
            }
        },
        {
            "_id": "6647a8cf73118d024c811633",
            "name": "Logiciels R",
            "professor_id": "6647a89f73118d024c811629",
            "__v": 0,
            "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/subject_pictures%2F6647a8cf73118d024c811633.png?alt=media&token=cc8eb724-5eaa-429d-a28e-948d6a4e0c3c",
            "professor": {
                "_id": "6647a89f73118d024c811629",
                "name": "Rotsy",
                "email": "rotsy@gmail.com",
                "password": "$2b$10$6LgAYjIhpJVurgv4XCz2guI8FN/FjpD.yYOZ0PeoqdQHfU9EMzH92",
                "role": "ROLE_USER_PROFESSOR",
                "active": 1,
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F6647a89f73118d024c811629.jpeg?alt=media&token=4d47a4bd-5cd3-489b-a8af-7a116fb396dd"
            }
        },
        {
            "_id": "6647ace873118d024c811662",
            "name": "Clustering",
            "professor_id": "6647a89f73118d024c811629",
            "__v": 0,
            "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/subject_pictures%2F6647ace873118d024c811662.png?alt=media&token=5f32d1fb-e423-4ae9-877e-ea94ac27163c",
            "professor": {
                "_id": "6647a89f73118d024c811629",
                "name": "Rotsy",
                "email": "rotsy@gmail.com",
                "password": "$2b$10$6LgAYjIhpJVurgv4XCz2guI8FN/FjpD.yYOZ0PeoqdQHfU9EMzH92",
                "role": "ROLE_USER_PROFESSOR",
                "active": 1,
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F6647a89f73118d024c811629.jpeg?alt=media&token=4d47a4bd-5cd3-489b-a8af-7a116fb396dd"
            }
        },
        {
            "_id": "664858d973118d024c81169d",
            "name": "Machine learning",
            "professor_id": "66124afac717602e31786e6a",
            "__v": 0,
            "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/subject_pictures%2F664858d973118d024c81169d.jpeg?alt=media&token=a003cffd-c57f-4375-aac9-a31aeafe1c04",
            "professor": {
                "_id": "66124afac717602e31786e6a",
                "name": "Mme Françoise",
                "email": "francoise@gmail.com",
                "password": "$2b$10$joc0c3XIGDThNqVrAgEJKu/tZZVEeDHJEWLgYACu8Wg7K3DBe1Fgu",
                "role": "ROLE_USER_PROFESSOR",
                "active": 1,
                "__v": 0,
                "picture": "https://firebasestorage.googleapis.com/v0/b/mbds-assignment.appspot.com/o/user_pictures%2F66124afac717602e31786e6a.png?alt=media&token=b17f8e05-4a33-47e3-b92e-e296084f41d9"
            }
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)


# Project: Global

## End-point: Health Check

### Health Check

This endpoint returns the health status of the server.

#### Request

There are no request parameters for this endpoint.

#### Response

The response is a JSON object with the following schema:

```json
{
    "success": boolean,
    "message": string,
    "status_code": number,
    "data": {
        "status": string,
        "actual_time": string,
        "server": string,
        "host_adress": string,
        "app_port": string,
        "app_name": string
    }
}
```
The `success` field indicates whether the request was successful. The `message` field provides additional information if applicable. The `status_code` field represents the status code of the response. The `data` object contains details about the server status, actual time, server name, host address, application port, and application name.

#### Example Response
```json
{
    "success": true,
    "message": "",
    "status_code": 0,
    "data": {
        "status": "",
        "actual_time": "",
        "server": "",
        "host_adress": "",
        "app_port": "",
        "app_name": ""
    }
}

### Method: GET
>```
>{{base_url}}/health
>```
### Response: 200
```json
{
    "success": true,
    "message": "Server is running",
    "status_code": 200,
    "data": {
        "status": "No worry, our servers are running fine.",
        "actual_time": "2024-05-20T17:50:30.619Z",
        "server": "Node.js",
        "host_adress": "assignmentapp.me",
        "app_port": "8080",
        "app_name": "Assignment Management System"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
