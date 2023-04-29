// cái này t chưa test 

export default function useAuth() {
    let user = {}
    (async function() {
        user = await AsyncStorage.getItem('user')
    })()
    return user
}