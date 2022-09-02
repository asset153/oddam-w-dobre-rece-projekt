const validateUserName = (name) => {
    const reg = /\s/g;
    return reg.test(name);
};

export default validateUserName;