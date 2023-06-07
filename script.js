Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90

});
Webcam.attach("#camera");

image_model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YZMlcId0N/model.json", model_loaded);

function model_loaded() {
    console.log("Model loaded successfully");
}

function capture_image() {
    Webcam.snap(function (cam_pic) {
        document.getElementById("result").innerHTML = '<img id="pic" src="' + cam_pic + '">';
    });
}

function identify_image(){
    pic_captured = document.getElementById("pic");
    image_model.classify(pic_captured, getresults)

}

function getresults(e, r) {
    if (e) {
        console.error(e);
    } else {
        console.log(r);
        document.getElementById("object").innerHTML = r[0].label;
        document.getElementById("accuracy").innerHTML = r[0].confidence.toFixed(3);
    }
}
