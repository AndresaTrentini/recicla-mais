
function User(
    id,
    name,
    password,
    birthData,
    cpf,
    telephone,
    address,
    email,
    adm
) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.birthData = birthData;
    this.cpf = cpf;
    this.telephone = telephone;
    this.address = address;
    this.email = email;
    this.adm = adm
}

module.exports = User;