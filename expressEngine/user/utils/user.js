const userHelper = ()  => {
    const projection = {
        email: 1,
        role: 1,
        companyName: 1,
    }

    return projection;
}

export default userHelper;