# Components Documentation

## Project Object

This object is created from data saved on the database regarding any projects belonging to a user.

The object contains the following attributes:

-   id: int => Primary Key
-   userID: int => Inherited Key
-   title: string
-   titleColor: string
-   openTickets: int || 0
-   closedTickets: int || 0
-   timeCreated: string
-   lastModified: string
-   timeClosed: string || null
-   status: string

Uses:

-   [createProjectCard()](functions.md)

## Ticket Object

This object is created from data saved on the database regarding any tickets belonging to a project.

The object contains the following attributes:

-   id: int => Primary Key
-   projectID: int => Inherited Key
-   title: string
-   titleColor: string
-   openTickets: int || 0
-   closedTickets: int || 0
-   timeCreated: string
-   lastModified: string
-   timeClosed: string || null
-   status: string

Uses:

-   [createTicketCard()](functions.md)
