import React, { useState } from 'react';

export default function FormularioCadastro() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [feedback, setFeedback] = useState(null);

  const enviarFormulario = async (e) => {
    e.preventDefault();

    try {
      const requisicao = await fetch('http://localhost:8080/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: usuario,
          password: senha
        })
      });

      const resposta = await requisicao.json();

      if (requisicao.ok) {
        setFeedback({ tipo: 'sucesso', texto: 'Usuário cadastrado com sucesso!' });
        setUsuario('');
        setSenha('');
      } else {
        setFeedback({ tipo: 'erro', texto: resposta.error || 'Erro no cadastro.' });
      }

    } catch (err) {
      console.error('Falha ao enviar dados:', err);
      setFeedback({ tipo: 'erro', texto: 'Erro de conexão. Tente novamente em instantes.' });
    }
  };

  return (
    <section className="container py-4">
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-6">
          <h3 className="mb-3">Criar Conta</h3>

          {feedback && (
            <div
              className={`alert ${feedback.tipo === 'sucesso' ? 'alert-success' : 'alert-danger'}`}
              role="alert"
            >
              {feedback.texto}
            </div>
          )}

          <form onSubmit={enviarFormulario}>
            <div className="mb-3">
              <label htmlFor="usuarioInput" className="form-label">Usuário</label>
              <input
                id="usuarioInput"
                type="text"
                className="form-control"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="senhaInput" className="form-label">Senha</label>
              <input
                id="senhaInput"
                type="password"
                className="form-control"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-success mt-2">Registrar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
