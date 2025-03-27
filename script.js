const display = document.getElementById("display");
const historyDisplay = document.getElementById("history");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
let history = "";
const calculate = (btnValue) => 
{
    display.focus();
    if (btnValue === "=" && output !== "")
    {
        try {
            history = output;
            output = eval(output.replace("%", "/100"));
            historyDisplay.value = history;
        } catch {
            output = "Error";
        }
    } 
    else if (btnValue === "AC") 
    {
        output = "";
        history = "";
    } 
    else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } 
    else if (btnValue === "MODE") {
        alert("Mode feature coming soon!");
    } 
    else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }display.value = output;
};
buttons.forEach((button) => 
{
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
