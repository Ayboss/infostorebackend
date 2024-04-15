const Parcel = require("../model/ParcelModel");
const { generateRandomCode } = require("../utils");
const { cloudinary } = require("./imagecontroller");

exports.getInfo = async (req, res, next) => {
  try {
    // READ PASSKEY
    // MATCH PASSKEY
    const passcode = req.params.passcode;
    const parcels = await Parcel.findOne({ passcode: passcode });
    if (!parcels) {
      return res.status(400).json({
        msg: "package such code does not exist",
      });
    }
    return res.status(200).json({
      msg: "success",
      data: parcels,
    });
  } catch (err) {
    res.status(400).json({
      err: err,
    });
  }
};

exports.storeInfo = async (req, res, next) => {
  try {
    const allpromises = [];
    console.log(req.files);
    if (req.files && req.files.length > 0) {
      for (let file of req.files) {
        const b64 = Buffer.from(file.buffer).toString("base64");
        let dataURI = "data:" + file.mimetype + ";base64," + b64;
        allpromises.push(cloudinary.uploader.upload(dataURI));
      }
    }

    let media = [];
    if (allpromises.length > 0) {
      const cloudresponses = await Promise.all(allpromises);
      media = cloudresponses.map((data) => data.url);
    }

    let payload = req.body.payload;
    if (!payload) {
      payload = [];
    }
    const passcode = generateRandomCode();

    const parcel = await Parcel.create({
      text: payload,
      media: media,
      passcode: passcode,
    });
    // CREATE A PASSKEY AND SEND TO THE
    res.status(200).json({
      msg: "success",
      data: parcel,
      passcode: passcode,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err,
    });
  }
};
