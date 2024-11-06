document.addEventListener("DOMContentLoaded", () => {
    let inputs = document.getElementById("inp");
    let text = document.querySelector(".text");

    function Add() {
        if (inputs.value.trim() === "") {
            alert("Please enter a task");
        } else {
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task");
            taskDiv.innerText = inputs.value;

            let trashIcon = document.createElement("i");
            trashIcon.classList.add("fa-solid", "fa-trash");

            taskDiv.appendChild(trashIcon);
            text.appendChild(taskDiv);

            inputs.value = "";

            trashIcon.addEventListener("click", () => {
                text.removeChild(taskDiv);
            });
        }
    }

    window.Add = Add;
});
