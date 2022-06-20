function generate(){
    // take input values from the user
    var name= document.getElementById("name").value;
    var bcgColor= document.getElementById("bcg-color").value;
    var textColor= document.getElementById("text-color").value;
    // get name initials
    const myNames = name.split(" ");
    const initials = myNames.shift().charAt(0) + myNames.pop().charAt(0);
    const nameInitials =initials.toUpperCase();
    // show the hidden div
    var avatarDiv = document.getElementById("avatarDiv");
    if (avatarDiv.style.display === "none"){
        avatarDiv.style.display = "block";
    }
    document.getElementById("avatar").src = generateAvatar(
        nameInitials,
        textColor,
        bcgColor
    );
}

function generateAvatar(
    text,
    foregroundColor = "white",
    backgroundColor = "black"
) {
    const canvas = document.createElement("canvas");
    download = document.getElementById("download");
    const context = canvas.getContext("2d");

    canvas.width = 200;
    canvas.height = 200;

    // Draw background
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    context.font = "bold 100px Assistant";
    context.fillStyle = foregroundColor;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, canvas.width / 2, canvas.height / 2 );
    download.href=canvas.toDataURL("image/png");
    return canvas.toDataURL("image/png");

}