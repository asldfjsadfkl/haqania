import axios from 'axios';

export const UserLoading = async (data1) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }, withCredentials: true
    }
    const { data } = await axios.get('http://localhost:4400/getuser', config);
    data1 = data?.user?.role;
}