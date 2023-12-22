let num = 5

let text = num.toString()
// console.log(text.padEnd(4,"x"));

let myName = 'Mosaref paik'

// let shareName = myName.charAt(8)

// console.log(shareName);

// password generated

function generateRandomPassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    let password = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    
    return password;
  }
  
  // Generate a password with a length of 12 characters
  const newPassword = generateRandomPassword(8);
  console.log(newPassword);
  