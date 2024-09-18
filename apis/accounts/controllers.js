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
const deleteAccount = (request, response) => {
  const { id } = request.params;

  const updatedAccounts = accounts.filter((account) => {
    if (account.id != id) {
      return true;
    }
  });
  return response.status(200).json({ data: updatedAccounts });
};

//the update isnt done yet
const updateAccount = (request, response) => {
  try {
    const accountUpdate = accountSchema.findById();
    return response.status(204).json({ data: accountUpdate });
  } catch (error) {
    return response.status(404).json(error);
  }
};

module.exports = {
  createAccount,
  getAllAccounts,
  deleteAccount,
  updateAccount,
};
