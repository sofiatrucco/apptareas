//desafio 1

const tareas = [
    {
        Titulo: "Estudiar html",
        Estado: "Terminado"
    },
    {
        Titulo:"Estudiar css",
        Estado: "En progreso"
    },
    {
        Titulo: "Estudiar js",
        Estado: "En progreso"
    },
    {
        Titulo: "Practicar js",
        Estado: "En progreso"
    }
]

console.log(tareas)

//desafio 2

function agregarTarea (titulo , estado){
    tareas.push({Titulo: titulo , Estado: estado});
    return tareas
}

console.log(agregarTarea("Agregar tarea"))

const mostrarTarea = (estado) => {

}

const progreso = tareas.find((obj) =>{
    console.log(obj)
    tareas.Estado === "En progreso"
})

console.log(progreso ("En progreso"))

//desafio 3

const listarTareas = (estado) => {
const estadoMin = estado.toLowerCase()
    if (estadoMin === "En progreso" || estadoMin === "Terminado") {
        const listaTareas = tareas.filter(tareas => tareas.Estado.toLowerCase() === estadoMin);
        return listaTareas; 
    }return tareas;
}

console.log(listaTareas("En Progreso"))

//desafio 4

const agregarTarea = (titulo, estado) => {

    for (let i = 0;i < tareas.length; i++){
        if(tareas[i].Titulo === titulo){
            return "Error : ya existe"
        }
    }
    tareas.push({Titulo: titulo, Estado: estado})
    return tareas
}

console.log(agregarTarea("Practicar js" , "Pendiente"))

// desafio 5

const existeTarea = (str) => {
    
    const tareasFiltradas = []
    tareas.forEach(tarea =>{
        if(tarea.Titulo.includes(str)){
            tareasFiltradas.push(tarea)
        }
    })
    return tareasFiltradas
}

console.log(existeTarea("js"))