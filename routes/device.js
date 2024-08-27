const express = require("express");
const Plant = require("../models/device");
const router = express.Router();

// Add a new device
router.post("/input", async (req, res) => {
  const { email, username, deviceType, DeviceName, dateAdded } = req.body;
  console.log(req.body);
  try {
    let cekPlant = await Plant.findOne({
      email,
      username,
    });
    if (cekPlant) {
      return res.status(400).json({
        msg: "Username sudah memiliki device",
        status: false,
        code: 404,
      });
    }

    const newPlant = new Plant({
      email,
      username,
      deviceType,
      DeviceName,
      dateAdded,
    });

    const plant = await newPlant.save();
    res.json({ msg: "Input Sukses", status: true, code: 200 });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get all device
router.get("/", async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json({
      msg: "Get Data Sukses",
      status: true,
      code: 200,
      data: plants.reverse(),
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get a plant by ID
router.get("/getId/:id", async (req, res) => {
  const { email } = req.params.id; // Assume email is passed as a query parameter
  try {
    const plant = await Plant.find({
      email: req.params.id,
    });
    if (!plant) {
      return res.status(404);
      res.json({ msg: "Email Tidak Ditemukan", status: false, code: 200 });
    } else {
      res.json({
        msg: "Sukses Get Id",
        status: true,
        code: 200,
        data: plant.reverse(),
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Update a plant by ID
router.put("update/:id", async (req, res) => {
  const { name, species, dateAdded } = req.body;

  const plantFields = {};
  if (name) plantFields.name = name;
  if (species) plantFields.species = species;
  if (dateAdded) plantFields.dateAdded = dateAdded;

  try {
    let plant = await Plant.findById(req.params.id);
    if (!plant) {
      return res
        .status(404)
        .json({ msg: "Plant not found", status: false, code: 404 });
    }

    plant = await Plant.findByIdAndUpdate(
      req.params.id,
      { $set: plantFields },
      { new: true }
    );

    json({ msg: "Sukses Edit Data", status: true, code: 200, data: plant });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Delete a plant by ID
router.delete("/delete/:id", async (req, res) => {
  const idBenar = req.params.id;
  try {
    console.log(req.params.id);
    console.log(idBenar);
    const plant = await Plant.findOne({ _id: idBenar });
    if (!plant) {
      return res
        .status(404)
        .json({ msg: "Plant not found", status: false, code: 404 });
    }

    await Plant.deleteOne({ _id: idBenar });
    res.json({ msg: "Delete Sukses", status: true, code: 200 });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
