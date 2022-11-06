
export const getFiles = async (user, account) => {
    try {

        const file = await user.getFiles().call({ from: account })
        return file;

    } catch (error) {
        console.error(error);
    }
}