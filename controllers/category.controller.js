const prisma = require("../config/prisma");

exports.create = async (req, res) => {
  const { name } = req.body;

  try {
    const category = await prisma.category.create({
      data: {
        name: name,
      },
    });
    res.send({ message: "Create successful", category });
  } catch (err) {
    console.log("Create Error", err.message);
    res.status(500).json("Internal server error");
  }
};

exports.getAllCategory = async (req, res) => {
  try {
    const data = await prisma.category.findMany();
    res.send({ message: "CategoryList", data });
  } catch (err) {
    console.log("getAllCategory Error", err.message);
    res.status(500).json("Internal server error");
  }
};

exports.deleteCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await prisma.category.delete({
      where: {
        id: id,
      },
    });
    res.send({ message: "Category Deleted", data });
  } catch (err) {
    console.log("deleteCategoryById Error", err.message);
    res.status(500).json("Internal server error");
  }
};
