function uploadFile() {

    const fileInput = document.getElementById("fileInput");
    const message = document.getElementById("message");

    if (fileInput.files.length === 0) {
        message.textContent = "Please select a file first.";
        return;
    }

    const file = fileInput.files[0];

    message.textContent =
        `File "${file.name}" selected successfully.`;

    addFileToList(file);
}


function addFileToList(file) {

    const fileList = document.getElementById("fileList");

    const emptyMessage = document.querySelector(".empty");

    if (emptyMessage) {
        emptyMessage.remove();
    }

    const fileItem = document.createElement("div");

    fileItem.className = "file-item";

    fileItem.innerHTML = `
        <span>📄 ${file.name}</span>
        <span>${formatFileSize(file.size)}</span>
    `;

    fileList.appendChild(fileItem);
}


function formatFileSize(bytes) {

    if (bytes === 0) {
        return "0 Bytes";
    }

    const units = [
        "Bytes",
        "KB",
        "MB",
        "GB"
    ];

    const index =
        Math.floor(Math.log(bytes) / Math.log(1024));

    return (
        (bytes / Math.pow(1024, index)).toFixed(2)
        + " "
        + units[index]
    );
}