axios.defaults.headers.common['X-Auth-Token']='sometoken';

function getTodos() {
    /*axios({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/todos',
        params:{
            _limit:5
        }
    }).then(res=>showOutput(res)).catch(err=>console.log(err))*/
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res=>showOutput(res)).catch(err=>console.log(err))
  }

  
  // POST REQUEST
  function addTodo() {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
        title:'New todo',
        completed:'false'
    })
    .then(res=>showOutput(res)).catch(err=>console.log(err))
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
   axios.put(axios.put('https://jsonplaceholder.typicode.com/todos/1'),{
    title:'Updated todo',
    completed:'true'
   })
   .then(res=>showOutput(res)).catch(err=>console.log(err))
   axios.patch(axios.patch('https://jsonplaceholder.typicode.com/todos/1'),{
    title:'Updated todo',
    completed:'true'
   })
   .then(res=>showOutput(res)).catch(err=>console.log(err))
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>showOutput(res)).catch(err=>console.log(err))
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit');
    ]).then(res=>{
        console.log(res[0]);
        console.log(res[1]);
    }).catch(err=>console.log(err))
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    const config={
        headers:{'content-type':'application/json',
                Authorization:'sometoken'}
    }
    axios.post('https://jsonplaceholder.typicode.com/todos',{
        title:'New todo',
        completed:'false'
    }),config
    .then(res=>showOutput(res)).catch(err=>console.log(err))
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    const options={
        method:'post',
        url:'https://jsonplaceholder.typicode.com/todos',
        data:{
            title:'Hello world'
        },
        transformResponse:axios.default.transformResponse.concat(data=>{
            data.title=data.title.toUpperCase();
        })
    };
  }
  
  // ERROR HANDLING
  function errorHandling() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5',{validateStatus:function(status){
        return status<500;
    }})
    .then(res=>showOutput(res))
    .catch(err=>{
        if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        }else if(err.request){
            console.log(err.request);
        }else{
            console.log(err.message);
        }
    });
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    const source=axios.CancelToken.source();
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5',{cancelToken:source.token})
    .then(res=>showOutput(res))
    .catch(thrown=>{
        if(axios.isCancel(thrown)){
            console.log(`Request cancelled`,thrown.message);
        }
    });
    if (true){
        source.cancel('Request Cancelled');
    }
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  /*axios.interceptors.request.use(config)=>{
    console.log(`${config.url} at ${new Date().getTime()}`);
    return config;
  }error=>{
    return Promise.reject(error);
  }*/
  // AXIOS INSTANCES
  const axiosInstances=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
  });
  axiosInstances.get('/comments').then(res=>showOutput(res));
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);