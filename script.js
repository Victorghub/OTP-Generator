let generateOTP = () => {
  //Define the length of the OTP
  const otpLength = 6;

  //Generate a random number OTP
  const otp = Math.floor(Math.random() * Math.pow(10, otpLength));

  //Display the GenerateOTP
  document.getElementById("otpDisplay").innerText = otp;
};

document.getElementById("generateBtn").addEventListener("click", generateOTP);
window.addEventListener("load", generateOTP);
