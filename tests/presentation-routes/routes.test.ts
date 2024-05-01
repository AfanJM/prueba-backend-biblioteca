import request from 'supertest';

//GET USERS
test('Obtener todos los usuarios', async () => {

  // Realizar la solicitud GET a la ruta correspondiente
  const {body} = await request('http://localhost:8080')
  .get('/api/v1/users')
  .expect(200) //espero un 200

  // Verificar que la respuesta contenga al menos un usuario
  expect(body.data.user.length).toBeGreaterThan(0);
  
  //verificamos de que la response tenga los campos adecuados
  body.data.user.forEach((user: any) => {
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('password')
    expect(user).toHaveProperty('books')
    expect(user.books).toHaveProperty('_id')
    expect(user.books).toHaveProperty('title');
    expect(user.books).toHaveProperty('author');
    expect(user.books).toHaveProperty('year');
    expect(user.books).toHaveProperty('ISBM');
    expect(user.books).toHaveProperty('available');
  });

});

//DELETE NOT FOUND
test('Borrar un usuario que no existe', async () =>{

    const userId = '66329e7161628b7506191ae3'
    const {body} = await request('http://localhost:8080')
    .delete(`/api/v1/users/${userId}`)
    .expect(404)

    expect(body).toHaveProperty('msg', 'user: 66329e7161628b7506191ae3 not found')

})








