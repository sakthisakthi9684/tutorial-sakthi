<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="camera"></div>
    <button onclick="take_snapshot()">take Snapshot</button>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.26/webcam.min.js"></script>
<script>

Webcam.set({
        width: 490,
        height: 350,
        image_format: 'jpeg',
        jpeg_quality: 90
    });

    Webcam.attach('#camera');
    function take_snapshot() {
        Webcam.snap(function(data_uri) {
            document.getElementById('camera').innerHTML = '<img src="'+data_uri+'">';
        });
    }
</script>
</html>
