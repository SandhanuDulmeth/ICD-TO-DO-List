let row = document.getElementById("row")

const taskArray = [];
const taskNameArray = [];

const ischeckedArray = [];


function addTask() {


    let taskName = document.getElementById("taskName").value

    console.clear();

    let rowtask = `<div class="row">
                <div class="col">
                    <Label style="font-size: 40px;" for="${taskName}"><pre>${taskName}</pre></Label>
                </div>
                <div class="col">
                    <input type="checkbox" id="${taskName}" name="" style="width: 50px; height: 50px;" >
                </div>
                </div>`

    taskNameArray.push(taskName);


    taskArray.push(rowtask);



    clearTxt();
    loadTasks();

    for (let index = 0; index < taskNameArray.length; index++) {

        let taskName = taskNameArray[index]
        console.log(document.getElementById(taskName).checked);
        document.getElementById(taskName).addEventListener("change", function () {
            if (this.checked) {
                console.log("Checked");

                taskArray[index] = `<div class="row">
                <div class="col">
                    <Label style="font-size: 40px;" for="${taskName}"><pre>${taskName}</pre></Label>
                </div>
                <div class="col">
                    <input type="checkbox" id="${taskName}" name="" style="width: 50px; height: 50px;" checked>
                </div>
                </div>`;



            } else {
                console.log("unChecked");
                taskArray[index] = `<div class="row">
                <div class="col">
                    <Label style="font-size: 40px;" for="${taskName}"><pre>${taskName}</pre></Label>
                </div>
                <div class="col">
                    <input type="checkbox" id="${taskName}" name="" style="width: 50px; height: 50px;" >
                </div>
                </div>`;


            }
        })

    }


}

function loadTasks() {

    let rowBody = "";

    taskArray.forEach(task => {
        rowBody += task;
    });

    row.innerHTML = rowBody;
}


function clearTxt() {
    document.getElementById("taskName").value = '';
}

function DropTask() {
    console.clear();

    for (let index = taskNameArray.length - 1; index >= 0; index--) {
        const taskName = taskNameArray[index];
        const checkbox = document.getElementById(taskName);

        if (checkbox && checkbox.checked) {
            console.log(`Dropping task: ${taskName}`)

            taskNameArray.splice(index, 1);
            taskArray.splice(index, 1);
        }
    }


    loadTasks();

}