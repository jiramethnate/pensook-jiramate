const { User } = require('../models/User');

async function createInitialUserData() {
  try {
    // Create product data
    const users = [
      {
        email: "test@local.local",
        password: "test@1234",
        fullName: 'Test Account'
      },
    ];

    await User.insertMany(users);

    console.log('Initial user data created');
  } catch (error) {
    throw new Error('Error creating initial user data: ' + error.message);
  }
}

module.exports = createInitialUserData;
