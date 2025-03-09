import bcrypt from "bcryptjs";
const { hash } = bcrypt;


async function testHashing() {
  const plainPassword = "monMotDePasse";
  const hashedPassword = await hash(plainPassword, 10);
  console.log("Mot de passe haché :", hashedPassword);
}

testHashing();
