## User Object

-   id: int => Primary Key
-   firstName: string
-   lastName: string
-   dateOfBirth: JSDateTime string
-   projects: string array[]

## Project Object

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

## Ticket Object

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
