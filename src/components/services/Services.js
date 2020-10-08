import http from './HttpUrl';

class AllServices{
    getAll(){
        return http.get('/register');
    }
    getSingle(email){
        return http.get(`/register/${email}`);
    }
    create(data) {
        return http.post("/tutorials/", data);
    }
}

export default new AllServices();