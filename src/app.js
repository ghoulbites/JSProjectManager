//#region Firebase Initializations & Module Import
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDeMTYdFgD0wBg9w1bhGM5KlCA_WDH13B8",
    authDomain: "jsprojectmanager-e1f00.firebaseapp.com",
    databaseURL: "https://jsprojectmanager-e1f00-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "jsprojectmanager-e1f00",
    storageBucket: "jsprojectmanager-e1f00.appspot.com",
    messagingSenderId: "756405501200",
    appId: "1:756405501200:web:d6c048969430f099107995",
}
//#endregion

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

function trialWrite(userID, first, last, email, DOB, projectsArray) {
    set(ref(database, "users/" + userID), {
        firstName: first,
        lastName: last,
        email: email,
        birth: DOB,
        projects: projectsArray,
    })
}

//#region Main Code
import { createProjectCard } from "./components/ProjectCard"
const addButton = document.querySelector(".add")
const addArea = document.querySelector(".secondary-content")

const date = new Date()
let counter = 0

addButton.addEventListener("click", () => {
    addArea.appendChild(
        createProjectCard({
            id: counter,
            title: "Trial",
            titleColor: "--title-blue",
            openTickets: 12,
            status: "Completed",
            dateCreated: `${date}`,
            lastModified: `${date}`,
        })
    )

    counter = counter + 1
    console.log(counter)

    trialWrite(
        JSON(counter, `first${counter}`, `last${counter}`, `email${counter}@mail.com`, date.getTime(), {
            TicketManager: true,
        })
    )
})
//#endregion
