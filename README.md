# Sequelize Book Api

This Api performs CRUD operations on the database of books.

## Create a Book

**Method**: ```POST```

**URL**: ```/api/books```

This URL endpoint with POST method create a new book. The attributes in request body are title(String), author(String) and price(Float(10,2)).

JSON object in request body:
```
{
      "title": "Tiger is a cat",
      "author": "Meow Meow",
      "price": 16.99
}
```

JSON object in Response:
```
{
    "id": 4,
    "title": "Tiger is a cat",
    "author": "Meow Meow",
    "price": "16.99",
    "updatedAt": "2023-05-25T23:06:42.022Z",
    "createdAt": "2023-05-25T23:06:42.022Z"
}
```


## Index all Books

**Method**: ```GET```

**URL**: ```/api/books```

This URL endpoint with GET method index all books in the database

JSON object in Response:
```
[
    {
        "id": 2,
        "title": "Cats and Dogs",
        "author": "Meow Meow",
        "price": "20.89",
        "createdAt": "2023-05-24T11:27:58.537Z",
        "updatedAt": "2023-05-24T11:27:58.537Z"
    },
    {
        "id": 4,
        "title": "Tiger is a cat",
        "author": "Meow Meow",
        "price": "16.99",
        "createdAt": "2023-05-25T23:06:42.022Z",
        "updatedAt": "2023-05-25T23:06:42.022Z"
    }
]
```



## Update a Book

**Method**: ```PUT```

**URL**: ```/api/books/:bookId```

This URL endpoint with PUT method update an exist book. The attributes in request body are title(String), author(String) and price(Float(10,2))

JSON object in request body:
```
{
      "title": "Tiger is a cat",
      "author": "Meow Meow",
      "price": 16.99
}
```

JSON object in Response:
```
[
    1,
    [
        {
            "id": 4,
            "title": "Lion is a cat",
            "author": "Meow Meow",
            "price": "21.99",
            "createdAt": "2023-05-25T23:06:42.022Z",
            "updatedAt": "2023-05-25T23:10:25.819Z"
        }
    ]
]
```

## Delete a Book

**Method**: ```DELETE```

**URL**: ```/api/books/:bookId```

This URL endpoint with DELETE method delete a book in the data base.

JSON object in Response:
```
{
    "id": 5,
    "title": "Tiger is a cat",
    "author": "Meow Meow",
    "price": "16.99",
    "createdAt": "2023-05-25T23:19:40.304Z",
    "updatedAt": "2023-05-25T23:19:40.304Z"
}
```