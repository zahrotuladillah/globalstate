import { v4 as uidv4 } from "uuid"

export const dataList = [
    {
        id: uidv4(),
        title: "Membuat Komponen",
        completed: true,
    },
    {
        id: uidv4(),
        title: "Unit Testing",
        completed: false,
    },
    {
        id: uidv4(),
        title: "Setup Development Environment",
        completed: true,
    },
    {
        id: uidv4(),
        title: "Deploy ke Server",
        completed: false,
    },
]