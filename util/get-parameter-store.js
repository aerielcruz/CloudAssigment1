const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");

const client = new SSMClient({
  region: "ap-southeast-2",
});

const getParameterStore = async (name) => {
  try {
    const command = new GetParameterCommand({
      Name: name,
      WithDecryption: true,
    });
    const response = await client.send(command);
    return response?.Parameter?.Value;
  } catch (error) {
    throw error;
  }
}

module.exports = { getParameterStore }