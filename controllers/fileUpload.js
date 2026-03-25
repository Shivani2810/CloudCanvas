const File = require("../models/File");

exports.localFileUpload = async (req, res) => {
  try {
    // fetch file
    const file = req.files.file;
    console.log("File is here ->", file);

    // create path (with extension)
    let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.').pop()}`;

    // move file
    file.mv(path, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "File upload failed"
        });
      }
    });

    res.json({
      success: true,
      message: "Local file uploaded successfully"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
};