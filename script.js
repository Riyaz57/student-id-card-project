// Preview uploaded student photo
function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
    document.getElementById("studentPic").src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
