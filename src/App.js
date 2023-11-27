import { useState, useEffect } from 'react';

function App(){
  const [input, setInput] = useState('');
  const[tarefas, setTarefas] = useState([
    'Pagar conta',
    'Estudar React'
  ]);

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('@tarefa');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }

    
  }, []);
  
  useEffect(()=>{
    localStorage.setItem('@tarefa' , JSON.stringify(tarefas)) //transformar array em string
  }, [tarefas]); //toda vez que mudar tarefas vai executar o que tem dentro
  
  function handleRegister(e){
    e.preventDefault();
    setTarefas([...tarefas,input]);
    setInput('');
    
  }

  return(
    <div>
      <h1>Cdastrando Usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da Tarefa:</label><br/>
        <input placeholder ='Digite uma Tarefa'
        value={input}
        onChange={ (e) => setInput(e.target.value)}
        /><br/>

        

        <button type ='submit'>Registrar</button>
      </form>
      <br/><br/>
      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

