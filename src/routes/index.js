const helloRoute={
    path : '/hello',
    method: 'get',
    handler : (req, res) =>{
        console.log('Server is hit baby')
        console.log('Uh oh uh oh oh')
        res.send("Hello World in 2023!");
    },
}
const routes=[helloRoute];
export default routes;