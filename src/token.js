const jwt = require("jsonwebtoken");

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
function createToken(payload, secret) {
  console.log(payload);
  console.log(secret);
  // ask JWT to create a token
  const token = jwt.sign(payload, secret);
  return token;
}

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry(payload, secret, exp) {
  const token = jwt.sign(payload, secret, { expiresIn: exp });
  return token;
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
function verifyToken(token, secret) {
  try {
    const verifiedToken = jwt.verify(token, secret);
    return verifiedToken;
  } catch (e) {
    return false;
  }
}

module.exports = {
  createToken,
  createTokenWithExpiry,
  verifyToken,
};
