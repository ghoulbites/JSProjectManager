export function createProjectCard(project_item) {
    // 'args' is an Object; for Project Cards, it has the following attributes:
    // id: int
    // title: string
    // openTickets: int || 0
    // closedTickets: int || 0
    // timeCreated: string
    // lastModified: string
    // timeClosed: string || null
    // status: string
    // titleColor: string
    //

    // Main Element
    const cardElement = document.createElement("button")
    cardElement.classList.add("project-card")
    cardElement.dataset.projectID = project_item.id

    // Items
    // Title
    const projectTitle = document.createElement("h3")
    projectTitle.classList.add("project-title")
    projectTitle.textContent = `${project_item.title}`
    projectTitle.style.color = project_item.titleColor

    // Info Items
    const openTicketCounter = document.createElement("span")
    openTicketCounter.classList.add("card-item")
    openTicketCounter.textContent = `Open Tickets: ${project_item.openTickets}`

    const createdTime = document.createElement("span")
    createdTime.classList.add("card-item")
    createdTime.textContent = `Created @: ${project_item.timeCreated}`

    const lastModifiedTime = document.createElement("span")
    lastModifiedTime.classList.add("card-item")
    lastModifiedTime.textContent = `Last Modified: ${project_item.lastModified}`

    const status = document.createElement("span")
    status.classList.add("card-item")
    status.textContent = `Status: ${project_item.status}`

    // Populating the card
    cardElement.appendChild(projectTitle)
    cardElement.appendChild(openTicketCounter)
    cardElement.appendChild(createdTime)
    cardElement.appendChild(lastModifiedTime)
    cardElement.appendChild(status)

    // Return the card element
    return cardElement
}
