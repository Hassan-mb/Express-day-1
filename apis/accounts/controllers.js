const accounts = require("../../accounts");
const accountSchema = require("../../models/accountSchema");
const createAccount = async (request, response) => {
  try {
    const newAccount = await accountSchema.create(request.body);
    return response.status(201).json({ data: newAccount });
  } catch (error) {
    return response.status(500).json(error);
  }
};
const getAllAccounts = async (request, response) => {
  try {
    const allAccounts = await accountSchema.find();
    return response.status(200).json({ data: allAccounts });
  } catch (error) {
    return response.status(500).json(error);
  }
};
const deleteAccount = async (request, response) => {
  try {
    const { id } = request.params;
    if (!id) {
      return response.status(404).json(error);
    } else {
      const deletedAccount = await accountSchema.findByIdAndDelete(id);
      return response.status(200).json({ data: deletedAccount });
    }
  } catch (error) {
    return response.status(500).json(error);
  }
};

//the update isnt done yet
const updateAccount = async (request, response) => {
  try {
    const { id } = request.params;
    if (!id) {
      return response.status(404).json(error);
    } else {
      const accountUpdate = await accountSchema.findByIdAndUpdate(
        id,
        request.body
      );
      return response.status(204).json({ data: accountUpdate });
    }
  } catch (error) {
    return response.status(500).json(error);
  }
};

module.exports = {
  createAccount,
  getAllAccounts,
  deleteAccount,
  updateAccount,
};
