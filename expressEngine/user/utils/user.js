const userHelper = ()  => {
    const projection = {
        email: 1,
        role: 1,
        companyName: 1,
        _id: 0,
    }

    return projection;
}

export default userHelper;